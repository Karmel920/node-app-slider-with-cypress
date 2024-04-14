describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Should swipe slides in gallery with navigation buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  })
});

describe('Swiper Gallery Test', function () {
  it('Should display proper description', function () {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="rome-title"]').should('contain', 'Rome');
    cy.get('[data-test="italy-description"]').should('contain', 'Italy');
    cy.get('[data-test="london-title"]').should('contain', 'London');
    cy.get('[data-test="uk-description"]').should('contain', 'United Kingdom');
    cy.get('[data-test="paris-title"]').should('contain', 'Paris');
    cy.get('[data-test="france-description"]').should('contain', 'France');
  })
});
