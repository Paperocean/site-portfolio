/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import PropTypes from "prop-types";

import image from "../images/img1.jpg";

const Home = ({ name, title, github }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          top: "15rem",
          justifyContent: "center",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1>{name}</h1>
        <h2
          style={{
            width: "50%",
            margin: "0 auto",
            padding: "1rem",
          }}
        >
          {title}
        </h2>
        <h3>GitHub: {github}</h3>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
  github: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Home;
