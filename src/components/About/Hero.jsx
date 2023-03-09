import { Box, Button, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import hero from '/About/Hero.jpg'

export default function Hero() {
    return (
        <Box
            component="section"
            id="about-hero"
            sx={{
                width: "100%",
                height: "500px",
                backgroundImage: `url('${hero}')`,
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    padding: "30px",
                    width: "40%",
                    height: "350px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        color: "#FFF",
                        fontSize: "40px",
                        fontWeight: "500",
                    }}
                >
                    FPT FOOD
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        marginTop: "15px",
                        color: "#FFF",
                        fontSize: "15px",
                    }}
                >
                    Món ăn ngon nhất của bạn, ngay tại đây, ngay bây giờ
                </Typography>
                <br />
                <Button
                    variant="contained"
                    sx={{
                        background: green,
                        fontSize: "12px",
                    }}
                >
                    Đặt hàng ngay
                </Button>
            </Box>
        </Box>
    );
}