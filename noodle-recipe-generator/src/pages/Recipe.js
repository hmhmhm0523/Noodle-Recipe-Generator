import React, { useState } from 'react';
import { Button, Card, Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Confetti from 'react-confetti'


export default function ControlledTabsExample() {
  const [key, setKey] = useState('Ingredients');
  return (
    <Container>
      <Confetti
        recycle={false}
        numberOfPieces={2000}
        tweenDuration={50000}

      />
      <Row className='RecipeRow'>
      <Col>
      <div className='FinishedNoodleSoup'></div>
      </Col>
<Col>

      <Card className='RecipeCard'>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
          transition={false}
          justify
        >
          <Tab eventKey="Ingredients" title="Ingredients">
            <ul>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
            </ul>


          </Tab>
          <Tab eventKey="Instructions" title="Instructions">
            <h4> Step 1: Prepare for the topping</h4>
            <ul>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
            </ul>
            <h4> Step 2: Prepare for the Broth</h4>
            <ul>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
            </ul>
            <h4> Step 3: Prepare for the topping</h4>
            <ul>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
            </ul>
            <h4> Step 4: Prepare for the Broth</h4>
            <ul>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
            </ul>
            <h4> Step 5: Prepare for the topping</h4>
            <ul>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
            </ul>
            <h4> Step 6: Prepare for the Broth</h4>
            <ul>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
              <li>1 Tbsp unsalted butter</li>
              <li>2 tsp sesame or vegetable oil</li>
              <li>2 chicken breasts (boneless, skin-on)*</li>
              <li>kosher salt and freshly-ground black pepper, to season</li>
            </ul>

          </Tab>

        </Tabs>
        <div className='ButtonPanel'>
          <a className='Copy'>Copy</a>
          <a className='Email'>Send via Email</a>
        </div>
      </Card>

      </Col>
      </Row>
    </Container>
  );
}
