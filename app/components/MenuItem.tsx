import React from "react";
import {MenuItemProps} from "@/app/types/props/MenuItemProps";

const MenuItem: React.FC<MenuItemProps> = ({text, onClick}) => {
    return <div className={'p-2 text-left text-white'}>
        <button type={'button'} onClick={onClick}>
            {text}
        </button>
    </div>
}

export default React.memo(MenuItem)