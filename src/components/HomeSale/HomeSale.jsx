//import "./styles.scss";
//About
import "../HomeSale/HomeSale.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//About
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { Link } from "react-router-dom";

export default function HomeSale() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/restaurants")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const foodIds = [];
  // for (let i = 0; i < data.length; i++) {
  //   const shop = data[i];
  //   for (let j = 0; j < shop.menu.length; j++) {
  //     const food = shop.menu[j];
  //     foodIds.push(food.foodId);
  //   }
  // }
  // console.log(foodIds);
  return (
    <div className="HomeSale-Container">
      <div className="HomeSale-Body">
        <div className="HomeSale-Title">
          <h1>
            Ưu đãi FPTFood tại <span>Hồ Chí Minh</span>
          </h1>
        </div>
        <Slider {...settings} className="HomeSale-Content">
          {/* <div className="HomeSale-Content"> */}
          {data.slice(0,16).map((item) => {
            if (item.coupon) {
              return (
                <Link
                  to={`/resDetailPage/${item.id}/${item.shopName}`}
                >
                  <Card
                    key={item.id}
                    className="HomeSale-Card"
                    style={{ maxWidth: "304px" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.menu[0].img}
                        alt="green iguana"
                      />
                      <CardContent sx={{minHeight: "200px"}}>
                        <Typography gutterBottom variant="h4" component="div">
                          {item.shopName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                        <Typography marginTop="15px" variant="body3">
                          <i className="fa-solid fa-star"></i>&ensp;
                          {item.rating}&ensp;&ensp;
                          <i className="fa-regular fa-clock"></i>&ensp;
                          {item.time}&ensp;&ensp;
                          <i className="fa-solid fa-map-pin"></i>&ensp;
                          {item.distance}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              );
            }
            return null;
          })}

          {/* </div> */}
        </Slider>
        <Link to={`/allPromotions`}>
          <div className="HomeSale-Button">
            <button type="button">
              <span>See all promotions</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
