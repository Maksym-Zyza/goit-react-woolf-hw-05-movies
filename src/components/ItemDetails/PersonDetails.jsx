import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import st from './Details.module.scss';
import api from '../../api/movies-api';
import PersonImages from '../../components/Person/PersonImages';
import defaultImg from '../../img/default.jpg';
import { text } from '../../helpers/text';
import { IMG_SRC } from 'variables';

export default function PersonDetails() {
  const { personId } = useParams();
  const [person, setPerson] = useState({});
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    !showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    setShowModal(!showModal);
  };

  useEffect(() => {
    api.getPersonDetails(personId).then(result => {
      setPerson({ ...result });
    });
  }, [personId]);

  return (
    <div className={st.details}>
      <PersonImages showModal={showModal} toggleModal={toggleModal} />

      <h2>{person.name}</h2>

      <span className={st.imgHover} onClick={toggleModal}>
        <img
          src={
            person?.profile_path
              ? `${IMG_SRC}${person?.profile_path}`
              : defaultImg
          }
          alt="Person poster"
        />
      </span>

      <div>
        <p>
          {text.Birthday}: <span>{person.birthday}</span>
        </p>
        <p>
          {text.PlaceOfBirth}: <span>{person.place_of_birth}</span>
        </p>

        {person.biography && <h3>{text.Biography}: </h3>}
        <span>{person.biography}</span>

        <p>
          {text.Popularity}:<span>{String(Math.round(person.popularity))}</span>
        </p>
        <p>
          {text.Department}:<span>{person.known_for_department}</span>
        </p>
        <p>
          {text.Homepage}:
          {person.homepage ? (
            <a href={person.homepage} target="blank">
              <span>{person.homepage}</span>
            </a>
          ) : (
            <span>{text.NotFound}</span>
          )}
        </p>
      </div>
    </div>
  );
}
