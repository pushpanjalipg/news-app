import { ALL_NEWS_ERROR, ALL_NEWS_START, ALL_NEWS_SUCCESS, CATEGORY_WISE_NEWS_ERROR, CATEGORY_WISE_NEWS_START, CATEGORY_WISE_NEWS_SUCCESS } from "../constants/news.constant";

// all news 
export const getNewsStart = () => ({
    type: ALL_NEWS_START
})

export const getNewsSuccess = (news: any) => ({
    type: ALL_NEWS_SUCCESS,
    payload: news
})

export const getNewsError = (error: string) => ({
    type: ALL_NEWS_ERROR,
    payload: error
})

export const getCategoryNewsStart = (slug:string) => ({
    type: CATEGORY_WISE_NEWS_START,
    payload: slug
})

export const getCategoryNewsSuccess = (categoryNews: any) => ({
    type: CATEGORY_WISE_NEWS_SUCCESS,
    payload: categoryNews
})

export const getCategoryNewsError = (error: string) => ({
    type: CATEGORY_WISE_NEWS_ERROR,
    payload: error
})