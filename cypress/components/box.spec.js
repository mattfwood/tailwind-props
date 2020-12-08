/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Box } from '../../src';

const text = 'Button Content';

describe('<Box />', () => {
  it('renders with a theme provider', () => {
    mount(
      <>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <Box p={4}>{text}</Box>
      </>
    );

    cy.contains(text).should('be.visible');
    cy.get('div > div').should('have.css', 'padding', '16px')
  });
});