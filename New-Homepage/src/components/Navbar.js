import { useState } from "react"

export default function Navbar(){
    let [showMenu, setShowMenu] = useState(false)
    return(
        <nav>
            <img className="logo" src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
            <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${showMenu ? 'icon-menu-close.svg':'icon-menu.svg'}`} alt="" />
        </nav>
    )
}