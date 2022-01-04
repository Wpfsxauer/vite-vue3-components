# 1、发布

```
npm run build

```

# 2、主应用样式自动加载

## 1、下载依赖

```
npm i vite-plugin-style-import@1.0.1
```

## 2、vite.config.ts plugin 配置

```
vitePluginStyleImport({
    libs: [
        {
            libraryName: "app-post-components",
            esModule: true,
            libraryNameChangeCase: "pascalCase",
            resolveStyle: (name) => {
                const baseUrl = "app-post-components/dist/";
                const nameList = [
                    "CommonInput",
                    "SwitchInput",
                    "Submit",
                ];
                if (nameList.includes(name)) {
                    return `${baseUrl}${name}/index.css`;
                }
                return `${baseUrl}CommonInput/index.css`;
            },
        },
    ],
}),
```

## 3、main.ts 中使用

```
import {
    CommentInput,
    Submit,
    BaseInput,
    SwitchInput
} from "app-post-components";

const app = createApp(App);

const components = [
    CommentInput,
    SwitchInput
    Submit,
    BaseInput,
];

for (const component of components) {
    app.use(component);
}

app.mount("#app");

```
