import { InMotionGoPage } from './app.po';

describe('in-motion-go App', () => {
  let page: InMotionGoPage;

  beforeEach(() => {
    page = new InMotionGoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
