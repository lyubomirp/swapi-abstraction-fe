import React from "react";
import {BasicProps} from "@/app/types/props/BasicProps";

const SortArrowUp: React.FC<BasicProps> = ({className}) => {
    return <svg className={className} width="800px" height="800px" viewBox="-96 0 512 512"
                xmlns="http://www.w3.org/2000/svg">
        <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"/>
    </svg>
}

export default SortArrowUp;