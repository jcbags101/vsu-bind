import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import * as ReactRouterDom from 'react-router-dom';
import * as AuthContext from "../context/AuthContext";
import LoginPage from "./LoginPage";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock("../context/AuthContext", () => ({
  ...jest.requireActual("../context/AuthContext"),
  useAuth: jest.fn(),
}));

describe('LoginPage', () => {
  it('renders without crashing', () => {
    ReactRouterDom.useNavigate.mockImplementation(() => jest.fn());
    AuthContext.useAuth.mockImplementation(() => ({ login: jest.fn() }));
    render(<LoginPage />);
    expect(screen.getByText(/Hi, Welcome back/i)).toBeInTheDocument();
  });

  it('calls login and navigate on button click', async () => {
    const mockLogin = jest.fn();
    const mockNavigate = jest.fn();
    AuthContext.useAuth.mockImplementation(() => ({ login: mockLogin }));
    ReactRouterDom.useNavigate.mockImplementation(() => mockNavigate);

    render(<LoginPage />);

    const loginButton = screen.getByText(/Sign in with google/i);
    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});