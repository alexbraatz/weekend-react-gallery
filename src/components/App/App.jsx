import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [ newGallery, setGallery ] = useState( [] );

  useEffect( ()=>{
    if( newGallery.length === 0 ){
      console.log( 'in useEffect' );
      getGallery();
    }
  });

  let getGallery = () => {
    axios.get( '/gallery' ).then( ( response )=>{
      console.log( 'getGallery GET response:', response.data );
      setGallery( response.data );
    }).catch( ( error )=>{
      console.log( error );
      alert( 'not today amigo' );
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList gallary={ newGallery }/>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
