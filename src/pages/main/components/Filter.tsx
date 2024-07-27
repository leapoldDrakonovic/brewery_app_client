import React, { useCallback, useMemo, useState } from 'react'
import "./Filter.css"
import { useDispatch } from 'react-redux'
import { addFilterCity, addFilterState, addFilterType } from '../../../store/slices/fitlerDataSlice'
import FilterTags from './FilterTags'
import FilterSearch from './FilterSearch'

type Props = {
}


const Filter = ({}: Props) => {
  
  const [selectedCity, setSelectedCity] = useState<string>("City")
  const [selectedState, setSelectedState] = useState<string>("State")
  const [selectedType, setSelectedType] = useState<string>("Type")
  
  const dispatch = useDispatch()
  
  const handleCityChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCity = event.target.value
    setSelectedCity(newCity);
    dispatch(addFilterCity(newCity)) 
  }, [setSelectedCity, dispatch])
  
  const handleStateChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = event.target.value
    setSelectedState(newState);
    dispatch(addFilterState(newState))
  }, [setSelectedState, dispatch]);
  
  const handleTypeChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = event.target.value
    setSelectedType(newType);
    dispatch(addFilterType(newType))
    
  }, [, setSelectedType, dispatch])

  
  const handleRemoveFilters = useCallback(() => {
    setSelectedCity("");
    setSelectedState("");
    setSelectedType("");
    dispatch(addFilterState(""))
    dispatch(addFilterCity(""))
    dispatch(addFilterType(""))
    
  }, [dispatch, setSelectedCity, setSelectedState, setSelectedType])


  
  const {cities, types, states} = FilterTags()
  
  // Можно сделать через запрос на сервер
  // стоит ли?
  
  
  
  
  return (
    <div className='fitler-container'>
      <FilterSearch/>
      <select name="city" id="city-select" value={selectedCity} onChange={handleCityChange} >
        <option value="">All cities</option>
          {cities.map(city => {
            return <option key={city} value={city}>{city}</option>
          })}
      </select>
      <select name="state" id="state-select" value={selectedState} onChange={handleStateChange}>
      <option value="">All states</option>

          {states.map(city => {
            return <option key={city} value={city}>{city}</option>
          })}

      </select>
      <select name="type" id="type-select" value={selectedType} onChange={handleTypeChange}>
          <option value="">All types</option>
          {types.map(city => {
            return <option key={city} value={city}>{city}</option>
          })}
      </select>
      <button className='fitler-btn'  onClick={handleRemoveFilters}>Remove</button>
    </div>
  )
}


export default Filter

