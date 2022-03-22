import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { fetchAllQuotes } from './quotesSlice'
import withLoadingStatus from '../../components/withLoadingStatus'
import Quotes from './Quotes'

const QuotesPage = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()

    const page = +searchParams.get('page') || 1
    const quotes = useSelector((state) => state.quotes.list)
    const status = useSelector((state) => state.quotes.status)
    const error = useSelector((state) => state.quotes.error)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllQuotes())
        }
    }, [dispatch])

    const QuotesWithLoadingStatus = withLoadingStatus(Quotes, status, error)

    return <QuotesWithLoadingStatus page={page} quotes={quotes} />
}

export default QuotesPage
