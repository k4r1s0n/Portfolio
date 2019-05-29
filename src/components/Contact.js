/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Contact extends Component {
  
  render() {
    return (
      <div>
        <div id="email-wrap" className="container-fluid">
          <Form id="contact-form" name="input" method="POST" action="https://formspree.io/oleksandr.ibrahimov@gmail.com">
            <div className="row">
              <div className="col-6">
                <Form.Group>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name"/>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group>
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" name="email"/>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="5" name="message"/>
            </Form.Group>
              </div>
            </div>
            <Button variant="success" type="submit" value="Send">
              Submit
            </Button>
          </Form>
        </div>
        <div id="contact-links-wrap"className="text-center container-fluid">
          <ul id="contact-links">
            <a href="https://github.com/k4r1s0n" target="_blank" title="GitHub"><i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/alex-i-045b00134/" target="_blank" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:oleksandr.ibrahimov@gmail.com" target="_blank" title="Email"><i className="fas fa-envelope-square"></i></a>
          </ul>
          <button type="button" className="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#exampleModalCenter">
          <i className="fas fa-mobile-alt"></i> Get My Contact Number
          </button>
          <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">My Contact Number</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                <i className="fas fa-mobile-alt"></i> +1 (778) 957-9844
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
