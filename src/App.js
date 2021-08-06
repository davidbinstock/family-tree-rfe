import React from 'react';
import data from './data/data.json';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as pages from "./pages";

function App() {

  return (
    <Router>
          <Switch>
              <Route exact path="/" component={pages.LandingPage} />
              <Route path="/tree" component={pages.TreeViewer} />
          </Switch>
    </Router>
  );
}

export default App;
