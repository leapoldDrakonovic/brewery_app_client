import * as React from 'react'
import "./Filter.css"
import { useDispatch } from 'react-redux'
import { addFilterCity, addFilterState, addFilterType } from '../../../../store/slices/fitlerDataSlice'
import FilterTags from './FilterTags'
import FilterSearch from './FilterSearch'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useCallback } from "react"
type Props = {
}


const Filter = ({}: Props) => {
  
  const [selectedCity, setSelectedCity] = React.useState<string | null>("")
  const [selectedState, setSelectedState] = React.useState<string | null>("")
  const [selectedType, setSelectedType] = React.useState<string | null>("")
  
  const dispatch = useDispatch()
  
  const handleCityChange = useCallback((event: React.SyntheticEvent | null,
    newValue: string | null,) => {
    const newCity = newValue
    setSelectedCity(newCity);
    dispatch(addFilterCity(newCity)) 
  }, [setSelectedCity, dispatch])
  
  const handleStateChange = useCallback((event: React.SyntheticEvent | null,
    newValue: string | null) => {
    const newState = newValue
    setSelectedState(newState);
    dispatch(addFilterState(newState))
  }, [setSelectedState, dispatch])
  
  const handleTypeChange = useCallback((event: React.SyntheticEvent | null,
    newValue: string | null) => {
    const newType = newValue
    setSelectedType(newType);
    dispatch(addFilterType(newType))
    
  }, [setSelectedType, dispatch])

  
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
      <Select
      multiple={false}
      defaultValue={""}
      onChange={handleCityChange}
      value={selectedCity}
      placeholder={"All cities"}
      >
        {cities.map(city => {
            return <Option key={city} value={city}>{city}</Option>
          })}
      </Select>
      <Select
      multiple={false}
      defaultValue={''}
      placeholder={'All states'}
      onChange={handleStateChange}
      value={selectedState}
      name="state" 
      id="state-select"
      >
          {states.map(city => {
            return <Option key={city} value={city}>{city}</Option>
          })}
    </Select>
    <Select
      multiple={false}
      defaultValue={''}
      placeholder={'All types'}
      onChange={handleTypeChange}
      value={selectedType}
      name="type" 
      id="type-select"
      >
          {types.map(city => {
            return <Option key={city} value={city}>{city}</Option>
          })}
    </Select>

      <button className='fitler-btn'  onClick={handleRemoveFilters}>Remove</button>
    </div>
  )
}


export default Filter

