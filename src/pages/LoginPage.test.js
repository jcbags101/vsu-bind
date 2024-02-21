import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as ReactRouterDom from 'react-router-dom';
import * as AuthContext from '../context/AuthContext';
import LoginPage from './LoginPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('LoginPage Component', () => {
  const mockLogin = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    ReactRouterDom.useNavigate.mockReturnValue(mockNavigate);
    AuthContext.useAuth.mockReturnValue({
      login: mockLogin,
    });
  });

  test('renders without crashing', () => {
    const { asFragment } = render(<LoginPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('navigates to home page after login', async () => {
    const { getByText } = render(<LoginPage />);

    const loginButton = getByText(/sign in with google/i);
    fireEvent.click(loginButton);

    await waitFor(() => expect(mockLogin).toHaveBeenCalledTimes(1));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});