import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchSingleCharacter } from './charactersSlice';

const SingleCharacter = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const name = params.characterName;
  const character = useSelector((state) => state.characters.single);

  useEffect(() => {
    dispatch(fetchSingleCharacter(name));
  }, [dispatch, name]);

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
      }}
    >
      <Box sx={{ width: { sm: 1 / 2 } }}>
        <img src={character.PicUrl} style={{ width: '100%' }} alt="character" />
      </Box>
      <Box>
        <Typography>{`Name: ${character.Name}`}</Typography>
        <Typography>{`Age: ${character.Age}`}</Typography>
        <Typography>{`Planet: ${character.Planet}`}</Typography>
        <Typography>{`Species: ${character.Species}`}</Typography>
        <Typography>{`Profession: ${character.Profession}`}</Typography>
        <Typography>{`Status: ${character.Status}`}</Typography>
        <Typography>{`First Appearance: ${character.FirstAppearance}`}</Typography>
        <Typography>{`Relatives: ${character.Relatives}`}</Typography>
        <Typography>{`Voiced By: ${character.VoicedBy}`}</Typography>
      </Box>
    </Container>
  );
};

export default SingleCharacter;
