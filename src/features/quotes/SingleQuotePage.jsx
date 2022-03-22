import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllQuotes } from './quotesSlice'
import withLoadingStatus from '../../components/withLoadingStatus'
import SingleQuote from './SingleQuote'

const SingleQuotePage = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const query = params.quoteQuery
    const quotes = useSelector((state) => state.quotes.list)
    const status = useSelector((state) => state.quotes.status)
    const error = useSelector((state) => state.quotes.error)
    const quote = quotes.find((item) => item.quote.includes(query.slice(0, 10)))

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllQuotes())
        }
    }, [dispatch, quote])

    const SingleQuoteWithLoadingStatus = withLoadingStatus(
        SingleQuote,
        status,
        error
    )

    return <SingleQuoteWithLoadingStatus quote={quote} />
}

export default SingleQuotePage
