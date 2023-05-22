import { payments } from "../assets/payments"
import '../style/style.css'

export default function Footer(){
    return(
        <footer className="footer-payment">
            <div className="field-payment">
                <div>
                    <span className="span-payment">Payment methods:</span>
                </div>
                <div className="div-payment">
                    {payments.map((method) => (
                        <img className="img-payment" key={method.url} src={method.url} alt={method.alt}/>
                    ))}
                </div>
            </div>
        </footer>
    )
}