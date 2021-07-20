import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import ContactUs from "./components/contactus";
import EventsInternal from "./components/eventsinternal";
import Offering from "./components/offerings";
import Blog from "./components/blog";
import BlogInternal from "./components/bloginternal";
import BlogList from "./components/bloglist";
function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contactus" component={ContactUs}></Route>
        <Route exact path="/events" component={EventsInternal}></Route>
        <Route exact path="/events/:id" component={EventsInternal}></Route>
        <Route exact path="/offering" component={Offering}></Route>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:id" component={BlogInternal} />
        <Route exact path="/blogs/:category" component={BlogList }/>
      </Switch>
    </Router>
  );
}

export default Routing;
