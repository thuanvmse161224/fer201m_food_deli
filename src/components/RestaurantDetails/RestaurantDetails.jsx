// import * as React from "react";
import React, { useState } from "react";
import "../RestaurantDetails/RestaurantDetails.scss";
import {
  Container,
  Breadcrumbs,
  Link,
  Tab,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { HashLink } from "react-router-hash-link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CategoryPage() {
  const RenderBreadcrumbs = () => {
    return (
      <Container>
        <Box>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link underline="hover" color="inherit" href="/">
                Trang chủ
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Nhà hàng
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Tên nhà hàng
              </Link>
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

    const RenderCard = () => {
      return (
        <div class="card-food">
          <Card sx={{ display: "flex", width: "40%" }}>
            <CardMedia
              component="img"
              sx={{ width: 200 }}
              image="https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg"
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h6">
                  Tên
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  xs={{ marginTop: "30px" }}
                >
                  Giá
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      );
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
                <Typography variant="h4">Ưu đãi hôm nay</Typography>
                <RenderCard />
              </TabPanel>
              <TabPanel value="2">
                <Typography variant="h4">Menu</Typography>
                <RenderCard />
              </TabPanel>
            </Container>
          </div>
        </TabContext>
      </>
    );
  };

  return (
    <section id="detail-shop-page">
      <RenderBreadcrumbs />

      <div className="detail-info">
        <Container>
          <Typography variant="h3" gutterBottom>
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
    </section>
  );
}