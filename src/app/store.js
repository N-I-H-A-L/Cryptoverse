import { configureStore } from "@reduxjs/toolkit";

import {cryptoApi} from '../services/cryptoAPI';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },
    //Adding the API in the middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
});