// import * as React from "react";
import React, { useState, useEffect } from "react";
import "../RestaurantDetails/RestaurantDetails.scss";
import axios from "axios";
import {
  Container,
  Breadcrumbs,
  Tab,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Tooltip,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import FoodCard from "./FoodCard";
import FoodCardSale from "./FoodCardSale";

export default function RestaurantDetails() {
  const RenderBreadcrumbs = () => {
    const handleClick = (event) => {
      event.preventDefault();
    };
    return (
      <Container>
        <Box>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link className="link-breadcrumbs" to="/">
                Trang chủ
              </Link>
              <Link className="link-breadcrumbs" to="/homeSalePage">
                Nhà hàng
              </Link>
              <Link
                className="link-breadcrumbs-active"
                to="#"
                aria-current="page"
              ></Link>
            </Breadcrumbs>
          </div>
        </Box>
      </Container>
    );
  };

  const RenderTab = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <>
        <TabContext value={value}>
          <Container>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  sx={{ fontSize: "2rem" }}
                  label="Ưu đãi hôm nay"
                  value="1"
                />
                <Tab sx={{ fontSize: "2rem" }} label="Menu" value="2" />
              </TabList>
            </Box>
          </Container>
          <div className="wrapper-content">
            <Container>
              <TabPanel value="1">
                <Typography
                  fontSize="3rem"
                  component="div"
                  variant="h4"
                  className="font-header"
                >
                  Ưu đãi hôm nay
                </Typography>
                <div className="food-card-container">
                  {/* <FoodCardSale /> */}
                  <FoodCard />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <Typography
                  fontSize="3rem"
                  component="div"
                  variant="h4"
                  className="font-header"
                >
                  Menu
                </Typography>
                <FoodCard />
              </TabPanel>
            </Container>
          </div>
        </TabContext>
      </>
    );
  };

  return (
    <div className="detail-shop-page">
      <RenderBreadcrumbs />

      <div className="detail-info">
        <Container>
          <Typography
            marginTop={2}
            marginLeft={2}
            fontSize="3rem"
            className="name-res"
            variant="h1"
            gutterBottom
          >
            {/* {shopName} */}
          </Typography>
          <Typography
            fontSize="1.8rem"
            marginLeft={2.5}
            className="desc"
            style={{ marginBottom: "10px" }}
            gutterBottom
            variant="body2"
            color="textSecondary"
          >
            {/* {desc} */}
          </Typography>
          <Typography
            fontSize="1.6rem"
            className="desc"
            marginLeft={2.5}
            gutterBottom
            variant="body2"
            color="textSecondary"
          >
            {/* <i className="fa-solid fa-star"></i>&ensp;{rating} &ensp;&ensp;
            <i className="fa-regular fa-clock"></i>&ensp;{time} &ensp;&ensp;
            <i className="fa-solid fa-map-pin"></i>&ensp;{distance} */}
          </Typography>
          <Typography
            fontSize="1.5rem"
            marginTop={2}
            marginLeft={3}
            style={{ marginBottom: "10px" }}
            gutterBottom
            variant="body2"
            color="textSecondary"
          >
            <i className="fa-solid fa-tags"></i>
            {/* &ensp;{coup} */}
          </Typography>
        </Container>

        <div className="tabs-menu">
          <RenderTab />
        </div>
      </div>
    </div>
  );
}

