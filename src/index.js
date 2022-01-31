import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/*import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import userReducer from "./reducer/userReducer";
const store=configureStore(
  {
    reducer:{
      // create the reducer
      user: userReducer

    }
  }
)*/

ReactDOM.render(
 // <Provider store={store}>
      <App />
 // </Provider>
 ,
  document.getElementById("root")
);

