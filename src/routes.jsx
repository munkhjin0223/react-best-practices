import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilterProductTable from './think-in-react/FilterableProductTable';
import App from './App';
import { SetStateBadCase, SetStateGoodCase } from './best-practices/SetState';
import { MutateStateGoodCase, MutateStateBadCase } from './anti-patterns/MutateState';
import { Form, BadForm, BetterForm } from './anti-patterns/Form';

const routes = () => (
  <Router>
    <Route exact={true} path="/" key="app" component={App} />
    
    <Route exact={true} path="/think-in-react" key="/think-in-react" component={FilterProductTable} />
    
    <Route exact={true} path="/setstate-badcase" key="/setstate-badcase" component={SetStateBadCase} />
    <Route exact={true} path="/setstate-goodcase" key="/setstate-goodcase" component={SetStateGoodCase} />
    
    <Route exact={true} path="/mutatestate-badcase" key="/mutatestate-badcase" component={MutateStateBadCase} />
    <Route exact={true} path="/mutatestate-goodcase" key="/mutatestate-goodcase" component={MutateStateGoodCase} />
    
    <Route exact={true} path="/bad-form" key="/bad-form" component={BadForm} />
    <Route exact={true} path="/form" key="/form" component={Form} />
    <Route exact={true} path="/better-form" key="/better-form" component={BetterForm} />
  </Router>
)

export default routes;
