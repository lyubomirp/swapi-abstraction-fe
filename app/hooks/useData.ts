import {useQuery, UseQueryResult} from '@tanstack/react-query';
import { api } from "@/app/lib/axios";
import {AxiosError} from "axios";
import {ApiError} from "@/app/types/ApiError";
import {ListReturnType} from "@/app/types/data/ListReturnType";

export function useData<T>(key: string, page: number, search?: string): UseQueryResult<ListReturnType<T>, AxiosError<ApiError>> {
    return useQuery<ListReturnType<T>, AxiosError<ApiError>>({
        queryKey: [key, page, search],
        queryFn: async () => {
            try {
                const { data } = await api.get<ListReturnType<T>>(`list-data`, {
                    params: { resourceType: key, page, search },
                });
                return data;
            } catch (error) {
                const axiosError = error as AxiosError<ApiError>;
                console.error(
                    `Failed to fetch ${key}:`,
                    axiosError.response?.data?.message || axiosError.message
                );
                throw axiosError;
            }
        },
        staleTime: 1000 * 60 * 10,
        retry: 2,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
}