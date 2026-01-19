describe('Homepage Map', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display accidents on map', () => {
    cy.get('[data-testid="map-container"]', { timeout: 10000 }).should('exist').and('be.visible');
    cy.get('.leaflet-container').should('exist').and('be.visible');
    cy.get('[data-testid="marker"]').should('exist').and('be.visible');
  });

  it('should display popup when marker is clicked', () => {
    cy.get('[data-testid="marker"]').first().scrollIntoView().click({ force: true });
    cy.get('[data-testid="accident-popup"]', { timeout: 2000 }).should('exist').and('be.visible');
  });
});
