import React, { useState, useCallback } from "react";
import { MainTableProps } from "@/app/types/props/MainTableProps";
import { useData } from "@/app/hooks/useData";
import { isNumeric } from "@/app/utils/helpers";
import SearchBar from "./SearchBar";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "@/app/components/table/Pagination";

function MainTable<T>({
  tableHeader,
  dataKey,
  initialSort,
  columns,
}: React.PropsWithChildren<MainTableProps<T>>) {
    const [sortField, setSortField] = useState<keyof T>(initialSort);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [inputValue, setInputValue] = useState<string>('');
    const [params, setParams] = useState({
        page: 1,
        search: ''
    });

    const handleSearch = useCallback(() => {
        setParams(prev => ({ ...prev, search: inputValue, page: 1 }));
    }, [inputValue]);

    const handlePageChange = useCallback((page: number) => {
        setParams(prev => ({ ...prev, page }));
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    const handleSort = useCallback((field: keyof T) => {
        if (sortField === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortOrder('asc');
        }
    }, [sortField, sortOrder]);

    const {
        data,
        isLoading,
        isError,
        error
    } = useData<T>(dataKey, params.page, params.search);

    if (isLoading) return <div className={'self-center'}> Loading... </div>;
    if (isError) return <div className={'text-red-500 self-center'}>
        <p>ERROR: {error?.message} </p>
        <p>{error.response?.data?.message} </p>
    </div>;

    const sortedData: T[] | undefined = data?.results.sort((a, b) => {
        // Nqmam nervi
        /* eslint-disable  @typescript-eslint/no-explicit-any */
        let aValue: any = a[sortField];
        let bValue: any = b[sortField];

        if (isNumeric(`${aValue}`.trim()) && isNumeric(`${bValue}`.trim())) {
            aValue = parseFloat(`${aValue}`.trim());
            bValue = parseFloat(`${bValue}`.trim());
        }

        if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    return (
        <div className={'flex flex-col gap-10'}>
            <h1 className={'text-6xl self-center capitalize'}> {tableHeader} </h1>
            <SearchBar
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onSearch={handleSearch}
            />
            <table className={'w-full table-auto'}>
                <TableHeader
                    columns={columns}
                    sortField={sortField}
                    sortOrder={sortOrder}
                    onSort={handleSort}
                />
                <TableBody
                    data={sortedData || []}
                    columns={columns}
                    initialSort={initialSort}
                />
            </table>
            <Pagination
                count={data?.count || 0}
                page={params.page}
                prev={data?.previous}
                next={data?.next}
                pageChange={handlePageChange}
            />
        </div>
    );
}

// @ts-expect-error Type casting is correct Typescript is just complaining
// Actual solution could probably be using a MainTableWrapper or something
// But... c'mon
export default React.memo(MainTable) as typeof MainTable;

