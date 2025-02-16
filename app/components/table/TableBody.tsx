import React, {useMemo} from 'react';
import {TableBodyProps} from "@/app/types/props/TableBodyProps";
import {useModelStore} from "@/app/store/useModelStore";
import {useShallow} from "zustand/react/shallow";
import {ModelTypeState} from "@/app/types/state/ModelTypeState";
import {isNumeric} from "@/app/utils/helpers";

const TableBody = <T,>({ data, columns, initialSort, sortOrder, sortField }: TableBodyProps<T>) => {
    const { setModel } = useModelStore(
        useShallow((state: ModelTypeState<unknown>) => ({
            setModel: state.setModel,
        }))
    );

    const sortedData: T[] | undefined = useMemo(() => {
        if (!data) return [];

        return data?.sort((a, b) => {
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
        })
    }, [data, sortField, sortOrder]);

    return (
        <tbody>
        {sortedData.map((row) => (
            <tr key={`${row[initialSort]}`} onClick={() => setModel(row)}>
                {columns.map((field, index) => (
                    <td key={index} className="px-4 py-2 border">{`${row[field]}`}</td>
                ))}
            </tr>
        ))}
        </tbody>
    );
};

export default React.memo(TableBody) as typeof TableBody;