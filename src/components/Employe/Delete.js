import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Delete = (props) => {

    const deleteHandler = async (e) => {
        await axios.delete(`https://cors-anywhere.herokuapp.com/https://akrima-employe.herokuapp.com/employe/${e.target.id}`)
    }


    return (
        <Link className="nav-link aClass" id={props.id} onClick={(e) => deleteHandler(e)} style={{ cursor: "pointer" }} to="/">Delete</Link>
    )
}

export default Delete
