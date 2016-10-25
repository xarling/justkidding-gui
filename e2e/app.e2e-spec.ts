import { JustKiddingGuiPage } from './app.po';

describe('just-kidding-gui App', function() {
  let page: JustKiddingGuiPage;

  beforeEach(() => {
    page = new JustKiddingGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
