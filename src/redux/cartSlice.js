import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[],
        total: 0,
    },
    reducers: {
        addItem: (state,action) =>{
            const{item, quantity} = action.payload;
            const existingItem = state.items.find((cart) => cart.foodID === item.foodID)
            if(existingItem){
                existingItem.quantity += quantity;
            }else{
                state.push({
                    foodID: item.foodID,
                    shopName: item.shopName,
                    name: item.name,
                    price: item.price,
                    quantity
                })
            }
            state.total += item.price * quantity
        },
        removeItem: (state,action) =>{
            const{foodID, quantity} = action.payload;
            const existingItem = state.items.find(cart => cart.foodID === foodID)
            if(existingItem){
                existingItem.quantity -= quantity;
                total -= existingItem.
            }
        }
    }
})