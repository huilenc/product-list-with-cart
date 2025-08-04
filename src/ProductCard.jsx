import { AddToCartButton } from './AddToCartButton'

export const ProductCard = ({
    product,
    quantity,
    onAddToCart,
    onIncrement,
    onDecrement,
}) => {
    return (
        <div className={`bg-white rounded-xl shadow-md p-0 flex flex-col items-center relative transition-all duration-200 border-2 font-red-hat ${quantity > 0 ? "border-[#B85C2B]" : "border-transparent"}`}>
            <div className="w-full h-48 overflow-hidden rounded-t-xl relative">
                <img
                    src={product.image.desktop}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
                <AddToCartButton 
                    onAddToCart={onAddToCart}
                    quantity={quantity}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                />
            <div className="w-full px-4 pt-8 pb-4 flex flex-col items-start">
                <span className="text-xs text-gray-400 mb-1 font-normal">{product.category}</span>
                <h2 className="text-base font-bold mb-2 text-[#2D1E0F] font-red-hat leading-tight">{product.name}</h2>
                <span className="text-sm font-semibold text-[#B85C2B] font-red-hat">${product.price.toFixed(2)}</span>
            </div>
        </div>
    );
};