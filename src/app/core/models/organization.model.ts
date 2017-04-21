import { OpenfactResource } from './openfactresource.model';

export class Organization extends OpenfactResource {

  organization: string;

  smtpServer: SmtpServerConfig;

  defaultKind() {
    return 'Organization';
  }

}

export class Organizations extends Array<Organization> { }


export interface SmtpServerConfig {
  host: string;
  port: string;
  from?: string;
  ssl?: string;
  starttls?: string;
  auth?: string;
  user?: string;
  password?: string;
}
