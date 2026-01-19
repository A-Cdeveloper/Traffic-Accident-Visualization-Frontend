describe('Homepage Filters', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow entering start date', () => {
    cy.get('[data-testid="date-input-startDate"]').clear().type('2025-01-15');
    cy.get('[data-testid="date-input-startDate"]').should('have.value', '2025-01-15');
  });

  it('should allow entering end date', () => {
    cy.get('[data-testid="date-input-endDate"]').clear().type('2025-01-20');
    cy.get('[data-testid="date-input-endDate"]').should('have.value', '2025-01-20');
  });

  it('should show toast error when start date is greater than end date', () => {
    cy.get('[data-testid="date-input-startDate"]').clear().type('2025-01-20');
    cy.get('[data-testid="date-input-endDate"]').clear().type('2025-01-15');
    cy.get('[data-testid="filter-submit"]').click();
    cy.contains('Datum početka mora biti pre datuma završetka intervala', { timeout: 5000 }).should('be.visible');
  });

  it('should allow selecting accident type', () => {
    cy.get('[data-testid="accident-type-select"]').click();
    cy.contains('Svi tipovi').click({ force: true });
    cy.get('[data-testid="accident-type-select"]').should('contain', 'Svi tipovi');
  });

  it('should allow toggling category checkbox', () => {
    cy.get('[data-testid^="category-checkbox-"]').first().as('firstCheckbox');
    cy.get('@firstCheckbox').then(($checkbox) => {
      const checkboxId = $checkbox.attr('id');
      cy.get(`label[for="${checkboxId}"]`).click();
      cy.get('@firstCheckbox').should('have.attr', 'data-state', 'checked');
      cy.get(`label[for="${checkboxId}"]`).click();
      cy.get('@firstCheckbox').should('not.have.attr', 'data-state', 'checked');
    });
  });

  it('should apply filters when submit button is clicked', () => {
    cy.get('[data-testid="date-input-startDate"]').clear().type('2025-01-15');
    cy.get('[data-testid="date-input-endDate"]').clear().type('2025-01-20');
    cy.get('[data-testid="filter-submit"]').click();
    
    cy.url().should('include', 'startDate=2025-01-15');
    cy.url().should('include', 'endDate=2025-01-20');
  });

  it('should reset filters when reset button is clicked', () => {
    cy.get('[data-testid="date-input-startDate"]').clear().type('2025-01-15');
    cy.get('[data-testid="date-input-endDate"]').clear().type('2025-01-20');
    cy.get('[data-testid="filter-reset"]').click();
    
    cy.url().should('include', 'startDate=2025-01-01');
    cy.url().should('include', 'endDate=');
  });
});
