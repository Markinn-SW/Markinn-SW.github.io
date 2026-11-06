describe('CVs Test', () => {
  it('Test header component', () => {
    cy.visit('/')
    cy.contains('Marco Antonio Bravo Reyes')
  })

  it('Test work-experience component', () => {
    cy.visit('/')
    cy.contains('Frontend Developer')
  })

  it('Test education component', () => {
    cy.visit('/')
    cy.contains('education works!')
  })

  it('Test languages component', () => {
    cy.visit('/')
    cy.contains('languages works!')
  })

  it('Test skills component', () => {
    cy.visit('/')
    cy.contains('skills works!')
  })

  it('Test certificates component', () => {
    cy.visit('/')
    cy.contains('certificates works!')
  })

  it('Test interests component', () => {
    cy.visit('/')
    cy.contains('interests works!')
  })
})
