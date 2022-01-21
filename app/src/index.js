import { runHookApp } from "@forrestjs/hooks";

// Services
import reactRoot from '@forrestjs/react-root';
import reactMUI from '@forrestjs/react-mui';
import reactRouter from '@forrestjs/react-router';
// import reactAxios from './react-axios';

// // Features
// import { muiTheme } from './features/mui-theme';
// import { layout } from './features/layout';
// import { dashboard } from './features/dashboard';
// import { users } from './features/users';
// import { invoices } from './features/invoices';
// import { login } from './features/login';

runHookApp({
  trace: "compact",
  services: [reactRoot, reactMUI, reactRouter],
  // features: [muiTheme, layout, dashboard, users, invoices, login],
}).catch(err => console.error(`Boot: ${err.message}`));

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// import AuthProvider from "./AuthProvider";
// import Login from "./Login";

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthProvider loginComponent={Login}>
//       <App />
//     </AuthProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
