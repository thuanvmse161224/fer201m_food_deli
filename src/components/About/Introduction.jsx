
import { Accordion, Avatar, Box, Button, Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { fontSize, fontWeight, width } from '@mui/system';

import BanhMi from "/About/banhmi.png";
import XeHangRong from "/About/xehangrong.jpg";
export default function Introduction () {
    return (
        <Box 
            component="section"
            id="about-intro"
            sx={{
                width: "100%",
                height: "500px"
            }}
        >
            <Grid 
                container 
            >
                <Grid item sm={12}
                    mt="30px"
                    mb="30px"
                    sx= {{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}    
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: "#00ff00",
                            fontSize: "40px",
                            fontWeight: "450",
                        }}
                    >
                        Some bla bla bla header 
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            width: "80%",
                            padding: "15px"
                        }}
                    > 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a dapibus enim, vitae congue urna. Nunc vel sem quis lacus scelerisque aliquam non sed nunc. Ut ullamcorper luctus lectus in consequat. Cras interdum urna in pellentesque varius. Integer auctor ac nisl et pulvinar. Nulla facilisi. Duis non interdum nisi. Donec viverra diam eu ligula gravida, ut blandit elit rutrum. Curabitur placerat viverra fermentum
                    </Typography>
                </Grid>
                <Grid
                    container item sm={12}
                    sx={{paddingLeft: "10%", paddingRight: "10%"}}
                >
                    <Grid item sm={6} xs={12}
                        sx = {{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "45px",
                        }}
                    >
                        <Avatar 
                            alt="Hình ảnh bánh mì" 
                            src={BanhMi}
                            sx={{width: "150px", height: "150px", marginBottom: "30px"}}
                        />
                        <Typography
                            variant="h3"
                            sx={{
                                color: "#00ff00",
                                fontSize: "28px",
                                fontWeight: "400",
                            }}
                        >
                            A long header 3 bla bla
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                width: "70%",
                                fontSize: "18px",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a dapibus enim, vitae congue urna. Nunc vel sem quis lacus scelerisque aliquam non sed nunc.
                        </Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}
                        sx = {{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "45px",
                        }}
                    >
                        <Avatar 
                            alt="Hình ảnh xe đẩy hàng rong" 
                            src={XeHangRong}
                            sx={{width: "150px", height: "150px", marginBottom: "30px"}}
                        />
                        <Typography
                            variant="h3"
                            sx={{
                                color: "#00ff00",
                                fontSize: "28px",
                                fontWeight: "400",
                            }}
                        >
                            A long header 3 bla bla
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                width: "70%",
                                fontSize: "18px",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a dapibus enim, vitae congue urna. Nunc vel sem quis lacus scelerisque aliquam non sed nunc.
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}