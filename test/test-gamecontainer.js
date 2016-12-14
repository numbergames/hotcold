import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import { GameContainer } from '../js/components/gamecontainer';
// import Feedback from '../js/components/feedback'
// import Form from '../js/components/form'
// import GuessCount from '../js/components/guess-count'
// import Guesses from '../js/components/guesses'

describe('GameContainer component', () => {
  it('Should render properly', () => {

    // probably unneeded props since they are just passed into children
    //  - can delete once verified as unneeded
    const feedback="Some witty remarks.";
    const won = false;
    const guesses = 5;
    const guessedNumbers = [1,2,3]

    const renderer = TestUtils.createRenderer();

    renderer.render(
      <GameContainer
        feedback={feedback}
        won={won}
        guesses={guesses}
        guessedNumbers={guessedNumbers}
      />);

    const output = renderer.getRenderOutput();

    output.type.should.equal('div');
    output.props.className.should.equal('gameContainer');
  });
});
