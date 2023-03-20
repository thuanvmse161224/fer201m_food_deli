import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Box,
} from "@mui/material";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .min(2, "Must enter 2 or more characters"),
  lastName: yup
    .string("Enter your last name")
    .min(2, "Must enter 2 or more characters"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .number("Enter your phone")
    .typeError("Please enter a valid number")
    .min(10, "Must enter 10 or more numbers"),
  message: yup
    .string("Enter your message")
    .required("Message is required")
    .min(10, "Must enter 10 or more characters"),
});

const apiUrl = "http://localhost:5000/contact-records";

function ContactForm() {
  const formik = useFormik({
    initialValues: {
      // Init form field
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const data = JSON.stringify(formik.values);
      alert(data);

      axios
        .post(apiUrl, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  return (
    <>
      <Grid container justify="center" alignContent="center">
        <Grid item xs={6} md={4}>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "100%",
              },
            }}
            autoComplete="off"
          >
            <Card
              style={{
                padding: "20px 15px",
              }}
            >
              <CardContent>
                <Typography fontSize="3rem" gutterBottom variant="h4">
                  Message Us
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  fontSize="1.6rem"
                >
                  Fill up the form and our team will get back to you within 24
                  hours
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        label="First Name"
                        name="firstName"
                        variant="standard"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.firstName &&
                          Boolean(formik.errors.firstName)
                        }
                        helperText={
                          formik.touched.firstName && formik.errors.firstName
                        }
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        label="Last Name"
                        name="lastName"
                        variant="standard"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.lastName &&
                          Boolean(formik.errors.lastName)
                        }
                        helperText={
                          formik.touched.lastName && formik.errors.lastName
                        }
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        variant="standard"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Phone"
                        name="phone"
                        variant="standard"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phone && Boolean(formik.errors.phone)
                        }
                        helperText={formik.touched.phone && formik.errors.phone}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <TextField
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="standard"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.message &&
                          Boolean(formik.errors.message)
                        }
                        helperText={
                          formik.touched.message && formik.errors.message
                        }
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid xs={12} item>
                      <Button type="submit" variant="contained" color="primary">
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default ContactForm;
