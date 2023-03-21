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
import { Link } from "react-router-dom";
// Import cartSlice
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
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

  const dispatch = useDispatch();

  // Ham xu ly redux
  const handleAddToCart = (item) => {
    console.log(item.foodID);
    if (item && item.foodID) {
      const quantity = 1;
      dispatch(
        addItem({
          foodID: item.foodID,
          img: item.img,
          shopName: data.shopName,
          name: item.name,
          price: item.price,
          quantity: quantity,
        })
      );
      console.log("da nhan dispatch");
    } else {
      console.error("Invalid item:", item);
    }
  };
  return data.coupon ? (
    data.menu.map((res) => (
      <Grid item xs={12} sm={6} md={4} key={res.foodID}>
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
            <CardContent sx={{ flex: "1 0 auto", width: "60%" }}>
              <Typography
                fontSize="1.6rem"
                component="h6"
                variant="body1"
                sx={{ width: "90%", paddingBottom: "30px" }}
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
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(res.price)}
                <Tooltip title="Thêm vào giỏ hàng">
                  {/* <Link to={}/> */}
                  <IconButton
                    size="large"
                    sx={{
                      marginLeft: 5,
                      color: "green",
                      fontSize: "3rem",
                    }}
                    onClick={() => handleAddToCart(res)}
                  >
                    <AddBoxRoundedIcon fontSize="inherit" />
                  </IconButton>
                  {/* <Link/> */}
                </Tooltip>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    ))
  ) : (
    <h3>
      {" "}
      Hôm nay không có khuyến mãi !{" "}
      <i className="fa-regular fa-face-sad-cry"></i>
    </h3>
  );
};

export default FoodCardSale;
