import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import LandingContainer from "./components/Landing/Landing";
import Preloader from "./components/Elements/Preloader/Preloader";
import Up from "./components/Elements/Up/Up";
import Header from "./components/Elements/Header/Header";
import Footer from "./components/Elements/Footer/Footer";
import DirectionPage from "./components/Directions/DirectionPage/DirectionPage";
import Price from "./components/Price/Price";

function App() {
    return (
        <Provider store={store}>
            <Preloader/>
            <Up/>
            <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
                <Route path='/' component={Header}/>
                <Switch>
                    <Route exact path='/' component={LandingContainer}/>
                    <Route exact path='/direction/:directionType' component={DirectionPage}/>
                    <Route exact path='/price/:course' component={Price}/>
                    <Route exact path='*' component={LandingContainer}/>
                </Switch>
                <Route path='/' component={Footer}/>
            </BrowserRouter>

        </Provider>
    );
}

export default App;
