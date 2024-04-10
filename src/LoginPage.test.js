import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginPage';

test('renders login form with default fields', () => {
  render(<LoginForm />);
  
  // Check if the login form is visible
  const loginForm = screen.getByTestId('login-form');
  expect(loginForm).toBeInTheDocument();

  // Check if the username input field is rendered
  const usernameInput = screen.getByLabelText('Username');
  expect(usernameInput).toBeInTheDocument();

  // Check if the password input field is rendered
  const passwordInput = screen.getByLabelText('Password');
  expect(passwordInput).toBeInTheDocument();

  // Check if the sign in button is rendered
  const signInButton = screen.getByText('Sign In');
  expect(signInButton).toBeInTheDocument();
});

test('renders register form when register button is clicked', () => {
  render(<LoginForm />);
  
  // Click on the register button
  const regButton = screen.getByText('Register');
  fireEvent.click(regButton);

  // Check if the register form is visible
  const registerForm = screen.getByTestId('register-form');
  expect(registerForm).toBeInTheDocument();

  // Check if the new username input field is rendered
  const newUsernameInput = screen.getByLabelText('Username');
  expect(newUsernameInput).toBeInTheDocument();

  // Check if the email input field is rendered
  const emailInput = screen.getByLabelText('Email');
  expect(emailInput).toBeInTheDocument();

  // Check if the new password input field is rendered
  const newPasswordInput = screen.getByLabelText('Password');
  expect(newPasswordInput).toBeInTheDocument();

  // Check if the register button is rendered
  const registerButton = screen.getByText('Register');
  expect(registerButton).toBeInTheDocument();
});