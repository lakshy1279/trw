import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import ContactUs from "./components/contactus";
import EventsInternal from "./components/eventsinternal";
import Offering from "./components/offerings";
import Blog from "./components/blog";
import BlogInternal from "./components/bloginternal";
import BlogList from "./components/bloglist";
import SearchResult from "./components/searchresult";
import EventSearchResult from "./components/eventsearchresult";
import Organisation from "./components/organisation";
import Organisation_landing from "./components/organisation_landing";
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
        <Route exact path="/blogs/:category" component={BlogList} />
        <Route exact path="/search" component={SearchResult} />
        <Route exact path="/searchevent" component={EventSearchResult}></Route>
        <Route exact path="/organisation/:id" component={Organisation}></Route>
        <Route exact path="/organisation_landing" component={Organisation_landing}></Route>
      </Switch>
    </Router>
  );
}

export default Routing;
