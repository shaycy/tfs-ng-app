import { EmptyAppPage } from './app.po';

describe('empty-app App', () => {
  let page: EmptyAppPage;

  beforeEach(() => {
    page = new EmptyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
