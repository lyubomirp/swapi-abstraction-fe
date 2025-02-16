import {create} from "zustand/react";
import {ModelTypeState} from "@/app/types/state/ModelTypeState";

export const useModelStore = create<ModelTypeState<unknown>>((set) => ({
    model: null,
    setModel: (model) => set(() => ({ model })),
    clearModel: () => set({ model: null }),
}))