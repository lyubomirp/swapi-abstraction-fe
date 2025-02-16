export interface PaginationProps {
    count: number;
    page: number;
    prev?: string;
    next?: string,
    pageChange?: (page: number) => void
}