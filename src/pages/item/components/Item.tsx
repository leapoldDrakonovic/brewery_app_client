import IBrewery from "../../../core/interfaces/IBrewery";
// import mapboxgl from "mapbox-gl";
import "./Item.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { AdvancedMarker, APIProvider, Map, Pin } from "@vis.gl/react-google-maps";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../store/hooks/useAppSelector";
import { selectIds, deleteId, addId } from "../../../store/slices/idSlice";
import React, { useCallback, useMemo } from "react";

type Props = {
  item: IBrewery;
};

const Item = React.memo(({ item }: Props) => {
  // const mapBoxToken =
  //   "pk.eyJ1IjoiZHdlbGxlcnNjb3JwIiwiYSI6ImNsbGNiNTJudjBpb2QzZnJzOHN4ODBubXkifQ.nR4hCb09CLkRgJMkyj9U5w";

  const id = item.id; 
  const dispatch = useDispatch();
  const favIds = useAppSelector(selectIds);
  const isFavorite = useMemo(()=> favIds.includes(id), [favIds, id])

 
  const handleFavoriteOnClick = useCallback(() => {
    if (isFavorite) {
      dispatch(deleteId(id));
    } else {
      dispatch(addId(id));
    }  
  }, [dispatch, id, isFavorite])




  return (
    <>
      <div className="item-page-container">
        <div className="item-title">{item.name}</div>
        <div className="item-page-map">
          <APIProvider apiKey="">
            <Map
              defaultZoom={15}
              defaultCenter={{
                lat: +item.latitude,
                lng: +item.longitude
              }}
            >
              <AdvancedMarker
              position={{
                lat: +item.latitude,
                lng: +item.longitude
              }}
              >
              <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
        <div className="item-info">
          <div className="add-to-favorite-btn-container">
            <button className="add-to-favorite-btn" onClick={handleFavoriteOnClick}>
              {isFavorite ? "Delete" : "Favorite"} 
              <FaHeart color="red"/>
            </button>
          </div>
          <table className="item-info-table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{item.name}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>{item.brewery_type}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{item.city}</td>
              </tr>
              <tr>
                <td>State/Province</td>
                <td>{item.state_province}</td>
              </tr>
              <tr>
                <td>Postal Code</td>
                <td>{item.postal_code}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{item.country}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{item.phone}</td>
              </tr>
              <tr>
                <td>Website</td>
                <td>
                  <a
                    href={item.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.website_url}
                  </a>
                </td>
              </tr>
              <tr>
                <td>State</td>
                <td>{item.state}</td>
              </tr>
              <tr>
                <td>Street</td>
                <td>{item.street}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
})


export default Item