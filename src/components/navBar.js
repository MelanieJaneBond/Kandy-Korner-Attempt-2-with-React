class NavBar extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Store Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/hires">People Employed by Kandy Korner</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/kinds">The Kinds of Candy You'll Find at Kandy Korner</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar