import "./App.css";
import Bootstrap from "./components/Bootstrap/Bootstrap";
import Navigation from "./components/Navigation";
import Routing from "./components/Routing/Routing";
import NotFound from "./components/NotFound";
//Below we import AuthProvider Context
import { AuthProvider } from "./contexts/AuthContext";
import Login from './components/Auth/Login';
import Footer from './Footer'

//Below we import the react-router-dom components necessary to render a specific component based on the url path. We can use an alias for a component with a longer name. See BrowserRouter below.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute'
import Resources from './components/Resources/Resources'
import Categories from './components/Categories/Categories'
import TodoForm from "./components/ToDo/TodoForm";
import Todolist from "./components/ToDo/Todolist";

function App() {
  
  return (
    <>
    <div className="App">
      <AuthProvider>
        <Navigation />
        {/* Routing - We need to install react-router-dom using npm install react-router-dom. Then we import the package and components into this file. Finally we assemble the structure below. */}
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path='/login' component={Login} />
            <Route exact path="/" component={Todolist} />
            <Route path='/todolist' component={Todolist} />
            <PrivateRoute path="/resources" component={Resources} />
            <PrivateRoute path="/categories" component={Categories} />
            <PrivateRoute path="/TodoForm" component={TodoForm} />
            <Route path="/Todolist" component={Todolist} />
            <Route path="/bootstrap" component={Bootstrap} />
            <Route path="/routing" component={Routing} />

            {/* Below we call to the NotFound component and tie any other route but the ones listed above to render the NotFound component. This must be listed last in the list of Routes. */}
            <Route component={NotFound} />
          </Switch>
        </Router>
        {/* THis is where the Footer would be rendered. */}
      </AuthProvider>
      
      <Footer/>
      </div>
      </>
      );
}

export default App;
