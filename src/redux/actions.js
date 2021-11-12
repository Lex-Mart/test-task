import { ADD_CATEGORIES, ADD_DETAILS, ADD_NEWS, UPDATE_PAGE_INFO } from './types'
import axios from 'axios'

const getData = async (link, prop) => (await axios.get(link)).data[prop]

export const getCategories = () => async (dispatch) => {
    const categories = await getData('https://testtask.sebbia.com/v1/news/categories', 'list')
    dispatch({
        type: ADD_CATEGORIES,
        categories,
    })
}

export const getNews = (categoryId) => async (dispatch, getState) => {
    const state = getState()
    let currentPage = state.news.currentPages[categoryId]?.currentPage
    currentPage = currentPage === undefined ? -1 : currentPage
    const nextPage = currentPage + 1
    const isLastPage = state.news.currentPages[categoryId]?.isLastPage || false

    if (!isLastPage) {
        const link = `https://testtask.sebbia.com/v1/news/categories/${categoryId}/news?page=${nextPage}`
        const newsList = await getData(link, 'list')

        if (newsList.length) {
            dispatch(updatePageInfo(nextPage, categoryId, !newsList.length))
            dispatch({
                type: ADD_NEWS,
                news: newsList.map((obj) => ({ ...obj, categoryId })),
            })
        } else {
            dispatch(updatePageInfo(currentPage, categoryId, !newsList.length))
        }
    }
}

export const updatePageInfo = (currentPage, categoryId, isLastPage) => ({
    type: UPDATE_PAGE_INFO,
    pageInfo: {
        currentPage,
        categoryId,
        isLastPage,
    },
})

export const getNewsDetails = (id) => async (dispatch) => {
    const details = await getData(`https://testtask.sebbia.com/v1/news/details?id=${id}`, 'news')
    dispatch({
        type: ADD_DETAILS,
        details,
    })
}
