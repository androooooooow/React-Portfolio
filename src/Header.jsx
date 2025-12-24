function NavBar() {
    return (
        <header className="navbar">
            <div className="nav-container">
                <div className="nav-logo">andrew</div>

                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Selected Projects</a></li>
                        <li><a href="#">Designs</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
