import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Guesses from '../js/components/guesses';

describe('Guesses (guesses list)', () => {
  it('Output ul list of guesses', () => {
    const guessList = [1,2,3];
    const renderer = TestUtils.createRenderer();

    renderer.render(<Guesses guesses={guessList} />);
    const output = renderer.getRenderOutput();

    output.type.should.equal('ul');

    const { props } = output;

    props.className.should.equal('guessbox');

    const { children } = props;

    children.should.be.an('array');
    children.should.have.length(guessList.length);
    children[0].props.children.should.equal(guessList[0]);

  });
});
