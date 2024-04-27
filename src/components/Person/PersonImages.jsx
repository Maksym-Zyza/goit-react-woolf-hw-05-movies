import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import st from './PersonImages.module.scss';
import Loader from '../../components/Loader/Loader';
import api from '../../api/movies-api';
import Modal from '../Modal/Modal';

const PersonImages = ({ showModal, toggleModal }) => {
  const { personId } = useParams();
  const [src] = useState('https://image.tmdb.org/t/p/w500');
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api
      .getPersonImages(personId)
      .then(result => {
        const newArr = [];
        const newObj = Object.values(result.profiles);
        for (var key in newObj) {
          newArr.push(newObj[key].file_path);
        }
        setImages([...newArr]);
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {showModal && (
        <Modal onClose={toggleModal}>
          {images?.map(el => (
            <div key={el}>
              <img className={st.img} src={`${src}${el}`} alt="Person poster" />
            </div>
          ))}
        </Modal>
      )}

      {isLoading && <Loader isLoading={isLoading} />}
    </div>
  );
};

export default PersonImages;
