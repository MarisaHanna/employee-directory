import React from 'react'
import { Form, Col } from 'react-bootstrap'

export default function SearchForm({ params, onParamChange }) {
    return (
      <Form className= 'mb-4'>
          <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={onParamChange} value={params.email} name='email' type= 'text'/>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={onParamChange} value={params.first} name='first' type= 'text'/>
              </Form.Group>
          </Form.Row>
      </Form>
    )
}
