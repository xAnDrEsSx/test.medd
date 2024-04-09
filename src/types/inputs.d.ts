/* eslint-disable @typescript-eslint/no-explicit-any */
interface IInput {
    autoComplete?: "off" | "on" | "email" | "username" | "current-password";
    className?: string;
    defaultValue?: string | number;
    description?: string;
    disabled?: boolean;
    errors: FieldErrorForm;
    label?: string;
    name: string;
    nameAditional?: string;
    placeholder?: string;
    register: any;
    required?: boolean;
    setValue?: any;
    span?: any;
    step?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | number;
}

interface IInputApp extends IInput {
    errors?: FieldErrorForm;
    name: string;
    nameAditional?: string;
    register?: any;
}

interface IInputSelect extends IInput {
    errors?: FieldErrorForm;
    name: string;
    nameAditional?: string;
    options: IOption[] | undefined;
    register?: any;
}

interface IOption {
    label: string;
    value: string | number;
}

interface IInputSelect extends IInput {
    defaultSelectedKeys?: string | "all" | React.Key[];
    errors?: FieldErrorForm;
    name: string;
    nameAditional?: string;
    onChange?: (value: string) => void;
    options: IOption[] | undefined;
    register?: any;
}

interface IBtnPassword {
    isVisible: boolean;
    toggleVisibility: () => void;
}
