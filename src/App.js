import React from "react";
import MainRouter from "./router/MainRouter";
import ContextState from "./context/contextState";

const App = () => {
  return (
    <ContextState>
      <MainRouter />
    </ContextState>
  );
};
export default App;
