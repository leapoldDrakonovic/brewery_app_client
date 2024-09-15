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
import { Typography } from "@mui/material";
import { selectedAligment } from "../../store/slices/toggleBtnSlice";

type Props = {};


interface IBreweryMeta {
  total: string,
  page: string,
  per_page: string
}



// TODO: Добавить кнопку в фильтры
// TODO: Pagination




export default function MainPage({}: Props) {

  // Favorites getter
  const favIds = useAppSelector(selectIds);
  const { data: favData, isLoading: favIsLoading } =
  useGetBreweryByIdQuery(favIds);
  // Filters getter
  const filtersData = useAppSelector(selectedFilters);
  //Filter button value getter
  const togglerData = useAppSelector(selectedAligment);
  
  
  
  // Pagination logic
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<number>(10)

  // META API "https://api.openbrewerydb.org/v1/breweries/meta"


  const PER_PAGE = 200
  const total = Math.floor(8257 / 24)

  useEffect(()=>{
    setPages(total)
  })


  // Get data logic
  const { data, isLoading } = useGetBreweriesAllQuery(`&per_page=${PER_PAGE}`);
  



  // TODO: Чуть чуть не дописал, осталось вставить в пагинации каунтер и функцию

  const handlePageChange = (page: number) => {
    setPage(page) 
    window.scroll(0,0)
  }


  return (
    <div className="main-page">
      <Header />
      <div className="page-toggler">
        <Toggler />
      </div>
      <div className="page-filter">
        <Filter />
      </div>
      {favIds.length > 0 && (
        <>
          <Typography
            variant="h3"
            sx={{
              width: 100 + "%",
              textAlign: "center",
              margin: "20px 0",
              fontWeight: "bold",
            }}
          >
            Favorites: <span>{favIds.length}</span>
          </Typography>

          <Wrapper data={favData} isLoading={favIsLoading} />
        </>
      )}

      <Typography
        variant="h3"
        sx={{
          width: 100 + "%",
          textAlign: "center",
          margin: "50px 0 10px 0px",
          fontWeight: "bold",
          fontSize: "36px",
        }}
      >
        {togglerData.alignment == "Brews"
          ? "Breweries"
          : togglerData.alignment == "Bars"
          ? "Bars"
          : togglerData.alignment == "Beers"
          ? "Beers"
          : ""}
      </Typography>
      <Wrapper data={data} isLoading={isLoading} filters={filtersData} />

      <Pagination 
        count={pages}
        onChange={(event: React.ChangeEvent, page: number)=>{
            handlePageChange(page)
        }}
        sx={{
          width: "100%",
          margin: "20px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        />
    </div>
  );
}

