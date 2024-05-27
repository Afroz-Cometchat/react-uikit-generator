import { CSSProperties } from "react";

export function messageList_edit_container(): CSSProperties{
    return {
        "display": "flex",
        "justifyContent": "space-between",
        "boxShadow": "rgb(0 0 255 / 60%) 0px 1px 4px",
        "padding": "10px",
        "borderRadius": "6px",
        "height": "80vh",
    }
}

export function messaegList_preview_container(): CSSProperties{
    return {
        width: "50%",
        height: "100%",
        padding: "5px"
    }
}

export function messageList_list_container():CSSProperties {
    return {
        width: "100%",
        height: "100%",
        border: "1px solid red",
        padding: "5px"
    }
}