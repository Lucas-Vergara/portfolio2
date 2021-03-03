import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from './components/home'
import AboutMe from './components/aboutMe'

import './App.scss'

const Routes = () => {
  return (
    <HashRouter basename='/'>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/aboutMe" component={AboutMe}/>
      </Switch>
    </HashRouter>
  )
}

export default Routes;