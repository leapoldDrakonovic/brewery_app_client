import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../../pages/main/MainPage'
import ItemPage from '../../pages/item/ItemPage'

type Props = {}

export default function App({}: Props) {
  return (
    <BrowserRouter basename="/brewery_app_client">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/brewery/:id' element={<ItemPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}