import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import React from "react";
import { Intranet } from "./components/Intranet";
import "./components/style/intranet.css";
import { AuthContextProvider, useAuthState } from "./fbConfig";
import { Auth } from "./components/Auth";


const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/auth" />
      }
    />
  );
};

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  )
}

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
        <UnauthenticatedRoute exact path="/auth" component={Auth}/>
        <AuthenticatedRoute exact path="/" component={Intranet}/>       
        </div>
    
      </Router>
    </AuthContextProvider>
  );
}

export default App;
