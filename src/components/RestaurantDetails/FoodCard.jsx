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
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";

const FoodCard = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/restaurants/" + id)
      .then((response) => {
        setData(response.data.menu);
        console.log(response.data.menu);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div class="card-food">
        <Grid container spacing={3}>
          {data.map((item) => {
            return (
              // shop.menu.map((item) => {

              <Grid item xs={12} sm={6} md={4} key={item.foodID}>
                <Box minHeight="100px">
                  <Card
                    sx={{ display: "flex", width: "100%", height: "180px" }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        width: 110,
                        height: 110,
                        margin: 2,
                        borderRadius: 2,
                      }}
                      image={item.img}
                      alt=""
                    />
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        fontSize="1.6rem"
                        component="h6"
                        variant="body1"
                        sx={{ width: "90%", paddingBottom: "50px" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        fontSize="1.4rem"
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        sx={{ display: "contents" }}
                      >
                        {item.price} VND
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

              // });
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default FoodCard;
// const restaurant = data.find((r) => r.id === id);

// if (!restaurant) {
//   return null;
// }

// const food = menu.find(
//   (item) =>
//     item.shopName.toLowerCase() === shopName.toLowerCase() &&
//     item.foodId === foodId
// );

// Nếu không tìm thấy food, render thông báo
// if (!food) {
//   return <div>Không tìm thấy sản phẩm</div>;
// } else
