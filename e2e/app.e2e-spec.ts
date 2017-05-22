import { MaterialNgPage } from './app.po';

describe('material-ng App', () => {
  let page: MaterialNgPage;

  beforeEach(() => {
    page = new MaterialNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
