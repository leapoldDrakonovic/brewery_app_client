import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addFilterSearch } from "../../../../store/slices/fitlerDataSlice";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import IBrewery from "../../../../core/interfaces/IBrewery";
import { useGetBreweriesAllQuery } from "../../../../services/brewery_service";


type Props = {};

const FilterSearch = React.memo(({}: Props) =>{


  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<IBrewery[]>([]);
  const loading = open && options.length === 0;
    
  const dispatch = useDispatch()



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






  const headerInput = useRef<HTMLInputElement | null>(null)
  
  const handleSearchFilter = useCallback((event) => {
    dispatch(addFilterSearch(event.target.value))
  }, [dispatch])



  // return (
  //   <div className="filter-input-container">
  //     <input
  //       ref={headerInput}
  //       onChange={handleSearchFilter}
  //       type="text"
  //       placeholder="Search"
  //       className="main-search-input"
  //     />
  //   </div>
  // );


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
    />
  </div>
  )
})

export default FilterSearch


