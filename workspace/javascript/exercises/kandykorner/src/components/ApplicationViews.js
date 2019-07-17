import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class KandyKorner extends Component {
    render() {
        return (
            <StoreList />
            <EmployeeList />
            <CandyTypesList />
            // pass the appropriate state to each of the components listed above.
        );
    }
}

class IndividualCandies extends Component {
    //not sure where to put this just yet...
    render() {
        return (
            <div>
                <section>Little Piggies</section>
                <section>Little Zebra Squares</section>
                <section>Chocolate Truffles</section>
                <section>Gut-Friendly Bug Gummies</section>
            </div>
        );
    }
}


ReactDOM.render(<KandyKorner />, document.querySelector("#root"));