import React, {useState, useEffect} from 'react'
import {useAuth } from '../../contexts/AuthContext'
import './Resources.css'
import sampleResources from '../../Utilities/sampleResources'
import { Container } from 'react-bootstrap'
import SingleResource from './SingleResource'
import axios from 'axios'
import Logout from '../Auth/Logout'

export default function Resources(){
    const {currentUser} = useAuth();

    //Create a React Hook that will store our Resources from the API 
    //Initially this variable will be set to the value of our sampleResources

    const [resources, setResources] = useState(sampleResources);

    // http://localhost:49204/api/resources
    //npm install axios
    //Below we use the Axios functionality to make a request to the ResourceAPI and get all resources from the Resources table in the db.
    //The function include a JS promise to return data, ehich we will capture and set to set our resources in this component
    const getResources = () => {
        axios.get('http://localhost:49204/api/resources').then(response => {
            setResources(response.data);
        })
    }

      useEffect(() => {
          getResources();
      }, []);

    return(
        <>
        <section className="resources">
           <article className="bg-info p-5">
               <h1 className="text-center">Resources Dashboard</h1>
           </article>
        <Container>
            <article className="resourceGallery row justify-content-center">
                {/* The article above is the outside container for our tiled layout. SingleResource is a component that will house each individual tile, and below we will map each resource to the SingleResource component */}
                {resources.map(x => 
                    <SingleResource
                    key={x.ResourceId}
                    resource={x} />

                    )}
            </article>
        </Container>
        </section>
        <Logout/>
        </>
    )
}