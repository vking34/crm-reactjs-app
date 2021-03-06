import React from "react";
import {Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard";
import ToDo from "./Todo";
import Customers from "./Customers";
import asyncComponent from "../../util/asyncComponent";

const Main = ({match}) => (
  <Switch>
    <Route path={`${match.url}/dashboard`} component={Dashboard}/>
    <Route path={`${match.url}/customers`} component={Customers}/>
    <Route path={`${match.url}/tasks`} component={ToDo}/>
    <Route path={`${match.url}/algolia`} component={asyncComponent(() => import('../algolia'))}/>
  </Switch>
);

export default Main;
