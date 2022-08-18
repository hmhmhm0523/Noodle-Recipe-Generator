import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
    return (<Container>
        <Card className='HomeCard'>
            <div className="Logo"></div>
            <h1>
                Hunan Noodle Soup <br />
                <span>Recipe</span> Generator
            </h1>
            <h4>PRESENTED BY MENG HUANG</h4>
            <p>At my home in Hunan China, you can eat noodles for breakfast, dinner, and supper. Almost everyone from Hunan has a story about the noodle restaurant downstairs. This recipe generator is created to help make a bowl of rice noodles in my hometown style.</p>
            <div>Demo Video</div>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            <Link to="buildRecipe" className="ButtonPanel"><Button >GET STARTED</Button> </Link>
        </Card>
    </Container>
    )
}