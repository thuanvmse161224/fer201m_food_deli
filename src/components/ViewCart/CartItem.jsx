import React from "react";
import { useState } from 'react';
import "../ViewCart/ViewCart.scss";


import { Button, InputAdornment, IconButton, TextField } from "@mui/material";
import { Box, styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


import cafe from '/Cart/imgs/cafeSua.png';
import miQuangTomThit from '/Cart/imgs/MyQuangTomThit.png';

import { useSelector } from "react-redux"
export default function CartItem() {

    const [quantity, setQuan] = useState(1);

    const IncrementQuan = () => {
        setQuan(prevQuan => prevQuan + 1);
    };

    const DecrementQuan = () => {
        setQuan(prevQuan => (prevQuan > 0 ? prevQuan - 1 : 0));
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
    return (
        <div className="food-item-wrap" style={{ overflow: 'auto' }}>
            <div className="food-item" style={{
                height: '48px',
            }}>

                <div className="quantity-actions">
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
                {items.map((item) => ( 
                    <div className="food-item-info" key = {item.foodID}>
                            
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
                ))}


            </div>
        </div>
    )
}
