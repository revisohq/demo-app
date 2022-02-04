// ForrestJS Shared Services
const forrestjs = require("@forrestjs/hooks");
const serviceFastify = require("@forrestjs/service-fastify");
const serviceFastifyHealthz = require("@forrestjs/service-fastify-healthz");
const serviceApollo = require("@forrestjs/service-apollo");
const serviceJwt = require("@forrestjs/service-jwt");

// App's Features & Utilities
const login = require("./login");
const { buildApolloConfig } = require("./hasura");

forrestjs.run({
  trace: "compact",
  settings: () => ({
    jwt: {
      secret: process.env.HASURA_JWT_SECRET,
      duration: "1h"
    },
    apollo: {
      client: {
        config: buildApolloConfig({
          endpoint: process.env.HASURA_ENDPOINT,
          secret: process.env.HASURA_JWT_SECRET
        })
      }
    }
  }),
  services: [serviceApollo, serviceJwt, serviceFastify, serviceFastifyHealthz],
  features: [login]
});
