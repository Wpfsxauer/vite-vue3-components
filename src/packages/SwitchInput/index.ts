/*
 * @Description:
 * @Autor: weipengfei
 * @Date: 2021-07-19 10:07:16
 * @LastEditors: weipengfei
 * @LastEditTime: 2021-07-28 19:36:00
 */
import { App } from "vue";

import Component from "./index.vue";

export const SwitchInput = function (Vue: App) {
    Vue.component(Component.name, Component);
};
