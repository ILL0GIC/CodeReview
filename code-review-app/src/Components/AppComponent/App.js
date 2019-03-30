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
        <div className='create-post-button'>
          <button onClick={this.createPost}>Create New Thread</button>
        </div>
        <CommonQuestions />
      </div>
    );
  }
}

export default App;
