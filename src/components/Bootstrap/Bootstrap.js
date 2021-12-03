//In this component, we will explore the react-bootstrap package, which is an npm package that will allow us to create components that will render bootstrap-enabled html. In order to use the package, we must open a terminal and run 'npm install react-bootstrap' against our project. Second, we must import the components we wish to use. Third, create instances of those components.
import React from 'react'
import './Bootstrap.css'
//Below we will import the components from the react-bootstrap package that we wish to use
import {Container, Row, Col, Carousel, Accordion} from 'react-bootstrap'

//Import images to use for the carousel
import image from '../../images/background.jpg'
import image2 from '../../images/background2.jpg'
import image3 from '../../images/background3.jpg'

import Logout from '../Auth/Logout'
import { useAuth } from '../../contexts/AuthContext'

export default function Bootstrap() {
    const {currentUser} = useAuth();
    return (
        <section className="bootstrap">
            <main>
                {/* Below we use the Carousel component, along with its child components to render specific code to the browser to create a functioning carousel. We will also add some minor styling changes in Bootstrap.css to make it look how we want. */}
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image} alt="First Slide"/>
                        <Carousel.Caption>
                            <h3>First Slide Label</h3>
                            <p>This is the first slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image2} alt="Second Slide"/>
                        <Carousel.Caption>
                            <h3>Second Slide Label</h3>
                            <p>This is the second slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image3} alt="Third Slide"/>
                        <Carousel.Caption>
                            <h3>Third Slide Label</h3>
                            <p>This is the third slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* Below all content will be housed in a Container component. This will create more padding just like a div.container would provide. */}
                <br/>
                <Container>
                   <Row>
                       <Col md={{span: 8, offset: 2}}>
                           <Accordion>
                               <Accordion.Item eventKey="0">
                                   <Accordion.Header>
                                       STEP 1 - Install the Package
                                   </Accordion.Header>
                                   <Accordion.Body>
                                       npm install react-bootstrap
                                   </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="1">
                                   <Accordion.Header>
                                       STEP 2 - Import the components you are using
                                   </Accordion.Header>
                                   <Accordion.Body>
                                       <a href="https://react-bootstrap.github.io" target="_blank" rel="noreferrer">Visit the docs here</a>
                                   </Accordion.Body>
                               </Accordion.Item>
                               <Accordion.Item eventKey="2">
                                   <Accordion.Header>
                                       STEP 3 - Call to the components
                                   </Accordion.Header>
                                   <Accordion.Body>
                                       Using the code example from react-bootstrap documentation, call to the components as needed to implement the Bootstrap component in your UI.
                                   </Accordion.Body>
                               </Accordion.Item>
                           </Accordion>
                       </Col>
                   </Row>
                   {/* In the implementation below, we create Col Components but also utilize some bootstrap classNames that will allow us to customize the look of the HTML it renders to the UI. */}
                   <br/>
                   <Row className="text-center">
                       <Col md={3} className="alert alert-primary">
                           <h4>
                               col-md-3
                               <hr/>
                               will take 3 of 12 columns in the grid
                           </h4>
                       </Col>
                       <Col md={6} className="alert alert-danger">
                           <h4>
                               col-md-6
                               <hr />
                               will take up 6 of 12 columns in the grid
                           </h4>                           
                       </Col>
                       <Col md={3} className="alert alert-warning">
                           <h4>
                               col-md-3
                               <hr />
                               will take up 3 of 12 columns in the grid
                           </h4>
                       </Col>
                   </Row>
                   <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <h4 className="alert alert-success">
                                This is an example of an offset used to center the text.
                            </h4>
                        </Col>
                   </Row>
                </Container>
            </main>
            {currentUser &&
            <Logout/>
            }
        </section>
    )
}
