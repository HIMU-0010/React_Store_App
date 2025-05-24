import Rating from "../Rating";
import { getImgUrl } from "../utils/product-utility";
import { useContext } from "react";
import { ProductContext } from "../context";

export default function ProductCard({ product }) {

    const { setProductData } = useContext(ProductContext);

    function handleAddToCart(product) {
        setProductData(prev =>
            prev.map(p =>
                p.id === product.id
                    ? { ...p, stock: Math.max(p.stock - 1), inCart: (p.inCart + 1 )}
                    : p
            )
        );
    }

    function handleRemoveCartItem(product) {
        setProductData(prev => 
            prev.map(p => 
                p.id === product.id
                    ? {...p , stock: (p.stock + p.inCart) , inCart: 0}
                    : p
            )
        );
    }

    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={getImgUrl(product.cover)} alt={product.title}
                    className="h-full w-auto object-cover" />
            </div>
            <div className="p-4">
                <h3 className="font-medium">{product.title}</h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center my-1">
                        <div className="flex text-yellow-400">
                            <Rating value={product.rating} />
                        </div>
                        <span className="text-xs font-medium text-gray-600 ml-1">{product.rating}/5</span>
                    </div>
                    <span className="text-xs text-gray-700">{product.stock ? `In-Stock: ${product.stock}` : "Out-of-Stock"}</span>
                </div>
                <p className="font-bold">${product.price} </p>
                {product.inCart > 0
                    ? (<button
                        className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
                        onClick={() => handleRemoveCartItem(product)}
                    >
                        Remove from Cart
                    </button>)
                    : (<button
                        className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
                        disabled={product.stock === 0}
                        onClick={() => handleAddToCart(product)}
                    >
                        Add to Cart
                    </button>)
                }
            </div>
        </div>
    )
}