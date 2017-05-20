var config = {
  API_ENDPOINT: (process.env.OPENFACT_ENDPOINT != null ? process.env.OPENFACT_ENDPOINT : process.env.OPENFACT_SERVICE + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE),
  SECURE_API_ENDPOINT: (process.env.SECURE_OPENFACT_ENDPOINT != null ? process.env.SECURE_OPENFACT_ENDPOINT : process.env.SECURE_OPENFACT_SERVICE + '-' + process.env.SECURE_OPENFACT_SERVICE),
  SSO_ENABLED: process.env.KEYCLOAK_URL ? true : false
};

module.exports = config;
