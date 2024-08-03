import { useEffect, useState } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import Header from "../../components/header/Header";
import "./MainPage.css";
import { useAppSelector } from "../../store/hooks/useAppSelector";
import Filter from "./components/FIlter/Filter";
import {
  useGetBreweriesAllQuery,
  useGetBreweryByIdQuery,
} from "../../services/brewery_service";
import { selectedFilters } from "../../store/slices/fitlerDataSlice";
import { selectIds } from "../../store/slices/idSlice";
import Pagination from "@mui/material/Pagination";
import Toggler from "./components/Toggler/Toggler";

type Props = {};

export default function MainPage({}: Props) {
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  // const favIds = useAppSelector(selectIds)
  const { data, isLoading } = useGetBreweriesAllQuery("200");
  const filtersData = useAppSelector(selectedFilters);
  const favIds = useAppSelector(selectIds);

  const { data: favData, isLoading: favIsLoading } =
    useGetBreweryByIdQuery(favIds);

  useEffect(() => {
    if (
      filtersData.city === "" &&
      filtersData.type === "" &&
      filtersData.city === "" &&
      filtersData.search === ""
    ) {
      setIsFiltering(false);
    } else {
      setIsFiltering(true);
    }
  }, [filtersData]);

  const coutPages = data?.length && data.length > 20 ? data.length / 20 : 1;

  return (
    <div className="main-page">
      <Header />
      <div className={"page-toggler"}>
        <Toggler />
      </div>
      <div className="page-filter">
        <Filter />
      </div>
      {favIds.length > 0 && (
        <>
          <h3>
            Favorites: <span>{favIds.length}</span>
          </h3>
          <Wrapper data={favData} isLoading={favIsLoading} />
        </>
      )}

      <h3>Breweries</h3>
      <Wrapper data={data} isLoading={isLoading} filters={filtersData} />

      <Pagination count={coutPages} color="primary" />
    </div>
  );
}

/*

       <h3>Favorite Breweries</h3>
        {favIds.length === 0 && <div> No favorite</div>}
          <Wrapper data={data} isLoading={isLoading}/>
        <h3>Top Breweries</h3>
          <Wrapper data={data} isLoading={isLoading}/>

*/
