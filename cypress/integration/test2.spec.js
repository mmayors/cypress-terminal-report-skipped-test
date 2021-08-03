it('Test2', function () {
    cy.log('Skipping test 2').then(function () {
        this.skip();
    });
});