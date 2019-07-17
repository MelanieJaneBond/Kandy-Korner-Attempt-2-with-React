class Employees extends Component {
    render() {
        return (
            <section className="employee-list">
                <h1>Employees at Kandy Korner</h1>
                {this.props.hires.map( each =>
                <div key={each.id}>{each.name}</div>)}
            </section>
        );
    }
}