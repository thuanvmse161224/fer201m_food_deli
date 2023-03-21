import "./Header.scss";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import pageLogo from "./assets/image/FptFoodLogo.png";

import React from "react";
import { useState, useEffect } from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import ViewCart from "../ViewCart/ViewCart";
import UserData from "../LoginPage/UserData";

//End of Cart

export default function HeaderFixed() {
  const [openCart, setOpenCart] = useState(false);
  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsTop(window.scrollY === 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header-fixed">
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <AppBar
          className="header-fixed-box"
          sx={{ backgroundColor: isTop ? "transparent" : "white" }}
          elevation={1}
        >
          <Toolbar sx={{ height: "88px" }}>
            <a href="/">
              <img className="page-logo" src={pageLogo} alt="FptFood" />
            </a>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            {/* <Link style={{ textDecoration: 'none' }} to={`/viewCart`}> */}
            <Button
              className="header-fixed-btn"
              color="inherit"
              onClick={handleOpenCart}
              sx={{
                padding: "0",
                width: "40px",
                height: "40px",
                border: "1px solid rgba(0,0,0,0.2)",
                backgroundColor: "white",
                marginRight: "10px",
                "&:hover": { backgroundColor: "white" },
              }}
            >
              <ShoppingBagOutlinedIcon
                fontSize="large"
                sx={{ color: "rgba(0,0,0,0.4)" }}
              />
            </Button>

            <>
              <UserData />
            </>
          </Toolbar>
        </AppBar>
      </Box>
      {/* -------------------------Cart Modal------------------------- */}
      <ViewCart open={openCart} handleClose={handleCloseCart}></ViewCart>
    </div>
  );
}
