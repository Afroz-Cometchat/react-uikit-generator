import { CSSProperties } from "react";

export function avatar_edit_container() : CSSProperties {
    return {
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        boxShadow: "rgb(0 0 255 / 60%) 0px 1px 4px",
        borderRadius: "10px"
    };
}

export function avatar_preview_container(): CSSProperties {
    return {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

export function code_snippet_preview(): CSSProperties {
    return {
        boxShadow: "rgb(0 0 255 / 60%) 0px 1px 4px",
        marginTop: "10px",
        padding: "10px",
        borderRadius: "10px"
    }
}

export function copy_button(): CSSProperties {
    return {
        padding: "6px 8px",
        border: "none",
        background: "rgb(177 177 255 / 60%)",
        color: "#0000e0",
        fontWeight: "900",
        textTransform: "uppercase",
        cursor: "pointer"
    }
}