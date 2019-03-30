import React, {Component} from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <input 
        type='search' 
        placeholder='Search Common Questions'
        className='tc searchbar pa3 ba  SearchBar' />
    );
}

export default SearchBar;