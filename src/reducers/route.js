import { handleActions } from "redux-actions";

const reducer = handleActions({
  UPDATE_ROUTE: (state, action) => {
    const pathSplit = action.payload.pathname.split("/");
    const slide = pathSplit[pathSplit.length-1];
    return Object.assign({}, {
      slide: slide,
      params: action.payload.search.replace("?", "").split("&")
    });
  }
}, { slide: 0, params: []});

export default reducer;
