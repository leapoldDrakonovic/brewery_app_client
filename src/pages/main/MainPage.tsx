import React, { Component, useEffect, useState } from 'react'
import Wrapper from '../../components/wrapper/Wrapper'
import Header from '../../components/header/Header'
import "./MainPage.css"
import PATHES from '../../consts'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectIds } from '../../store/slices/idSlice'
import Filter from './components/Filter'
import { useGetBreweriesAllQuery } from '../../services/brewery_service'
import { useDispatch } from 'react-redux'
import { selectedFilters } from '../../store/slices/fitlerDataSlice'

type Props = {}


export default function MainPage ({}: Props) {


  const [isFiltering, setIsFiltering] = useState<boolean>(false)

  const favIds = useAppSelector(selectIds)        
  const {data, error, isLoading} = useGetBreweriesAllQuery("20")
  const filtersData = useAppSelector(selectedFilters)



  
  useEffect(()=>{
    if (filtersData.city === ""
      && 
      filtersData.type === ""
      && 
      filtersData.city === "") {
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