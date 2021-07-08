import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import ContactUs from "./components/contactus";
function Routing() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contactus" component={ContactUs}></Route>
            </Switch>
        </Router>
    );
}

export default Routing;
