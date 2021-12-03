import React from 'react'
import { Col } from 'react-bootstrap'

export default function RouterInfo() {
    return (
        <Col md={6} className="routerInfo">
            <h2>React Router Implementation</h2>
            <div className="text-left p-3">
                <p>To implement router functionality in ReactJS:</p>
                <ol>
                    <li>npm install react-router-dom@5.3.0</li>
                    <li>Import the following components from the react-router-dom package:
                        <ul>
                            <li>BrowserRouter (Optional: use an alias of Router)</li>
                            <li>Switch</li>
                            <li>Route</li>
                        </ul>
                    </li>
                    <li>
                        Create the structure as seen in App.js code
                    </li>
                    <li>
                        For every 'page' in your router, import the component you want to display and make a new instance of the Route component, declaring the path and component to render
                    </li>
                    <li>Create the ProtectedRoute component to lock down specific routes in your app</li>
                </ol>
            </div>
        </Col>
    )
}
