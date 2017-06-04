#!/bin/bash

if [ $KEYCLOAK_PORT_8080_TCP_ADDR ] && [ $KEYCLOAK_PORT_8080_TCP_PORT ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s#{{ .Env.KEYCLOAK_AUTH_SERVER_URL }}#http://${KEYCLOAK_PORT_8080_TCP_ADDR:-keycloak}:${KEYCLOAK_PORT_8080_TCP_PORT:-8080}/auth#g"
fi

if [ $KEYCLOAK_REALM ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s/{{ .Env.KEYCLOAK_REALM }}/$KEYCLOAK_REALM/"
fi

if [ $KEYCLOAK_RESOURCE ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s/{{ .Env.KEYCLOAK_RESOURCE }}/$KEYCLOAK_RESOURCE/"
fi

if [ $OPENFACT_PORT_8080_TCP_ADDR ] && [ $OPENFACT_PORT_8080_TCP_PORT ]; then
    find /usr/share/nginx/html/config -name "config.json" | xargs sed -i -e "s#{{ .Env.OPENFACT_API_ENDPOINT }}#http://${OPENFACT_PORT_8080_TCP_ADDR:-openfact}:${OPENFACT_PORT_8080_TCP_PORT:-8080}#g"
fi

exec "$@"
