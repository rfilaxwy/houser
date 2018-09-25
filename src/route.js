import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Step1 from './component/Step1/Step1';
import Step2 from './component/Step2/Step2';
import Step3 from './component/Step3/Step3';

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={Step1} path='/Step1' />
        <Route component={Step2} path='/Step2' />
        <Route component={Step3} path='/Step3' />
    </Switch>
)