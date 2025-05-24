import { useContext } from "react";
import { ProductContext } from "../context";

export default function OrderSummary() {

    const { productData } = useContext(ProductContext);

    const cartProducts = productData.filter(p => p.inCart > 0);

    const subtotal = cartProducts.reduce((total, item) =>  {
        return total + (item.price * item.inCart)
    }, 0);

    return (
        <div className="mt-6">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>

            <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between text-red-500">
                    <span>Discount (-20%)</span>
                    <span>-{subtotal*0.2}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">$15</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                    <span>Total</span>
                    <span>${subtotal - (subtotal*0.2)}</span>
                </div>
            </div>

            {/* <!-- Promo Code --> */}
            <div className="flex items-center space-x-2 mb-6">
                <div className="flex-grow relative">
                    <input type="text" placeholder="Add promo code"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm" />
                </div>
                <button className="bg-black text-white rounded-md px-4 py-2 text-sm hover:bg-gray-800">Apply</button>
            </div>

            {/* <!-- Checkout Button --> */}
            <a href="#"
                className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors">
                Go to Checkout
                <span className="inline-block ml-2">→</span>
            </a>
        </div>
    )
}