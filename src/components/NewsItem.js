import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = (props) => {
    const dateFormatter = str => {
        const date = new Date(str)
        const formatter = Intl.DateTimeFormat('ru', {
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        })
        return formatter.format(date)
    }

    return(
        <div className="card darken-1">
            <div className="card-content black-text">
                <Link to={{
                    pathname: `/details/${props.descr.id}`,
                }}>
                    <span className="card-title blue-text">{props.descr.title}</span>
                </Link>
                <span className="grey-text">{dateFormatter(props.descr.date)}</span>
                <hr/>
                <p>{props.descr.shortDescription}</p>
            </div>
        </div>
    )
}

export default NewsItem