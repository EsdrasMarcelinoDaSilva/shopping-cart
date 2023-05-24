import { Logo } from "../assets/logo"
import "../style/style.css"

export default function Header() {
    return (
        <header className="header-store">
            {Logo.map((logo) => (
                <div key={logo.id} className="div-header">
                    <img className="logo" src={logo.url}
                    alt="logo"/>
                    <h2 className="h2-logo">{logo.describe}</h2>
                </div>
            ))}
        </header>
    )
}
