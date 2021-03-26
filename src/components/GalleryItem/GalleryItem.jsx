import { useState } from 'react';

function GalleryItem( props ){
    console.log( 'galleryItem', props );
    return(
        <>
        <li>{props.item.path}</li>
        </>
    )
};

export default GalleryItem;