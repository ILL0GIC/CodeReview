import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBarComponent/NavBar';
import SearchBar from '../SearchBarComponent/SearchBar';
import 'tachyons';
import CommonQuestions from '../CommonQuestionsComponent/CommonQuestions';

class App extends Component {
  createPost() {

  }

  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <div className='mw5 mw7-ns center bg-light-gray pa3 ph5-ns flex-container'>
          <a class="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray button" href="#0">Create Post</a>
        </div>
        <CommonQuestions />
      </div>
    );
  }
}

export default App;
