import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { fetchAllQuotes } from './quotesSlice';

const Quotes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuotes());
  }, [dispatch]);

  const quotes = useSelector((state) => state.quotes.list);

  return (
    <Container sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Masonry
        columns={{
          xs: 1, sm: 2, md: 3, lg: 4,
        }}
        spacing={2}
      >
        {quotes.map((item) => (
          <Card key={item.quote}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={item.image}
                alt="character"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">{item.character}</Typography>
                <Typography color="text.secondary">{item.quote}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Masonry>
    </Container>
  );
};

export default Quotes;
