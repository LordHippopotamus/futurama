import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { fetchSingleQuote } from './quotesSlice';

const SingleQuote = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const query = params.quoteQuery;
  const quote = useSelector((state) => state.quotes.single);

  useEffect(() => {
    dispatch(fetchSingleQuote(query));
  }, [dispatch, query]);

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { sm: 'center' },
        justifyContent: { sm: 'center' },
      }}
    >
      <Box sx={{
        maxWidth: { sm: 1 / 2 },
        width: 1,
        mr: { sm: 2 },
        mb: { xs: 2, sm: 0 },
      }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          {quote.character}
        </Typography>
        <img src={quote.image} style={{ width: '100%' }} alt="character" />
      </Box>
      <Typography>
        {quote.quote}
      </Typography>
    </Container>
  );
};

export default SingleQuote;
