import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { fetchAllCharacters } from './charactersSlice';
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

  let content;

  if (status === 'loading' || status === 'idle') {
    content = <CircularProgress />;
  } else if (status === 'failed') {
    content = <Typography sx={{ color: 'error.main' }}>{error}</Typography>;
  } else if (status === 'succeeded') {
    content = <Characters characters={characters} />;
  }

  return (
    <Container sx={{
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      {content}
    </Container>
  );
};

export default CharactersPage;
