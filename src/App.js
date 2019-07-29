import React, { Component } from 'react';

/*import "./App.css"; */

import Home from "./pages/home"
import Rooms from "./pages/rooms"
import Singleroom from "./pages/singleroom"
import Error from "./pages/error"
/*import Home from "./pages/home" */
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={Singleroom} />
        </Switch>
      </div>
    );
  }
}

export default App;
