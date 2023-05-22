import React from 'react'
import { Form } from 'react-bootstrap';

export const Form2 = () => {
  return (
    <Form>
        <Form.Group>
            <Form.Label>Field 1 - page 2</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Field 2 -page 2</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Field 3 - page 2</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
    </Form>
  )
}
