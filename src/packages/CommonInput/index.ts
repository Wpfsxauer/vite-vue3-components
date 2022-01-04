/*
 * @Description: 
 * @Autor: weipengfei
 * @Date: 2021-07-21 11:28:39
 * @LastEditors: weipengfei
 * @LastEditTime: 2021-07-21 11:28:39
 */
/*
 * @Description:
 * @Autor: weipengfei
 * @Date: 2021-07-19 10:04:21
 * @LastEditors: weipengfei
 * @LastEditTime: 2021-07-20 13:01:54
 */
import { App } from "vue";

import Component from "./index.vue";

export const CommonInput = function (Vue: App) {
    Vue.component(Component.name, Component);
};
