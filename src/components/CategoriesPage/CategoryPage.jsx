import "../CategoriesPage/CategoryPage.scss";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FormControl from "@mui/material/FormControl";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import SearchIcon from "@mui/icons-material/Search";
export default function CategoryPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/restaurants")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="Category-Container">
      <div className="Category-body">
        <FormControl
          fullWidth
          sx={{ m: 1 }}
          variant="filled"
          className="Category-header"
        >
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ width: "32px", height: "32px" }} />
              </InputAdornment>
            }
            sx={{ fontSize: "25px" }}
          />
        </FormControl>
        <div className="Category-divider" />
        <div className="Category-Title">
          <h1>
            Quán ăn tại <span>Hồ Chí Minh</span>
          </h1>
        </div>
        <div className="Category-content">
          {data.map((item) => {
            if (item.coupon) {
              return (
                <Card className="HomeSale-Card" height="350px">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.menu[0].img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                        {item.shopName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                      <Typography variant="body3">
                        <div>
                          <StarIcon style={{ color: "yellow" }} />
                          {item.rating}
                        </div>
                        <div className="Icon">
                          <AccessTimeIcon />
                          {item.time}
                        </div>
                        <div className="Icon">
                          <GpsFixedIcon />
                          {item.distance}
                        </div>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
