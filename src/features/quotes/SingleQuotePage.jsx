import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { fetchSingleQuote } from './quotesSlice';
import SingleQuote from './SingleQuote';

const SingleQuotePage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const query = params.quoteQuery;
  const quote = useSelector((state) => state.quotes.single);

  useEffect(() => {
    dispatch(fetchSingleQuote(query));
  }, [dispatch, query]);

  return (
    <Container>
      <SingleQuote quote={quote} />
    </Container>
  );
};

export default SingleQuotePage;
