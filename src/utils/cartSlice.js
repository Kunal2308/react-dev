import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(old) Redux => DON"T MUTATE STATE, returing was mandetory
      // const newState = [..state];
      // newState.items.push(action.payload);
      // return newState

      // mutating the state, directly modifing the state here
      // Redux Toolkit => We HAVE to mutate the state
      // Redux Toolkit uses IMMER in Behind the sceen.
      // IMMER is doing the all the previous job, it is taking care all the immutation of state in background.
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    // originalState = ["pizza"]
    clearCart: (state, action) => {
      // console.log(current(state));
      // state = [];
      // console.log(current(state));
      // RTK - either Mutate the existing state or return a new state
      // state.items.length = 0; // originalState = []
      // || return {items:[]} => this new [] will be replaced inside originalState= {items:[]}
      state.items.length = 0; // ||   return {items:[]}; both works same => both means // state=[]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
