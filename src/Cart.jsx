import emptyCartIcon from './assets/images/illustration-empty-cart.svg'
import carbonNeutralIcon from './assets/images/icon-carbon-neutral.svg'

export const Cart = ({ cartItems = [], onRemoveItem, onConfirmOrder }) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full h-fit">
            <h2 className="text-xl font-bold text-[#2D1E0F] mb-6 font-red-hat">
                Your Cart ({totalItems})
            </h2>
            
            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8">
                    <img 
                        src={emptyCartIcon} 
                        alt="Empty cart" 
                        className="w-24 h-24 mb-4"
                    />
                    <p className="text-[#B85C2B] text-sm font-red-hat">
                        Your added items will appear here
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-[#f0f0f0]">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-[#2D1E0F] font-red-hat">
                                        {item.name}
                                    </span>
                                    <span className="text-sm text-[#B85C2B] font-red-hat">
                                        {item.quantity}x @ ${item.price.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 ml-4">
                                <span className="font-semibold text-[#2D1E0F] font-red-hat whitespace-nowrap">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                <button
                                    onClick={() => onRemoveItem(index)}
                                    className="text-[#B85C2B] hover:text-red-500 transition-colors w-6 h-6 rounded-full border border-[#B85C2B] hover:border-red-300 flex items-center justify-center flex-shrink-0"
                                    aria-label="Remove item"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))}
                    
                    <div className="pt-4">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-semibold text-[#2D1E0F] font-red-hat">Order Total</span>
                            <span className="text-xl font-bold text-[#2D1E0F] font-red-hat">
                                ${totalPrice.toFixed(2)}
                            </span>
                        </div>
                        
                        <div className="flex items-center justify-center gap-2 text-xs text-[#B85C2B] mb-4 py-2 bg-[hsl(20,50%,98%)] rounded-lg">
                            <img src={carbonNeutralIcon} alt="Carbon neutral" className="w-4 h-4" />
                            <span className="font-red-hat">This is a carbon-neutral delivery</span>
                        </div>
                        
                        <button 
                            onClick={onConfirmOrder}
                            className="w-full bg-[hsl(14,86%,42%)] text-white rounded-full py-3 font-semibold hover:bg-[hsl(14,86%,35%)] transition-colors font-red-hat"
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
} 