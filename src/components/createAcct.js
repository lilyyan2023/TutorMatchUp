import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, DropdownButton, Dropdown, Card } from 'react-bootstrap';

export default class CreateAccountPage extends React.Component {
  state = {
    grade: "Grade"
  }

  handleChange = () => {
    var val = "someValue";
    this.setState({ grade: val });
  }

  render(){
    return(
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Card style={{ width: '45rem' }} className="text-center">
          <Card.Header>Create Account</Card.Header>
          <Card.Body>
            <Form>

              <Form.Row>
                <Form.Group as={Col} controlId="firstName">
                  <Form.Control placeholder="First name" />
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                  <Form.Control placeholder="Last name" />
                </Form.Group>
              </Form.Row>

              <DropdownButton id="chooseGrade" title={this.state.grade} onChange={this.handleChange}>
                <Dropdown.Item eventKey="1">Freshman</Dropdown.Item>
                <Dropdown.Item eventKey="2">Sophomore</Dropdown.Item>
                <Dropdown.Item eventKey="3">Junior</Dropdown.Item>
                <Dropdown.Item eventKey="4">Senior</Dropdown.Item>
                <Dropdown.Item eventKey="5">Graduate</Dropdown.Item>
              </DropdownButton>
              <Form.Group type="email" controlId="email">
                <Form.Control placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Control placeholder="Confirm password" />
              </Form.Group>
              <Col>
                <Button align="center" variant="primary" type="submit">
                  Sign Up
                </Button>
              </Col>

            </Form>
          </Card.Body>
          <Card.Footer className="text-muted">Have an account? ~Log in~</Card.Footer>
        </Card>
      </div>

    )
  }
  
}
