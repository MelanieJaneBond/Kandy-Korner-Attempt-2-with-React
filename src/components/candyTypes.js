class CandyTypes extends Component {
    render() {
        return (
            <section className="candy-types-list">
                {this.props.candyKinds.map( kind =>
                <div key={kind.id}>{kind.kind}</div>)}
            </section>
        );
    }
}

export default CandyTypes