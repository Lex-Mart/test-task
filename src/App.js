import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Categories from './routes/Categories'
import News from './routes/News'
import NewsDetails from './routes/NewsDetails'

const App = () => {
    return(
        <div className='container'>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Categories/>
                    </Route>
                    <Route path='/:id/news'>
                        <News/>
                    </Route>
                    <Route path='/details/:id'>
                        <NewsDetails/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )    
}

export default App