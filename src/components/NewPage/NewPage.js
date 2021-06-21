import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function NewPage({ page, setPage, nextPage }) {

 const newPage = (amount) => {
     setPage(prevPage => prevPage + amount )
 }   
    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => newPage(- 1)} />}
            {page !== 1 &&<Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis/>}
            {page > 2 && <Pagination.Item onClick={() => newPage(-1)}>{page - 1 }</Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            {nextPage && <Pagination.Item onClick={() => newPage(1)}>{page + 1 }</Pagination.Item>}
            {nextPage && <Pagination.Next onClick={() => newPage(1)}/>}
        </Pagination>
    )
}
