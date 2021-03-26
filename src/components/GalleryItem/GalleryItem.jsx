import { useState } from 'react';

function GalleryItem( props ){
    console.log( 'galleryItem', props );


    return(
        <div>
            <img src={props.item.path} height={100} width={100} />

            <div>
            <button>like it!</button>
            <p> {props.item.likes} people love this!</p>
            </div>
        </div>
    )
};

export default GalleryItem;