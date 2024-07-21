import React, { useRef, useState } from 'react'
import "./Header.css"
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectIds } from '../../store/slices/idSlice'
import { HiOutlineSearch } from "react-icons/hi";
import { PiBeerSteinBold } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";

type Props = {}

export default function Header({}: Props) {

  const favIds = useAppSelector(selectIds)


  const headerInput = useRef<HTMLInputElement>(null)
  const searchBtn = useRef<HTMLButtonElement>(null)
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [value, setValue] = useState<string | undefined>("");

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
    setValue(headerInput.current?.value)
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