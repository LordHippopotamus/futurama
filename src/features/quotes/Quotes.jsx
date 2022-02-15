import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { fetchAllQuotes } from './quotesSlice';

const Quotes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);

  const page = +searchParams.get('page') || 1;
  const quotes = useSelector((state) => state.quotes.list);
  const status = useSelector((state) => state.quotes.status);
  const error = useSelector((state) => state.quotes.error);

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
    content = (
      <>
        <Masonry
          columns={{
            xs: 1, sm: 2, md: 3, lg: 4,
          }}
          spacing={2}
        >
          {quotes.slice((page - 1) * 20, page * 20).map((item) => (
            <Card key={item.quote}>
              <CardActionArea onClick={() => navigate(item.quote)}>
                <CardContent>
                  <Typography gutterBottom variant="h5">{item.character}</Typography>
                  <Typography color="text.secondary">{item.quote}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Masonry>
        <Pagination
          page={page}
          count={Math.ceil(quotes.length / 20)}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/quotes${item.page === 1 ? '' : `?page=${item.page}`}`}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...item}
            />
          )}
        />
      </>
    );
  }

  return (
    <Container sx={{
      my: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '80vh',
    }}
    >
      {content}
    </Container>
  );
};

export default Quotes;
