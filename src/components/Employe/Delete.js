import React from 'react'
import axios from 'axios'

const Delete = (props) => {

    const deleteHandler = async (e) => {
        await axios.delete(`https://cors-anywhere.herokuapp.com/https://akrima-employe.herokuapp.com/employe/${e.target.id}`, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(res => {
            console.log(res);
        })
    }


    return (
        <span className="nav-link aClass" id={props.id} onClick={(e) => deleteHandler(e)} style={{ cursor: "pointer" }}>Delete</span>
    )
}

export default Delete
