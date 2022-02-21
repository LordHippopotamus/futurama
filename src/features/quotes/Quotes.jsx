/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const Quotes = ({ page, quotes }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      my: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    >
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
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/quotes${item.page === 1 ? '' : `?page=${item.page}`}`}
              // eslint-disable-next-line react/jsx-props-no-spreading
            {...item}
          />
        )}
      />
    </Box>
  );
};

export default Quotes;
