import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LastStep, StepOne, StepTwo } from "./think-in-react/";
import App from "./App";
import { SetStateBadCase, SetStateGoodCase } from "./best-practices/SetState";
import { MutateStateGoodCase, MutateStateBadCase } from "./anti-patterns/MutateState";
import { Form, BadForm, BetterForm } from "./anti-patterns/Form";

const routes = () => (
  <Router>
    <Route exact={true} path="/" key="app" component={App} />

    <Route exact={true} path="/step-one" key="/step-one" component={StepOne} />
    <Route exact={true} path="/last-step" key="/last-step" component={LastStep} />
    <Route exact={true} path="/step-two" key="/step-two" component={StepTwo} />

    <Route
      exact={true}
      path="/setstate-badcase"
      key="/setstate-badcase"
      component={SetStateBadCase}
    />
    <Route
      exact={true}
      path="/setstate-goodcase"
      key="/setstate-goodcase"
      component={SetStateGoodCase}
    />

    <Route
      exact={true}
      path="/mutatestate-badcase"
      key="/mutatestate-badcase"
      component={MutateStateBadCase}
    />
    <Route
      exact={true}
      path="/mutatestate-goodcase"
      key="/mutatestate-goodcase"
      component={MutateStateGoodCase}
    />

    <Route exact={true} path="/bad-form" key="/bad-form" component={BadForm} />
    <Route exact={true} path="/form" key="/form" component={Form} />
    <Route exact={true} path="/better-form" key="/better-form" component={BetterForm} />
  </Router>
);

export default routes;
