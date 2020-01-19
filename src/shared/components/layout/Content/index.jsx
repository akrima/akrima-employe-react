// Dependencies
import React from 'react'
import {element} from 'prop-types'

// Css
import "./index.scss"
const Content = ({children}) => {
    return (
        <div className="Content">
            {children}
        </div>
    )
}

Content.prototype ={
    children:element
}

export default Content
