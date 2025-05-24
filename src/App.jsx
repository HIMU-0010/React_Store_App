import Products from "./Products";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetterSection from "./NewsLetterSection";
import { ProductContext } from "./context";
import { useReducer } from "react";
import { initialState, productReducer } from "./reducers/productReducers";

export default function App() {
  const [state, dispatch] = useReducer(productReducer, initialState)
  return (
    <>
      <ProductContext.Provider value={{ state, dispatch }}>
        <Header />
        <Products />
      </ProductContext.Provider>
      <NewsLetterSection />
      <Footer />
    </>
  )
};