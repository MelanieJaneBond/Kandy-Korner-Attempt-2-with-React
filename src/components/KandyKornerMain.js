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

//Add a function in KandyKorner that will remove individual candies from your inventory.
//Add a button to the JSX you have in CandyList that renders individual candies.
//Then invoke that function when the user clicks the button on an individual candy.

//NEXT chapter's assignment:
//Create a manager file in the modules directory for each of your resources.

// Candies
// Locations
// Employees
// Candy Types
// Add the get() and all() methods to each one, changing the URL path in each one to get the corresponding resource type.
//Then refactor the ApplicationViews component to import all of them and use all of them when querying your data.