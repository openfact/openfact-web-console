#!/bin/bash

if [ $KEYCLOAK_URL ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s#{{ .Env.KEYCLOAK_URL }}#$KEYCLOAK_URL#g"
fi

if [ $KEYCLOAK_REALM ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s/{{ .Env.KEYCLOAK_REALM }}/$KEYCLOAK_REALM/"
fi

if [ $KEYCLOAK_CLIENT_ID ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s/{{ .Env.KEYCLOAK_CLIENT_ID }}/$KEYCLOAK_CLIENT_ID/"
fi

if [ $OPENFACT_API_ENDPOINT ]; then
    find /usr/share/nginx/html/config -name "config.json" | xargs sed -i -e "s#{{ .Env.OPENFACT_API_ENDPOINT }}#$OPENFACT_API_ENDPOINT#g"
fi

exec "$@"
