import {put, takeLatest} from 'redux-saga/effects'
import { ALL_NEWS_START, CATEGORY_WISE_NEWS_START } from '../constants/news.constant'
import { getNewsByAPI } from '../service/news.service'
import { getCategoryNewsError, getCategoryNewsSuccess, getNewsError, getNewsSuccess } from '../actions/news.action'
import { ActionInterface } from '../reducers/news.reducer'

function* getAllNews() {
    try {
       let news : {}[] =  yield getNewsByAPI()
       yield put(getNewsSuccess(news))
       
    } catch (error: any) {
        yield put(getNewsError(error.message))
    }
}

function* getCategoryNews({payload}: ActionInterface) {
    try {
       let news : {}[] =  yield getNewsByAPI(payload)
   
       yield put(getCategoryNewsSuccess(news))
       
    } catch (error: any) {
        yield put(getCategoryNewsError(error.message))
    }
}

export function* news() {
    yield takeLatest(ALL_NEWS_START, getAllNews)
    yield takeLatest(CATEGORY_WISE_NEWS_START, getCategoryNews)

}