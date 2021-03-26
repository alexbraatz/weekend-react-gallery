import { useState } from 'react';

function GalleryItem( props ){
    console.log( 'galleryItem', props );
    return(
        <>
        <li>
            <img src={props.item.path} height={100} width={100} />
        </li>
        <li><button>like it!</button></li>
        </>
    )
};

export default GalleryItem;