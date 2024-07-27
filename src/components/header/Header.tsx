import "./Header.css"
import { PiBeerSteinBold } from "react-icons/pi";
import HeaderInput from '../../pages/main/components/FilterSearch';

type Props = {}

const Header = ({}: Props) => {

  return (
    <header className='app-header'>
        <div className='app-header-logo'>
          <PiBeerSteinBold size={30} color='yellow'/>
          Y'sBD
          <PiBeerSteinBold size={30} color='yellow'/>
        </div>
        <div >
        </div>
    </header>
  )
}

export default Header