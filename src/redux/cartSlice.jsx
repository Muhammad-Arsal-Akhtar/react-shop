import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productsInCart: [],
    totalPrice: 0,
    totalQuantity: 0
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            const newItem = action.payload
            console.log(newItem)
            const itemObjectExist = state.productsInCart.find((elem) => elem.id == newItem.id)

            if (itemObjectExist) {
                itemObjectExist.quantity++
                itemObjectExist.price = parseFloat(itemObjectExist.price) + parseFloat(newItem.price)
            } else {
                state.productsInCart.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    individualItemPrice: newItem.price,
                    image: newItem.imageUrl
                })
            }

            state.totalPrice += parseFloat(newItem.price);
            state.totalQuantity++;
        },

        removeFromCart: (state, action) => {
            const removingId = action.payload
            const itemObjectExist = state.productsInCart.find((elem) => elem.id == removingId)

            if (itemObjectExist) {
                state.totalPrice = state.totalPrice - itemObjectExist.price
                state.totalQuantity = state.totalQuantity - itemObjectExist.quantity
                state.productsInCart = state.productsInCart.filter((elem) => elem.id != removingId)
            }
        },

        increaseItem: (state, action) => {
            const itemId = action.payload
            const itemExist = state.productsInCart.find((elem) => elem.id == itemId)

            if (itemExist) {
                itemExist.quantity++
                itemExist.price = Number(Number(itemExist.price) + Number(itemExist.individualItemPrice)).toFixed(2) 

                state.totalQuantity++
                state.totalPrice = Number(Number(state.totalPrice) + Number(itemExist.individualItemPrice)).toFixed(2) 
            }
        },

        decreaseItem: (state, action) => {
            const itemId = action.payload
            const itemExist = state.productsInCart.find((elem) => elem.id == itemId)

            if (itemExist && itemExist.quantity > 1) {
                itemExist.quantity--
                itemExist.price = Number(Number(itemExist.price) - Number(itemExist.individualItemPrice)).toFixed(2) 

                state.totalQuantity--
                state.totalPrice = Number(Number(state.totalPrice) - Number(itemExist.individualItemPrice)).toFixed(2) 
            }
        }

    }

})


export const { addTocart, removeFromCart, increaseItem, decreaseItem } = cartSlice.actions;

export default cartSlice.reducer;