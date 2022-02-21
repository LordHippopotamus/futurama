import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCharacters } from './charactersSlice';
import withLoadingStatus from '../../components/withLoadingStatus';
import Characters from './Characters';

const CharactersPage = () => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters.list);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllCharacters());
    }
  }, [dispatch]);

  const SingleQuoteWithLoadingStatus = withLoadingStatus(Characters, status, error);

  return <SingleQuoteWithLoadingStatus characters={characters} />;
};

export default CharactersPage;
