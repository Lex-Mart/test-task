import { combineReducers } from "redux";
import { ADD_CATEGORIES, ADD_DETAILS, ADD_NEWS, UPDATE_PAGE_INFO} from "./types";

const initNewsState = {
    newsList: [],
    currentPages: {},
}

const categories = (state = [], {type, categories}) => {
    switch(type) {
        case ADD_CATEGORIES:
            return [...categories]
        default: return state
    }
}

const news = (state = initNewsState, {type, news, pageInfo}) => {
    switch(type) {
        case ADD_NEWS:
            return {
                ...state,
                newsList: [
                    ...state.newsList,
                    ...news
                ]
            }
        case UPDATE_PAGE_INFO:
            return {
                ...state,
                currentPages: {
                    ...state.currentPages,
                    [pageInfo.categoryId]: {...pageInfo}
                }
            }
        default: return state
    }
}

const newsDetails = (state = [], {type, details}) => {
    switch(type) {
        case ADD_DETAILS:
            return [
                ...state,
                {...details}
            ]
    default: return state
    }
}


export const rootReducer = combineReducers({
    categories,
    news,
    newsDetails
})