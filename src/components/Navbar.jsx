import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="wrapper">
            <div className="logo"><a href=''>Fresh<span>GO</span></a></div>
                <div className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#tutors">Products</a></li>
                        <li><a href="#partners">Article</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar