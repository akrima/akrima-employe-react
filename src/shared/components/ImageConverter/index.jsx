import React from 'react'
import { Card } from 'react-bootstrap'
import './ImageConverter.scss'

const ImageConverter =({data}) => {
    return (
        <div style={{textAlign:"center"}}>
        <Card.Img src={`data:image/jpeg;base64,${data}`} style={{width:"200", height:"150"}}/>
        </div>
    )
}

export default ImageConverter
