import React, { useRef, useState } from 'react'
import "./Header.css"
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectIds } from '../../store/slices/idSlice'
import { HiOutlineSearch } from "react-icons/hi";
import { PiBeerSteinBold } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addFilterSearch } from '../../store/slices/fitlerDataSlice';
import HeaderInput from './HeaderInput';

type Props = {}

const Header = React.memo(({}: Props) => {

  const favIds = useAppSelector(selectIds)




  return (
    <header className='app-header'>
        <HeaderInput/>
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
})

export default Header