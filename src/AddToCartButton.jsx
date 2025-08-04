import incrementIcon from './assets/images/icon-increment-quantity.svg'
import decrementIcon from './assets/images/icon-decrement-quantity.svg'
import addToCartIcon from './assets/images/icon-add-to-cart.svg'

export const AddToCartButton = ({ onAddToCart, quantity, onIncrement, onDecrement }) => {
    return (
        <>
        {quantity === 0 && (
            <button
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-24 bg-white border border-[hsl(14,86%,42%)] text-[hsl(14,86%,42%)] rounded-full py-2 px-8 font-semibold flex items-center justify-center gap-2 shadow-lg transition hover:bg-[hsl(14,86%,42%)] hover:text-white font-red-hat whitespace-nowrap text-sm z-10 focus:outline-none"
                onClick={onAddToCart}
            >
                <img src={addToCartIcon} alt="add to cart" className="w-4 h-4" />
                Add to Cart
            </button>
        )}
        {quantity > 0 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-24">
                <div className="flex items-center justify-center bg-[hsl(14,86%,42%)] rounded-full py-2 px-6 w-fit">
                    <img 
                        src={decrementIcon} 
                        alt="decrease" 
                        className="w-4 h-4 cursor-pointer rounded-full border border-white hover:bg-white" 
                        onClick={onDecrement} 
                    />
                    <span className="mx-6 text-white text-sm font-red-hat">{quantity}</span>
                    <img 
                        src={incrementIcon} 
                        alt="increase" 
                        className="w-4 h-4 cursor-pointer hover:text-[hsl(14,86%,42%)] rounded-full border border-white hover:bg-white" 
                        onClick={onIncrement} 
                    />
                </div>
            </div>
        )}
        </>
    );
}; 