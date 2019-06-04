import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import axios from 'axios';

class App extends React.Component {
  onSearchSubmit=(term)=>{
    console.log(term);
  } 

  render(){
    return (
      <div className="ui container" style={{marginTop:'30px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
