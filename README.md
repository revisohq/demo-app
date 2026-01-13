⚠️ Archived and moved to [Gitlab](https://biosphere.teamsystem.com/reviso/playground/demo-app)

# FullStack Javascript

This project proposes a possible structure for a micro-service oriented architecture that is paranoid with the **Developer Experience**.

You can build great stuff using:

- PostgreSQL
- Hasura.io
- ForrestJS
- NodeJS
- React

## Start Coding

The following commands have been tested on MacOSX with Docker and on GitPod.  
You need `Docker` to be up and running on your system.

```bash
# Start & Stop
make start
make stop

# Full State Reset
# (it will also rebuild all the containers)
make reset
```

or click this button to enjoy a **remote development environment**:

[![Open in GitPod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/revisohq/demo-app)

### Host's Ports

You can find all the ports that are used by reading through the `docker-compose.yml`. You can also easily change those values in your local `.env` file.

The default ports are:

- `POSTGRES_PORT=5432`
- `HASURA_PORT=8008`
- `ADMINER_PORT=8008` - Database editor utility
- `AUTH_PORT=4000` - The Authorization microservice
- `APP_PORT=3000` - Webpack Dev Server from Create React App

### Docker for Development

All the services are wrapped as Docker containers for the developer's convenience. All the necessary containers are automatically built up the first time you start th App.

> Each service builds a custom container pre-installing the NPM dependencies into it. Any time you update the `package.json` of any service you should run `make build` in order to update the project.

```bash
# Rebuild the development containers
make build
```

### The Project's State

The folder `.docker-data` contains the project's state. Remove it to start over:

```bash
sudo rm -rf .docker-data
```

## Connect to Postgres UI

The project ships [Adminer](https://www.adminer.org/) that let you inspect Postgre's state.

1. open the project's port `8081`
2. select the driver for Postgres
3. type `localhost` into the host field
4. type `postgres` everywhere else

## Hasura Console

Hasura runs on port `8080` and exposes its production console by default. Use this console to run all the queries you want and make test changes. No problem.

> But if you want to use the cool stuff, you may want to run the native console that will **sync your changes to the project's migration service**.

When you run the development environment on your local devbox, or in a remote server where you can expose ports directly, you can enjoy the [CLI Hasura Console](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html).

```bash
make console
```

## Hasura Migrations

Hasura metadata, migrations and seeds from the `/services/migrations` service are applied every time you start the project or your full convenience.

You and also kick this manually by running:

```bash
make migrate
```

And you can also install the [CLI Hasura Console](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html) and [run specific migrations](https://hasura.io/docs/latest/graphql/core/migrations/index.html) natively from the migrations service folder.

## Simulate Production

The project comes with a production simulation setup that build and run production-grade containers into a docker-compose project.

```bash
make prod-start
make prod-stop
make prod-build
```

> Each service will run as it will in production. But communication, DNS, certificates and latency will not be simulated.
