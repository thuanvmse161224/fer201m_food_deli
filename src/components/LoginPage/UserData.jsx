import React from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Menu,
  Avatar,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import LogoutIcon from "@mui/icons-material/Logout";

const clientID =
  "373448029583-1nt56pjk6tpld8jgk168vb5q6slbjaeq.apps.googleusercontent.com";

function UserData() {
  const [userName, setUserName] = useState(
    sessionStorage.getItem("google_user_name")
  );
  const userAva = sessionStorage.getItem("google_user_ava");

  const onFailure = (response) => {
    console.log(response);
  };

  const handleLogout = () => {
    setUserName("");
    sessionStorage.clear();
    window.location.href = "/";
  };

  //==========hanlde usermenu
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {userName ? (
        <>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={userAva} />
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{userName}</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <GoogleLogout
                clientId={clientID}
                onLogoutSuccess={handleLogout}
                onFailure={onFailure}
                render={(renderProps) => (
                  <Button
                    variant="text"
                    color="primary"
                    onClick={renderProps.onClick}
                  >
                    <LogoutIcon />
                  </Button>
                )}
              />
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Link to="/loginPage">
          <Button
            className="header-fixed-btn"
            sx={{
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "500",
              textTransform: "none",
            }}
          >
            Đăng nhập
          </Button>
        </Link>
      )}
    </>
  );
}

export default UserData;
