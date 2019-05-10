import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "../containers/Content";
import MyProvider from "../containers/MyProvider";
import ThemeContext from "../containers/Theme";

function App(props) {
  return (
    <MyProvider>
      <div className="App">
        <ThemeContext.Consumer>
          {value => {
            const themeClass = value.darkMode ? "dark-mode" : "light-mode";
            return (
              <div id="body-wrapper" className={themeClass}>
                <Header />
                <Content />
                <Footer />
              </div>
            );
          }}
        </ThemeContext.Consumer>
      </div>
    </MyProvider>
  );
}

export default App;
