import { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from "./pages/Main";
import Costs from "./pages/Costs";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/costs" component={Costs}></Route>
        {/* <Route component={NotFound}></Route> */}
      </Switch>
        </Fragment>
  );
}
export default App;
