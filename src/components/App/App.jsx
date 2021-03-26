import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  let [ gallery, setGallery ] = useState([]);

  useEffect( ()=>{
    console.log( 'in useEffect' );
    getGallery();
  });

  const getGallery = () => {
    axios.get( '/gallery' ).then( ( response )=>{
      console.log( 'getGallery response:', response.data );
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
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
