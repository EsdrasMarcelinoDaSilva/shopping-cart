import {products} from "../assets/products.js"
import { useState, useEffect } from "react"
import "../style/style.css"


export default function Section(props){
    const [cartCount, setCartCount] = useState(0)
    const [selectedItems, setSelectedItems] = useState([])

    const handleAddCart = (event, product) => {
        if(event.target.checked){
            setCartCount(cartCount + 1) 
            setSelectedItems([...selectedItems, {...product, quantity: 1}])   
        }else{
            setCartCount(cartCount - 1)
            setSelectedItems(selectedItems.filter((item) => item.id !== product.id))
        }
    }
    
    useEffect(() => {
        props.onUpdateCart(selectedItems)
        props.onUpdateCartCount(cartCount) 
    }, [selectedItems, cartCount])

    return(
        <section>
            <div className="field-section">
                <div className="div-section-1">
                    <h1 className="h1-title">Products</h1>
                    <span className="amount">{cartCount}</span>
                </div>
            </div>
            <div className="section">
                <div className="div-product">
                    {products.map((product) => (
                        <div key={product.id} className="product">
                            <img className="img-product"
                            src={product.image}
                            />
                            <div className="value-select">
                                <input type="checkbox" 
                                onChange={(event) =>  handleAddCart(event, product)}/>
                                <span>Price: R$ <strong>{product.price}</strong></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="div-btn-cart">
                <button className="btn-cart" onClick={props.onGoToCart}>
                    Go to cart
                </button>
            </div>
        </section>
    )
}