import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import ContactUs from "./components/contactus";
import EventsInternal from "./components/eventsinternal";
import Event_landing from "./components/Event_landing";
import Blog from "./components/blog";
import BlogInternal from "./components/bloginternal";
import BlogList from "./components/bloglist";
import SearchResult from "./components/searchresult";
import EventSearchResult from "./components/eventsearchresult";
import FacilitatorInfo from "./components/facilitatorInfo";
import Organisation_landing from "./components/organisation_landing";
import Facilitator_landing from "./components/facilitator_landing";
import Program from "./components/program";
import Offering from "./components/Offering";
import Organisation from "./components/organisation_internal";
import EventList from "./components/event_cate";
import AnnualEvent from "./components/annual";
import All_Events from "./components/all_events";
import All_Programs from "./components/all_program";
import PastEvent from "./components/past_event";
import UpcomingEvent from "./components/upcoming_events";
function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contactus" component={ContactUs}></Route>
        <Route exact path="/events" component={EventsInternal}></Route>
        <Route exact path="/events/:id" component={EventsInternal}></Route>
        <Route exact path="/find_event" component={Event_landing}></Route>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:id" component={BlogInternal} />
        <Route exact path="/blogs/:category" component={BlogList} />
        <Route exact path="/search" component={SearchResult} />
        <Route exact path="/searchevent" component={EventSearchResult}></Route>
        <Route exact path="/organisation/:id" component={Organisation}></Route>
        <Route exact path="/facilitator/:id" component={FacilitatorInfo}></Route>
        <Route exact path="/organisation_landing" component={Organisation_landing}></Route>
         <Route exact path="/facilitator_landing" component={Facilitator_landing}></Route>
         <Route exact path="/offering" component={Offering}></Route>
         <Route exact path="/program/:id" component={Program} />
         <Route exact path="/event/:category" component={EventList} />
         <Route exact path="/event_type/:type" component={AnnualEvent}/>
         <Route exact path="/all_event" component={All_Events}/>
         <Route exact path="/all_program" component={All_Programs}/>
         <Route exact path="/past_event" component={PastEvent}/>
         <Route exact path="/upcoming_event" component={UpcomingEvent}/>
      </Switch>
    </Router>
  );
}

export default Routing;
