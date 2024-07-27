import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IBrewery from "../core/interfaces/IBrewery";

export const breweryApi = createApi({
    reducerPath: "breweryApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openbrewerydb.org/v1" }),
    refetchOnReconnect: true,
    endpoints: (builder) => ({
        getBreweriesAll: builder.query<IBrewery[], string>({
            query: (perPage) => `/breweries?per_page=${perPage}`,
        }),
        getBreweriesByCity: builder.query<IBrewery[], string>({
            query: (city) => `/breweries?by_city=${city}&per_page=3`
        }),
        getBreweryById: builder.query<IBrewery[], string | string[]>({
            query: (ids) => `/breweries?by_ids=${ids}`
        })
    }),
})


export const { useGetBreweriesAllQuery } = breweryApi
export const { useGetBreweriesByCityQuery } = breweryApi
export const { useGetBreweryByIdQuery } = breweryApi