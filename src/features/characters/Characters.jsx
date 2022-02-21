/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Characters = ({ characters }) => (
  <Masonry
    columns={{
      xs: 1, sm: 2, md: 3, lg: 4,
    }}
    spacing={2}
    sx={{ my: 4 }}
  >
    {characters.map((item) => (
      <Card key={item.Name}>
        <CardActionArea component={Link} to={item.Name}>
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

export default Characters;
