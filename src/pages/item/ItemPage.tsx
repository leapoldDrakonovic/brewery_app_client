import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemPage.css";
import useFetch from "../../hooks/useFetch()";
import IBrewery from "../../core/interfaces/IBrewery";
import PATHES from "../../consts";
import Wrapper from "../../components/wrapper/Wrapper";
import Item from "./components/Item";
import { useGetBreweriesByCityQuery, useGetBreweryByIdQuery } from "../../services/brewery_service";
import Header from "../../components/header/Header";
type Props = {};

export default function ItemPage({}: Props) {
  let { id } = useParams<{ id: string | any}>();


  const {data, error, isLoading} = useGetBreweryByIdQuery(id)
  const brewery = Array.isArray(data) ? data : [data];
  const item: IBrewery = brewery[0];


  const cityName = item?.city ?? ""
  const {data: data2, error: error2, isLoading: isLoading2} = useGetBreweriesByCityQuery(cityName, {skip: cityName === ""})

  

  
  if (isLoading) {
    return <div>Loading</div>;
  }
  
  if (!item) {
    return <div>No brewery found.</div>;
  }
  
  return (
    <div className="item-page">
      <Item item={item} />
      <div className="item-page-same">
        <h2>Also in {item.city}</h2>
        {isLoading2 && <div>Loading</div>}
        <Wrapper data={data2} isLoading={isLoading2} />
      </div>
    </div>
  );
}

// Добавить карту с меткой на ней где находится бар
