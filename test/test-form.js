import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Form from '../js/components/form';

describe('form component', () => {
    it('accepts a number between 1 - 100', () => {
        const guess = 10;
        const renderer = TestUtils.createRenderer();
        renderer.render(<Form onSubmit={''}/>);
        const result = renderer.getRenderOutput();
        // console.log(result);
        result.type.should.equal('div');
        // input.props.ref.should.equal(guess)

        const { props } = result;
        // console.log(props.children[0]);
    });
});
