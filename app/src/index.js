import { runHookApp } from "@forrestjs/hooks";
import reportWebVitals from "./reportWebVitals";

// Services
import reactRoot from "@forrestjs/react-root";
import reactMUI from "@forrestjs/react-mui";
import reactRouter from "@forrestjs/react-router";

// Features
import { OneFront } from "./OneFront";
import { login } from "./login";
import { app } from "./app";

runHookApp({
  trace: "compact",
  services: [reactRoot, reactRouter, reactMUI],
  features: [OneFront, login, app]
}).catch((err) => console.error(`Boot: ${err.message}`));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
