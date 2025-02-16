import {create} from "zustand/react";
import {DataTypeState} from "@/app/types/state/DataTypeState";

export const useDataTypeStore = create<DataTypeState>((set) => ({
    dataType: null,
    setDataType: (dataType: string) => set(() => ({ dataType })),
    clearDataType: () => set({ dataType: null }),
}))