import {useState} from "react"

export default function UseCart(){
    const [cartItems, setCartItems] = useState([])
    
    const addToCart = (product) => {
        setCartItems([...cartItems, product])
    }
    const removeFromCart = (product) => {
        setCartItems(cartItems.filter((item) => item.id !== product.id))
    }
    const clearCart = () => {
        setCartItems([])
    }
    
    {return cartItems, addToCart, removeFromCart, clearCart}
}