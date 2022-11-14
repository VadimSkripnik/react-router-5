import React from "react";
import Users from "./layouts/Users";
import Home from "./layouts/Home";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <>
                <div className="wrapper">
                    <div className="container mt-5">
                                <Switch>
                                    <Route path="/users" component={Users} />
                                    <Route path="/" exact component={Home} />
                                    <Redirect to="/" />
                                </Switch>
                    </div>
                </div>
           
        </>
    );
}

export default App;
