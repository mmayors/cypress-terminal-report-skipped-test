// ***********************************************
// This example commands.js shows you how to
// create the custom commands: 'createDefaultTodos'
// and 'createTodo'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/commands
// ***********************************************
import installLogsCollector from 'cypress-terminal-report/src/installLogsCollector';
import { skip } from "./skip";

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

Cypress.Commands.add('skip', skip);