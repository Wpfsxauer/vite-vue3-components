/*
 * @Description:
 * @Autor: weipengfei
 * @Date: 2021-07-19 10:07:16
 * @LastEditors: weipengfei
 * @LastEditTime: 2021-07-28 18:59:12
 */
import { App } from "vue";

import Component from "./index.vue";

export const BaseInput = function (Vue: App) {
    Vue.component(Component.name, Component);
};
