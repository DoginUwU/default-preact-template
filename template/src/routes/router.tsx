import { FunctionalComponent, h } from "preact";
import { Route, Router as RouterPreact } from "preact-router";

import Home from "../views/home";

const Router: FunctionalComponent = () => {
  return (
    <div id="preact_root">
      <RouterPreact>
        <Route path="/" component={Home} />
      </RouterPreact>
    </div>
  );
};

export default Router;
