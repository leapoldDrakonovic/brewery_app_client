import { useEffect, useState } from 'react'
import Wrapper from '../../components/wrapper/Wrapper'
import Header from '../../components/header/Header'
import "./MainPage.css"
import { useAppSelector } from '../../store/hooks/useAppSelector'
import Filter from './components/Filter'
import { useGetBreweriesAllQuery, useGetBreweryByIdQuery } from '../../services/brewery_service'
import { selectedFilters } from '../../store/slices/fitlerDataSlice'
import { selectIds } from '../../store/slices/idSlice'

type Props = {}


export default function MainPage ({}: Props) {


  const [isFiltering, setIsFiltering] = useState<boolean>(false)

  // const favIds = useAppSelector(selectIds)        
  const {data, isLoading} = useGetBreweriesAllQuery("1000")
  const filtersData = useAppSelector(selectedFilters)
  const favIds = useAppSelector(selectIds)
  
  const {data: favData, isLoading: favIsLoading}= useGetBreweryByIdQuery(favIds)



  
  useEffect(()=>{
    if (filtersData.city === ""
      && 
      filtersData.type === ""
      && 
      filtersData.city === ""
      &&
      filtersData.search === ""
      ) {
      setIsFiltering(false)
    } else {
      setIsFiltering(true)
    }    
  }, [filtersData])


        
  
    return (
      <div className='main-page'>
        <Header/>
        <div className='page-filter'>
          <Filter/>
        </div>
        {favIds.length > 0 && 
        <>
        <h3>Favorites: <span>{favIds.length}</span></h3>
          <Wrapper data={favData} isLoading={favIsLoading} />
          </>}
        {isFiltering ? (
          <>
          <h3>Filtered Data</h3>
          <Wrapper data={data} isLoading={isLoading} filters={filtersData}/>
          </>)
        : (
          <>
        <h3>All breweries</h3>
        <Wrapper data={data} isLoading={isLoading} filters={filtersData}/>
        </>)
        }

      </div>
    )
  
}



/*

       <h3>Favorite Breweries</h3>
        {favIds.length === 0 && <div> No favorite</div>}
          <Wrapper data={data} isLoading={isLoading}/>
        <h3>Top Breweries</h3>
          <Wrapper data={data} isLoading={isLoading}/>

*/