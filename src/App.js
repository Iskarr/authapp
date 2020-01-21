import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="container">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </div>
    </>
  );
}

export default App;

// bit.ly/ps-auth0

//npm install auth0-js@9.8.0
//auth0-lock@11.10.0
// express@4.16.3
// express-jwt@5.3.1
// express-jwt-authz@1.0.0
// jwks-rsa@1.3.0
// npm-run-all@4.1.3
// react-router-dom@4.3.1
