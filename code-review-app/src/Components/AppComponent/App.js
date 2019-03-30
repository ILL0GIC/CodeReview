import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBarComponent/NavBar';
import SearchBar from '../SearchBarComponent/SearchBar';
import 'tachyons';
import CommonQuestions from '../CommonQuestionsComponent/CommonQuestions';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <CommonQuestions />
      </div>
    );
  }
}

export default App;
