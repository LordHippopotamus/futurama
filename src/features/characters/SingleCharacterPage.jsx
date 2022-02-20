import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchAllCharacters } from './charactersSlice';
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
      dispatch(fetchAllCharacters(name));
    }
  }, [dispatch, name]);

  let content;

  if (status === 'loading') {
    content = <CircularProgress />;
  } else if (status === 'failed') {
    content = <Typography sx={{ color: 'error.main' }}>{error}</Typography>;
  } else if (status === 'succeeded') {
    content = <SingleCharacter character={character} />;
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        height: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: (status === 'loading') ? 'center' : 'flex-start',
      }}
    >
      {content}
    </Container>
  );
};

export default SingleCharacterPage;
