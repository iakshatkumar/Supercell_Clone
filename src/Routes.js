import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


// importing views
import Home from "./View/Home";
import Games from "./View/Games";
import Hayday from "./View/Hayday";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/games" exact component={Games} />
                <Route path="/games/hayday" component={Hayday} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;