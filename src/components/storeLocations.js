class StoreLocations extends Component {
    render() {
        return (
            <section className="store-locations-list">
                <h1>Store Locations List</h1>
                {this.props.stores.map( storeLocation =>
                <div key={storeLocation.id}>{storeLocation.location}
                </div>
                )}
            </section>
        );
    }
}

export default StoreLocations