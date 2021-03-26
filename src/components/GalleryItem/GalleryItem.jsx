import { useState } from 'react';

function GalleryItem( props ){
    console.log( 'galleryItem', props );

    let displayLikes = () => {
        if( props.item.likes > 1 ){
            return ( props.item.likes + ` people love this!`);
        } else if( props.item.likes === 1 ){
            return ( props.item.likes + ` person loves this!`)
        }
        else{
            return ( `No people love this :(`);
        }
    }

    return(
        <div>
            <img src={props.item.path} height={100} width={100} />

            <div>
            <button>like it!</button>
            <p> { displayLikes() }</p>
            </div>
        </div>
    )
};

export default GalleryItem;