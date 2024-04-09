interface IButton {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    className?: string;
    style?:
    | "primary"
    | "secondary"
    | "primaryBordered"
    | "light"
    | "dark"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "default"
    | "danger"
    | "dangerGhost"
    | "primaryGhost"
    | "secondaryGhost"
    | "link"
    | "successGhost"
    | "warningGhost"
    | "errorGhost"
    | "infoGhost"
    | "defaultGhost";
}
