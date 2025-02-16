'use client'
import React, {useCallback, useState} from "react";
import {useDataTypeStore} from "@/app/store/useDataTypeStore";
import {useShallow} from "zustand/react/shallow";
import {DataTypeState} from "@/app/types/state/DataTypeState";
import MainTable from "@/app/components/table/MainTable";
import {Film} from "@/app/types/data/Film";
import {
    FILM_TABLE_FIELDS,
    PEOPLE_TABLE_FIELDS,
    PLANET_TABLE_FIELDS,
    SPECIES_TABLE_FIELDS, STARSHIPS_TABLE_FIELDS, VEHICLES_TABLE_FIELDS
} from "@/app/utils/constants/TableFields";
import {Planet} from "@/app/types/data/Planet";
import {Person} from "@/app/types/data/Person";
import {Species} from "@/app/types/data/Species";
import {Starship} from "@/app/types/data/Starship";
import {Vehicle} from "@/app/types/data/Vehicle";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const Main = () => {
    const [queryClient] = useState(() => new QueryClient());

    const { dataType } = useDataTypeStore(
        useShallow((state: DataTypeState) => ({
            dataType: state.dataType,
        }))
    );

    const renderContent = useCallback(() => {
        switch (dataType) {
            case 'films':
                return <MainTable<Film>
                    key={dataType}
                    tableHeader={dataType}
                    dataKey={dataType}
                    columns={FILM_TABLE_FIELDS}
                    initialSort={'title'}
                />
            case 'planets':
                return <MainTable<Planet>
                    key={dataType}
                    tableHeader={dataType}
                    dataKey={dataType}
                    columns={PLANET_TABLE_FIELDS}
                    initialSort={'name'}
                />
            case 'people':
                return <MainTable<Person>
                    key={dataType}
                    tableHeader={dataType}
                    dataKey={dataType}
                    columns={PEOPLE_TABLE_FIELDS}
                    initialSort={'name'}
                />
            case 'species':
                return <MainTable<Species>
                    key={dataType}
                    tableHeader={dataType}
                    dataKey={dataType}
                    columns={SPECIES_TABLE_FIELDS}
                    initialSort={'name'}
                />
            case 'starships':
                return <MainTable<Starship>
                    key={dataType}
                    tableHeader={dataType}
                    dataKey={dataType}
                    columns={STARSHIPS_TABLE_FIELDS}
                    initialSort={'name'}
                />
            case 'vehicles':
                return <MainTable<Vehicle>
                    key={dataType}
                    tableHeader={dataType}
                    dataKey={dataType}
                    columns={VEHICLES_TABLE_FIELDS}
                    initialSort={'name'}
                />
            default:
                return <div className={'self-center'}>Welcome to SWAPI</div>
        }
    }, [dataType]);

    return <div className={'flex flex-col w-10/12 justify-start mt-5 min-h-screen'}>
        <QueryClientProvider client={queryClient}>
            {renderContent()}
        </QueryClientProvider>
    </div>
}

export default React.memo(Main)