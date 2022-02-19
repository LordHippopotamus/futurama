import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Box, AppBar, Toolbar, Typography, Button,
} from '@mui/material';

const pages = ['home', 'quotes', 'characters', 'quest'];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap>
            Futurama
          </Typography>
          <Box sx={{ flexGrow: 0, ml: 'auto', display: 'flex' }}>
            {pages.map((page) => (
              <Button
                onClick={() => navigate(page === 'home' ? '/' : `/${page}`)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                key={page}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
