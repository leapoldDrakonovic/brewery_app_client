import React, { useRef, useState } from 'react'
import "./Header.css"
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectIds } from '../../store/slices/idSlice'
import { HiOutlineSearch } from "react-icons/hi";
import { PiBeerSteinBold } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addFilterSearch } from '../../store/slices/fitlerDataSlice';

type Props = {}

export default function Header({}: Props) {

  const favIds = useAppSelector(selectIds)


  const dispatch = useDispatch()

  const headerInput = useRef<HTMLInputElement>(null)
  const searchBtn = useRef<HTMLButtonElement>(null)
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  
  const handleSearchFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value
    setValue(newSearch)
    dispatch(addFilterSearch(newSearch))
  }


  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
    if (headerInput.current) {
      if (isExpanded && value == "") {
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
  };



  return (
    <header className='app-header'>
        <div className='app-input-container'>
          <button ref={searchBtn} className='header-btn' onClick={handleOnClick}><HiOutlineSearch size={15} color='white'/></button>
          <input  
            ref={headerInput} 
            value={value}
            onChange={handleSearchFilter}
            type="text"  
            placeholder='Search'
            className='header-input'
          />
        </div>
        <div className='app-header-logo'>
          <PiBeerSteinBold size={30} color='yellow'/>
          Y'sBD
          <PiBeerSteinBold size={30} color='yellow'/>
        </div>
        <div className='favorite-container'>
            <div className='header-favorite'>
            <BiSolidLike 
              color='pink'
              size={30}
            />: {favIds.length}
            </div>
        </div>
    </header>
  )
}