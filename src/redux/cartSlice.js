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
            if (!item || !item.foodID) {
                return;
              }
            const existingItem = state.items.find((cart) => cart.foodID === item.foodID)
            if(existingItem){
                existingItem.quantity += quantity;
            }else{
                state.items.push({
                    foodID: item.foodID,
                    img: item.img,
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

export default cartSlice;
export const {addItem, clearItem,clearCart,increaseQuantity,decreaseQuantity}  = cartSlice.actions