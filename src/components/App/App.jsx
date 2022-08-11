import { useState, useEffect } from "react";
import Form from '../Searchbar';
import ImageGallery from "../ImageGallery";
import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';
import fetchImages from '../services/api';

export function App() {
  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [alt, setAlt] = useState(null);

  const submitHandler = (value) => {
    setInputValue(value);
    setPage(1);
    setImages([]);
  }

  const onLoadMoreClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (inputValue === '') {
      return;
    };

    setLoading(true);

    fetchImages(inputValue, page)
      .then(imagesObj => {
              setImages((prevImg) => [...prevImg, ...imagesObj.hits])
            })
      .finally(() => setLoading(false));
  }, [inputValue, page]);

  const openModal = (e) => {
    if (e.target.nodeName === 'IMG') {
      setShowModal(true);
      setModalImg(e.target.dataset.fullsize);
      setAlt(e.target.alt);
    };
  };

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <Form onSubmitClick={submitHandler}></Form>
      {loading && <Loader />}
      {<ImageGallery onClick={openModal} images={images} />}
      {images.length !== 0 && <Button onClick={onLoadMoreClick} />}
      {showModal && <Modal image={modalImg} alt={alt} onClose={closeModal}/>}
    </>
  );
}

