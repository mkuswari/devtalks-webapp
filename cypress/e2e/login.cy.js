/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe("Login Spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });

  it("should display login page correctly", () => {
    cy.get("input[placeholder='Input your email']").should("be.visible");
    cy.get("input[placeholder='Input your password']").should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });

  it("should display alert when email is empty", () => {
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("'Email' is not allowed to be empty");
    });
  });

  it("should display alert when password is empty", () => {
    cy.get("input[placeholder='Input your email']").type(
      "testemail@example.com"
    );
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("'Password' is not allowed to be empty");
    });
  });

  it("should display alert when email and password are wrong", () => {
    cy.get("input[placeholder='Input your email']").type(
      "testemail@example.com"
    );
    cy.get("input[placeholder='Input your password']").type("testpassword");
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Wrong email or password");
    });
  });

  it("should display homepage when email and password are correct", () => {
    cy.get("input[placeholder='Input your email']").type("satoshi@mail.com");
    cy.get("input[placeholder='Input your password']").type("asdasdasd");
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.url().should("eq", "http://localhost:5173/");

    cy.get("img[alt='User Avatar']").should("be.visible");
    cy.get("button").contains("New Thread").should("be.visible");
  });
});
