describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in')
    cy.wait(2000)
    cy.get('div[id="icp-nav-flyo"]').click()
    cy.log("test")
  })
})