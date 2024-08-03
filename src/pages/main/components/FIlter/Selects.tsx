import React from 'react'

type Props = {}

const Selects = (props: Props) => {
  return (
    <>
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
    </>
  )
}

export default Selects