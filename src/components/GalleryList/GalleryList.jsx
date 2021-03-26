import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ){
    console.log( 'in GalleryList:', props );
    return (
        <>
            <h2>Gallery</h2>
            <ul>
                { props.gallary.map( ( item, index )=><GalleryItem item={ item } key={ index }/> ) }
            </ul>
        </>
    )
};

export default GalleryList; 