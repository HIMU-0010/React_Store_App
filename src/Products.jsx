import { useState } from "react";
import CartSection from "./cart/CartSection";
import ProductsList from "./products/ProductsList";

export default function Products() {
    const [sortOption, setSortOption] = useState("Most Popular");
    return (
        <main className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* <!-- Products Section (2/3 width on large screens) --> */}
                <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">Your Products</h2>
                        <div className="flex items-center space-x-2">
                            <span className="text-sm">Sort by:</span>
                            <select 
                                className="border rounded-md px-2 py-1 text-sm"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option>Most Popular</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Products Grid --> */}
                    <ProductsList sortOption={sortOption}/>
                </div>

                {/* <!-- Cart Section (1/3 width on large screens) --> */}
                <CartSection />
            </div>
        </main>
    )
}