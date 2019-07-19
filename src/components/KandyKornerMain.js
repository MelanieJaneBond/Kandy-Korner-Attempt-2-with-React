import React, { Component } from "react"
import NavBar from "./navBar";
import ApplicationViews from "./applicationViews";
import "../KandyKorner.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Master extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Master