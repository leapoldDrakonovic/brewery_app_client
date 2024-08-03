import IBrewery from "../../core/interfaces/IBrewery";
import "./Brewery.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  data: IBrewery;
};

export default function Brewery({ data }: Props) {
  const { name, brewery_type, city, website_url, street, state, country, id } =
    data;

  // return (
  //   <div className="brewery">
  //     <div className="brewery-container">
  //       <div className="brewery-name">
  //         <a href={website_url}>{name}</a>
  //       </div>
  //       <div className="brewery-type">
  //         <span>Type: {brewery_type}</span>
  //       </div>
  //       <div className="brewery-adress">
  //         <span>
  //           {country}, {city}
  //         </span>
  //         <span>{state}</span>
  //         <span>{street}</span>
  //       </div>
  //     </div>

  //     <div className="brewery-link-and-favorite">
  //       <a href={"/brewery/" + id}>Lear more</a>
  //     </div>
  //   </div>
  // );

  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate(`/brewery/${id}`)
  }


  return (
    <>
    <Card variant="outlined">
      <CardContent>

        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {brewery_type}
        </Typography>
        <Typography variant="body2">
          {city}
          <br />
          {state}
          <br />
          {street}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOnClick}>Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}
