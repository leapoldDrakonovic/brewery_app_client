import React from "react";
import { useParams } from "react-router-dom";
import "./ItemPage.css";
import useFetch from "../../hooks/useFetch()";
import IBrewery from "../../core/interfaces/IBrewery";
import PATHES from "../../consts";
import Wrapper from "../../components/wrapper/Wrapper";
import Item from "./components/Item";
type Props = {};

export default function ItemPage({}: Props) {
  let { id } = useParams<{ id: string }>();

  // TODO: пофиксить костыль
  PATHES.urlById.id = id || "";
  const urlById = PATHES.urlById.url;

  const { data, isLoading } = useFetch<IBrewery[]>(urlById, "GET");

  const brewery = Array.isArray(data) ? data : [data];
  const item = brewery[0];

  const urlCity = `https://api.openbrewerydb.org/v1/breweries?by_city=${item?.city}&per_page=3`;

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
        <Wrapper url={urlCity} />
      </div>
    </div>
  );
}

// Добавить карту с меткой на ней где находится бар
