export interface TableHeaderProps<T> {
    columns: (keyof T)[];
    sortField: keyof T;
    sortOrder: 'asc' | 'desc';
    onSort: (field: keyof T) => void;
}