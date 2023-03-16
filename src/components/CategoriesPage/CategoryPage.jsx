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
import { useParams } from "react-router-dom";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
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
  const { cateName } = useParams();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchName = (e) => {
    setSearchTerm(e.target.value)
  }
function handleClick(event) {
  event.preventDefault();
}
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
            value={searchTerm}
            onChange={handleSearchName}
            placeholder="Tìm kiếm nhà hàng tại đây"
          />

        </FormControl>
    
          <Box className="Category-link">
            <div role="presentation" onClick={handleClick}>
              <Breadcrumbs
                aria-label="breadcrumb"
                fontSize="2rem"
                separator={<NavigateNextIcon/>}
              >
                <Link underline="hover" sx={{ color: "#2b90c6" }} to='/'>
                  Trang chủ
                </Link>
                
                <Link
                  sx={{ color: "green" }}
                  href="/homeSalePage"
                >
                  Nhà hàng
                </Link>
              </Breadcrumbs>
            </div>
          </Box>
        <div className="Category-Title">
          <h1>
            Quán ăn tại <span>Hồ Chí Minh</span>
          </h1>
        </div>
        <div className="Category-content">
          {data.filter((restaurant) => restaurant.category === cateName && restaurant.shopName.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((restaurant) => {
              return (
                <Card className="HomeSale-Card" height="350px">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={restaurant.menu[0].img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                        {restaurant.shopName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {restaurant.description}
                      </Typography>
                      <Typography variant="body3">
                        <div>
                          <StarIcon style={{ color: "yellow" }} />
                          {restaurant.rating}
                        </div>
                        <div className="Icon">
                          <AccessTimeIcon />
                          {restaurant.time}
                        </div>
                        <div className="Icon">
                          <GpsFixedIcon />
                          {restaurant.distance}
                        </div>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )
            })}
        </div>
      </div>
    </div>
  );
}
