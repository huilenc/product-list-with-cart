import { ProductCard } from './ProductCard'
import products from '../data.json'
import { ProductList } from './ProductList'
import { Cart } from './Cart'
import { OrderConfirmedModal } from './OrderConfirmedModal'
import { useState } from 'react'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [itemQuantities, setItemQuantities] = useState({})
  const [showOrderModal, setShowOrderModal] = useState(false)

  // Add item to cart
  const onAddToCart = (product) => {
    const productId = product.name // Use product name as unique identifier
    const newQuantities = { ...itemQuantities }
    newQuantities[productId] = (newQuantities[productId] || 0) + 1
    setItemQuantities(newQuantities)
    
    // Update cart items
    const existingItem = cartItems.find(item => item.name === product.name)
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.name === product.name 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  // Increment quantity
  const onIncrement = (product) => {
    const productId = product.name
    const newQuantities = { ...itemQuantities }
    newQuantities[productId] = (newQuantities[productId] || 0) + 1
    setItemQuantities(newQuantities)
    
    setCartItems(cartItems.map(item => 
      item.name === product.name 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }

  // Decrement quantity
  const onDecrement = (product) => {
    const productId = product.name
    const newQuantities = { ...itemQuantities }
    if (newQuantities[productId] > 1) {
      newQuantities[productId] = newQuantities[productId] - 1
      setItemQuantities(newQuantities)
      
      setCartItems(cartItems.map(item => 
        item.name === product.name 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ))
    } else {
      // Remove item if quantity becomes 0
      const { [productId]: removed, ...remaining } = newQuantities
      setItemQuantities(remaining)
      
      setCartItems(cartItems.filter(item => item.name !== product.name))
    }
  }

  // Remove item from cart
  const onRemoveItem = (index) => {
    const itemToRemove = cartItems[index]
    const { [itemToRemove.name]: removed, ...remaining } = itemQuantities
    setItemQuantities(remaining)
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  // Confirm order
  const onConfirmOrder = () => {
    setShowOrderModal(true)
  }

  // Start new order
  const onStartNewOrder = () => {
    setCartItems([])
    setItemQuantities({})
    setShowOrderModal(false)
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-[hsl(20,50%,98%)] font-red-hat flex flex-col">
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 bg-[hsl(20,50%,98%)]">
        <h1 className="text-3xl font-bold text-[#2D1E0F] mb-8">Desserts</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[70%]">
            <ProductList 
              products={products}
              itemQuantities={itemQuantities}
              onAddToCart={onAddToCart}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
          <div className="lg:w-[30%] lg:flex-shrink-0">
            <Cart 
              cartItems={cartItems}
              onRemoveItem={onRemoveItem}
              onConfirmOrder={onConfirmOrder}
            />
          </div>
        </div>
      </div>

      <footer className="attribution bg-[hsl(20,50%,98%)]">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.  
        Coded by <a href="https://x.com/huicanu">Huilen Canullan</a>. 
      </footer>

      {showOrderModal && (
        <OrderConfirmedModal 
          cartItems={cartItems}
          totalPrice={totalPrice}
          onStartNewOrder={onStartNewOrder}
        />
      )}
    </div>
  )
}

export default App
