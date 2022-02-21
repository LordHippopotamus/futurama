import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { fetchAllQuotes } from './quotesSlice';
import Quotes from './Quotes';

const QuotesPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const page = +searchParams.get('page') || 1;
  const quotes = useSelector((state) => state.quotes.list);
  const status = useSelector((state) => state.quotes.status);
  const error = useSelector((state) => state.quotes.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch]);

  let content;

  if (status === 'loading') {
    content = <CircularProgress />;
  } else if (status === 'failed') {
    content = <Typography sx={{ color: 'error.main' }}>{error}</Typography>;
  } else if (status === 'succeeded') {
    content = <Quotes page={page} quotes={quotes} />;
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

export default QuotesPage;
