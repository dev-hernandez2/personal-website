import React from "react";
import ReactDOM from "react-dom";

//import css
import "bulma/css/bulma.css";
import "animate.css";
import "hover.css/css/hover.css";
import "./App.css";

import App from "./routers";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
