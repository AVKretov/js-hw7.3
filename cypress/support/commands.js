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

Cypress.Commands.add("delete", (name) => {
  cy.request({
    method: "DELETE",
    url: "https://petstore.swagger.io/v2/user/" + name,
  });
});
Cypress.Commands.add("post", (name, uid) => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/user/createWithArray",
    body: [
      {
        id: uid,
        username: name,
        firstName: "Andrey",
        lastName: "Ivanov",
        email: "sdfs@sdf.et",
        password: "sdfsdf",
        phone: "+79348234234",
        userStatus: 1,
      },
    ],
  });
});
