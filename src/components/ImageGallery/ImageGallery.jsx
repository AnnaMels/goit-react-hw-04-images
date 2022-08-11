import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({ onClick, images }) {
    return (
        <>
            {<Gallery onClick={onClick} className="gallery">
                {images.map(({ id, webformatURL, largeImageURL, tags }) => <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} />)}
            </Gallery>}
        </>
    );
}

ImageGallery.propTypes = {
        images: PropTypes.array,
        onClick: PropTypes.func,
    }

