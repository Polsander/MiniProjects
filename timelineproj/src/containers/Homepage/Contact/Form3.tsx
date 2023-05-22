import React from 'react'

import { Form } from 'react-bootstrap';

export const Form3 = () => {
  return (
    <Form>
        <Form.Group>
            <Form.Label>Field 1 - page 3</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Field 2 - page 3</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Field 3 - page 3</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
    </Form>
  )
}
