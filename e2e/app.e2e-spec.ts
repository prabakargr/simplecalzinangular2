import { CalzPage } from './app.po';

describe('calz App', function() {
  let page: CalzPage;

  beforeEach(() => {
    page = new CalzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
