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
        clearItem: (state, action) => {
            const {foodID} = action.payload;
            const item = state.items.find(cart => cart.foodID === foodID)
            if(item){
                state.total -= item.price * item.quantity
                state.items = state.items.filter(cart => cart.foodID !== foodID)
            }
        },
        clearCart: (state) =>{
            state.items = []
            state.total = 0
        },
        increaseQuantity: (state, action) => {
            const {foodID} = action.payload;
            const existingItem = state.items.find(cart => cart.foodID === foodID)
            if(existingItem){
                existingItem.quantity += 1;
                state.total += existingItem.price
            }
        },
        decreaseQuantity: (state, action) => {
            const {foodID} = action.payload;
            const existingItem = state.items.find(cart => cart.foodID === foodID)
            if(existingItem){
                existingItem.quantity -= 1;
                state.total -= existingItem.price
                if(existingItem.quantity <= 0){
                    state.items = state.items.filter(cart => cart.foodID !== foodID)
                }
            }
        },
    }
})