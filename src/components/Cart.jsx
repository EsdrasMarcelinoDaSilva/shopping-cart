import Header from "./Header"
import Footer from "./Footer"
import "../style/style.css"

export default function Cart(props) {
    const {cartItems, cartCount, totalPrice, onUpdateCartCount} = props

    const handleIncrement = () => {
        onUpdateCartCount(cartCount + 1)
    }
    const handleDecrement = () => {
        onUpdateCartCount(cartCount - 1)
    }

    return (
        <>

        <Header />

        <div className="div-section">
            <div className="div-section-1">
                <h1 className="h1-title">Cart</h1>
                <span className="amount">{cartCount}</span>
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="section-item">
                    <img className="img-section" src={item.image} alt="" />
                    <div className="p-field">
                        <p className="p-title">{item.title}</p>
                        <p className="p-title">Price: R$ <strong>{item.price }</strong></p>
                        <p className="p-title">Quantity:{item.quantity}</p>
                        <div className="plus-less">
                            <span className="plus" onClick={handleIncrement}>+</span>
                            <span className="less" onClick={handleDecrement}>-</span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="total-p">Total: R$ 
                <strong>
                    {totalPrice}
                </strong>
            </div>
            <div className="div-btn-products">
                <button className="btn-cart" onClick={props.onGoToProducts}>
                    Go to products
                </button>
                <button className="btn-cart" onClick={props.onGoToCheckout}>
                    Checkout
                </button>
            </div>
        </div>

        <Footer />

        </>
    )
}