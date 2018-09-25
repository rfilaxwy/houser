import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard'
import Step1 from './component/Step1/Step1';
import Step2 from './component/Step2/Step2';
import Step3 from './component/Step3/Step3';
import WizardLanding from './component/Wizard/WizardLanding';

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route  path='/Wizard' render={()=>(
            <Wizard>
                <Switch>
                <Route component={Step1} path='/Wizard/Step1' />
                <Route component={Step2} path='/Wizard/Step2' />
                <Route component={Step3} path='/Wizard/Step3' /> 
                <Route component={WizardLanding} /> 
                </Switch>
            </Wizard>  
        )}/>
    </Switch>
)