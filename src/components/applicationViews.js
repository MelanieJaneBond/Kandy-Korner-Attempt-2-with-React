import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import StoreLocations from "./components/storeLocations"
import Employees from "./components/employeeList"
import CandyTypes from "./components/candyTypes"
import NavBar from "./components/navBar"
import ApplicationViews from "./components/applicationViews"

class KandyKorner extends Component {
    state = {
        stores: storeLocationsData,
        hires: employeesData,
        candyKinds: candyKindsData
    }
//the above arrays are stored in my JSON file, I haven't yet learned how to access that.
    
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreLocations storeLocations={this.state.stores}/>
                }} />
                <Route path="/hires" render={(props) => {
                    return <Employees employeeNames={this.state.hires}/>
                }} />
                <Route path="/kindsofcandy" render={(props) => {
                    return <CandyTypes candyKinds={this.state.candyKinds}/>
                }} />
            </React.Fragment>
        );
    }
}

export default ApplicationViews


//not sure where to put this just yet...

class IndividualCandies extends Component {
    render() {
        return (
            <div>
                <section>Little Piggies</section>
                <section>Tiny Zebra Squares</section>
                <section>Chocolate Truffles</section>
                <section>Gut-Friendly Bug Gummies</section>
            </div>
        );
    }
}


ReactDOM.render(<KandyKorner />, document.querySelector("#root"));