import {Vehicle} from "@/app/types/data/Vehicle";
import {Starship} from "@/app/types/data/Starship";
import {Species} from "@/app/types/data/Species";
import {Person} from "@/app/types/data/Person";
import {Planet} from "@/app/types/data/Planet";
import {Film} from "@/app/types/data/Film";

export const FILM_TABLE_FIELDS: (keyof Film)[] = [
    'title',
    'episode_id',
    'director',
    'producer',
    'release_date'
]

export const PLANET_TABLE_FIELDS: (keyof Planet)[] = [
    'name',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'population'
]

export const PEOPLE_TABLE_FIELDS: (keyof Person)[] = [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'eye_color',
    'birth_year',
    'gender',
]

export const SPECIES_TABLE_FIELDS: (keyof Species)[] = [
    'name',
    'classification',
    'designation',
    'average_height',
    'skin_colors',
    'hair_colors',
    'eye_colors',
    'average_lifespan',
    'language'
]

export const STARSHIPS_TABLE_FIELDS: (keyof Starship)[] = [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'max_atmosphering_speed',
    'crew',
    'passengers',
    'cargo_capacity',
    'consumables',
    'hyperdrive_rating',
    'MGLT',
    'starship_class'
]

export const VEHICLES_TABLE_FIELDS: (keyof Vehicle)[] = [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'max_atmosphering_speed',
    'crew',
    'passengers',
    'cargo_capacity',
    'consumables',
    'vehicle_class',
]