import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [successMessage, setSuccessMessage] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Demo User',
      email: 'demo@example.com',
      password: 'demo123',
      phone: '+966501234567',
      address: '123 Pearl Street',
      city: 'Riyadh',
      country: 'Saudi Arabia',
    },
  ]);

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Password strength validation
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (foundUser) {
      setUser({
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        phone: foundUser.phone,
        address: foundUser.address,
        city: foundUser.city,
        country: foundUser.country,
      });
      setShowAuthModal(false);
      setSuccessMessage('');
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password' };
  };

  const register = (name, email, password) => {
    if (!validateEmail(email)) {
      return { success: false, error: 'Invalid email format' };
    }
    if (!validatePassword(password)) {
      return {
        success: false,
        error: 'Password must be at least 6 characters',
      };
    }
    if (users.some((u) => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      phone: '',
      address: '',
      city: '',
      country: '',
    };
    setUsers([...users, newUser]);
    setUser({
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      phone: newUser.phone,
      address: newUser.address,
      city: newUser.city,
      country: newUser.country,
    });
    setShowAuthModal(false);
    setSuccessMessage(`Welcome ${name}! Account created successfully.`);
    setTimeout(() => setSuccessMessage(''), 3000);
    setAuthMode('login');
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    setSuccessMessage('');
  };

  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  };

  const updateUserProfile = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
    setUsers((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, ...updatedData } : u)),
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        showAuthModal,
        setShowAuthModal,
        authMode,
        toggleAuthMode,
        login,
        register,
        logout,
        successMessage,
        validateEmail,
        validatePassword,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
