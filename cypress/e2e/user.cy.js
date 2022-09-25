describe("user", () => {
  const userName = "AndreyIv";
  const userID = 73767;
  it("create", () => {
    cy.post(userName, userID);
  });
  it("update", () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/" + userName,
      body: {
        id: userID,
        username: userName,
        firstName: "Alexei",
        lastName: "Ivanov",
        email: "sdfs@sdf.et",
        password: "sdfsdf",
        phone: "+79348234234",
        userStatus: 1,
      },
    }).then((resp) => {
      if (resp.status === 200) return cy.log("ok");
      else return cy.log("что-то пошло не так");
    });
  });
  it("delete", () => {
    cy.delete(userName);
  });
});

// {
//   "id": 73767,
//   "username": "AndreyIv",
//   "firstName": "Alexei",
//   "lastName": "Ivanov",
//   "email": "sdfs@sdf.et",
//   "password": "sdfsdf",
//   "phone": "+79348234234",
//   "userStatus": 1
// }
