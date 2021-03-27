import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList( props ){
    console.log( 'in GalleryList:', props );
    return (
        <>

            <h2 id="gallaryTitle">Gallery</h2>
            <p id="info">(Click on an image to view it's description)</p>
        
            <div className="row">
                <div className="column">
                    { props.gallary.map( ( item, index )=><GalleryItem item={ item } key={ index }/> ) }
                </div>
            </div>
        </>
    )
};

export default GalleryList; 