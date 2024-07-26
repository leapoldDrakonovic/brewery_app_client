import React, { useRef, useState } from 'react'
import "./Filter.css"
import { useDispatch } from 'react-redux'
import { addFilterCity, addFilterState, addFilterType } from '../../../store/slices/fitlerDataSlice'
import FilterTags from './FilterTags'

type Props = {
}

/*

Получать сюда данные и данамически генерировать все города? Через хэш таблицы
Причем всее это надо кэшировать поэтому реакт квери!!!!!

*/

export default function Filter({}: Props) {


  const [selectedCity, setSelectedCity] = useState<string>("")
  const [selectedState, setSelectedState] = useState<string>("")
  const [selectedType, setSelectedType] = useState<string>("")

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

  const {cities, types, states} = FilterTags()

  



  return (
    <div className='fitler-container'>
      <select name="city" id="city-select" value={selectedCity} onChange={handleCityChange} >
        <option value="">Выберите город</option>
          {cities.map(city => {
            return <option key={city} value={city}>{city}</option>
          })}
      </select>
      <select name="state" id="state-select" value={selectedState} onChange={handleStateChange}>
      <option value="">Выберите штат</option>

          {states.map(city => {
            return <option key={city} value={city}>{city}</option>
          })}

      </select>
      <select name="type" id="type-select" value={selectedType} onChange={handleTypeChange}>
          <option value="">Выберете тип</option>
          {types.map(city => {
            return <option key={city} value={city}>{city}</option>
          })}
      </select>
    </div>
  )
}

function addType(selectedType: string): any {
  throw new Error('Function not implemented.')
}
