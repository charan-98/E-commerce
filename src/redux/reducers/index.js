import { ADD_TO_CART } from "../actiontypes/index";

const initialState = {
  cart: [],
  TotalP: 0
};
const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      const cartValues = [...state.cart];
      let Tprice = 0;
      const existIndex = state.cart?.findIndex(
        (item) => item.id === payload.id
      );
      if (existIndex !== -1) {
        cartValues[existIndex].qty += 1;
      } else {
        payload.qty = 1;
        cartValues.push(payload);
      }
      cartValues.map((items) => {
        let price=items.price*items.qty
        Tprice = Tprice + price;
      });

      return { ...state, cart: cartValues, TotalP: Tprice };
    }
    default:
      return state;
  }
};
export default Reducer;
