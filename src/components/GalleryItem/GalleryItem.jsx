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
        setShowOrigin( !showOrigin )
    }


    let displayDescription = () =>{
        
        if( showOrigin ){
            console.log( 'in displayDescription', showOrigin )
            return( <GallaryDescription />);
        } else {
            return( <GallaryImage />);
        }
    }

    let GallaryDescription = () =>{
        return( 
            <p onClick={ toggleOrigin }> { props.item.description } </p> 
        )
    }

    let GallaryImage = () =>{
        return( 
            <img onClick={ toggleOrigin } src={props.item.path} height={100} width={100} />
            )
    }

    let postLove = () => {
        const myId = props.item.id 
        console.log( myId );

    }
    return(
        <div>
            { displayDescription() }

            <div>
                <button onClick={ postLove } id="loveBtn">love it!</button>
                <p> { displayLikes() }</p>
            </div>

        </div>
    )
};

export default GalleryItem;