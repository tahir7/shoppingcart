import { createSlice } from "@reduxjs/toolkit";
import { productSchema } from './../../hooks/useProduct';


const initialState  = {
  products :   localStorage.getItem("cartDetails") ?
     JSON.parse(localStorage.getItem("cartDetails")!) :[],

    totalQuantity : 0, 
    totalPrice : 0

  // id: 0,
  // title: "",
  // price: 0,
  // description: "",
  // category: "",
  // image: "",
  // rating: { rate: 0, count: 0 },
  // quantity : 0,
  // totalPrice : 0
}
const ProductSlice = createSlice({
  
  name: "cartProducts",
  initialState, 
  // : [],

  reducers: {
    addItem(state, action) {
      // debugger
      const index :number = state.products.findIndex( p => 
        p.id === action.payload.id);
      
      if(index === -1) {
        const temp = {...action.payload, quantity : 1}
        state.products.push(temp);
           
      } else {
        state.products[index].quantity += 1;            
      }     
      localStorage.setItem("cartDetails", JSON.stringify(state.products))
    },
    
    removeItem(state, action) {
        //  debugger
   const index :number = state.products.findIndex( p => 
    p.id === action.payload.id);
  
  if(state.products[index].quantity === 1) {
    // const temp = {...action.payload, quantity : 1}
    // state.products.push(temp);

    const temp = state.products.filter(p => p.id !== action.payload.id)
    console.log("temp       ",temp);
    state.products = temp;
          
  } else {
    state.products[index].quantity -= 1;            
  }     
  localStorage.setItem("cartDetails", JSON.stringify(state.products))
},

    clearCart(state, action) {
      console.log("clear Cart ", action);

      const temp = state.products.filter(p => p.id === action.payload.id)
      
      console.log("clear Cart ", temp);

      state.products = temp;
      localStorage.setItem("cartDetails", JSON.stringify(state.products));
      // return [];
    },

  getTotalPriceQuantity(state, action) {
    // debugger;
    let {totalPrice, totalQuantity} =   
    state.products.reduce( (cartTotal : {totalPrice : 0,totalQuantity : 0}, 
        products : productSchema) => {
        
          const {price, quantity} = products;
          const productTotal = price * quantity;

          cartTotal.totalPrice += productTotal;
          cartTotal.totalQuantity += quantity;

          return cartTotal;
      }, 
      
      {
        totalPrice : 0,
        totalQuantity : 0
      });

      state.totalPrice =totalPrice;
      state.totalQuantity = totalQuantity;
      }
  },
});
// console.log("actions   ", ProductSlice.actions)
console.log("actions   ", ProductSlice.reducer);

export default  ProductSlice.reducer ;

export const {addItem } = ProductSlice.actions;
export const {removeItem } = ProductSlice.actions;
export const {clearCart } = ProductSlice.actions;
export const {getTotalPriceQuantity } = ProductSlice.actions;
