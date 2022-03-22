import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from '../features/quotes/quotesSlice'
import charactersReducer from '../features/characters/charactersSlice'
import sliderReducer from '../features/home/sliderSlice'

const store = configureStore({
    reducer: {
        quotes: quotesReducer,
        characters: charactersReducer,
        slider: sliderReducer,
    },
})

export default store
