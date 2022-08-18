import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//  Mount function to start up the app
const mount = (htmlElement) => {
  ReactDOM.render(<App />, htmlElement);
};

//  If we are in development and in isolation, call mount immediatly
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// If we are running through container and we should export the mount function
export { mount };
