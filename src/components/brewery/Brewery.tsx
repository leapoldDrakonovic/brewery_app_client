import React from "react";
import IBrewery from "../../core/interfaces/IBrewery";
import "./Brewery.css";
import { useDispatch } from "react-redux";
import { addId, deleteId, selectIds } from "../../store/slices/idSlice";
import { useAppSelector } from "../../store/hooks/useAppSelector";

type Props = {
  data: IBrewery;
};

export default function Brewery({ data }: Props) {
  const { name, brewery_type, city, website_url, street, state, country, id } =
    data;
  const dispatch = useDispatch();
  const favIds = useAppSelector(selectIds);
  const IDS = new Set(favIds);

  const handleAddId = () => {
    if (IDS.has(id)) {
      dispatch(deleteId(id));
      IDS.delete(id);
      window.location.reload();
    } else {
      dispatch(addId(id));
    }
  };

  return (
    <div className="brewery">
      <div className="brewery-container">
        <div className="brewery-name">
          <a href={website_url}>{name}</a>
        </div>
        <div className="brewery-type">
          <span>Type: {brewery_type}</span>
        </div>
        <div className="brewery-adress">
          <span>
            {country}, {city}
          </span>
          <span>{state}</span>
          <span>{street}</span>
        </div>
      </div>

      <div className="brewery-link-and-favorite">
        <span onClick={handleAddId}>
          {IDS.has(id) ? "Delete from favorite" : "Add to favorite"}
        </span>
        <a href={"/brewery/" + id}>Lear more</a>
      </div>
    </div>
  );
}
