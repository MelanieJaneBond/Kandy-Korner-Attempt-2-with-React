import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import StoreLocations from "./components/storeLocations"
import Employees from "./components/employeeList"
import CandyTypes from "./components/candyTypes"

class ApplicationViews extends Component {
    state = {
        stores: [],
        hires: [],
        candyKinds: []
    }

    componentDidMount() {
        const newState = {}
        fetch("http://localhost:5002/stores")
        .then( r => r.json() )
        .then( stores => newState.stores = stores )
        .then( () => fetch("http://localhost5002/hires")
        .then( r => r.json() ))
        .then( hires => newState.hires = hires )
        .then( () => fetch("http://localhost:5002/candyKinds")
        .then( r => r.json()))
        .then( candyKinds => newState.candyKinds = candyKinds )
        .then( () => this.setState(newState))
    }

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

// class IndividualCandies extends Component {
//     render() {
//         return (
//             <div>
//                 <section>Little Piggies</section>
//                 <section>Tiny Zebra Squares</section>
//                 <section>Chocolate Truffles</section>
//                 <section>Gut-Friendly Bug Gummies</section>
//             </div>
//         );
//     }
// }
