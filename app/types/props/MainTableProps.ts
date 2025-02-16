export interface MainTableProps<T> {
    tableHeader: string,
    dataKey: string,
    columns: (keyof T)[],
    initialSort: keyof T,
}