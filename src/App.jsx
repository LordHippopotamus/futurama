import React from 'react'
import { Outlet } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from './app/Navabar'

const App = () => (
    <>
        <CssBaseline />
        <Navbar />
        <Outlet />
    </>
)

export default App
