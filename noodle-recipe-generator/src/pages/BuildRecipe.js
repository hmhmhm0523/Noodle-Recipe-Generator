import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function BuildRecipe() {
  return (<Container>

    <Card className='BuildCard'>
      <Row>
        <Col>
          <div className="Noodle"></div>
        </Col>
        <Col>
          <h1>
            Build Your own
          </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicTopping">
              <Form.Label>Topping</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">Braised Beef</option>
                <option value="2">Brasied Pork</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNoodle">
              <Form.Label>Noodle</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">Round Rick Noodle</option>
                <option value="2">Wide Rick Noodle</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBroth">
              <Form.Label>Broth</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">Beef Bone Soup</option>
                <option value="2">Pork Bone Soup</option>
              </Form.Select>
            </Form.Group>

            <Form.Label>Optional</Form.Label>
            <Row>
              <Col> <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Scallion" />
              </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                  <Form.Check type="checkbox" label="Garlic" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox3">
                  <Form.Check type="checkbox" label="Pickled Beans" />
                </Form.Group></Col>

              <Col>
                <Form.Group className="mb-3" controlId="formBasicCheckbox4">
                  <Form.Check type="checkbox" label="Chilli Pepper" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox5">
                  <Form.Check type="checkbox" label="Fried Egg" />
                </Form.Group></Col>
            </Row>
            <Link to="/Noodle-Recipe-Generator/recipe" className="ButtonPanel"><Button >Generate Recipe</Button> </Link>

          </Form>
        </Col>
      </Row>

    </Card>
  </Container>
  )
}
