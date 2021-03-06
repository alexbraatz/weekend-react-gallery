import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';

function App() {

  const [ newGallery, setGallery ] = useState( [] );

  useEffect( ()=> { getGallery() }, []);

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
        <GalleryList gallary={ newGallery }/>
      </div>
    );
}

export default App;
