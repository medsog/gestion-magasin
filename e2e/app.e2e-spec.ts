import { GestionMagasinPage } from './app.po';

describe('gestion-magasin App', () => {
  let page: GestionMagasinPage;

  beforeEach(() => {
    page = new GestionMagasinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
