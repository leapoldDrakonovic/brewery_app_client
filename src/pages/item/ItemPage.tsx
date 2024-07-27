import { useParams } from "react-router-dom";
import "./ItemPage.css";
import IBrewery from "../../core/interfaces/IBrewery";
import Wrapper from "../../components/wrapper/Wrapper";
import Item from "./components/Item";
import { useGetBreweriesByCityQuery, useGetBreweryByIdQuery } from "../../services/brewery_service";
import Loader from "../../components/loader/Loader";

type Props = {};

const ItemPage = ({}: Props) => {
  let { id } = useParams<{ id: string | any}>();


  const {data, isLoading} = useGetBreweryByIdQuery(id)
  const brewery = Array.isArray(data) ? data : [data];
  const item: IBrewery | undefined= brewery[0];


  const cityName = item?.city ?? ""
  const {data: data2, isLoading: isLoading2} = useGetBreweriesByCityQuery(cityName, {skip: cityName === ""})

  

  
  if (isLoading) {
    return <Loader/>
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
export default ItemPage
// Добавить карту с меткой на ней где находится бар
