import ProductCard from "./ProductCard";
import { useContext } from "react";
import { ProductContext } from "../context";

export default function ProductsList({ sortOption }) {

    const { state } = useContext(ProductContext);

    const sortedProducts = [...state.productData].sort((a, b) => {
    if (sortOption === "Most Popular") {
      return b.rating - a.rating;
    } else if (sortOption === "Newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortOption === "Price: Low to High") {
      return a.price - b.price;
    } else if (sortOption === "Price: High to Low") {
      return b.price - a.price;
    }
    return 0;
  });

  const filteredProducts =  sortedProducts.filter(product =>
    product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

    return (
        <div className="product-grid">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}