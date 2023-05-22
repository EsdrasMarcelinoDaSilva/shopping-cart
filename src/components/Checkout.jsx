import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import '../style/style.css'

export default function Checkout(props) {
    const {selectedProducts, totalPrice, cartCount} = props

    return (
        <>
        <Header />
        <div className="container-checkout">
            <div className="field-checkout">
                <h1>Checkout</h1>
                <p>Chosen products</p>
            </div>
            <div className="div-checkout">
                {selectedProducts.map((item) => (
                    <React.Fragment key={item.id}>
                    <img className="img-checkout" 
                    key={item.id}
                    src={item.image}  
                    alt={item.title}
                    />
                    </React.Fragment>
                ))}
            </div>
            <div className="div-final">
                <p>Total items: {cartCount}</p>
                <p>Total value: R$ <strong>{totalPrice.toFixed(2)}</strong></p>
            </div>
            <div className="div-btn-final"><button>Confirm purchase</button></div>
        </div>
        <Footer />
        </>
    )
}