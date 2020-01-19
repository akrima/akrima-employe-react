// Dependencies
import React from 'react'
import { Route, Switch } from "react-router-dom";

// Components
import About from '../../../components/About';
import Employe from '../../../components/Employe';

const RouterApp = () => {
    return (
        
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/" exact component={Employe} />
            </Switch>
       
    )
}

export default RouterApp
