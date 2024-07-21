import React, { useEffect, useRef, useState } from "react";
import IBrewery from "../../../core/interfaces/IBrewery";
import mapboxgl from "mapbox-gl";
import "./Item.css";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  item: IBrewery;
};

export default function Item({ item }: Props) {
  const mapBoxToken =
    "pk.eyJ1IjoiZHdlbGxlcnNjb3JwIiwiYSI6ImNsbGNiNTJudjBpb2QzZnJzOHN4ODBubXkifQ.nR4hCb09CLkRgJMkyj9U5w";

  mapboxgl.accessToken = mapBoxToken;

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState<number>(0);
  const [lat, setLat] = useState<number>(0);
  const [zoom, setZoom] = useState<number>(13);

  //TODO: Дописать карту

  useEffect(() => {
    const lngi = parseFloat(item.longitude);
    const lati = parseFloat(item.latitude);

    if (!isNaN(lngi)) setLng(lngi);
    if (!isNaN(lati)) setLat(lati);
  }, [item]);

  useEffect(() => {
    if (!map.current || !mapContainer.current) return;

    try {
      if (isNaN(lng) || isNaN(lat)) {
        throw new Error(`Invalid coordinates: lng=${lng}, lat=${lat}`);
      }

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        zoom: zoom,
      });

      new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);

      map.current.on("move", () => {
        const center = map.current?.getCenter();
        if (center) {
          setLng(center.lng);
          setLat(center.lat);
        }
      });

      map.current.on("zoom", () => {
        setZoom(map.current?.getZoom() || 14);
      });

      map.current.on("error", (e) => {
        console.error("Mapbox error:", e);
      });
    } catch (error) {
      console.error("Failed to initialize Mapbox map:", error);
    }

    return () => {
      if (map.current) map.current.remove();
    };
  }, [lng, lat, zoom]);

  return (
    <>
      <div className="item-page-container">
        <div className="item-title">{item.name}</div>
        <div className="item-page-map" ref={mapContainer}></div>
        <div className="item-info">
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
}
