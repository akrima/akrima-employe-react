import React from 'react'
import { useFetch } from '../../shared/hooks/useFetch';
import DatatablePage from './DatatablePage';

const Employe = () => {

    const res = useFetch("https://cors-anywhere.herokuapp.com/https://akrima-employe.herokuapp.com/employe/all", {});

    if(res.error){
       console.log(res.error)
    }

    if (!res.response) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }

    return (
       <DatatablePage response={res.response} />
    )
}

export default Employe
