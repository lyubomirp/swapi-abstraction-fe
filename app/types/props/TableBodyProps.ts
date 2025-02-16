export interface TableBodyProps<T> {
    data: T[];
    columns: (keyof T)[];
    initialSort: keyof T;
    sortField: keyof T;
    sortOrder: 'asc' | 'desc';
}