/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SingleCharacter = ({ character }) => (
  <Box sx={{
    mt: 4,
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: { sm: 'center' },
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
  </Box>
);

export default SingleCharacter;
