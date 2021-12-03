import React, {useState, useEffect} from 'react'
import sampleCategories from '../../Utilities/sampleCategories'
import './Categories.css'
import { Container } from 'react-bootstrap';
import SingleCategory from './SingleCategory'
import axios from 'axios'
import Logout from '../Auth/Logout';


export default function Categories() {
    const [categories, setCategories] = useState(sampleCategories);

    //function to get categories
    const getCategories = () => {
        axios.get('http://localhost:49204/api/categories').then(response =>{ 
            console.log(response);
        setCategories(response.data)}
        
        );
    }
    //way to call that function
   useEffect(() => {
       getCategories();
   }, []);

    return (
        <>
        <section className="categories">
            <article className="bg-info p-5">
                <h1 className="text-center">
                    Categories Dashboard
                </h1>
            </article>
            <Container>
                <table className="table table-striped table-light rounded mt-3 mb-3">
                    <thead classname="bg-info text-uppercase">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(cat =>
                           <SingleCategory
                           key={cat.CategoryId}
                           category={cat}
                           />
                        )}
                    </tbody>
                </table>
            </Container>
        </section>
            <Logout/>
            </>
    )
}
