import React from "react";
import {PaginationProps} from "@/app/types/props/PaginationProps";

const Pagination: React.FC<PaginationProps> = ({count, page, prev, next, pageChange}) => {
    return <>
        <div className={'flex flex-col'}>
            <span>Total: {count}</span>
            <span>Page: {page}</span>
        </div>
        {pageChange && <div className={'flex flex-row gap-10'}>
            {prev && <button
                onClick={() => pageChange(parseInt(prev.split('page=')[1]))}
                className={'border border-solid border-white p-2 w-1/12'}>
                Previous
            </button>}
            {next && <button
                onClick={() => pageChange(parseInt(next.split('page=')[1]))}
                className={'border border-solid border-white p-2 w-1/12'}>
                Next
            </button>}
        </div>}
    </>
}

export default Pagination