import React, { useCallback, useRef, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addFilterSearch } from "../../store/slices/fitlerDataSlice";

type Props = {};

export default function HeaderInput({}: Props) {

    
  const dispatch = useDispatch()

  const headerInput = useRef<HTMLInputElement | null>(null)
  const searchBtn = useRef<HTMLButtonElement | null>(null)
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  const handleSearchFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addFilterSearch(event.target.value))
  }, [dispatch])


  const handleOnClick = useCallback(() => {
    setIsExpanded(!isExpanded);
    if (headerInput.current) {
      if (isExpanded && headerInput.current.value == "") {
        setTimeout(()=>{
          searchBtn.current?.classList.remove('expanded');
        }, 450)
        headerInput.current?.classList.remove('expanded');

      } else {
        setTimeout(()=>{
          headerInput.current?.classList.add('expanded');
        }, 150)
        searchBtn.current?.classList.add('expanded');

      }
    }
  }, [setIsExpanded, isExpanded, headerInput.current, searchBtn.current])

  return (
    <div className="app-input-container">
      <button ref={searchBtn} className="header-btn" onClick={handleOnClick}>
        <HiOutlineSearch size={15} color="white" />
      </button>
      <input
        ref={headerInput}
        onChange={handleSearchFilter}
        type="text"
        placeholder="Search"
        className="header-input"
      />
    </div>
  );
}


