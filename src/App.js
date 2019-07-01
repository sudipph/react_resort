import React, { Component } from 'react';

//import "./App.css";

import Home from "./pages/home"
import Rooms from "./pages/rooms"
import Singleroom from "./pages/singleroom"
import Error from "./pages/error"
//import Home from "./pages/home"


class App extends Component {
  render() {
    return (
      <div>
      <Home/>
      <Rooms/>
      <Singleroom/>
      <Error/> 
      </div>
    );
  }
}

export default App;
