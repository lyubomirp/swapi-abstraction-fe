import {MouseEventHandler} from "react";

export interface MenuItemProps {
    text: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
}