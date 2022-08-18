import React, { useState } from 'react';
import { Button, Card, Container, Tab, Tabs } from 'react-bootstrap'



function ControlledTabsExample() {
  const [key, setKey] = useState('Ingredients');

  return (

    <Container>

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

            </ul>
          </Tab>
          <Tab eventKey="Instructions" title="Instructions">
            <div>tab Instructions</div>

          </Tab>

        </Tabs>
      </Card>
    </Container>
  );
}

export default ControlledTabsExample;