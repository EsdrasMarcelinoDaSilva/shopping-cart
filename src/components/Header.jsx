import { Logo } from "../assets/logo"
import "../style/style.css"

export default function Header() {
    return (
        <header className="header-store">
            {Logo.map((l) => (
                <div key={l.id} className="div-header">
                    <img className="logo" src={l.url}
                    alt="logo"/>
                    <h2 className="h2-logo">{l.describe}</h2>
                </div>
            ))}
        </header>
    )
}
