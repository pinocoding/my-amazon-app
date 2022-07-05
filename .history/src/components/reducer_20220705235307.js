export const initialState = {
  basket: [],
};
// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
//
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        // this will remove all of them and we dont want to
        // ...state,
        // basket: state.basket.filter((item) => item.id !== action.id),
        const index = state.basket.findIndex()
      };

    default:
      return state;
  }
};
export default reducer;
