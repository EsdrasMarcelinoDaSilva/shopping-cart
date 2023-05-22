import { useState } from 'react'
import Footer from './components/Footer'
import Section from './components/Section'
import Header from './components/Header'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  const [page, setPage] = useState('products')
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

  const handleUpdateCart = (items) => {
    setCartItems(items)
  }

  const handleUpdateCartCount = (count) => {
    setCartCount(count)
  }

  const handleGoToCart = () => {
    setPage('cart')
  }

  const handleGoToProducts = () => {
    setPage('products')
  }

  const handleGoToCheckout = () => {
    setPage('checkout')
  }

  return (
    <>
    {page === 'products' && (
    <div>
      <Header cartCount={cartCount}/> 
      <Section 
        onGoToCart={handleGoToCart}
        onUpdateCart={handleUpdateCart}
        onUpdateCartCount={handleUpdateCartCount}
      />
      <Footer />
    </div>
    )}
    {page === 'cart' && (
    <div>
      <Cart 
        onGoToProducts={handleGoToProducts}
        onGoToCheckout={handleGoToCheckout}
        cartItems={cartItems}
        totalPrice={totalPrice}
        cartCount={cartCount}
        onUpdateCartCount={handleUpdateCartCount}
      />
    </div>
  )}
  {page === 'checkout' && (
    <div>
      <Checkout selectedProducts={cartItems}
        totalPrice={totalPrice}
        cartCount={cartCount}
        />
    </div>
  )} 
    </>
  )
}

export default App
