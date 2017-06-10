import { OpenfactWebConsolePage } from './app.po';

describe('openfact-web-console App', () => {
  let page: OpenfactWebConsolePage;

  beforeEach(() => {
    page = new OpenfactWebConsolePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to openfact!!'))
      .then(done, done.fail);
  });
});
