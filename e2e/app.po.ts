import { browser, by, element } from 'protractor';

export class NgReduxFinAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mt-root h1')).getText();
  }
}
