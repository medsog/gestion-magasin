import { GestionMagPage } from './app.po';

describe('gestion-mag App', () => {
  let page: GestionMagPage;

  beforeEach(() => {
    page = new GestionMagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
