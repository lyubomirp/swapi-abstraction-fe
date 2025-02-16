'use client'
import MenuItem from "@/app/components/MenuItem";
import React, { useState } from "react";
import { useDataTypeStore } from "@/app/store/useDataTypeStore";
import { useShallow } from "zustand/react/shallow";
import { DataTypeState } from "@/app/types/state/DataTypeState";
import {NAV_ITEMS} from "@/app/utils/constants/NavItems";
import {useModelStore} from "@/app/store/useModelStore";
import {ModelTypeState} from "@/app/types/state/ModelTypeState";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setDataType, clearDataType } = useDataTypeStore(
        useShallow(({ setDataType, clearDataType }: DataTypeState) => ({
            setDataType,
            clearDataType,
        }))
    );
    const { clearModel } = useModelStore(
        useShallow(({ clearModel }: ModelTypeState<unknown>) => ({
            clearModel,
        }))
    );

    const handleItemClick = (item: typeof NAV_ITEMS[number]) => {
        clearModel()
        if (item.key === '') {
            clearDataType()
            return
        }

        setDataType(item.key);
    };

    return (
        <nav className="flex flex-col h-auto w-1/12 py-10">
            <button className="self-center" onClick={() => setIsOpen(!isOpen)}>
                Menu
            </button>
            <div
                className={`absolute self-center left-0 top-24 transition-all overflow-x-hidden duration-100
          ${isOpen ? 'max-w-[500px] opacity-100' : 'max-w-0 opacity-0'}`}
            >
                {NAV_ITEMS.map((item) => (
                    <MenuItem
                        key={item.key}
                        onClick={() => handleItemClick(item)}
                        text={item.label}
                    />
                ))}
            </div>
        </nav>
    );
};

export default React.memo(Navigation);
