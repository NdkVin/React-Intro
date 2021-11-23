import Style from './Navbar.module.css'

import SearchIcon from '../../assets/search-icon.svg'
import EmojiIcon from '../../assets/emoji-icon.svg'

const Navbar = () => {
    return(
        <nav className={Style.nav}>
            <img style={{marginRight:8}} className={Style.navIcon} src={EmojiIcon} alt="emoji icon"/>
            <img style={{marginTop:3}} className={Style.navIcon} src={SearchIcon} alt="search icon"/>
            <span className={Style.navTitle}></span>
        </nav>
    )
}

export default Navbar;