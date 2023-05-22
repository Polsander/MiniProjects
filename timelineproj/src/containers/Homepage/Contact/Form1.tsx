import React from 'react';
import Form from 'react-bootstrap/Form'


export const Form1 = () => {
  return (
    <Form>
        <Form.Group>
            <Form.Label>Field 1</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Field 2</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Field 3</Form.Label>
            <Form.Control type='input' placeholder='Field 1'/>
        </Form.Group>
    </Form>
  )
}
