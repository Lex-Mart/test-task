import React, {useCallback, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
import NewsItem from '../components/NewsItem'
import { useDispatch, useSelector } from 'react-redux'
import { getNews } from '../redux/actions'
import throttle from 'lodash/throttle'

const News = () => {
    const categoryId = useParams().id
    const dispatch = useDispatch()
    const newsList = useSelector(state => state.news.newsList.filter(obj => obj.categoryId === categoryId))
    
    let scrollHandler = useCallback((e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200) {
            dispatch(getNews(categoryId))
        }

    }, [categoryId, dispatch]) 

    scrollHandler = throttle(scrollHandler, 250)
 
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [scrollHandler])

    useEffect(() => {
        if(!newsList.length) dispatch(getNews(categoryId))     
    }, [categoryId, dispatch, newsList.length])
 
    return(
        <>
            <Header title="Новости"/>
            {newsList.map((news, idx) => <NewsItem key={idx} descr={news}/>)}
        </>
    )
}

export default News