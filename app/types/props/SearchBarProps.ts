import React from "react";

export interface SearchBarProps {
    inputValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
}