import React from "react";
import { useState } from 'react';
import "../ViewCart/ViewCart.scss";


import { Button, InputAdornment, IconButton, TextField } from "@mui/material";
import { Box, styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { useDispatch } from "react-redux"
import { increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';

export default function CartItem({item}) {

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

    return (
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
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
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
    )
}
