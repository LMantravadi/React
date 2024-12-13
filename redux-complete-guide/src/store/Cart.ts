import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CartItem = CartItemState["item"];
export interface CartItemState {
    item: {
        title: string,
        price: number,
        description: string,

    };
    quantity: number;
    price: number;
    total: number;
}

export interface CartState {
    items: CartItemState[];
}

export type CartActions = 
    | {type: 'addItem'; payload: CartItemState["item"]}
    | {type: 'removeItem'; payload: number}
    | {type: 'clearCart'}
    
const initialCartState = {items: []};
    const addItemToCart = (state: CartState, userItem: CartItem)=>{

        const itemIndex = state.items.findIndex(({item}) => item.title === userItem.title);
        
        if(itemIndex === -1) {
            const newItemState : CartItemState = {
                item: userItem,
                price: userItem.price,
                quantity: 1,
                total: userItem.price
            }
            state.items.push(newItemState);
        }
        else{

            const updatedItems = [...state.items];
            updatedItems[itemIndex] = { 
                ...updatedItems[itemIndex],
                quantity: updatedItems[itemIndex].quantity+1,
                total: updatedItems[itemIndex].price * (updatedItems[itemIndex].quantity + 1),
            }
            state.items = updatedItems;
        }
    }

    const removeItemFromCart = (state: CartState, itemTitle: string) => {
        const itemIndex = state.items.findIndex(({item}) => item.title === itemTitle)
        if(itemIndex > -1){
            const quantity = state.items[itemIndex].quantity;
            if(quantity > 1){
                state.items[itemIndex].quantity--;
                state.items[itemIndex].total = state.items[itemIndex].price * state.items[itemIndex].quantity;
            }
            else
                state.items = state.items.filter(({item}) => item.title !== itemTitle);
        }
        else{
            console.error("Item does not exist in cart")
        }
    }

    const cartSlice = createSlice({
        name: 'cart',
        initialState: initialCartState,
        reducers: {
            addItem(state, action: PayloadAction<CartItem>){
               addItemToCart(state, action.payload);
            },
            removeItem(state, action: PayloadAction<string>){
                removeItemFromCart(state, action.payload)
             },
             clearCart(state){
                state.items = [];
             }
        }
    })

    export const cartActions = cartSlice.actions;
    export default cartSlice.reducer;