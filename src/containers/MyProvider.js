import React, { Component } from "react";

import ThemeContext from "./Theme";

class MyProvider extends Component {
  state = {
    darkMode: false
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          darkMode: this.state.darkMode,
          toggleDarkMode: () => {
            this.setState(prevState => ({
              darkMode: !prevState.darkMode
            }));
          }
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default MyProvider;
