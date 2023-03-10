//import "./styles.scss";
//About
import "../HomeSale/HomeSale.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//About
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/restaurants')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div className='HomeSale-Container'>
            <div className='HomeSale-Body'>
                <div className='HomeSale-Title'>
                    <h1>??u ????i FPTFood t???i <span>H??? Ch?? Minh</span></h1>
                </div>
                <Slider {...settings} className="HomeSale-Content">
                    {/* <div className="HomeSale-Content"> */}
                    {data.map(item => {
                        if (item.coupon) {
                            return (
                                <Card className='HomeSale-Card' style={{ maxWidth: '304px' }} >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={item.menu[0].img}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h4" component="div">
                                                {item.shopName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.description}
                                            </Typography>
                                            <Typography variant="body3">
                                                <div><StarIcon style={{ color: 'yellow' }} />{item.rating}</div>
                                                <div className="Icon"><AccessTimeIcon />{item.time}</div>
                                                <div className="Icon"><GpsFixedIcon />{item.distance}</div>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            )
                        }
                        return null;
                    })}



                    {/* </div> */}
                </Slider>
                <div className="HomeSale-Button">
                    <button type="button"><span>See all promotions</span></button>
                </div>
            </div>
        </div>
    )
}