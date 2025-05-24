import { useContext } from "react";
import { ProductContext } from "../context";
import { getImgUrl } from "../utils/product-utility";
import { IoIosCloseCircleOutline } from "react-icons/io";


export default function CartProducts() {
    const { state, dispatch } = useContext(ProductContext);

    const cartProducts = state.productData.filter(p => p.inCart > 0);

    function handleAddToCart(product) {
        dispatch({
            type: "ADD_ONE_PRODUCT_TO_CART",
            payload: product
        });
    };

    function handleRemoveFromCart(product) {
        if(product.inCart <= 1) return;

        dispatch({
            type: "REMOVE_ONE_PRODUCT_FROM_CART",
            payload: product
        });
    };

    function handleRemoveCartItem(product) {
        dispatch({
            type: "REMOVE_ALL_PRODUCT_FROM_CART",
            payload: product
        });
    };

    return (
        cartProducts.map(item => (
            <div key={item.id} className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                    <img src={getImgUrl(item.cover)} alt={item.title}
                        className="h-full w-auto object-cover" />
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between">
                        <h3 className="font-medium">{item.title}</h3>
                        <button 
                            onClick={() => handleRemoveCartItem(item)}
                        >
                            <IoIosCloseCircleOutline className="text-red-400 hover:text-red-600 hover:-translate-y-1/6" />
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold">${item.price}</p>
                        <div className="flex items-center space-x-2">
                            <button
                                className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center disabled:cursor-not-allowed disabled:text-gray-400"
                                disabled={item.inCart <= 1}
                                onClick={() => handleRemoveFromCart(item)}
                            >
                                −
                            </button>
                            <span className="text-sm">{item.inCart}</span>
                            <button
                                className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center disabled:cursor-not-allowed disabled:text-gray-400"
                                disabled={item.stock === 0}
                                onClick={() => handleAddToCart(item)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}