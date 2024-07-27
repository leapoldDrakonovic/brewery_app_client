import React from 'react'
import "./Header.css"
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectIds } from '../../store/slices/idSlice'
import { PiBeerSteinBold } from "react-icons/pi";
import { BiSolidLike } from "react-icons/bi";
import HeaderInput from './HeaderInput';

type Props = {}

const Header = React.memo(({}: Props) => {





  return (
    <header className='app-header'>
        <HeaderInput/>
        <div className='app-header-logo'>
          <PiBeerSteinBold size={30} color='yellow'/>
          Y'sBD
          <PiBeerSteinBold size={30} color='yellow'/>
        </div>
        <div >
        </div>
    </header>
  )
})

export default Header