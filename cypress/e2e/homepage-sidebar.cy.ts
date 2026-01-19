describe('Homepage Sidebar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should toggle sidebar when toggle button is clicked', () => {
    cy.get('[data-testid="sidebar"]').should('be.visible');
    
    cy.get('[data-testid="sidebar-toggle"]').click();
    cy.get('[data-testid="sidebar"]').should('have.class', 'w-0');

    cy.get('[data-testid="sidebar-toggle"]').click();
    cy.get('[data-testid="sidebar"]').should('have.class', 'w-65 md:w-85');
  });
});
