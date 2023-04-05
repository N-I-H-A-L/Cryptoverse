import { configureStore } from "@reduxjs/toolkit";

import {cryptoApi} from '../services/cryptoAPI';
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] : cryptoNewsApi.reducer,
    },
    //Adding the API in the middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([cryptoApi.middleware, cryptoNewsApi.middleware]),
});