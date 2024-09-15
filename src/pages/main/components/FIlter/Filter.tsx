import * as React from 'react'
import "./Filter.css"
import { useDispatch } from 'react-redux'
import { addFilterCity, addFilterState, addFilterType } from '../../../../store/slices/fitlerDataSlice'
import FilterSearch from './FilterSearch'
import { useCallback } from "react"
import Selects from './Selects'
import { Button } from '@mui/material'



const Filter = () => {



  // Переписать все фильтра под сервер
  
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
  
  
  
  return (
    <div className='fitler-container'>
      <FilterSearch/>
      <Selects data={
         {
          handleCityChange,
          handleStateChange,
          handleTypeChange,
          selectedCity,
          selectedState,
          selectedType

        }
      }/>

      <Button  
      sx={{
        height: "50px"
      }}
      onClick={handleRemoveFilters}>Remove Filters</Button>
    </div>
  )
}


export default Filter
 