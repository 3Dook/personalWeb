import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import home from "./components/home.component"
import resume from "./components/resume.component"
import application from "./components/application.component"
import contact from "./components/contact.component"
import NavBar from "./components/Navbar.component"

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      </div>
      <div>
      {/*CONSIDER USING SWITCH HERE*/}
      <Route path="/" exact component={home}/>
      <Route path="/home" exact component={home}/>
      <Route path="/resume" exact component={resume}/>
      <Route path="/application" exact component={application}/>
      <Route path="/contact" exact component={contact}/>
      </div>
    </Router>
  );
}

export default App;
