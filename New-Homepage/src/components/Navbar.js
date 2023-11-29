import { useState } from "react"

export default function Navbar(){
    let [showMenu, setShowMenu] = useState(false)
    return(
        <nav>
            <img className="logo" src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
                <ul className={showMenu ? 'showLinks':'hideLinks'}>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            <img onClick={()=> setShowMenu(prevShowMenu => !prevShowMenu)} className="mobile-menu" src={`${process.env.PUBLIC_URL}/assets/images/${showMenu ? 'icon-menu-close.svg':'icon-menu.svg'}`} alt="" />
        </nav>
    )
}