import Products from "./Products";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetterSection from "./NewsLetterSection";
import { ProductContext } from "./context";
import { useState } from "react";
import { getAllProduct } from "./data/products";

export default function App() {
  const [productData, setProductData] = useState(getAllProduct());
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <>
      <ProductContext.Provider value={{ productData, setProductData, searchTerm, setSearchTerm }}>
        <Header />
        <Products />
      </ProductContext.Provider>
      <NewsLetterSection />
      <Footer />
    </>
  )
};