import React, { Component, useState } from 'react'
import Wrapper from '../../components/wrapper/Wrapper'
import Header from '../../components/header/Header'
import "./MainPage.css"
import PATHES from '../../consts'
import { useAppSelector } from '../../store/hooks/useAppSelector'
import { selectIds } from '../../store/slices/idSlice'
import Filter from './components/Filter'

type Props = {}


export default function MainPage ({}: Props) {



  // TODO: все в функции 

    
    PATHES.URL_PER.per_page = "100"
    const url100 = PATHES.URL_PER.url

    PATHES.URL_RANDOM.size = "3"
    const urlRandom3 = PATHES.URL_RANDOM.url

    const favIds = useAppSelector(selectIds)
        
    PATHES.urlById.id = favIds.join(",")
    
    const urlIds = PATHES.urlById.url
    console.log(urlIds);
    
    
        
  
    return (
      <div className='main-page'>
        <Header/>
        <div className='page-filter'>
          <Filter/>
        </div>
        <h3>Favorite Breweries</h3>
        {favIds.length === 0 && <div> No favorite</div>}
          <Wrapper url={urlIds}/>
        <h3>Top Breweries</h3>
          <Wrapper url={urlRandom3}/>
        <h3>All Breweries</h3>
          <Wrapper url={url100}/>
      </div>
    )
  
}