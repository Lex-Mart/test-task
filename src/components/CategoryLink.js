import React from 'react'
import {Link} from 'react-router-dom'

const CategoryLink = (props) => {
    return(
        <Link 
            to={{
                pathname: `/${props.newsId}/news`, 
            }}
            className="collection-item"
        >{props.name}</Link>
    )
}

export default CategoryLink