import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "./rollupPlugins";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        server: {
            port: 3000,
        },

        build: {
            lib: {
                entry: path.resolve(__dirname, `src/packages/index.ts`),
                formats: ["es"],
            },
            cssCodeSplit: true,
            assetsInlineLimit: 1024,
            rollupOptions: {
                external: ["vue"],
                output: {
                    globals: {
                        vue: "Vue",
                    },
                    manualChunks(id) {
                        const reg = /(?<=packages\/)\w+(?=\/\w+)/;
                        const macthResult = id.match(reg);
                        if (macthResult) {
                            const [chunckName] = macthResult;
                            return `${chunckName}/index`;
                        }
                    },
                },
            },
            // watch: {
            //     buildDelay: 0,
            //     clearScreen: true,
            //     exclude: "node_modules/**",
            // },
        },
        plugins: [vue({}), dts()],
    };
});
