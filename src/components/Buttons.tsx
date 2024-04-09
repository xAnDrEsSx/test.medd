import React from "react";

// Components
import { Button } from "@nextui-org/react";

type IButtonTypes = Record<
string,
{
    color: "primary" | "secondary" | "success" | "warning" | "danger"
    variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
}
>

function joinClassNames (...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const BUTTON_TYPES: IButtonTypes = {
    primary: {
        color: "primary",
        variant: "solid"
    },
    primaryGhost: {
        color: "secondary",
        variant: "ghost"
    },
    secondary: {
        color: "secondary",
        variant: "solid"
    },
    secondaryGhost: {
        color: "secondary",
        variant: "ghost"
    },
    light: {
        color: "secondary",
        variant: "light"
    },
    danger: {
        color: "danger",
        variant: "solid"
    },
    dangerGhost: {
        color: "danger",
        variant: "ghost"
    },
    success: {
        color: "success",
        variant: "solid"
    },
    link: {
        color: "primary",
        variant: "light"
    }
};

export function BtnPrimary ({
    children,
    className = "",
    size = "lg",
    style = "primary",
    type = "button",
}: IButton) {
    const { color, variant } = BUTTON_TYPES[style];

    return (
        <Button
            className={joinClassNames("w-full font-semibold", className)}
            color={color}
            size={size}
            type={type}
            variant={variant}
        >
            {children}
        </Button>
    );
}

export function BtnSecondary ({
    style = "primaryGhost",
    children,
    className = "",
    type = "button",
}: IButton) {
    const { color, variant } = BUTTON_TYPES[style];

    return (
        <Button
            className={joinClassNames("w-full font-semibold", className)}
            color={color}
            size="lg"
            type={type}
            variant={variant}
        >
            {children}
        </Button>
    );
}

export function BtnAlternative ({
    style = "link",
    children,
    className = "",
    type = "button",
}: IButton) {
    const { color, variant } = BUTTON_TYPES[style];

    return (
        <Button
            className={joinClassNames("w-full font-semibold", className)}
            color={color}
            size="lg"
            type={type}
            variant={variant}
        >
            {children}
        </Button>
    );
}
