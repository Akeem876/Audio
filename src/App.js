/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./nav";
import Details from "./details";
import Add from "./addmusic";
import Edit from "./edit";
import Error from "./error";

function App() {
 return (
  // <>
  //  <Nav></Nav>
  //  <Details></Details>
  // </>
  <Router>
   <Nav />
   <Switch>
    <Route path="/details">
     <Details />
    </Route>
    <Route path="/add">
     <Add />
    </Route>
    <Route path="/edit">
     <Edit />
    </Route>
    <Route path="*">
     <Error />
    </Route>
   </Switch>
  </Router>
 );
}
export default App;
