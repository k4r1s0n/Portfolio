import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Contact extends Component {
  
  render() {
    return (
      <div style={{marginTop: 200,}} className="container">
        <Form name="input" method="POST" action="https://formspree.io/oleksandr.ibrahimov@gmail.com">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="5" name="message"/>
          </Form.Group>

           <Button variant="primary" type="submit" value="Send">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
