import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import SetState from "./best-practices/SetState";
import MutateState from "./anti-patterns/MutateState";
import Form from "./anti-patterns/Form";
import Component from "./performance/Component";
import PureComponentExample from "./performance/PureComponentExample";
import BindFunction from "./best-practices/BindFunction";
import { LastStep, StepOne, StepTwo } from "./think-in-react/";

const routes = () => (
  <Router>
    <Route exact={true} path="/" key="app" component={App} />

    <Route exact={true} path="/step-one" key="/step-one" component={StepOne} />
    <Route exact={true} path="/last-step" key="/last-step" component={LastStep} />
    <Route exact={true} path="/step-two" key="/step-two" component={StepTwo} />

    <Route
      exact={true}
      path="/setstate"
      key="/setstate"
      component={SetState}
    />

    <Route
      exact={true}
      path="/mutatestate"
      key="/mutatestate"
      component={MutateState}
    />

    <Route exact={true} path="/form" key="/form" component={Form} />

    <Route exact={true} path="/component" key="/component" component={Component} />

    <Route exact={true} path="/bind-function" key="/bind-function" component={BindFunction} />

    <Route
      exact={true}
      path="/pure-component-example"
      key="/pure-component-example"
      component={PureComponentExample}
    />
  </Router>
);

export default routes;
