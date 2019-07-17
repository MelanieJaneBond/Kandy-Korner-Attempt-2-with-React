import NavBar from "./navBar";
import KandyKorner from "./applicationViews"

class Master extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <KandyKorner />
            </React.Fragment>
        )
    }
}

export default Master