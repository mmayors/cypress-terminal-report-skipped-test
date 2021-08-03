const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = (on, config) => {
    installLogsPrinter(on, { printLogsToConsole: 'always', includeSuccessfulHookLogs: true });
    return config;
};
