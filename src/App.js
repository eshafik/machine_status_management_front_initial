import React from 'react';
import {Router} from "react-router-dom";

import Nav from "./Nav/Nav";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";
import history from "./history";
import Project from "./pages/Project";
import IdleTimerContainer from "./components/IdleTimerContainer";

function App() {
  return (
    <div className="wrapper">
        <IdleTimerContainer/>
        <Router history={history}>
            <SideBar/>
          <div className="main-panel">
              <Nav/>
              <div className="content">
                <Project/>
              </div>
              <Footer/>
          </div>
        </Router>
    </div>
  );
}

// function App() {
//     return (
//         <div>
//                 <Nav/>
//                 <SideBar/>
//         </div>
//     );
// }


export default App;

//navbar-toggler navbar-toggler-right
// <button href="" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
//         aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation"><span
//     className="navbar-toggler-bar burger-lines"></span><span className="navbar-toggler-bar burger-lines"></span><span
//     className="navbar-toggler-bar burger-lines"></span></button>

// <button href="" className="navbar-toggler navbar-toggler-right toggled" type="button" data-toggle="collapse"
//         aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation"><span
//     className="navbar-toggler-bar burger-lines"></span><span className="navbar-toggler-bar burger-lines"></span><span
//     className="navbar-toggler-bar burger-lines"></span></button>