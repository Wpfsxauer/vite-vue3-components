declare const _default: import("vue").DefineComponent<{
    value: {
        type: ObjectConstructor;
        default: () => {};
    };
    isAJK: {
        type: BooleanConstructor;
        default: () => boolean;
    };
    configuration: {
        type: ObjectConstructor;
        default: () => {
            isBorderBottom: boolean;
            checked: string;
            unchecked: string;
            label: string;
            describe: string;
        };
    };
}, {
    switchChange: () => void;
    checked: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    isAJK?: unknown;
    configuration?: unknown;
} & {
    value: Record<string, any>;
    isAJK: boolean;
    configuration: Record<string, any>;
} & {}>, {
    value: Record<string, any>;
    isAJK: boolean;
    configuration: Record<string, any>;
}>;
export default _default;
