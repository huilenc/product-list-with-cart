import orderConfirmedIcon from '/assets/images/icon-order-confirmed.svg'

export const OrderConfirmedModal = ({ cartItems, totalPrice, onStartNewOrder }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="flex justify-center mb-4">
                            <img 
                                src={orderConfirmedIcon} 
                                alt="Order confirmation checkmark" 
                                className="w-16 h-16"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-[#2D1E0F] mb-2 font-red-hat">
                            Order Confirmed
                        </h2>
                        <p className="text-gray-500 font-red-hat">
                            We hope you enjoy your food!
                        </p>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-[hsl(20,50%,98%)] rounded-lg p-4 mb-6">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0">
                                <div className="flex items-center gap-3 flex-1">
                                    <img 
                                        src={item.image.desktop} 
                                        alt={`${item.name} product image`} 
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <p className="font-semibold text-[#2D1E0F] font-red-hat truncate">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-[#B85C2B] font-red-hat">
                                            {item.quantity}x @ ${item.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <span className="font-semibold text-[#2D1E0F] font-red-hat whitespace-nowrap ml-4">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}
                        
                        {/* Order Total */}
                        <div className="flex justify-between items-center pt-4">
                            <span className="font-semibold text-[#2D1E0F] font-red-hat">Order Total</span>
                            <span className="text-xl font-bold text-[#2D1E0F] font-red-hat">
                                ${totalPrice.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    {/* Start New Order Button */}
                    <button 
                        onClick={onStartNewOrder}
                        className="w-full bg-[hsl(14,86%,42%)] text-white rounded-full py-3 font-semibold hover:bg-[hsl(14,86%,35%)] transition-colors font-red-hat"
                    >
                        Start New Order
                    </button>
                </div>
            </div>
        </div>
    )
} 