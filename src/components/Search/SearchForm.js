import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ onParamChange }) {
   
    return (
      <Form className= 'mb-4'>
          <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Location</Form.Label>
                <Form.Control onChange={onParamChange} placeholder='Search By State'type= 'search'/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control type='search' placeholder='Search By Employee' onChange={onParamChange}/>
              </Form.Group>
          </Form.Row>
      </Form>
    )
}
