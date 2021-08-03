export function skip() {
    cy.log('Skipping test.').then(() => {
        this.skip();
    });
}