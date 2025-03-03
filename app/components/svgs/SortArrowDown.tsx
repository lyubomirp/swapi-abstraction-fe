import React from "react";
import {BasicProps} from "@/app/types/props/BasicProps";

const SortArrowDown: React.FC<BasicProps> = ({className}) => {
    return <svg className={className} width="800px" height="800px" viewBox="-96 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"/>
    </svg>
}

export default SortArrowDown;