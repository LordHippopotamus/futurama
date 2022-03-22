import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from '../features/quotes/quotesSlice'
import charactersReducer from '../features/characters/charactersSlice'

const store = configureStore({
    reducer: {
        quotes: quotesReducer,
        characters: charactersReducer,
    },
})

export default store
