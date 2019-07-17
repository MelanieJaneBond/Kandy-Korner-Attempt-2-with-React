class StoreLocations extends Component {
    render() {
        return (
            <section className="store-locations-list">
                <h1>Store Locations List</h1>
                {this.props.storeLocations.map( storeSpot =>
                <div key={storeSpot[i]}>{storeSpot[i]}
                </div>
                )}
            </section>
        );
    }
}