# ===========
# DEVELOPMENT
# ===========
#
# Use these commands as interface to the Docker containers that run
# the development environment.
# 

build:
	lima nerdctl compose build --no-cache

start:
	lima nerdctl compose up postgres hasura
# 	docker-compose logs -f auth app

stop:
	lima nerdctl compose down

ps:
	lima nerdctl compose ps

# reset: stop
# 	rm -rf .docker-data
# 	docker-compose build --no-cache

# test:
# 	docker-compose up auth-test
# 	docker-compose up app-test

# console:
# 	(cd services/migrations && hasura console)

# migrate:
# 	docker-compose up migrations

# logs:
# 	docker-compose logs -f

# logs-auth:
# 	docker-compose logs -f auth

# logs-hasura:
# 	docker-compose logs -f hasura

# logs-app:
# 	docker-compose logs -f hasura


# =====================
# PRODUCTION SIMULATION
# =====================
#
# You can run this project with the production builds.
# It simulates the production environment as close as it is possible by running
# all the needed services with production settings.
#
# What is not really production?
# - DNS resolution
# - Certificates
# - Latency
#

# prod-build:
# 	docker-compose -f docker-compose.prod.yml build --no-cache

# prod-start:
# 	docker-compose -f docker-compose.prod.yml up

# prod-stop:
# 	docker-compose -f docker-compose.prod.yml down
