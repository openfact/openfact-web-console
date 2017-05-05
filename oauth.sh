#!/bin/bash

if [ $KEYCLOAK_BASE_URL ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s/{{ .Env.KEYCLOAK_BASE_URL }}/$KEYCLOAK_BASE_URL/".
fi

if [ $KEYCLOAK_REALM ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s/{{ .Env.KEYCLOAK_REALM }}/$KEYCLOAK_REALM/".
fi

if [ $KEYCLOAK_CLIENT_ID ]; then
    find /usr/share/nginx/html -name "*.js" | xargs sed -i -e "s/{{ .Env.KEYCLOAK_CLIENT_ID }}/$KEYCLOAK_CLIENT_ID/".
fi

#sed -i -e "s/{{ .Env.KEYCLOAK_BASE_URL }}/$KEYCLOAK_BASE_URL/" /usr/share/nginx/html/config/oauth.js && \
#sed -i -e "s/{{ .Env.KEYCLOAK_REALM }}/$KEYCLOAK_REALM/" /usr/share/nginx/html/config/oauth.js && \
#sed -i -e "s/{{ .Env.KEYCLOAK_CLIENT_ID }}/$KEYCLOAK_CLIENT_ID/" /usr/share/nginx/html/config/oauth.js
