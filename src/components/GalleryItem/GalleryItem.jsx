import { useState } from 'react';

function GalleryItem( props ){
    const [ showOrigin, setShowOrigin ] = useState( false );

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

    let toggleOrigin = () => {
        console.log( 'in toggleOrigin', showOrigin )
        setShowOrigin( !showOrigin )
    }

    console.log( 'out of toggleOrign', showOrigin )

    let displayDescription = () =>{
        
        if( showOrigin ){
            console.log( 'in displayDescription', showOrigin )
            return( <gallaryDescription />);
        }
    }

    let gallaryDescription = () =>{
        return( <p> { props.item.description } </p> )
    }

    return(
        <div id="main">
            <img onClick={ toggleOrigin } src={props.item.path} height={100} width={100} />

            <div>
            <button>like it!</button>
            <p> { displayLikes() }</p>
            </div>
        </div>
    )
};

export default GalleryItem;