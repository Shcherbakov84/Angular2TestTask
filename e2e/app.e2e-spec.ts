import { TableDataPage } from './app.po';

describe('table-data App', () => {
  let page: TableDataPage;

  beforeEach(() => {
    page = new TableDataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
