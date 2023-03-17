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
                className="link-breadcrumbs"
                sx={{ color: "green" }}
                to="/"
                aria-current="page"
              >
                {/* props.data.shopName */}
                Tên nhà hàng
              </Link>
            </Breadcrumbs>
          </div>
        </Box>
      </Container>
    );
  };

  const RenderCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3000/restaurants")
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
      <>
        <div class="card-food">
          <Grid container spacing={3}>
            {data.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card sx={{ display: "flex", width: "100%" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 110,
                      height: 110,
                      margin: 2,
                      borderRadius: 2,
                    }}
                    image={item.menu[0].img}
                    alt=""
                  />
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      component="h6"
                      variant="body1"
                      sx={{ width: "90%" }}
                    >
                      {item.menu[0].name} <br />
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ display: "contents" }}
                    >
                      {item.menu[0].price} VND
                    </Typography>
                    <Tooltip title="Thêm vào giỏ hàng">
                      <IconButton
                        aria-label="delete"
                        size="large"
                        sx={{
                          marginLeft: 5,
                          color: "green",
                        }}
                      >
                        <AddBoxRoundedIcon fontSize="inherit" />
                      </IconButton>
                    </Tooltip>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </>
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
                <Tab label="Ưu đãi hôm nay" value="1" />
                <Tab label="Menu" value="2" />
              </TabList>
            </Box>
          </Container>
          <div className="wrapper-content">
            <Container>
              <TabPanel value="1">
                <Typography
                  component="div"
                  variant="h4"
                  className="font-header"
                >
                  Ưu đãi hôm nay
                </Typography>
                <RenderCard />
              </TabPanel>
              <TabPanel value="2">
                <Typography
                  component="div"
                  variant="h4"
                  className="font-header"
                >
                  Menu
                </Typography>
                {/* <RenderCard /> */}
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
          <Typography className="name-res" variant="h4" gutterBottom>
            {/* {props.data.shopName} */}
            Trà Sữa Bo Béo
          </Typography>
          <Typography
            style={{ marginBottom: "10px" }}
            gutterBottom
            variant="body2"
            color="textSecondary"
          >
            Cà phê - Trà - Sinh tố - Nước ép, Trà sữa, Tạp dề vàng
          </Typography>
          <Typography gutterBottom variant="body2" color="textSecondary">
            <i class="fa-solid fa-star"></i>&ensp;4.9 &ensp;
            <i class="fa-regular fa-clock"></i>&ensp;20 phút &ensp;
            <i class="fa-solid fa-map-pin"></i>&ensp;1.7 km
          </Typography>
        </Container>

        <div className="tabs-menu">
          <RenderTab />
        </div>
      </div>
    </div>
  );
}

