import "../Cart/Cart.scss";

import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Fade from '@mui/material/Fade';
import Button from '@mui/base/ButtonUnstyled';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import InputUnstyled from '@mui/base/InputUnstyled';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import foodImg from '/Cart/imgs/canh chua ca loc.jpg';


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
});

export default function Cart() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [quantity, setQuan] = useState(1);

    const IncrementQuan = () => {
        setQuan(prevQuan => prevQuan + 1);
    };

    const DecrementQuan = () => {
        setQuan(prevQuan => (prevQuan > 0 ? prevQuan - 1 : 0));
    };

    const StyledTextField = styled(TextField)({
        '& .MuiInputBase-input': {
            fontSize: '2rem', // Adjust font size as needed
            fontWeight: '600',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            outline: 'none',
            width: '64px',
            '&:hover': {
                cursor: 'default',
            },
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
            '-moz-appearance': 'textfield',
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
            fontSize: '20px',
            backgroundColor: 'white',
            border: '1px solid rgba(0,0,0,0.5)',
            borderRadius: '5px',
        }
    });

    return (
        <div className='cart-container' style={{ position: 'relative' }}>
            <Button onClick={handleOpen}>Open modal</Button>
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
                        <div className="modal-header" style={{
                            padding: '20px 0',
                            color: '#676767',
                            border: 'none'
                        }}>
                            <i onClick={handleClose}
                                style={{
                                    cursor: 'pointer',
                                }}
                                className='exit-modal-icon'><ClearRoundedIcon sx={{
                                    fontSize: 28,
                                }} /></i>

                        </div>

                        <div className="modal-content" style={{ padding: '24px 0' }}>
                            <div className="food-container" style={{ minHeight: '95px', display: 'flex' }}>
                                <div className="img-container" style={{
                                    width: '30%',
                                    display: 'flex',
                                    height: '95px',
                                }}>
                                    <img src={foodImg} alt="Canh chua" className="food-img"
                                        style={{
                                            width: 'auto',
                                            height: 'auto',
                                            borderRadius: '10px',
                                        }} />
                                </div>

                                <div className="food-content" style={{ width: '100%' }}>
                                    <div className="food-title" style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '10px',
                                        fontWeight: '600',
                                    }}>
                                        <div className="food-name">
                                            Canh chua cá lóc
                                        </div>
                                        <div className="food-price">
                                            20.000đ
                                        </div>
                                    </div>

                                    <div className="food-description" style={{
                                        fontSize: '1.4rem',
                                        lineHeight: 1.6,
                                    }}>
                                        Canh chua cá lóc chua cay gất là ngon!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Slash" style={{
                            margin: '12px 0 24px 0',
                            border: '2px solid rgba(0,0,0,0.2)',
                        }}></div>
                        <div className="modal-special-ins">
                            <div className="special-ins-header"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '10px',

                                }}>
                                <h2 className="ins-title" style={{
                                    fontsize: '2rem',
                                    marginRight: '10px',
                                }}>
                                    Special instructions
                                </h2>
                                <span className="ins-optional" style={{ fontSize: '1.4rem', }}>(Optional)</span>
                            </div>

                            <div className="special-ins-note"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder="Ex. No chilli?"
                                    style={{
                                        minHeight: '46px',
                                        width: '100%',
                                        overflow: 'hidden',
                                        border: '1px solid',
                                        fontSize: '1.4rem',
                                        borderRadius: '5px',
                                        padding: '13px',
                                        height: '45px',
                                    }}
                                />
                            </div>

                            <div className="modal-footer" style={{
                                position: 'absolute',
                                bottom: '0',
                                width: '100%',
                                margin: '0 -24px',
                                padding: '24px',
                                boxShadow: '0 0px 10px #888888',
                                backgroundColor: 'white',
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <div className="number-actions" style={{ width: 'fit-content', }}>
                                    <StyledTextField
                                        label=""
                                        type="number"
                                        value={quantity}
                                        sx={{
                                            border: 'none',
                                        }}
                                        InputProps={{
                                            disableUnderline: true,
                                            inputProps: { step: 1, min: 0 },
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <IconButton onClick={DecrementQuan}>
                                                        <RemoveIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={IncrementQuan}>
                                                        <AddIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>

                                <div className="add-to-cart-block" style={{ width: '100%' }}>
                                    {quantity > 0 ? (
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
                                                Add to cart
                                            </Button>
                                        </Box>
                                    ) : (
                                        <Box sx={{ '& button': { m: 1 } }}>
                                            <Button
                                                className="cancel-btn"
                                                style={{
                                                    width: '100%',
                                                    margin: '0 !important',
                                                    height: '50px',
                                                    borderRadius: '10px',
                                                    backgroundColor: 'red',
                                                    color: 'white',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    border: 'none',
                                                }}
                                                variant="contained"
                                                size="large"
                                            >
                                                Cancel
                                            </Button>
                                        </Box>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div >
    )
}