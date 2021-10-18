import {BrowserRouter, Route, Switch} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import React from "react";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
