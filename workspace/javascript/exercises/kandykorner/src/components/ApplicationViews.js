import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import StoreLocations from "./components/storeLocations"
import Employees from "./components/employeeList"
import CandyTypes from "./components/candyTypes"

class KandyKorner extends Component {
    state = {
        stores: ["East Nashville", "Nashville West", "Mid Town"],
        hires: ["Joseph Aramath", "Tommy Boi", "Kathy Henburn", "Marty Grans", "Britt Spirits"],
        candyKinds: ["Pink Candies", "Striped Candies", "Chocolate Candies", "Sugar-Free Candies"]
    }
    
    render() {
        return (
            <StoreLocations storeLocations={this.state.stores}/>
            <Employees employeeNames={this.state.hires}/>
            <CandyTypes candyKinds={this.state.candyKinds}/>
            // pass the appropriate state to each of the components listed above.
        );
    }
}

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