FROM hasura/graphql-engine:v2.1.1.cli-migrations-v3
RUN ln -s /bin/hasura-cli /usr/bin/hasura

# Prepare data volumes for docker-compose to map it
# and make it possible to use dynamic data
VOLUME /migrations
VOLUME /metadata
VOLUME /seeds

# Add the executable script that will perform the full migration
ADD ./migrate.sh /migrate.sh
RUN chmod +x migrate.sh

# Add a basic yaml config file that let the migration target the local hasura container
ADD ./config.yaml /config.yaml
ADD ./metadata /metadata
ADD ./migrations /migrations
ADD ./seeds /seeds

ENTRYPOINT ["/migrate.sh"]