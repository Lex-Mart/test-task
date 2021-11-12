import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsDetails } from '../redux/actions'

const NewsDetails = () => {
    const dispatch = useDispatch()
    const newsId = useParams().id
    const news = useSelector(state => state.news.newsList.find(obj => obj.id === +newsId))
    const newsDetails = useSelector(state => state.newsDetails.find(obj => obj.id === +newsId))

    useEffect(() => {
        if(!newsDetails) dispatch(getNewsDetails(newsId))
    }, [dispatch, newsDetails, newsId])

    return(
        <div>
            <Header title={news?.title || newsDetails?.title}/>
            <span className="grey-text">{news?.shortDescription || newsDetails?.shortDescription}</span>
            <p className="flow-text" dangerouslySetInnerHTML={{__html: newsDetails?.fullDescription}}></p>
            {undefined}
        </div>
    )
}

export default NewsDetails