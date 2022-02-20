import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchAllQuotes } from './quotesSlice';
import SingleQuote from './SingleQuote';

const SingleQuotePage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const query = params.quoteQuery;
  const quotes = useSelector((state) => state.quotes.list);
  const status = useSelector((state) => state.quotes.status);
  const error = useSelector((state) => state.quotes.error);
  const quote = quotes.find((item) => item.quote.includes(query.slice(0, 10)));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, quote]);

  let content;

  if (status === 'loading') {
    content = <CircularProgress />;
  } else if (status === 'failed') {
    content = <Typography sx={{ color: 'error.main' }}>{error}</Typography>;
  } else if (status === 'succeeded') {
    content = <SingleQuote quote={quote} />;
  }

  return (
    <Container sx={{
      height: 'calc(100vh - 64px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      {content}
    </Container>
  );
};

export default SingleQuotePage;
