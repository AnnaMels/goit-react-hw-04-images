import PropTypes from 'prop-types';
// import { Component } from "react";
import { Overlay, ModalW } from "./Modal.styled";


export default function Modal({ onClose, image, alt }) {


const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

    return (
        <Overlay onClick={handleBackdropClick}>
            <ModalW>
                <img src={image} alt={alt} />
            </ModalW>
        </Overlay>
    );
}

Modal.propTypes = {
        onClose: PropTypes.func,
        image: PropTypes.string,
        alt: PropTypes.string,
    }