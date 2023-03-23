import "../Contact/Contact.scss";
import React from "react";
import { Typography, Grid, Tooltip, IconButton } from "@mui/material";
import ContactForm from "./ContactForm";
import useDocumentTitle from '../../helpers/useDocumentTitle';

const Contact = () => {
  useDocumentTitle("Contact Us");
  const RenderInfo = () => {
    return (
      <>
        <Grid container fontSize="2.4rem">
          <Grid xs={12} component="h1">
            Get In Touch With Us
          </Grid>
          <Grid style={{ margin: "20px 0 70px 0" }} xs={12}>
            <Typography fontSize="1.6rem" color="textSecondary">
              Please contact us using the information below. To locate contacts
              in the Business office closet to you, visit our office websites.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          style={{ marginTop: "10px" }}
          container
          spacing={2}
          columns={12}
          component="p"
        >
          <Grid xs={4}>
            <Tooltip title="2AM, D2 Street, Binh Thanh District, HCM City">
              <IconButton style={{ color: "black" }}>
                <i class="fa-solid fa-location-dot fa-3x"></i>
              </IconButton>
            </Tooltip>
            <Typography
              style={{ marginTop: "20px" }}
              component="h2"
              fontSize="1.8rem"
            >
              <b>Office</b>
            </Typography>
            <Typography fontSize="1.8rem" color="textSecondary">
              {" "}
              2AM, D2 Street, Binh Thanh District, HCM City
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Tooltip
              title="(+84) 1234 5678 or
                            (+84) 1234 5679"
            >
              <IconButton style={{ color: "black" }}>
                <i class="fa-sharp fa-solid fa-phone fa-3x"></i>
              </IconButton>
            </Tooltip>

            <Typography
              fontSize="1.8rem"
              style={{ marginTop: "20px" }}
              component="h2"
            >
              <b>Call Us</b>
            </Typography>
            <Typography fontSize="1.8rem" color="textSecondary">
              (+84) 1234 5678 <br></br>
              (+84) 1234 5679
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Tooltip
              title="fptfoot@support.com or
                            info@bussiness.com"
            >
              <IconButton style={{ color: "black" }}>
                <i class="fa-sharp fa-regular fa-paper-plane fa-3x"></i>
              </IconButton>
            </Tooltip>
            <Typography
              fontSize="1.8rem"
              style={{ marginTop: "20px" }}
              component="h2"
            >
              <b>Send Us</b>
            </Typography>
            <Typography fontSize="1.8rem" color="textSecondary">
              fptfoot@support.com <br></br>
              info@bussiness.com
            </Typography>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <section id="contact-page">
      <Typography className="bg-img-contact" variant="h2">
        Contact
      </Typography>
      <div className="bg-info-contact">
        <RenderInfo />
      </div>
      <div className="bg-contact">
        <ContactForm />
      </div>
      <div className="bg-map-contact"></div>
    </section>
  );
};

export default Contact;
