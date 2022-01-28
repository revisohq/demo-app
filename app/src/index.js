import { runHookApp } from "@forrestjs/hooks";

// Services
import reactRoot from "@forrestjs/react-root";
import reactMUI from "@forrestjs/react-mui";
import reactRouter from "@forrestjs/react-router";
import { OneFront } from "./one-front";

// Features
import { login } from "./features/login";
import { app } from "./features/app";
import { addExpense } from "./features/add-expense";
import { trips } from "./features/trips";

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
  features: [login, app, addExpense, trips]
}).catch((err) => console.error(`Boot: ${err.message}`));
