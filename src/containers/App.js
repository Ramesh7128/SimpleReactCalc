import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from './Content';
import MyProvider from './MyProvider';
import ThemeContext from './Theme';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <MyProvider>
        <div className="App">
          <ThemeContext.Consumer>
            {value => {
              const themeClass = value.darkMode ? 'dark-mode' : 'light-mode';
              return (
                <div id="body-wrapper" className={themeClass}>
                  <Header />
                  <Content />
                  <Footer />
                </div>
              )
            }
            }
          </ThemeContext.Consumer>
        </div>
      </MyProvider>
    );
  }
}

export default App;