/// <reference types="cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';
import { Box } from '../../src';

const text = 'Button Content';

describe('<Box />', () => {
  it('renders all basic tailwind utilities', () => {
    mount(
      <div>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <Box
          flex
          rounded="lg"
          p={4}
          m={2}
          w={96}
          h={96}
          text="3xl"
          textAlign="center"
          textColor="purple-300"
          bg="purple-900"
          font="serif"
          fontWeight="bold"
          border
          borderColor="red-700"
        >
          {text}
        </Box>
      </div>
    );

    cy.contains(text).should('be.visible');
    cy.get('div > div > div')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'border-radius', '8px')
      .should('have.css', 'font-size', '30px')
      .should('have.css', 'padding', '16px')
      .should('have.css', 'width', '384px')
      .should('have.css', 'height', '384px')
      .should('have.css', 'margin', '8px')
      .should('have.css', 'borderWidth', '1px')
      .should('have.css', 'borderColor', 'rgb(185, 28, 28)')
      .should('have.css', 'color', 'rgb(196, 181, 253)')
      .should('have.css', 'background-color', 'rgb(76, 29, 149)')
      .should('have.css', 'text-align', 'center')
      .should(
        'have.css',
        'font-family',
        'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
      )
      .should('have.css', 'font-weight', '700');
  });

  it('renders flex properties', () => {
    mount(
      <div>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <Box
          flex
          flexDirection="row-reverse"
          id="box"
          h={4}
          w={4}
          justify="center"
          items="center"
        >
          Flex
        </Box>
      </div>
    );

    cy.get('#box')
      .should('have.css', 'display', 'flex')
      .should('have.css', 'flex-direction', 'row-reverse')
      .should('have.css', 'justify-content', 'center')
      .should('have.css', 'align-items', 'center');
  });

  it('accepts an "as" prop', () => {
    mount(
      <div>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <Box as="input" p={4} textAlign="center" value="Input" />
      </div>
    );

    cy.get('input').should('have.value', 'Input');
  });

  it('accepts an "as" prop', () => {
    mount(
      <div>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <Box as="input" p={4} textAlign="center" value="Input" />
      </div>
    );

    cy.get('input').should('have.value', 'Input');
  });

  it('passes down all non-tailwind props', () => {
    mount(
      <div>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <Box p={4} id="box" textAlign="center">
          Text
        </Box>
      </div>
    );

    // should be able to find element by ID
    cy.get('#box').contains('Text');
  });
});
