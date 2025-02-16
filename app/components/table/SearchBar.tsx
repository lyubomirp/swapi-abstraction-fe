import React from 'react';
import {SearchBarProps} from "@/app/types/props/SearchBarProps";

const SearchBar: React.FC<SearchBarProps> = ({ inputValue, onInputChange, onSearch }) => {
    return (
        <div className={'flex flex-row gap-3'}>
            <input
                value={inputValue}
                className={'w-2/12 p-1 outline-0 border border-solid border-white bg-black text-white'}
                placeholder={'Search...'}
                onChange={onInputChange}
            />
            <button className='border border-solid border-white py-1 px-3' onClick={onSearch}>
                Filter
            </button>
        </div>
    );
};

export default React.memo(SearchBar);