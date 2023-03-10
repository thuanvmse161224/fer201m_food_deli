import "../Contact/Contact.scss";
// import useDocumentTitle from "../../helpers/useDocumentTitle"
// //About
// import React, { useState } from 'react'
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import FmdGoodIcon from '@mui/icons-material/FmdGood';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';

// function Contact() {
//     const [info, setInfo] = useState('');

//     const hanldeSubmit = (event) => {
//         event.preventDefault();
//     }
//     return (
//         <div className="contact-page">
//             <section id="bg-contact">
//                 <CssBaseline />
//                 <Container fixed>
//                     <Box sx={{ height: '100vh' }} >
//                         <div className="title-contact">Get in touch!</div>
//                         <p>Contact us for a quote, help ot to the join team.</p>
//                         <Stack className="wrapper-info" direction="row" spacing={2}>

//                             <Button style={{ color: 'white' }} className="btn-info">
//                                 <FmdGoodIcon className="icon" /> 
//                                 102 Stress 2714 Don
//                                 {/* <span className="info-contact">102 Stress 2714 Don </span> */}
//                             </Button>

//                             <Button style={{ color: 'white' }}>
//                                 <CallIcon className="icon" />
//                                 <span className="info-contact">+02 1234 567</span>
//                             </Button>

//                             <Button style={{ color: 'white' }}>
//                                 <EmailIcon className="icon" />
//                                 <span className="info-contact">contact@grabfoot.com</span>
//                             </Button>
//                         </Stack>
//                         <form onSubmit={hanldeSubmit}>

//                         </form>
//                     </Box>
//                 </Container>
//             </section>
//         </div>
//     )
// }

// export default Contact

import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Grid,
    Card,
    CardContent,
    Tooltip,
    IconButton,
} from "@mui/material";

const Contact = () => {

    const ContactForm = () => {
        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [message, setMessage] = useState("");

        const handleSubmit = (e) => {
            e.preventDefault();
            // call API to save data to database
            alert('Sended')
            console.log("Submited:", firstName, lastName, email, phone, message);
        };
        return (
            <div id="bg-contact">
                <Card style={{ maxWidth: 600, margin: "0 auto", padding: "20px 15px" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4">Message Us</Typography>
                        <Typography gutterBottom variant="body2" color="textSecondary" component="p">Fill up the form and our team will get back to you within 24 hours</Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="First Name" placeholder="Enter first name"
                                        variant="outlined" value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Last Name" placeholder="Enter last name"
                                        variant="outlined" value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField label="Email" type="email" placeholder="Enter email"
                                        variant="outlined" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField label="Phone" type="number" placeholder="Enter your phone"
                                        variant="outlined" value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField label="Message" multiline rows={4} placeholder="Enter your message here"
                                        variant="outlined" value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Send</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const RenderInfo = () => {
        return (
            <div id="bg-info-contact">
                <Grid container>
                    <Grid xs={12} component="h1">
                        Get In Touch With Us
                    </Grid>

                    <Grid style={{ margin: "20px 0 70px 0" }} xs={12}>
                        <Typography color="textSecondary">Please contact us using the information below. To locate contacts
                            in the Business office closet to you, visit our office websites.</Typography>
                    </Grid>
                </Grid>

                <Grid style={{ marginTop: "10px" }} container spacing={2} columns={12} component="p">
                    <Grid xs={4}>
                        <Tooltip title="2AM, D2 Street, Binh Thanh District, HCM City">
                            <IconButton style={{color: "black"}}>
                                <i class="fa-solid fa-location-dot fa-3x"></i>
                            </IconButton>
                        </Tooltip>

                        <Typography style={{ marginTop: "20px" }} component="h2"><b>Office</b></Typography>
                        <Typography color="textSecondary"> 2AM, D2 Street, Binh Thanh District, HCM City</Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Tooltip title="(+84) 1234 5678 or
                            (+84) 1234 5679">
                            <IconButton style={{color: "black"}}>
                                <i class="fa-sharp fa-solid fa-phone fa-3x"></i>
                            </IconButton>
                        </Tooltip>

                        <Typography style={{ marginTop: "20px" }} component="h2"><b>Call Us</b></Typography>
                        <Typography color="textSecondary">
                            (+84) 1234 5678 <br></br>
                            (+84) 1234 5679
                        </Typography>
                    </Grid>
                    <Grid xs={4}>
                        <Tooltip title="fptfoot@support.com or
                            info@bussiness.com">
                            <IconButton style={{color: "black"}}>
                                <i class="fa-sharp fa-regular fa-paper-plane fa-3x"></i>
                            </IconButton>
                        </Tooltip>

                        <Typography style={{ marginTop: "20px" }} component="h2"><b>Send Us</b></Typography>
                        <Typography color="textSecondary">
                            fptfoot@support.com <br></br>
                            info@bussiness.com
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <section className="contact-page">
            <div id="bg-img-contact">
                <h1>Contact US</h1>
            </div>
            <RenderInfo />
            <ContactForm />
            <div id="bg-map-contact">

            </div>
        </section >
    );
};

export default Contact;