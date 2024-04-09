"use client";

// ReactJS
import { useState } from "react";

// NextUI
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";

// Icons
import { IconEye, IconEyeClosed, IconSearch } from "@tabler/icons-react";

function BtnPassword ({ isVisible, toggleVisibility }: IBtnPassword) {
    return (
        <button
            className="focus:outline-none"
            onClick={toggleVisibility}
            type="button"
        >
            {isVisible
                ? (
                    <IconEyeClosed className="text-2xl text-default-400 pointer-events-none" />
                )
                : (
                    <IconEye className="text-2xl text-default-400 pointer-events-none" />
                )}
        </button>
    );
}

export function InputApp ({
    errors,
    name,
    register = () => {},
    type = "text",
    ...props
}: IInputApp) {
    // Error
    const isError = errors?.[name] !== undefined;

    return (
        <Input
            {...props}
            {...register(name)}
            className="text-primary"
            errorMessage={isError && errors[name].message}
            name={name}
            type={type}
            validationState={isError ? "invalid" : undefined}
        />
    );
}

export function InputPhone ({
    errors,
    name,
    register = () => {},
    type = "text",
    ...props
}: IInputApp) {
    // Error
    const isError = errors?.[name] !== undefined;

    return (
        <Input
            {...props}
            {...register(name)}
            errorMessage={isError && errors[name].message}
            name={name}
            type={type}
            validationState={isError ? "invalid" : undefined}
            startContent={
                <div className="flex items-center">
                    <label className="sr-only" htmlFor="code">
                        Code
                    </label>
                    <select
                        className="outline-none border-0 bg-transparent text-default-400 text-small"
                        id="code"
                        name="code"
                    >
                        <option>+57</option>
                    </select>
                </div>
            }
        />
    );
}

export function InputPassword ({
    errors,
    name,
    register = () => {},
    ...props
}: IInputApp) {
    // Error
    const isError = errors?.[name] !== undefined;

    // State
    const [isVisible, setIsVisible] = useState(false);

    // Functions
    const toggleVisibility = () => { setIsVisible(!isVisible); };

    return (
        <Input
            {...props}
            {...register(name)}
            endContent={
                <BtnPassword
                    isVisible={isVisible}
                    toggleVisibility={toggleVisibility}
                />
            }
            errorMessage={isError && errors[name].message}
            name={name}
            type={isVisible ? "text" : "password"}
            validationState={isError ? "invalid" : undefined}
        />
    );
}

export function InputSelect ({
    errors,
    name,
    onChange,
    options,
    register = () => {},
    ...props
}: IInputSelect) {
    // Error
    const isError = errors?.[name] !== undefined;

    return (
        <Autocomplete
            {...props}
            {...register(name)}
            onSelectionChange={onChange}
            defaultItems={options}
            errorMessage={isError && errors[name].message}
            name={name}
            validationState={isError ? "invalid" : undefined}
        >
            {(item: IOption) => (
                <AutocompleteItem key={item?.value}>
                    {item?.label}
                </AutocompleteItem>)}
        </Autocomplete>
    );
}

export function InputSearch ({
    label,
    placeholder,
}: IInputApp) {
    return (
        <Input
        
            fullWidth
            label={label}
            isClearable
            placeholder={placeholder}
            endContent={<IconSearch />}
        />
    );
}