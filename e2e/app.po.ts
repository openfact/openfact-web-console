import { browser, by, element } from 'protractor';

export class OpenfactWebConsolePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('openfact-root h1')).getText();
  }
}
