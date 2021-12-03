import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function Navigation() {
    const {currentUser} = useAuth();

    return (
       <Navbar variant="dark" bg="dark" expand="md">
           <Navbar.Brand href="/">To DO App!</Navbar.Brand>
           {/* Below is the hamburger button to open/close the menu on a smaller screen size. */}
           <Navbar.Toggle />
           {/* The rest of the menu is nested inside a Navbar.Collapse to determine what content goes in the menu. */}
           <Navbar.Collapse className="justify-content-end">
               <Navbar.Text>
                   <Nav className="mr-auto">
                       {currentUser &&
                       <>
                        
                        <Nav.Link href="/todolist">ToDo List</Nav.Link>
                       <Nav.Link href="/resources">Resources</Nav.Link>
                       <Nav.Link href="/categories">Categories</Nav.Link>
                       </>
                       }
                       <Nav.Link href="/bootstrap">Bootstrap</Nav.Link>
                       <Nav.Link href="/routing">Routing/Auth</Nav.Link>

                   </Nav>
               </Navbar.Text>
           </Navbar.Collapse>
       </Navbar>
    )
}
