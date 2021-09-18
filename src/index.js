import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/dashmix.min.css";
import "./assets/fonts/Beattingvile.otf";
import "./assets/fonts/JennaSue.ttf";
import "./assets/fonts/MilkyWay.ttf";
import "./assets/fonts/MisterK.ttf";
import "./assets/fonts/Serendipity.ttf";
import "./assets/fonts/SweetPea.ttf";
import "./assets/fonts/TheSecret-Regular.ttf";
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
	<BrowserRouter>
    	<App />
  	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
