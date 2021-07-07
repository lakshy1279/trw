import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home";
function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </Router>
    );
}

export default Routing;
