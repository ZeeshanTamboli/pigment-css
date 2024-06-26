import { describe } from 'yargs';
import { expect } from 'chai';
import createExtendSxProp from '../../src/createExtendSxProp';

describe('createExtendSxProp', () => {
  it('return the new copy of input', () => {
    const original = { color: 'red' };
    expect(createExtendSxProp()(original)).to.not.equal(original);
    expect(createExtendSxProp()(original)).to.deep.equal({ color: 'red' });
  });
});
