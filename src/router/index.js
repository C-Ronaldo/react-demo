import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import LayoutComponent from "@/components/layout";
import Error404 from "@/pages/error/error404";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={LayoutComponent}></Route>
          <Route component={Error404}></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes