import { IadAssignment1Page } from './app.po';

describe('iad-assignment1 App', () => {
  let page: IadAssignment1Page;

  beforeEach(() => {
    page = new IadAssignment1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
