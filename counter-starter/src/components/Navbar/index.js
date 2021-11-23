import Style from './Navbar.module.css'
import ShoppingIcon from "../../assets/shopping-icon.svg";

const Navbar = () => {
    return(
        <nav className={Style.nav}>
            <img className={Style.navIcon} src={ShoppingIcon} alt="Nav Icon"/>
            <h1 className={Style.NavTitle}>Shopping List</h1>
            
        </nav>
    )
}

export default Navbar;