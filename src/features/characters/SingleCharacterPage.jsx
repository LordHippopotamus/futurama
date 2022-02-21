import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCharacters } from './charactersSlice';
import withLoadingStatus from '../../components/withLoadingStatus';
import SingleCharacter from './SingleCharacter';

const SingleCharacterPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const name = params.characterName;
  const characters = useSelector((state) => state.characters.list);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const character = characters.find((item) => item.Name === name);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllCharacters());
    }
  }, [dispatch, name]);

  const SingleQuoteWithLoadingStatus = withLoadingStatus(SingleCharacter, status, error);

  return <SingleQuoteWithLoadingStatus character={character} />;
};

export default SingleCharacterPage;
