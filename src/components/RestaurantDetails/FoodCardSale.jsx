import { useState, useEffect } from "react";
import axios from "axios";
import {
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
import { useParams } from "react-router-dom";

const FoodCardSale = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/restaurants/" + id)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return data.coupon ? (
    data.menu.map((res) => (
      <Grid container spacing={3} key={res.foodID}>
        <Grid item xs={12} sm={6} md={4}>
          <Box minHeight="100px">
            <Card sx={{ display: "flex", width: "100%", height: "180px" }}>
              <CardMedia
                component="img"
                sx={{
                  width: 110,
                  height: 110,
                  margin: 2,
                  borderRadius: 2,
                }}
                image={res.img}
                alt=""
              />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  fontSize="1.6rem"
                  component="h6"
                  variant="body1"
                  sx={{ width: "90%", paddingBottom: "50px" }}
                >
                  {res.name}
                </Typography>
                <Typography
                  fontSize="1.4rem"
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{ display: "contents" }}
                >
                  {res.price} VND
                  <Tooltip title="Thêm vào giỏ hàng">
                    <IconButton
                      size="large"
                      sx={{
                        marginLeft: 5,
                        color: "green",
                        fontSize: "3rem",
                      }}
                    >
                      <AddBoxRoundedIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    ))
  ) : (
    <h3> Hôm nay không có khuyến mãi </h3>
  );
};

export default FoodCardSale;
