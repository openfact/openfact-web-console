var config = {
  'url': process.env.KEYCLOAK_URL,
  'realm': process.env.KEYCLOAK_REALM,
  'clientId': process.env.KEYCLOAK_CLIENT_ID
};

module.exports = config;
