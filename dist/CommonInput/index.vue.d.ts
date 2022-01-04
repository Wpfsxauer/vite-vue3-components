declare const _default: import("vue").DefineComponent<{
    copyWriting: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    hasErr: {
        type: BooleanConstructor;
        default: boolean;
        required: false;
    };
    staticOptions: {
        type: ObjectConstructor;
        default: () => {
            title: string;
            type: string;
            readOnly: boolean;
            placeholder: string;
            marginBottom: boolean;
            isShowBorder: boolean;
            iconUrl: string;
            isShowIcon: boolean;
        };
        required: false;
    };
    phoneConfig: {
        type: ObjectConstructor;
        default: () => {
            desc: string;
            show: boolean;
        };
    };
}, {
    handleClick: () => void;
    handleBlur: (item: any) => void;
    iconUrl: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    copyWriting?: unknown;
    hasErr?: unknown;
    staticOptions?: unknown;
    phoneConfig?: unknown;
} & {
    copyWriting: string;
    hasErr: boolean;
    staticOptions: Record<string, any>;
    phoneConfig: Record<string, any>;
} & {}>, {
    copyWriting: string;
    hasErr: boolean;
    staticOptions: Record<string, any>;
    phoneConfig: Record<string, any>;
}>;
export default _default;
