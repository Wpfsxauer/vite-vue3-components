/*
 * @Description:
 * @Autor: weipengfei
 * @Date: 2021-07-26 18:23:39
 * @LastEditors: weipengfei
 * @LastEditTime: 2021-07-26 18:23:39
 */

import { dirname, relative, isAbsolute } from "path";
import { normalizePath } from "vite";
import { isRegExp } from "./utils";

import type { Alias } from "vite";

export function normalizeGlob(path: string) {
    if (/[\\/]$/.test(path)) {
        return path + "**";
    } else if (!/^((?:.*\.[^.]+)|(?:\*+))$/.test(path.split(/[\\/]/).pop()!)) {
        return path + "/**";
    }

    return path;
}

export function transformDynamicImport(content: string) {
    const importMap = new Map<string, Set<string>>();

    content = content.replace(/import\(['"][^;\n]+?['"]\)\.\w+[.()[\]<>,;\n\s]/g, (str) => {
        const matchResult = str.match(/import\(['"](.+)['"]\)\.(.+)([.()[\]<>,;\n\s])/)!;
        const libName = matchResult[1];
        const importSet =
            importMap.get(libName) ?? importMap.set(libName, new Set<string>()).get(libName)!;
        const usedType = matchResult[2];

        importSet.add(usedType);

        return usedType + matchResult[3];
    });

    importMap.forEach((importSet, libName) => {
        const importReg = new RegExp(
            `import\\s?(?:type)?\\s?\\{[^;\\n]+\\}\\s?from\\s?['"]${libName}['"]`,
            "g"
        );
        const matchResult = content.match(importReg);

        if (matchResult?.[0]) {
            const importedTypes = matchResult[0]
                .match(/import\s?(?:type)?\s?\{(.+)\}\s?from\s?['"].+['"]/)![1]
                .trim()
                .split(",");

            content = content.replace(
                matchResult[0],
                `import type { ${Array.from(importSet)
                    .concat(importedTypes)
                    .join(", ")} } from '${libName}'`
            );
        } else {
            content =
                `import type { ${Array.from(importSet).join(", ")} } from '${libName}';\n` +
                content;
        }
    });

    return content;
}

function isAliasMatch(alias: Alias, importee: string) {
    if (isRegExp(alias.find)) return alias.find.test(importee);
    if (importee.length < alias.find.length) return false;
    if (importee === alias.find) return true;

    return importee.indexOf(alias.find) === 0 && importee.substring(alias.find.length)[0] === "/";
}

export function transformAliasImport(filePath: string, content: string, aliases: Alias[]) {
    if (!aliases.length) return content;

    return content.replace(
        /(?:(?:import|export)\s?(?:type)?\s?\{[^;\n]+\}\s?from\s?['"][^;\n]+['"])|(?:import\(['"][^;\n]+?['"]\))/g,
        (str) => {
            let matchResult = str.match(
                /(?:import|export)\s?(?:type)?\s?\{.+\}\s?from\s?['"](.+)['"]/
            );
            let isDynamic = false;

            if (!matchResult) {
                matchResult = str.match(/import\(['"]([^;\n]+?)['"]\)/);
                isDynamic = true;
            }

            if (matchResult?.[1]) {
                const matchedAlias = aliases.find((alias) => isAliasMatch(alias, matchResult![1]));

                if (matchedAlias) {
                    return str.replace(
                        isDynamic
                            ? /(import\()['"](.+)['"]\)/
                            : /((?:import|export).+from\s?)['"](.+)['"]/,
                        `$1'${matchResult[1].replace(
                            matchedAlias.find,
                            isAbsolute(matchedAlias.replacement)
                                ? normalizePath(
                                      relative(dirname(filePath), matchedAlias.replacement)
                                  )
                                : normalizePath(matchedAlias.replacement)
                        )}'${isDynamic ? ")" : ""}`
                    );
                }
            }

            return str;
        }
    );
}

export function removePureImport(content: string) {
    return content.replace(/import\s?['"][^;\n]+?['"];?\n?/g, "");
}
