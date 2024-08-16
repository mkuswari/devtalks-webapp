/**
 * Testing scenario
 *
 * - RegisterForm Component
 *  - should handle name typing correctly
 *  - should handle email typing correctly
 *  - should handle password typing correctly
 *  - should handle password confirm typing correctly
 *  - should handle register function when register button is clicked
 */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import RegisterForm from "./RegisterForm";

expect.extend(matchers);

describe("RegisterForm Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should handle name typing correctly", async () => {
    render(<RegisterForm onRegister={() => {}} />);
    const nameInput = await screen.getByPlaceholderText("Input your full name");

    await userEvent.type(nameInput, "testname");

    expect(nameInput).toHaveValue("testname");
  });

  it("should handle email typing correctly", async () => {
    render(<RegisterForm onRegister={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Input your email");

    await userEvent.type(emailInput, "testemail");

    expect(emailInput).toHaveValue("testemail");
  });

  it("should handle password typing correctly", async () => {
    render(<RegisterForm onRegister={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText(
      "Input your password"
    );

    await userEvent.type(passwordInput, "testpassword");

    expect(passwordInput).toHaveValue("testpassword");
  });

  it("should handle password confirm typing correctly", async () => {
    render(<RegisterForm onRegister={() => {}} />);
    const passwordConfirmInput = await screen.getByPlaceholderText(
      "Confirm your password"
    );

    await userEvent.type(passwordConfirmInput, "testpassword");

    expect(passwordConfirmInput).toHaveValue("testpassword");
  });

  it("should handle register function when register button is clicked", async () => {
    const mockRegister = vi.fn();
    render(<RegisterForm onRegister={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText("Input your full name");
    const emailInput = await screen.getByPlaceholderText("Input your email");
    const passwordInput = await screen.getByPlaceholderText(
      "Input your password"
    );
    const passwordConfirmInput = await screen.getByPlaceholderText(
      "Confirm your password"
    );
    await userEvent.type(nameInput, "testname");
    await userEvent.type(emailInput, "testemail");
    await userEvent.type(passwordInput, "testpassword");
    await userEvent.type(passwordConfirmInput, "testpassword");
    const registerButton = await screen.getByRole("button", {
      name: "Register",
    });

    await userEvent.click(registerButton);

    expect(mockRegister).toHaveBeenCalledWith({
      name: "testname",
      email: "testemail",
      password: "testpassword",
      passwordConfirm: "testpassword",
    });
  });
});
