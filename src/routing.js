import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
            </Switch>
        </Router>
    );
}

export default Routing;
