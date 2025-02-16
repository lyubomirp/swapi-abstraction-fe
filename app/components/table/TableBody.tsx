import React from 'react';
import {TableBodyProps} from "@/app/types/props/TableBodyProps";
import {useModelStore} from "@/app/store/useModelStore";
import {useShallow} from "zustand/react/shallow";
import {ModelTypeState} from "@/app/types/state/ModelTypeState";

const TableBody = <T,>({ data, columns, initialSort }: TableBodyProps<T>) => {
    const { setModel } = useModelStore(
        useShallow((state: ModelTypeState<unknown>) => ({
            setModel: state.setModel,
        }))
    );

    return (
        <tbody>
        {data.map((row) => (
            <tr key={`${row[initialSort]}`} onClick={() => setModel(row)}>
                {columns.map((field, index) => (
                    <td key={index} className="px-4 py-2 border">{`${row[field]}`}</td>
                ))}
            </tr>
        ))}
        </tbody>
    );
};

export default TableBody;