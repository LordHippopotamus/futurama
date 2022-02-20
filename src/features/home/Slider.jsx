/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SingleQuote from '../quotes/SingleQuote';

const Slider = ({ items }) => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide(slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide + 1);
  };

  return (
    <Box sx={{
      height: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    >
      <IconButton onClick={prevSlide}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box sx={{
        height: 1,
        width: 1,
        px: 2,
      }}
      >
        {items.map((item, index) => (
          <Box sx={{ display: slide === index ? 'flex' : 'none' }}>
            <SingleQuote quote={item} />
          </Box>
        ))}
      </Box>
      <IconButton onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;
