import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFilterSearch } from "../../../../store/slices/fitlerDataSlice";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import IBrewery from "../../../../core/interfaces/IBrewery";
import { useGetBreweriesAllQuery } from "../../../../services/brewery_service";



const FilterSearch = React.memo(() =>{

  const [inputValue, setInputValue] = useState<string>("")
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<IBrewery[]>([]);
  const loading = open && options.length === 0;
    
  const dispatch = useDispatch()




  // TODO: Надо получать все данные (проще подключить автокомплит)
  const {data} = useGetBreweriesAllQuery("200")


  useEffect(() => {
    let active = true

    
    if (!loading) {
      return undefined;
    }

    if (active && data) {
      setOptions(data)
    }

    return () => {
      active = false
    }
  }, [loading, data]);


  useEffect(() => {
    
    if (!open) {
      setOptions([])
    }
  }, [open]);




  // TODO: Сделать типизацию
  
  const handleSearchFilter = useCallback((event: React.SyntheticEvent<EventTarget>, value: string) => {
    event.preventDefault()
    setInputValue(value)
    dispatch(addFilterSearch(value.toLowerCase()))    
  }, [dispatch])



  return (
    <div className="filter-input-container">
    <Autocomplete
      id="filter-search-input"
      sx={{ width: 100 + "%" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      onInputChange={handleSearchFilter} // Capture input changes
      inputValue={inputValue} // Co
      renderInput={(params) => (
        <TextField
          {...params}
          label="Enter Name"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          {option.name}
        </li>
      )} 
    />
  </div>
  )
})

export default FilterSearch


