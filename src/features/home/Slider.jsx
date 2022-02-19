/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Slider = (props) => {
  const { items } = props;
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
          <Box
            sx={{
              height: 1,
              width: 1,
              display: slide === index ? 'flex' : 'none',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { md: 'center' },
              justifyContent: 'center',
              gap: 2,
            }}
            key={item.quote}
          >
            <Box sx={{
              height: { xs: 4 / 5, md: 4 / 5 },
              width: { xs: 1, md: 1 / 2 },
              backgroundImage: `url(${item.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              mx: { xs: 'auto', md: 0 },
            }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography>
                &quot;
                {item.quote}
                &quot;
                {' - '}
                {item.character}
              </Typography>
            </Box>
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
