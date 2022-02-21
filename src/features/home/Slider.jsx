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
    setSlide((prev) => (prev <= 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlide((prev) => (prev >= items.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{
      height: 1,
      width: 1,
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
          <Box sx={{ display: slide === index ? 'flex' : 'none' }} key={item.quote}>
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
