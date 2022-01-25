import { runHookApp } from "@forrestjs/hooks";

// Services
import reactRoot from "@forrestjs/react-root";
import reactMUI from "@forrestjs/react-mui";
import reactRouter from "@forrestjs/react-router";

// Features
import { OneFront } from "./one-front";
import { login } from "./features/login";
import { app } from "./features/app";
import { addExpense } from "./features/add-expense";

runHookApp({
  trace: "compact",
  settings: {
    one: {
      layout: {
        drawer: {
          open: true
        }
      }
    }
  },
  services: [reactRoot, reactRouter, reactMUI, OneFront],
  features: [login, app, addExpense]
}).catch((err) => console.error(`Boot: ${err.message}`));
