export const initialState = {
  basket: [],
  itembox:
    localStorage.getItem("item") == null
      ? []
      : JSON.parse(localStorage.getItem("item")),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      const newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          ` cant remove product(id:${action.id}) as its not in basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "ADD_TO_XBOX":
      return {
        itembox: [action.item],
      };

    default:
      return state;
  }
};

//
export default reducer;