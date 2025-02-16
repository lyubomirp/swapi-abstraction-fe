import React from 'react';
import SortArrowUp from "@/app/components/svgs/SortArrowUp";
import SortArrowDown from "@/app/components/svgs/SortArrowDown";
import {TableHeaderProps} from "@/app/types/props/TableHeaderProps";

const TableHeader = <T,>({ columns, sortField, sortOrder, onSort }: TableHeaderProps<T>) => {
    return (
        <thead>
        <tr className={'capitalize'}>
            {columns.map((h, idx) => (
                <th className={'p-3'} onClick={() => onSort(h)} key={idx}>
                    <div className={'flex flex-row w-full gap-5 justify-around'}>
                        <span className={'self-center w-full'}>
                            {String(h).replaceAll('_', ' ')}
                        </span>
                        {sortField === h && (
                            <span className={'self-center w-1/12'}>
                                {sortOrder === 'asc' && <SortArrowUp className={'max-w-[20px] fill-white h-auto'} />}
                                {sortOrder === 'desc' && <SortArrowDown className={'max-w-[20px] fill-white h-auto'} />}
                            </span>
                        )}
                    </div>
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default React.memo(TableHeader) as typeof TableHeader;