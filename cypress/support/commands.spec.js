// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//FUNCIONES TEXTBOX
Cypress.Commands.add("firstName", (id, texto) => {
    cy.get(id).type(texto)
})
Cypress.Commands.add("lastName", (id, texto) => {
    cy.get(id).type(texto)
})
Cypress.Commands.add("email", (id, texto) => {
    cy.get(id).type(texto)
})
Cypress.Commands.add("address", (id, texto) => {
    cy.get(id).type(texto)
})
Cypress.Commands.add("phoneNumber", (id, texto) => {
    cy.get(id).type(texto)
})


//FUNCIONES RADIOBUTTONS

Cypress.Commands.add("radioButton1", (id) => {
    cy.get(id)
})
Cypress.Commands.add("radioButton2", (id) => {
    cy.get(id)
})
Cypress.Commands.add("radioButton3", (id) => {
    cy.get(id)
 })

 //FUNCIONES CHECKBOX

 Cypress.Commands.add("checkBox1", (id) => {
    cy.get(id)
})
Cypress.Commands.add("checkBox2", (id) => {
    cy.get(id)
})
Cypress.Commands.add("checkBox3", (id) => {
    cy.get(id)
 })




