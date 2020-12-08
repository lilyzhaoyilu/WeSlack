import React from "react";
import ReactDOM from "react-dom";
import {signUp} from "./util/session_api_util"



document.addEventListener("DOMContentLoaded", () => {
  window.signUp = signUp
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to WeSlack</h1>, root);
});