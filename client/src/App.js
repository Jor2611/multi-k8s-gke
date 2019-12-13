import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img
              src={
                "https://icon-library.net/images/batman-logo-icon/batman-logo-icon-25.jpg"
              }
              className="App-logo"
              alt="logo"
            />
            <h1 className="App-title">Fib Calculator version 3</h1>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Second Page Page</Link>
          </header>
          <div>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
