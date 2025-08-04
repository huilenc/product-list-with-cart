import { ProductCard } from './ProductCard'

export const ProductList = ({ products, itemQuantities, onAddToCart, onIncrement, onDecrement }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={{...product, id: index}}
          quantity={itemQuantities[product.name] || 0}
          onAddToCart={() => onAddToCart(product)}
          onIncrement={() => onIncrement(product)}
          onDecrement={() => onDecrement(product)}
        />
      ))}
    </div>
  )
}