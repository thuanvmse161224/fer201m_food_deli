import React, { useState } from "react";
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
// Import cartSlice
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FoodCardSale = ({ restaurant }) => {
  const [open, setOpen] = useState(false);
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
          shopName: restaurant.shopName,
          name: item.name,
          price: item.price,
          quantity: quantity,
        })
      );
      setOpen(true);
    } else {
      console.error("Invalid item:", item);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Grid container spacing={3}>
        {restaurant.menu.map((foodItem) => {
          return (
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
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(foodItem.price)}
                      <Tooltip title="Thêm vào giỏ hàng">
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
                      </Tooltip>
                      {/* Alert btn */}
                      <Stack spacing={2} sx={{ width: "100%" }}>
                        <Snackbar
                          open={open}
                          autoHideDuration={6000}
                          onClose={handleClose}
                        >
                          <Alert
                            onClose={handleClose}
                            severity="success"
                            sx={{ width: "100%", fontSize: "1.1rem" }}
                          >
                            Thêm vào giỏ hàng thành công !
                          </Alert>
                        </Snackbar>
                      </Stack>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FoodCardSale;