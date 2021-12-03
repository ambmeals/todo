import React from 'react'
import { useHistory } from 'react-router';
import { useAuth } from  '../../contexts/AuthContext';

import './Login.css'

export default function Login() {
    const {authenticate} = useAuth();
    const history = useHistory();

    async function handleAuth(){
        await authenticate()
        history.push('/categories')
    }
    return (
        <section className="login">
            <article>
                <h1 className="p-5 m-2 text-dark">Welcome to my ToDO App!</h1>
                <button className="btn btn-info" onClick={() => handleAuth()}>
                    Login w/ GitHub
                </button>
            </article>
        </section>
    )
}