import './Header.scss';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import pageLogo from './assets/image/FptFoodLogo.png';

import React from 'react';
import { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Fade from '@mui/material/Fade';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import CartItem from '../ViewCart/CartItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux"
import { increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';


const BackdropUnstyled = React.forwardRef((props, ref) => {
    const { open, ...other } = props;
    return (
        <Fade in={open}>
            <div ref={ref} {...other} />
        </Fade>
    );
});

BackdropUnstyled.propTypes = {
    open: PropTypes.bool,
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '81%',
    height: '100%',
    width: '38%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    border: 'none',
    boxShadow: 24,
    padding: '0 24px',
    overflow: 'auto',
});

//End of Cart

export default function HeaderFixed() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

    //check
    const [quantity, setQuan] = useState(1);
    const dispatch = useDispatch();
    const IncrementQuan = (foodID) => {
        dispatch(increaseQuantity(foodID))
    };

    const DecrementQuan = (foodID) => {
        dispatch(decreaseQuantity(foodID))
    };

    const StyledTextField = styled(TextField)({
        '& .MuiInputBase-input': {
            fontSize: '1.4rem', // Adjust font size as needed
            fontWeight: '600',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            outline: 'none',
            width: '24px',
            padding: 0,
            '&:hover': {
                cursor: 'default',
            },
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
            '-moz-appearance': 'textfield',
        },
        '& .MuiInputBase-root': {
            padding: 0,
        },
        '& .MuiInputAdornment-root': {
            display: 'flex',
        },
        '&:hover': {
            '& .MuiInputAdornment-root': {
                display: 'flex',
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
        },
        '& root.MuiOutlinedInput-notchedOutline': {
            backgroundColor: 'white',
            borderRadius: '5px',
            color: '#0081a8',
            border: '1px solid rgba(0,0,0,0.4)',
        },
        '& button.MuiButtonBase-root.MuiIconButton-root': {
            color: '#0081a8',
            padding: 0,
        }
    });
    const items = useSelector((state) => state.cart.items);
 
     const total = useSelector(state => state.cart.total);
    return (
        <div className='header-fixed'>

            <Box sx={{ flexGrow: 1, position: 'relative' }}>
                <AppBar className="header-fixed-box" sx={{ backgroundColor: isTop ? 'transparent' : 'white' }} elevation={1}>
                    <Toolbar sx={{ height: '88px' }}>
                        <a href="#">
                            <img className="page-logo" src={pageLogo} alt="FptFood" />
                        </a>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                        {/* <Link style={{ textDecoration: 'none' }} to={`/viewCart`}> */}
                        <Button className='header-fixed-btn' color="inherit" onClick={handleOpen}
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

                        <Link to="/loginPage">
                            <Button className='header-fixed-btn'
                                sx={{
                                    color: 'black',
                                    fontSize: '1.2rem',
                                    fontWeight: '500',
                                    textTransform: 'none'
                                }}>
                                Đăng nhập/Đăng ký
                            </Button>

                        </Link>

                    </Toolbar>
                </AppBar>
            </Box>
            {/* -------------------------Cart Modal------------------------- */}
            <div className='view-cart-container' style={{ position: 'relative' }}>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal sx={{
                }}
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                >
                    <Fade in={open}>

                        <Box className="cart-model-box" sx={style}>
                            <div className="box-pos-rel" style={{ position: 'relative', width: '100%' }}>
                                <div className="modal-header" style={{
                                    padding: '24px 0',
                                    color: '#676767',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}>
                                    <i onClick={handleClose}
                                        style={{
                                            cursor: 'pointer',
                                            width: 'calc(50% - 24px)',
                                        }}
                                        className='exit-modal-icon'><ClearRoundedIcon sx={{
                                            fontSize: 28,
                                        }} />
                                    </i>

                                    <div className="cart-title" style={{}}>
                                        Giỏ đồ ăn
                                    </div>
                                </div>
                                <div className="slash" style={{
                                    borderBottom: '1px solid rgba(0,0,0,0.2)',
                                    width: '112%',
                                    margin: '0 -24px',
                                }}></div>

                                <div className="modal-content" style={{ padding: '24px 0' }}>
                                    <div className="food-container" style={{}}>
                                        <div className="food-shop-title" style={{
                                            fontSize: '2rem',
                                            fontWeight: '500',
                                        }}>
                                            Mỳ Quảng Bà Minh
                                        </div>

                                        <div className="food-content" style={{
                                            // padding: '24px 0',
                                            overflow: 'auto',
                                        }}>
                                            
                                            <div className="food-list" style={{ marginBottom: '200px', minHeight: '49vh' }}>
                                                {items.map((item) => (
                                                    <div key={item.foodID} className="food-item-wrap" style={{ overflow: 'auto' }}>
                                                        <div className="food-item" style={{
                                                            height: '48px',
                                                        }}>

                                                            <div className="quantity-actions">
                                                                <StyledTextField
                                                                    label=""
                                                                    type="number"
                                                                    value={item.quantity}
                                                                    sx={{
                                                                        border: 'none',
                                                                    }}
                                                                    InputProps={{
                                                                        disableUnderline: true,
                                                                        inputProps: { step: 1, min: 0 },
                                                                        startAdornment: (
                                                                            <InputAdornment position="start">
                                                                                <IconButton onClick={ () =>DecrementQuan(item.foodID)}>
                                                                                    <RemoveIcon/>
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                        ),
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <IconButton onClick={ () =>IncrementQuan(item.foodID)}>
                                                                                    <AddIcon/>
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                />
                                                            </div>

                                                            <div className="food-item-info">

                                                                <div className="food-img-wrap">
                                                                    <img src={item.img} alt="Cafe Sua" className="food-img" />
                                                                </div>

                                                                <div className="food-item-name">
                                                                    {item.name}
                                                                </div>
                                                                {quantity > 0 ? (
                                                                    <div className="food-item-price">
                                                                        {item.price}
                                                                    </div>

                                                                ) : (
                                                                    <a href="#" className="remove-item-btn" style={{
                                                                        textDecoration: 'none',
                                                                        color: '#ee6352',
                                                                        '&:hover': {
                                                                            color: '#ee6352'
                                                                        }
                                                                    }}>
                                                                        Remove
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer" style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    width: 'calc(100% + 50px)',
                                    margin: '0 -24px',
                                    padding: '24px',
                                    boxShadow: '0 0px 10px #888888',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>

                                    <div className="total-bill" style={{
                                        width: '100%',
                                        display: 'flex',
                                        fontSize: '20px',
                                        fontWeight: '300',
                                        justifyContent: 'space-between',
                                        marginBottom: '20px',
                                    }}>
                                        <span>Tổng Cộng</span>
                                        <div className="total-bill-val" style={{ fontWeight: '600' }}>
                                            {total}.000
                                        </div>
                                    </div>

                                    <div className="bill-actions">
                                        <div className="login-to-order bill-action-btn">
                                            <Box sx={{
                                                '& button': { m: 1 }, '&:hover': {
                                                    filter: 'brightness(1.2)',
                                                    cursor: 'pointer',
                                                },
                                            }}>
                                                <Button className="add-to-cart-btn"
                                                    style={{
                                                        width: '100%',
                                                        margin: '0 !important',
                                                        height: '50px',
                                                        borderRadius: '10px',
                                                        backgroundColor: '#1ebd60',
                                                        color: 'white',
                                                        fontSize: '1.8rem',
                                                        fontWeight: '600',
                                                        border: 'none',

                                                    }} variant="contained" size="large">
                                                    Đăng nhập để đặt đơn
                                                </Button>
                                            </Box>
                                        </div>
                                        {/* 
                                    <div className="pay-now bill-action-btn">
                                                <Box sx={{
                                            '& button': { m: 1 }, '&:hover': {
                                                filter: 'brightness(1.2)',
                                                cursor: 'pointer',
                                            },
                                        }}>
                                            <Button className="add-to-cart-btn"
                                                style={{
                                                    width: '100%',
                                                    margin: '0 !important',
                                                    height: '50px',
                                                    borderRadius: '10px',
                                                    backgroundColor: '#1ebd60',
                                                    color: 'white',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    border: 'none',

                                                }} variant="contained" size="large">
                                                Thanh Toán
                                            </Button>
                                        </Box>
                                    </div> */}
                                    </div>

                                </div>
                            </div>
                        </Box>

                    </Fade>

                </Modal>
            </div >

        </div>
    )
}