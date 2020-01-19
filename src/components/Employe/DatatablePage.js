import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import ModalBox from './ModalBox';
import Delete from './Delete';

const DatatablePage = (response) => {

    const limit= 10
    const [slicedArray, setSlicedArray] = useState([])
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(limit)
    const [size, setSize] = useState(Math.ceil(response.response.length / limit))
    const [active, setActive] = useState(1) 

    const [modalShow, setModalShow] = useState(false)
    const [currentEmploye, setCurrentEmploye] = useState(undefined)

    const setPagination = (e, indexStart, indexEnd, activeIndex)=>{
        setStart(indexStart)
        setEnd(indexEnd)
        setActive(activeIndex)
    }

    const formatDate=(date)=> {
        date = new Date(date)
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
    
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
    
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

   useEffect(() => {
        setSlicedArray(response.response.slice(start, end))
   }, [])

   const comingSoon=(e)=>{
        e.preventDefault()
        alert("Bientôt disponible / coming soon!")
   }

    return (
        <>
        <table className="table table-striped container table-responsive" style={{ width: '100%', marginTop: '5%', fontSize:'70%' }}>
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Phone number</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {slicedArray.map((employe, index) => {
                    return <tr key={index}>
                        <td>{employe.nom}</td>
                        <td>{employe.prenom}</td>
                        <td>{employe.position}</td>
                        <td>{employe.office}</td>
                        <td>{employe.phoneNumber}</td>
                        <td>{formatDate(employe.dateEmbauche)}</td>
                        <td>{employe.salary} $</td>
                        <td><span className="nav-link aClass" onClick={() => {setModalShow(true); setCurrentEmploye(employe)}} style={{cursor:"pointer"}}>Details</span></td>
                        <td><a href="#" className="nav-link aClass"id={employe.id} onClick={comingSoon}>Edit</a></td>
                        <td><Delete id={employe.id} /></td>
                    </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Phone number</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
        <Pagination size={size} activeIndex ={active} setPagination={setPagination}/>
        <ModalBox show={modalShow} onHide={() => setModalShow(false)} currentemploye={currentEmploye} />

        </>
    );
}

export default DatatablePage;