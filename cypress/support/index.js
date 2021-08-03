// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your other test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/guides/configuration#section-global
// ***********************************************************

// Import commands.js and defaults.js
// using ES2015 syntax:
// import "./commands"
// import "./defaults"

// Alternatively you can use CommonJS syntax:

const installLogsCollector = require('cypress-terminal-report/src/installLogsCollector');

installLogsCollector({
    collectTypes: [
        'cons:log',
        'cons:info',
        'cons:warn',
        'cons:error',
        'cy:log',
        'cy:request',
        'cy:route',
        'cy:command',
    ],
    enableExtendedCollector: true,
});

before(() => {
    cy.log('BeforeAll Invoked');
});

beforeEach(() => {
    cy.log('BeforeEach Invoked');
})
