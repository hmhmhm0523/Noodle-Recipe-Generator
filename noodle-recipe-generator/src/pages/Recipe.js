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
        tweenDuration={70000}

      />
      <Row className='RecipeRow'>
        <Col>
          <div className='FinishedNoodleSoup'></div>
        </Col>
        <Col>

          <Card className='RecipeCard'>

            <h1>You made it!</h1>
            <p>
              <span>PREP: 30 minutes</span>
              <span>COOK: 2h - 24h</span>
              <span>Serves: 4 people</span>
            </p>
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
                  <li>1 / 2 cup of soy sauce</li>
                  <li>Rice vermicelli</li>
                  <li>0.5 lb beef flank steak</li>
                  <li>3 lb pork femur bone</li>
                  <li>6 slices of ginger</li>
                  <li>1 cup of Shaoxing Wine</li>
                  <li>3 bunch of cilantro</li>
                  <li>3 tablespoon oil</li>
                  <li>3 heads garlic</li>
                  <li>Pickles of your choice</li>
                  <li>1 scallion</li>
                  <li>16 cups of cold water</li>
                </ul>


              </Tab>
              <Tab eventKey="Instructions" title="Instructions">
                <h4> Step 1: Prepare for the broth</h4>
                <ul>
                  <li>Fill one large stock pot with 16 cups of cold water. Add the ginger, Shaoxing wine and pork bone.</li>
                  <li>Cover and bring to a boil. Immediately turn down the heat and simmer for 10 minutes. After that, turn off the heat and set aside.</li>
                  <li>If you are using instant pot then just select the Soup/Broth mode and cook for 2h to 24h</li>
                </ul>
                <h4> Step 2: Prepare for the topping</h4>
                <ul>
                  <li>Heat the oil in another stock pot or large wok over medium low heat, and add the garlic.</li>

                  <li>Cook until the garlic turned yellow, add in sliced beef and cook for two minutes</li>

                  <li>When beef is midum rare add in cilantro and keep cooking until cilantro is soft</li>
                  <li>Add some salt and soy sause, and turn off the heat</li>
                </ul>
                <h4> Step 3: Prepare for the noodles</h4>
                <ul>
                  <li>Soak the noodle in water for 5 min</li>
                  <li>Cook your noodles in a separate pot according to the package instructions</li>
                  <li>Divide among your serving bowls</li>
                </ul>
                <h4> Step 4: Assemble everything </h4>
                <ul>
                  <li>Add some salt, scallion and soy sauce to your serving bowls</li>
                  <li>Add pork bone broth into the bowl</li>
                  <li>Add Noodles and put the cilantro beef on</li>
                  <li>Add garlic and all kinds of pickles you like</li>
                 </ul>
              </Tab>
            </Tabs>
            <div className='ButtonPanel'>
              <a className='Copy'>Copy to Clipboard</a>
              <a className='Email'>Send via Email</a>
              <a href="/Noodle-Recipe-Generator/buildRecipe">Create Another Recipe</a>
            </div>
          </Card>

        </Col>
      </Row>
    </Container>
  );
}
