import React, { useEffect, useState } from 'react'
import Brewery from '../brewery/Brewery'
import IBrewery from '../../core/interfaces/IBrewery'
import "./Wrapper.css"
import useFetch from '../../hooks/useFetch()'

type Props = {
  url: string
}

export default function Wrapper({url}: Props) {


  const {data, isLoading} = useFetch<IBrewery[]>(url, "GET")
 
  
  const breweries = Array.isArray(data) ? data : []


  return (
    <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
      {isLoading && <div className='loading'>Loading</div>}
      {breweries.map(brewery => {
        return (
          <Brewery key={brewery.id} data={brewery}/>
        )
      })}
    </div>
)}
