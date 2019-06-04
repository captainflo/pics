import React from 'react';
import './App.css';
import unsplash from './components/api/unsplash';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';


class App extends React.Component {

  state = {
    images: []
  };
  // One method with async without .then
  //  onSearchSubmit = async (term)=>{
  //   const response = await axios
  //   .get('https://api.unsplash.com/search/photos', {
  //     params: {query: term},
  //     headers:{
  //       Authorization: 'Client-ID c288eecb29d4ce2333d1920a74dc2f4d5551c261b21e4b8366f001a7c6911499'
  //     }
  //   });
  //   console.log(response.data.results);
  // } 

  //  Second Method with .then "don't forgot to import axios"
  // onSearchSubmit=(term)=>{
  //   axios.get('/search/photos', {
  //     params: {query: term},
  //     headers:{
  //       Authorization: 'Client-ID c288eecb29d4ce2333d1920a74dc2f4d5551c261b21e4b8366f001a7c6911499'
  //     }
  //   }).then(response =>{
  //     this.setState({images: response.data.results});
  //   })
  // } 

  // Third Method 
   onSearchSubmit=(term)=>{
    unsplash.get('/search/photos', {
      params: {query: term}
    }).then(response =>{
      this.setState({images: response.data.results});
    })
  } 

  render(){
    return (
      <div className="ui container" style={{marginTop:'30px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} Images.
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
