import { resolve } from 'node:path';
import { getComponents } from './components';

describe('components', () => {
  it('should convert components to classes', () => {
    const components = getComponents(resolve(__dirname, '../'));

    const classes = components.map((cssInJs) => Object.keys(cssInJs));

    expect(classes).toMatchInlineSnapshot(`
      Array [
        Array [
          ".title",
          ".title--big",
        ],
      ]
    `);
  });
});
