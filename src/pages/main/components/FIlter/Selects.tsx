import React from 'react'
import FilterTags from './FilterTags'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option'

type TSelects = {
 data: { 
  handleCityChange: (event: React.SyntheticEvent | null,
    newValue: string | null) => void,
  handleTypeChange: (event: React.SyntheticEvent | null,
      newValue: string | null) => void,
  handleStateChange: (event: React.SyntheticEvent | null,
        newValue: string | null) => void,    
  selectedCity: string | null,
  selectedType: string | null,
  selectedState: string | null, }    

}





const Selects = ({data}: TSelects) => {

const {cities, types, states} = FilterTags()

  return (
    <>
    <Select
      multiple={false}
      defaultValue={""}
      onChange={data.handleCityChange}
      value={data.selectedCity}
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
      onChange={data.handleStateChange}
      value={data.selectedState}
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
      onChange={data.handleTypeChange}
      value={data.selectedType}
      name="type" 
      id="type-select"
      >
          {types.map(city => {
            return <Option key={city} value={city}>{city}</Option>
          })}
    </Select>
    </>
  )
}

export default Selects