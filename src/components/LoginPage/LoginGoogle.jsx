import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const clientID =
  "373448029583-1nt56pjk6tpld8jgk168vb5q6slbjaeq.apps.googleusercontent.com";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const onSuccess = (response) => {
    sessionStorage.setItem("google_user_name", response.profileObj.name);
    sessionStorage.setItem("google_user_ava", response.profileObj.imageUrl);
    navigate("/");
    alert("Đăng nhập thành công !");
  };

  const onFailure = (response) => {
    console.log(response);
  };

  //hanlde GMAIL
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default GoogleLoginButton;
