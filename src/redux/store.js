import { configureStore } from '@reduxjs/toolkit'

import  potentialCountriesReducer  from './slices/potentialCountriesSlice'

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer
    }
})