import React, { useState } from 'react'
import "./Filter.css"
import { useDispatch } from 'react-redux'
import { addFilterCity, addFilterState, addFilterType } from '../../../store/slices/fitlerDataSlice'
import FilterTags from './FilterTags'

type Props = {
}


const Filter = React.memo(({}: Props) => {
  
  const [selectedCity, setSelectedCity] = useState<string>("City")
  const [selectedState, setSelectedState] = useState<string>("State")
  const [selectedType, setSelectedType] = useState<string>("Type")
  
  const dispatch = useDispatch()
  
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCity  = event.target.value
    setSelectedCity(newCity);
    dispatch(addFilterCity(newCity))
    
    
  }
  
  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = event.target.value
    setSelectedState(newState);
    dispatch(addFilterState(newState))
  }
  
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = event.target.value
    setSelectedType(newType);
    dispatch(addFilterType(newType))
    
  }
  
  const handleRemoveFilters = () => {
    setSelectedCity("");
    setSelectedState("");
    setSelectedType("");
    dispatch(addFilterState(""))
    dispatch(addFilterCity(""))
    dispatch(addFilterType(""))
    
  }


  
  const {cities, types, states} = FilterTags()
  
  // Можно сделать через запрос на сервер
  // стоит ли?
  
  
  
  
  return (
    <div className='fitler-container'>
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
})


export default Filter

