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
// Import cartSlice
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
const FoodCardSale = ({restaurant}) => {
  const dispatch = useDispatch();

  // Ham xu ly redux
  const handleAddToCart = (item) => {
    console.log(item.foodID);
    if (item && item.foodID) {
      const quantity = 1;
      dispatch(addItem({
        foodID: item.foodID,
        img: item.img,
        shopName: restaurant.shopName,
        name: item.name,
        price: item.price,
        quantity: quantity
      }));
      console.log("da nhan dispatch");
    } else {
      console.error("Invalid item:", item);
    }
  }
  return restaurant.coupon ? (
    restaurant.menu.map((foodItem) => (
      <Grid item xs={12} sm={6} md={4} key={foodItem.foodID}>
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
              image={foodItem.img}
              alt=""
            />
            <CardContent sx={{ flex: "1 0 auto", width: "60%" }}>
              <Typography
                fontSize="1.6rem"
                component="h6"
                variant="body1"
                sx={{ width: "90%", paddingBottom: "30px" }}
              >
                {foodItem.name}
              </Typography>
              <Typography
                fontSize="1.4rem"
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{ display: "contents" }}
              >
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(foodItem.price)}
                <Tooltip title="Thêm vào giỏ hàng">
                  {/* <Link to={}/> */}
                  <IconButton
                    size="large"
                    sx={{
                      marginLeft: 5,
                      color: "green",
                      fontSize: "3rem",
                    }}
                    onClick={() => handleAddToCart(foodItem)}
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
