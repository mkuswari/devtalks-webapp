/**
 * Testing scenario
 *
 * - LoginForm Component
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should handle login function when login button is clicked
 */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import LoginForm from "./LoginForm";

expect.extend(matchers);

describe("LoginForm Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle email typing correctly", async () => {
    render(<LoginForm onLogin={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Input your email");

    await userEvent.type(emailInput, "testemail");

    expect(emailInput).toHaveValue("testemail");
  });

  it("should handle password typing correctly", async () => {
    render(<LoginForm onLogin={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText(
      "Input your password"
    );

    await userEvent.type(passwordInput, "testpassword");

    expect(passwordInput).toHaveValue("testpassword");
  });

  it("should handle login function when login button is clicked", async () => {
    const mockLogin = vi.fn();
    render(<LoginForm onLogin={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText("Input your email");
    const passwordInput = await screen.getByPlaceholderText(
      "Input your password"
    );
    await userEvent.type(emailInput, "testemail");
    await userEvent.type(passwordInput, "testpassword");
    const loginButton = await screen.getByRole("button", { name: "Login" });

    await userEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith({
      email: "testemail",
      password: "testpassword",
    });
  });
});
