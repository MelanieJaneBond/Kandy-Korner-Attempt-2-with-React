import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
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