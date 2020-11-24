import React from 'react';
import renderer from 'react-test-renderer';
import { Container } from './container';

it('renders correctly', () => {
    const element = renderer.create(<Container>Test Container</Container>).toJSON();
    expect(element).toMatchSnapshot();
  });