import "../CategoriesPage/CategoryPage.scss";
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import SearchIcon from "@mui/icons-material/Search";
import { useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import useDocumentTitle from '../../helpers/useDocumentTitle';
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
  useDocumentTitle("Món " + cateName);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchName = (e) => {
    setSearchTerm(e.target.value);
  };
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
                <SearchIcon
                  style={{
                    width: "32px",
                    height: "32px",
                    marginBottom: "15px",
                  }}
                />
              </InputAdornment>
            }
            sx={{ fontSize: "2rem" }}
            value={searchTerm}
            onChange={handleSearchName}
            placeholder="Tìm kiếm món ăn hoặc quán ăn tại đây"
          />
        </FormControl>

        <Box className="Category-link">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
              aria-label="breadcrumb"
              fontSize="2rem"
              separator={<NavigateNextIcon />}
            >
              <Link className="link trangchu-link" underline="hover" to="/">
                Trang chủ
              </Link>

              <Link
                className="link nhaHang-link"
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
          {data
            .filter(
              (restaurant) =>
                restaurant.category === cateName &&
                restaurant.shopName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            )
            .map((restaurant) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/resDetailPage/${restaurant.id}/${restaurant.shopName}`}
                >
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
                        <Typography
                          marginTop="15px"
                          fontSize="1.4rem"
                          variant="body3"
                        >
                          <i className="fa-solid fa-star"></i>&ensp;
                          {restaurant.rating}&ensp;&ensp;
                          <i className="fa-regular fa-clock"></i>&ensp;
                          {restaurant.time}&ensp;&ensp;
                          <i className="fa-solid fa-map-pin"></i>&ensp;
                          {restaurant.distance}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
