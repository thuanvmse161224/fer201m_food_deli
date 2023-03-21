
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
                height: "500px",
                mt: "50px",
                mb: "50px"
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
                            textAlign: "center"
                        }}
                    >
                        Đem món ăn ngon tới tận cửa phòng học của bạn
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{
                            width: "80%",
                            padding: "15px"
                        }}
                    > 
                        Đã bao giờ bạn cảm thấy mệt vì tiết học kéo dài và canteen không có đa dạng các món ăn khác bạn cần? Hãy đặt hàng ngay tại dịch vụ của chúng tôi để có món ăn nhanh và tiện lợi nhất tại trường FPT.
                    </Typography>
                </Grid>
                <Grid
                    container item sm={12}
                    sx={{paddingLeft: "10%", paddingRight: "10%"}}
                >
                    <Grid item md={6} sm={12}
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
                                mb: "15px"
                            }}
                        >
                            Món ăn đa dạng
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                width: "70%",
                                fontSize: "18px",
                            }}
                        >
                            Khám phá kho thức ăn đa dạng và phong phú của chúng tôi, chỉ cách nhau qua cái chạm từ điện thoại của bạn.
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={12}
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
                                mb: "15px"
                            }}
                        >
                            Nhanh chóng tiện lợi
                        </Typography>
                        <Typography
                            variant="p"
                            sx={{
                                width: "70%",
                                fontSize: "18px",
                            }}
                        >
                            Nhờ vào lợi thế tọa lạc và trung gian của chúng tôi, đơn hàng đặt nhanh trong vòng 5 - 10 phút trước khi đến cửa phòng của bạn, cực nhanh so với đối thủ cạnh tranh, và nhận ngay cửa phòng học của bạn
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}