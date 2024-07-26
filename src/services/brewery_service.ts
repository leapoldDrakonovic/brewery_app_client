import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IBrewery from "../core/interfaces/IBrewery";

export const breweryApi = createApi({
    reducerPath: "breweryApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.openbrewerydb.org/v1" }),
    endpoints: (builder) => ({
        getBreweriesAll: builder.query<IBrewery[], string>({
            query: (perPage) => `/breweries?per_page=${perPage}`,
        }),
        getBreweriesByCity: builder.query<IBrewery[], string>({
            query: (city) => `/breweries?by_city=${city}&per_page=3`
        }),
        getBreweryById: builder.query<IBrewery, string>({
            query: (id) => `/breweries?by_ids=${id}`
        })
    }),
})


export const { useGetBreweriesAllQuery } = breweryApi
export const { useGetBreweriesByCityQuery } = breweryApi
export const { useGetBreweryByIdQuery } = breweryApi