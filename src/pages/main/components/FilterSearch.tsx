import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { addFilterSearch } from "../../../store/slices/fitlerDataSlice";

type Props = {};

export default function FilterSearch({}: Props) {

    
  const dispatch = useDispatch()

  const headerInput = useRef<HTMLInputElement | null>(null)
  
  const handleSearchFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addFilterSearch(event.target.value))
  }, [dispatch])



  return (
    <div className="filter-input-container">
      <input
        ref={headerInput}
        onChange={handleSearchFilter}
        type="text"
        placeholder="Search"
        className="main-search-input"
      />
    </div>
  );
}


