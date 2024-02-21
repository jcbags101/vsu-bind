```javascript
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as ReactRouterDom from 'react-router-dom'; // You need to mock functions like useNavigate
import * as AuthContext from '../context/AuthContext'; // You need to mock useAuth too
import LoginPage from './LoginPage';

// Mock useNavigate and useAuth
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('LoginPage', () => {
  const mockLogin = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    // Reset mocks before each test
    mockLogin.mockReset();
    mockNavigate.mockReset();

    // Setup mock implementations
    AuthContext.useAuth.mockImplementation(() => ({
      login: mockLogin,
    }));
    ReactRouterDom.useNavigate.mockImplementation(() => mockNavigate);
  });

  test('renders login page correctly', () => {
    const { getByText } = render(<LoginPage />);

    expect(getByText('Hi, Welcome back')).toBeInTheDocument();
    expect(getByText('Enter your credentials to continue')).toBeInTheDocument();
    expect(getByText('Sign in with google')).toBeInTheDocument();
  });

  test('handles login click correctly', async () => {
    const { getByText } = render(<LoginPage />);

    // Simulate click on login button
    fireEvent.click(getByText('Sign in with google'));

    await waitFor(() => {
      // Expect login to have been called
      expect(mockLogin).toHaveBeenCalledTimes(1);
      // Expect navigation to the root route
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });
});
```