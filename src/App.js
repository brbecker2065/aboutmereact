import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Brian Becker
          <img src={logo} className="App-logo" alt="logo" />
          <footer>
            Edit <code>src/App.js</code> and save to reload.
          </footer>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <main>
          <div className="row">
            <div className="column">
              <div class="column-red">
                <button>about myself</button>
                <p />
                <p>I enjoy playing games</p>
                <p>I enjoy learning new things</p>
                <p>I enjoy sharing my knowledge</p>
              </div>
            </div>
            <div class="column">
              <div class="column-white">
                <button>My reason for attending Helio</button>
                <p />
                <p>I was convinced by someone it would be easy</p>
                <p>More money doesn't hurt</p>
                <p>I needed a challenge</p>
              </div>
            </div>
            <div class="column">
              <div class="column-blue">
                <button>My Interests</button>
                <p />
                <p>spending time with my family</p>
                <p>Playing games</p>
                <p>Getting back in shape</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
