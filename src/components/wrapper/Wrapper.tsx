import React, { useCallback, useEffect, useState } from 'react'
import Brewery from '../brewery/Brewery'
import IBrewery from '../../core/interfaces/IBrewery'
import "./Wrapper.css"

import { IFilterData } from '../../store/slices/fitlerDataSlice'


type Props = {
  data: IBrewery[] | undefined,
  error?: string,
  isLoading: boolean,
  filters?: IFilterData
}

export default function Wrapper({data, isLoading, filters}: Props) {


  const breweries = Array.isArray(data) ? data : []


  const filterBreweries = useCallback((breweries: IBrewery[], filters: IFilterData) => {
    return breweries.filter(brewery => {
      const matchesCity = filters.city ? brewery.city === filters.city : true;
      const matchesState = filters.state ? brewery.state === filters.state : true;
      const matchesType = filters.type ? brewery.brewery_type === filters.type : true;
      const matchesSearch = filters.search ? brewery.name.toLowerCase() == filters.search : true
  
      return matchesCity && matchesState && matchesType && matchesSearch;
    });
  }, []);

  
  
  const filteredBreweries = filters ? filterBreweries(breweries, filters) : breweries;
 
  return (
    <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
      {isLoading && <div className='loading'>Loading</div>}
      {filteredBreweries.map(brewery => {
        return (
          <Brewery key={brewery.id} data={brewery}/>
        )
      })}
    </div>
)}
