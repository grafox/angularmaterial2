import { MareialDesignPage } from './app.po';

describe('mareial-design App', () => {
  let page: MareialDesignPage;

  beforeEach(() => {
    page = new MareialDesignPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
