import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Form from '../js/components/form';

describe('form component', () => {
    it.only('accepts a number between 1 - 100', () => {
        const num = 10;
        const renderer = TestUtils.createRenderer();
        renderer.render(<Form onSubit={num}/>);
        const result = renderer.getRenderOutput();
        result.props.onSubmit.should.equal(num);

        // const img = result.props.children[0];
        // img.type.should.equal('img');
        // img.props.src.should.equal(url);
        // img.props.alt.should.equal(description);

        // const p = result.props.children[1];
        // p.type.should.equal('p');
        // p.props.children.should.equal(description);
    });
});