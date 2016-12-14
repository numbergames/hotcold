import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import { MainContainer } from '../js/components/index'
// import HelpNew from '../js/components/help-new'
// import GameContainer from '../js/components/gamecontainer'

const should = chai.should();

describe('index.js -- MainContainer', () => {
  it('should render page', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<MainContainer />);
    const output = renderer.getRenderOutput();

    output.type.should.equal('div');

    const { props } = output;

    props.className.should.equal('MainContainer')

    });
});
