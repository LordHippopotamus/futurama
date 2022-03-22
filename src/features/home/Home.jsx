import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllQuotes } from '../quotes/quotesSlice'
import withLoadingStatus from '../../components/withLoadingStatus'
import Slider from './Slider'

const Quotes = () => {
    const dispatch = useDispatch()

    const quotes = useSelector((state) => state.quotes.list)
    const status = useSelector((state) => state.quotes.status)
    const error = useSelector((state) => state.quotes.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllQuotes())
        }
    }, [dispatch])

    const SliderWithLoadingStatus = withLoadingStatus(Slider, status, error)

    return <SliderWithLoadingStatus items={quotes} />
}

export default Quotes
