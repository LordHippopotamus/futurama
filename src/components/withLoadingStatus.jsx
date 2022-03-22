/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import Container from '@mui/material/Container'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

const withLoadingStatus = (Component, status, error) => (props) => {
    let content

    if (status === 'loading') {
        content = <CircularProgress />
    } else if (status === 'failed') {
        content = <Typography sx={{ color: 'error.main' }}>{error}</Typography>
    } else if (status === 'succeeded') {
        content = <Component {...props} />
    }

    return (
        <Container
            sx={{
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {content}
        </Container>
    )
}

export default withLoadingStatus
