import React from "react";
import "./Header.css"
import { PiBeerSteinBold } from "react-icons/pi";

type Props = {}

const Header = React.memo(({}: Props) => {

  return (
    <header className='app-header'>
        <div className='app-header-logo'>
          <PiBeerSteinBold size={30} color='yellow'/>
          BB
          <PiBeerSteinBold size={30} color='yellow'/>
        </div>
        <div >
        </div>
    </header>
  )
})

export default Header