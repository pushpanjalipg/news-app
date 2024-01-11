import { ALL_NEWS_SUCCESS, CATEGORY_WISE_NEWS_SUCCESS } from "../constants/news.constant";

export interface NewsState {
    news: any;
    categories: string[];
    categoryNews: any;
}

export interface ActionInterface {
    type: string;
    payload: any
}

const initialState: NewsState = {
    news: [],
    categories: [
        "war",
        "government",
        "politics",
        "education",
        "health",
        "environment",
        "economy",
        "business",
        "fashion",
        "entertainment",
        "sport"
    ],
    categoryNews: []
}

export const NewsReducer = (state: NewsState = initialState, action: ActionInterface) => {

    switch (action.type) {

        case ALL_NEWS_SUCCESS:
            return {
                ...state,
                news: [...action.payload]
            };

        case CATEGORY_WISE_NEWS_SUCCESS:
            return {
                ...state,
                categoryNews: [...action.payload]
            }

        default:
            return state;
    }
}