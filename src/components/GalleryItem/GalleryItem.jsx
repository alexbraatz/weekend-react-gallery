import { useState } from 'react';

function GalleryItem( props ){
    console.log( 'galleryItem', props );
    return(
        <>
        <li>
            
            <img src={props.item.path} height={100} width={100} />
            <li><button>like it!</button></li>
        
        </li>
        </>
    )
};

export default GalleryItem;