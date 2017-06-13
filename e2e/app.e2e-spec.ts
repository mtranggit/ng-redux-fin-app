import { NgReduxFinAppPage } from './app.po';

describe('ng-redux-fin-app App', () => {
  let page: NgReduxFinAppPage;

  beforeEach(() => {
    page = new NgReduxFinAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mt!!');
  });
});
