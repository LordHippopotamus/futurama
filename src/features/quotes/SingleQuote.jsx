/* eslint-disable react/prop-types */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const SingleQuote = ({ quote }) => (
  <Box
    sx={{
      height: 'calc(100vh - 64px)',
      width: 1,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { md: 'center' },
      justifyContent: 'center',
      gap: 2,
    }}
    key={quote.quote}
  >
    <Box sx={{
      height: { xs: 4 / 5, md: 4 / 5 },
      width: { xs: 1, md: 1 / 2 },
      backgroundImage: `url(${quote.image})`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      mx: { xs: 'auto', md: 0 },
    }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography>
        &quot;
        {quote.quote}
        &quot;
        {' - '}
        <Link component={RouterLink} to={`/characters/${quote.character}`}>
          {quote.character}
        </Link>
      </Typography>
    </Box>
  </Box>
);

export default SingleQuote;
