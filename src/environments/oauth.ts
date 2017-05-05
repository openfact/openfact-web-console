export const oauthConfig = {
  url: '{{ .Env.KEYCLOAK_URL }}',
  realm: '{{ .Env.KEYCLOAK_REALM }}',
  clientId: '{{ .Env.KEYCLOAK_CLIENT_ID }}'
};

export function getOAuthConfig() {
  let settingsRepository = Object.assign({}, oauthConfig);

  if (settingsRepository.url && settingsRepository.url.indexOf('{{') !== -1) { delete settingsRepository['url']; }
  if (settingsRepository.realm && settingsRepository.realm.indexOf('{{') !== -1) { delete settingsRepository['realm']; }
  if (settingsRepository.clientId && settingsRepository.clientId.indexOf('{{') !== -1) { delete settingsRepository['clientId']; }

  return settingsRepository;
}
