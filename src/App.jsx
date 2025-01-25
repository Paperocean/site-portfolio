/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Michał Wróblewski",
  title: "Junior IT Developer Student",
  email: "miichal.wroblewski@wp.pl",
  gitHub: "Paperocean",
  linkedIn: "michał-wróblewski-31195b304",
};

// const primaryColor = "#4E567E";
const primaryColor = "#36573B";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home {...siteProps} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
