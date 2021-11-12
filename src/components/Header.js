import React from 'react'

const Header = (props) => {
    return(
        <header>
            <h1>{props.title}</h1>
            <hr/>
        </header>
    )
}

export default Header