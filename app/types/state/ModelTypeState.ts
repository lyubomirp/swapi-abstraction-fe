export interface ModelTypeState<T>{
    model: T | null;
    setModel: (model: T) => void;
    clearModel: () => void;
}