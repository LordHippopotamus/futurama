import React from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, Paper } from '@mui/material';
import Navbar from './app/Navabar';

const App = () => (
  <>
    <CssBaseline />
    <Paper elevation={0}>
      <Navbar />
      <Outlet />
    </Paper>
  </>
);

export default App;
