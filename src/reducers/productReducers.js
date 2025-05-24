import { getAllProduct } from "../data/products";

export const initialState = {
  productData: getAllProduct(),
  searchTerm: "",
};

export function productReducer(state, action) {
  switch (action.type) {
    case "ADD_ONE_PRODUCT_TO_CART":
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                stock: Math.max(product.stock - 1, 0),
                inCart: product.inCart + 1,
              }
            : product
        ),
      };
    case "REMOVE_ONE_PRODUCT_FROM_CART":
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                stock: product.stock + 1,
                inCart: Math.max(0, product.inCart - 1),
              }
            : product
        ),
      };
    case "REMOVE_ALL_PRODUCT_FROM_CART":
      return {
        ...state,
        productData: state.productData.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                stock: product.stock + product.inCart,
                inCart: 0,
              }
            : product
        ),
      };
    case "SET_SEARCH_TERM":
        return {
            ...state,
            searchTerm: action.payload
        };
    default:
      return state;
  }
}
