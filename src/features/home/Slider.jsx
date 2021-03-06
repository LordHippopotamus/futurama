/* eslint-disable react/prop-types */
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { next, prev } from './sliderSlice'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import SingleQuote from '../quotes/SingleQuote'

const Slider = ({ items }) => {
    const dispatch = useDispatch()
    const slide = useSelector((state) => state.slider)

    const prevSlide = () => {
        dispatch(prev(items.length))
    }

    const nextSlide = () => {
        dispatch(next(items.length))
    }

    return (
        <Box
            sx={{
                height: 'calc(100vh - 64px)',
                width: 1,
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <IconButton sx={{ mr: 2, alignSelf: 'center' }} onClick={prevSlide}>
                <ArrowBackIosNewIcon />
            </IconButton>
            <Box
                sx={{
                    position: 'relative',
                    height: 1,
                    width: 1,
                }}
            >
                {items.map((item, index) => (
                    <Box
                        sx={{
                            position: 'absolute',
                            width: 1,
                            opacity: slide === index ? 1 : 0,
                            zIndex: slide === index ? 100 : 0,
                            transition: '0.4s',
                        }}
                        key={item.quote}
                    >
                        {useMemo(
                            () => (
                                <SingleQuote quote={item} />
                            ),
                            [item]
                        )}
                    </Box>
                ))}
            </Box>
            <IconButton sx={{ ml: 2, alignSelf: 'center' }} onClick={nextSlide}>
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    )
}

export default Slider
