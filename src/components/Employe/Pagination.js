import React from 'react'

const Pagination = ({size, activeIndex,setPagination}) => {
    
    return (
        <ul className="pagination">
            
            {
                Array.from(Array(size), (e, i) => {
                    let start=  i * 10;
                    let end = (i+1)*10;
                return <li className={`page-item ${activeIndex ===(i+1) ? ' active' : ''}`} key={i}><a className="page-link" href="#" onClick={(e) => setPagination(e,start, end, (i+1))}>{i+1}</a></li>
                })
            }
            
        </ul>
    )
}

export default Pagination
