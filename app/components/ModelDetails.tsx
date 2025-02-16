'use client'
import React, { useCallback } from 'react';
import { useModelStore } from "@/app/store/useModelStore";
import { useShallow } from "zustand/react/shallow";
import { ModelTypeState } from "@/app/types/state/ModelTypeState";
import TitleFetcher from "@/app/components/TitleFetcher";

const ModelDetails = () => {
    const { model, clearModel } = useModelStore(
        useShallow(({ model, clearModel }: ModelTypeState<unknown>) => ({
            model,
            clearModel,
        }))
    );

    const isModelSet = useCallback(() => Boolean(model), [model]);

    const separateNumber = useCallback((input: string): string => {
        return input.match(/\d+/)?.[0] || '';
    }, []);

    const resolveKey = useCallback((key: string) => {
        const keyMap: Record<string, string> = {
            pilots: 'people',
            characters: 'people',
            residents: 'people',
            homeworld: 'planets',
        };
        return keyMap[key.toLowerCase()] || key;
    }, []);

    const resolveValue = useCallback((key: string, value: string | string[]) => {
        if (Array.isArray(value)) {
            return value.map((link) => {
                if (link) {
                    const id = separateNumber(link);
                    return id ? (
                        <TitleFetcher key={id} dataId={parseInt(id)} k={resolveKey(key)} />
                    ) : null;
                }
            });
        }
        if (key.toLowerCase() === 'homeworld') {
            if (value) {
                const id = separateNumber(value as string);
                return id ? (
                    <TitleFetcher dataId={parseInt(id)} k={resolveKey(key)} />
                ) : null;
            }
        }
        return value || ' - ';
    }, [resolveKey, separateNumber]);

    return (
        <div
            className={`absolute right-0 w-8/12 transition-all duration-300 ${
                isModelSet() ? 'max-w-[1000px] p-16' : 'max-w-0 p-0'
            } overflow-x-hidden h-screen bg-black`}
        >
            <button type="button" onClick={clearModel} className="absolute top-2 left-5">
                X
            </button>
            {isModelSet() &&
                Object.entries(model as Record<string, unknown>).map(([key, value], idx) => (
                    <div key={idx} className="flex flex-row gap-5">
                        <span className="text-2xl self-center capitalize">
                          {key.replaceAll('_', ' ')}:
                        </span>
                        <div className="flex flex-row [&>:not(:last-child)]:after:content-[',_'] gap-1 flex-wrap self-center">
                            {resolveValue(key, value as string | string[])}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default React.memo(ModelDetails);
