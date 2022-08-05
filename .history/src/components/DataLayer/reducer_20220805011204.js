export const initialState = {
  isDark:
    localStorage.getItem("isDark") == null
      ? []
      : JSON.parse(localStorage.getItem("IsDark")),
  itembox:
    localStorage.getItem("item") == null
      ? []
      : JSON.parse(localStorage.getItem("item")),
};

const reducer = (state, action) => {
  switch (action.type) {
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
