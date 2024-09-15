import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/main/MainPage'
import ItemPage from '../../pages/item/ItemPage'


export default function App() {
  return (
  <>
    <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/brewery/:id' element={<ItemPage/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}
{/* <Notification/> */}