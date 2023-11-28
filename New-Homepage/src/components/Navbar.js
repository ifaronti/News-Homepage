export default function Navbar(){
    return(
        <nav>
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
            <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    )
}