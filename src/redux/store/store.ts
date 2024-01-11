import { configureStore  } from "@reduxjs/toolkit";
import { NewsReducer } from "../reducers/news.reducer";
import createSagaMiddleware from 'redux-saga'
import { news } from "../saga/news.saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: NewsReducer,
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true
})

sagaMiddleware.run(news)

export default store;