import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import ContactUs from "./components/contactus";
import EventsInternal from "./components/eventsinternal";
import Blog from "./components/blog";
import BlogInternal from "./components/bloginternal";
function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contactus" component={ContactUs}></Route>
        <Route exact path="/events" component={EventsInternal}></Route>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blogs" component={BlogInternal} />
      </Switch>
    </Router>
  );
}

export default Routing;
