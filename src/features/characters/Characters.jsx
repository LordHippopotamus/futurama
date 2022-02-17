import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';
import { fetchAllCharacters } from './charactersSlice';

const Quotes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const characters = useSelector((state) => state.characters.list);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllCharacters());
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
    content = (
      <Masonry
        columns={{
          xs: 1, sm: 2, md: 3, lg: 4,
        }}
        spacing={2}
      >
        {characters.map((item) => (
          <Card key={item.Name}>
            <CardActionArea onClick={() => navigate(item.Name)}>
              <CardContent>
                <Typography gutterBottom variant="h5">{item.Name}</Typography>
                <CardMedia
                  component="img"
                  image={item.PicUrl}
                  alt="chaacter"
                />
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Masonry>
    );
  }

  return (
    <Container sx={{
      my: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh',
    }}
    >
      {content}
    </Container>
  );
};

export default Quotes;
