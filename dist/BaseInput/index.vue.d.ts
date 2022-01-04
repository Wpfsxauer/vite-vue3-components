declare const _default: import("vue").DefineComponent<{
    value: {
        type: ObjectConstructor;
        default: () => {};
    };
    title: {
        type: StringConstructor;
        default: () => string;
    };
    type: {
        type: StringConstructor;
        default: () => string;
    };
    readOnly: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: () => string;
    };
    marginBottom: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    isShowBorder: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    iconUrl: {
        type: StringConstructor;
        default: () => string;
    };
    isShowIcon: {
        type: BooleanConstructor;
        default: () => boolean;
    };
}, {
    copyWriting: import("vue").ComputedRef<any>;
    hasErr: import("vue").ComputedRef<boolean>;
    handleBlur: (item: string) => void;
    staticOptions: import("vue").ComputedRef<{
        title: string;
        type: string;
        readOnly: boolean;
        placeholder: string;
        marginBottom: boolean;
        isShowBorder: boolean;
        iconUrl: string;
        isShowIcon: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    title?: unknown;
    type?: unknown;
    readOnly?: unknown;
    placeholder?: unknown;
    marginBottom?: unknown;
    isShowBorder?: unknown;
    iconUrl?: unknown;
    isShowIcon?: unknown;
} & {
    title: string;
    type: string;
    value: Record<string, any>;
    iconUrl: string;
    readOnly: boolean;
    placeholder: string;
    marginBottom: boolean;
    isShowBorder: boolean;
    isShowIcon: boolean;
} & {}>, {
    title: string;
    type: string;
    value: Record<string, any>;
    iconUrl: string;
    readOnly: boolean;
    placeholder: string;
    marginBottom: boolean;
    isShowBorder: boolean;
    isShowIcon: boolean;
}>;
export default _default;
