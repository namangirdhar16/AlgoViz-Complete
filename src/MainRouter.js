import React from "react";
import { BrowserRouter ,Route} from "react-router-dom";
import Searching from "./Searching";
import Menu from "./Menu.js";

 
export default function MainRouter()
{
  return (<>

<Route path="/searching" component={Searching} />
  <Route  exact path="/" component={Menu} />
  
  </>
  );
}