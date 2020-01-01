import React, { Component } from "react";
import "./App.scss";
import Navbar from "./componets/Navbar/Navbar";
import About from "./about";
import Shop from "./shop";
import Default from "./componets/Default";
import Footer from "./componets/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route componet="/Default">
            <Default />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="homepage">
    <div class="wrapper">
      <section id="section1">
        <a href="#section3">‹</a>
        <div class="item">
          <img src="/imges/headphone-black.jpg" />
        </div>
        <div class="item">
          <img src="/imges/headphone-red.jpg" />
        </div>
        <div class="item">
          <img src="/imges/headphone-blue.jpg" />
        </div>
        <div class="item">
          <img src="/imges/red.jpg" />
        </div>
        <div class="item">
          <img src="/imges/pc-hp.jpg" />
        </div>
        <a href="#section3">›</a>
      </section>
      <section id="section2">
        <a href="#section1">‹</a>
        <div class="item">
          <img src="/imges/toshiba.jpg" />
        </div>
        <div class="item">
          <img src="/imges/iphone.jpg" />
        </div>
        <div class="item">
          <img src="/imges/pc_lenovo.jpg" />
        </div>
        <div class="item">
          <img src="/imges/monitor_asus.jpg" />
        </div>
        <div class="item">
          <img src="/imges/headphone-black-2.jpeg" />
        </div>
        <a href="#section3">›</a>
      </section>

      <section id="section3">
        <a href="#section2">‹</a>
        <div class="item">
          <img src="/imges/red.jpg" />
        </div>
        <div class="item">
          <img src="/imges/iphone.jpg" />
        </div>
        <div class="item">
          <img src="/imges/headphone-blue.jpg" />
        </div>
        <div class="item">
          <img src="/imges/headphone-red.jpg" />
        </div>
        <div class="item">
          <img src="/imges/headphone-black.jpg" />
        </div>
        <a href="#section1">›</a>
      </section>
    </div>
  </div>
);

export default App;
