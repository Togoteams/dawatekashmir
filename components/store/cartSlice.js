'use client';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const found = state.find(i => i.id === item.id);
      if (found) {
        found.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(i => i.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: () => [],
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;