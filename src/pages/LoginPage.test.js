import { render, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';
import { AuthContext } from '../context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

// Mocks useNavigate
const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedNavigate,
}));

describe('LoginPage', () => {
  // Mock login function
  const loginMock = jest.fn();
  
  beforeEach(() => {
    // Clear all mocks before each test
    mockedNavigate.mockClear();
    loginMock.mockClear();
  });

  it('should render correctly', () => {
    const { getByText } = render(
      <Router>
        <AuthContext.Provider value={{ login: loginMock }}>
          <LoginPage />
        </AuthContext.Provider>
      </Router>
    );

    expect(getByText('Hi, Welcome back')).toBeInTheDocument();
    expect(getByText('Enter your credentials to continue')).toBeInTheDocument();
    expect(getByText('Sign in with google')).toBeInTheDocument();
  });

  it('calls login and navigate on clicking the login button', () => {
    const { getByText } = render(
      <Router>
        <AuthContext.Provider value={{ login: loginMock }}>
          <LoginPage />
        </AuthContext.Provider>
      </Router>
    );

    fireEvent.click(getByText('Sign in with google'));
    expect(loginMock).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('/');
  });
});