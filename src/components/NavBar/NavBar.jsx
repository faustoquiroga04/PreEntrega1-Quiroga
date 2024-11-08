import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
function NavBar(){
    return (
        <nav>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Smartphones</a></li>
            <li><a href="#">Notebooks</a></li>
            <li><a href="#">PC</a></li>
            <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar 