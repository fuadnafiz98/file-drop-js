import { h } from "preact";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";

import Home from "./home";
import Header from "./header";
import Drop from "./Drop";

const App = () => {
  return (
    <div class="bg-blue-600">
      <Header />
      <Router>
        {/* <Home path="/" /> */}
        <Drop path="/" />
        <AsyncRoute
          path="/about"
          getComponent={() =>
            import("./about").then((module) => module.default)
          }
        />
        <AsyncRoute
          path="/view"
          getComponent={() => import("./Drop").then((module) => module.default)}
        />
      </Router>
    </div>
  );
};
export default App;
