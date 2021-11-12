import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCategories} from '../redux/actions'
import CategoryLink from '../components/CategoryLink'
import Header from '../components/Header'

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)

    useEffect(() => {
        if(!categories.length) dispatch(getCategories())
    }, [categories.length, dispatch])

    return(
    <>
        <Header title='Список категорий'/>
        <div className="collection">
            {categories.map(({name, id}) => 
                <CategoryLink
                    key={id}
                    name={name}
                    newsId={id}
                />
            )}
        </div>
    </>)
}

export default Categories