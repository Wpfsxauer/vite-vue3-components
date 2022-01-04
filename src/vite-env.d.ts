/// <reference types="vite/client" />

interface WBAPPFace {
    action: {
        [key: string]: any;
    };
    call: Function;
    callback: Function;
    common: {
        [key: string]: any;
    };
    headers: {
        [key: string]: any;
    };
    invoke: Function;
    ready: Function;
    util: {
        [key: string]: any;
    };
}
declare interface Window {
    postApp: WBAPPFace;
    pageData: {
        [key: string]: any;
    };
    WBAPP: WBAPPFace;
    WBUTOWN: WBAPPFace;
    publishCommonSetCallback: Function;
}
