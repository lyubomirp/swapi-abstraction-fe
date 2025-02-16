import {useQuery, UseQueryResult} from '@tanstack/react-query';
import { api } from "@/app/lib/axios";
import {AxiosError} from "axios";
import {ApiError} from "@/app/types/ApiError";

export function useEntityData<T>(key: string, id: string): UseQueryResult<T, AxiosError<ApiError>> {
    return useQuery<T, AxiosError<ApiError>>({
        queryKey: [key, id],
        queryFn: async () => {
            try {
                const { data } = await api.get<T>(`entity-data`, {
                    params: { resourceType: key, id },
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