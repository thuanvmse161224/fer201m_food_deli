import './Header.scss';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import pageLogo from './assets/image/FptFoodLogo.png';

import { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';


export default function HeaderFixed() {

    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        function handleScroll() {
            setIsTop(window.scrollY === 0);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='header-fixed'>

            <Box  sx={{ flexGrow: 1, position: 'relative' }}>
                <AppBar className="header-fixed-box" sx={{ backgroundColor: isTop ? 'transparent' : 'white' }} elevation={1}>
                    <Toolbar sx={{ height: '88px' }}>
                        <a href="#">
                            <img className="page-logo" src={pageLogo} alt="FptFood" />
                        </a>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                        <Button className='header-fixed-btn' color="inherit"
                            sx={{
                                padding: '0',
                                width: '40px',
                                height: '40px',
                                border: '1px solid rgba(0,0,0,0.2)',
                                backgroundColor: 'white',
                                marginRight: '10px',
                                '&:hover': { backgroundColor: 'white' }
                            }}>
                            <ShoppingBagOutlinedIcon fontSize='large' sx={{ color: 'rgba(0,0,0,0.4)' }} />
                        </Button>
                        <Button className='header-fixed-btn'
                            sx={{
                                color: 'black',
                                fontSize: '1.2rem',
                                fontWeight: '500',
                                textTransform: 'none'
                            }}>
                            Đăng nhập/Đăng ký
                        </Button>

                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}