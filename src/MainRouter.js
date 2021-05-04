import React from "react";
import { Route} from "react-router-dom";
import Searching from "./Searching";
import Sorting from "./Sorting.js"
import Menu from "./Menu.js";
import LandingPage from "./landingPage.js";
import Algolist from "./algolist.js";
import "./bootstrap.min.css";
import "./cover.css";
import Login from './Login.js';
import PathFinder from "./Pathfinder/PathFinder.js";
import "./MainRouter.css";
import About from './About.js';

export default function MainRouter()
{
  return (<>

<Route path="/searching" component={Searching} />
  <Route  exact path="/" component={Menu} />
  <Route path="/algolist" component={Algolist} />
  <Route path="/sorting" component={Sorting} />
  <Route path='/pathfinder' component={PathFinder} />
  <Route path='/login' component={Login} />
  <Route path='/about' component={About} />
  </>
  );
}