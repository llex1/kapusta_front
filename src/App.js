import { Fragment } from 'react';
import {Route} from 'react-router-dom';

import Main from "./pages/Main";
import Cost from "./pages/Cost";

import "./App.css";


function App() {
  return (
    <Fragment>
      <Route exact path="/"><Main/></Route>
      <Route exact path="/cost"><Cost/></Route>
    </Fragment>
  );
}
export default App;
