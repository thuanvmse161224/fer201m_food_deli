import "../ViewCart/ViewCart.scss";
import { useEffect } from 'react';

import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Fade from '@mui/material/Fade';
import Button from '@mui/base/ButtonUnstyled';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useState } from 'react';
import CartItem from "./CartItem";

import { useSelector, useDispatch } from "react-redux"


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

export default function ViewCart({ open, handleClose }) {
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
    const items = useSelector((state) => state.cart.items);

    const total = useSelector(state => state.cart.total);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

        useEffect(() => {
        const storedIsLoggedIn = sessionStorage.getItem("google_user_name");
        if (storedIsLoggedIn) {
          setIsLoggedIn(true);
        }
      }, []);

    return (
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
                                    <div className="food-content" style={{
                                        // padding: '24px 0',
                                        overflow: 'auto',
                                    }}>

                                        <div className="food-list" style={{ marginBottom: '200px', minHeight: '49vh' }}>
                                            {items.map((item) => (
                                                <CartItem item={item} />
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
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}
                                    </div>
                                </div>

                                <div className="bill-actions">
                                    {isLoggedIn ? (<div className="login-to-order bill-action-btn">
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
                                    </div>)
                                        : (<div className="login-to-order bill-action-btn">
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
                                        </div>)}

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
    )
}