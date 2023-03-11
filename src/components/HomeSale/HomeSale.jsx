//import "./styles.scss";
//About
import "../HomeSale/HomeSale.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//About
import React from 'react'
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
    return (
        <div className='HomeSale-Container'>
            <div className='HomeSale-Body'>
                <div className='HomeSale-Title'>
                    <h1>Ưu đãi FPTFood tại <span>Hồ Chí Minh</span></h1>
                </div>
                <Slider {...settings} className="HomeSale-Content">
                    {/* <div className="HomeSale-Content"> */}
                    <Card className='HomeSale-Card' style={{ maxWidth: '304px' }} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of
                                </Typography>
                                <Typography variant="body3">
                                    <div><StarIcon style={{ color: 'yellow' }} />4.4</div>
                                    <div className="Icon"><AccessTimeIcon />20 mins</div>
                                    <div className="Icon"><GpsFixedIcon />2.2 km</div>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='HomeSale-Card' style={{ maxWidth: '304px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of
                                </Typography>
                                <Typography variant="body3">
                                    <div><StarIcon style={{ color: 'yellow' }} />4.4</div>
                                    <div className="Icon"><AccessTimeIcon />20 mins</div>
                                    <div className="Icon"><GpsFixedIcon />2.2 km</div>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='HomeSale-Card' style={{ maxWidth: '304px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of
                                </Typography>
                                <Typography variant="body3">
                                    <div><StarIcon style={{ color: 'yellow' }} />4.4</div>
                                    <div className="Icon"><AccessTimeIcon />20 mins</div>
                                    <div className="Icon"><GpsFixedIcon />2.2 km</div>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='HomeSale-Card' style={{ maxWidth: '304px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of
                                </Typography>
                                <Typography variant="body3">
                                    <div><StarIcon style={{ color: 'yellow' }} />4.4</div>
                                    <div className="Icon"><AccessTimeIcon />20 mins</div>
                                    <div className="Icon"><GpsFixedIcon />2.2 km</div>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='HomeSale-Card' style={{ maxWidth: '304px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of
                                </Typography>
                                <Typography variant="body3">
                                    <div><StarIcon style={{ color: 'yellow' }} />4.4</div>
                                    <div className="Icon"><AccessTimeIcon />20 mins</div>
                                    <div className="Icon"><GpsFixedIcon />2.2 km</div>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='HomeSale-Card' style={{ maxWidth: '304px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of
                                </Typography>
                                <Typography variant="body3">
                                    <div><StarIcon style={{ color: 'yellow' }} />4.4</div>
                                    <div className="Icon"><AccessTimeIcon />20 mins</div>
                                    <div className="Icon"><GpsFixedIcon />2.2 km</div>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className='HomeSale-Card' style={{ maxWidth: '304px' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of
                                </Typography>
                                <Typography variant="body3">
                                    <div><StarIcon style={{ color: 'yellow' }} />4.4</div>
                                    <div className="Icon"><AccessTimeIcon />20 mins</div>
                                    <div className="Icon"><GpsFixedIcon />2.2 km</div>

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    {/* </div> */}
                </Slider>
                <div className="HomeSale-Button">
                    <button type="button"><span>See all promotions</span></button>
                </div>
            </div>
        </div>
    )
}