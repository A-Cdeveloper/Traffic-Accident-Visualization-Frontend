describe('Homepage Layout', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the homepage successfully', () => {
    cy.url().should('include', '/');
  });

  it('should display the header', () => {
    cy.get('[data-testid="header"]').should('exist').and('be.visible');
  });

  it('should display the sidebar', () => {
    cy.get('[data-testid="sidebar"]').should('exist').and('be.visible');
  });

  it('should display the filter form', () => {
    cy.get('[data-testid="filter-form"]').should('exist').and('be.visible');
  });

  it('should display the info panel', () => {
    cy.get('[data-testid="loading"]').should('exist');
    cy.get('[data-testid="info-panel"]', { timeout: 10000 }).should('exist');
  });

  it('should display loading state while fetching data', () => {
    cy.get('[data-testid="loading"]').should('exist');
    cy.get('[data-testid="map-container"]', { timeout: 10000 }).should('exist');
  });

  it('should display the map', () => {
    cy.get('[data-testid="map-container"]', { timeout: 10000 }).should('exist').and('be.visible');
    cy.get('.leaflet-container').should('exist').and('be.visible');
  });

  it('should display footer', () => {
    cy.get('[data-testid="footer"]').should('exist').and('be.visible');
  });

  it('should handle API error when fetching accidents for map', () => {
    cy.intercept('GET', '**/api/accidents*', { statusCode: 500, body: { error: 'Internal Server Error' } }).as('getAccidentsError');
    
    cy.visit('/');
    
    cy.wait('@getAccidentsError');
    
    cy.get('[data-testid="no-accidents-found"]', { timeout: 5000 }).should('exist').and('be.visible');
  });

  it('should handle API error when fetching data for info panel', () => {
    cy.intercept('GET', '**/api/accidents*', { statusCode: 500, body: { error: 'Internal Server Error' } }).as('getAccidentsError');
    cy.intercept('GET', '**/api/accidents/metadata', { statusCode: 500, body: { error: 'Internal Server Error' } }).as('getFiltersError');
    
    cy.visit('/');

    cy.wait(['@getAccidentsError', '@getFiltersError']);

    cy.get('[data-testid="error-page"], [data-testid="info-panel"]', { timeout: 5000 }).should('exist');
  });
});
