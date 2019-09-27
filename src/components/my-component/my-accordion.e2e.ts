import { newE2EPage } from '@stencil/core/testing';

describe('my-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-accordion></my-accordion>');
    const element = await page.find('my-accordion');
    expect(element).toHaveClass('hydrated');
  });
});