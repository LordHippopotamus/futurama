import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { fetchAllQuotes } from '../quotes/quotesSlice';
import Slider from './Slider';

const Quotes = () => {
  const dispatch = useDispatch();

  const quotes = useSelector((state) => state.quotes.list);
  const status = useSelector((state) => state.quotes.status);
  const error = useSelector((state) => state.quotes.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch]);

  let content;

  if (status === 'loading' || status === 'idle') {
    content = <CircularProgress />;
  } else if (status === 'failed') {
    content = (
      <Typography sx={{ color: 'error.main' }}>
        {error}
      </Typography>
    );
  } else if (status === 'succeeded') {
    content = <Slider items={quotes} />;
  }

  return (
    <Container
      sx={{
        height: 'calc(100vh - 68.5px)',
        display: (status === 'loading' || status === 'idle') ? 'flex' : 'block',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {content}
    </Container>
  );
};

export default Quotes;
