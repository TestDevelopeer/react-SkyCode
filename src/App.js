import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import LandingContainer from "./components/Landing/Landing";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LandingContainer}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
