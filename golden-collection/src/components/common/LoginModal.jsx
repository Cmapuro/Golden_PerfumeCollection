import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function LoginModal() {
  const {
    showAuthModal,
    setShowAuthModal,
    authMode,
    toggleAuthMode,
    login,
    register,
    validateEmail,
    validatePassword,
  } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (authMode === 'login') {
        if (!formData.email || !formData.password) {
          setError('Please fill in all fields');
          setLoading(false);
          return;
        }
        if (!validateEmail(formData.email)) {
          setError('Please enter a valid email address');
          setLoading(false);
          return;
        }
        const result = login(formData.email, formData.password);
        if (!result.success) {
          setError(result.error);
        }
      } else {
        if (
          !formData.name ||
          !formData.email ||
          !formData.password ||
          !formData.confirmPassword
        ) {
          setError('Please fill in all fields');
          setLoading(false);
          return;
        }
        if (!validateEmail(formData.email)) {
          setError('Please enter a valid email address');
          setLoading(false);
          return;
        }
        if (!validatePassword(formData.password)) {
          setError('Password must be at least 6 characters');
          setLoading(false);
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        const result = register(
          formData.name,
          formData.email,
          formData.password,
        );
        if (!result.success) {
          setError(result.error);
        }
      }
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!showAuthModal) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        animation: 'fadeIn 0.3s ease',
      }}
      onClick={() => setShowAuthModal(false)}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div
        style={{
          background: 'linear-gradient(135deg, #1a1410 0%, #2a221c 100%)',
          padding: '48px',
          borderRadius: '12px',
          boxShadow:
            '0 20px 60px rgba(193, 153, 65, 0.2), 0 0 40px rgba(193, 153, 65, 0.1)',
          border: '1px solid rgba(193, 153, 65, 0.3)',
          maxWidth: '420px',
          width: '90%',
          animation: 'slideUp 0.4s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect background */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '300px',
            height: '300px',
            background:
              'radial-gradient(circle, rgba(193, 153, 65, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />

        {/* Close button */}
        <button
          onClick={() => setShowAuthModal(false)}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'transparent',
            border: 'none',
            color: '#c19941',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 10,
          }}
        >
          ✕
        </button>

        {/* Title */}
        <h2
          style={{
            color: '#c19941',
            textAlign: 'center',
            marginBottom: '8px',
            fontSize: '28px',
            fontFamily: 'Georgia, serif',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {authMode === 'login' ? 'Welcome Back' : 'Join Us'}
        </h2>

        <p
          style={{
            color: '#a0a0a0',
            textAlign: 'center',
            marginBottom: '32px',
            fontSize: '13px',
            letterSpacing: '1px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {authMode === 'login'
            ? 'Sign in to your account'
            : 'Create your account'}
        </p>

        {/* Error message */}
        {error && (
          <div
            style={{
              background: 'rgba(255, 71, 87, 0.2)',
              border: '1px solid rgba(255, 71, 87, 0.5)',
              color: '#ff6b7a',
              padding: '12px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontSize: '12px',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {error}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ position: 'relative', zIndex: 10 }}
        >
          {authMode === 'register' && (
            <div style={{ marginBottom: '16px' }}>
              <label
                style={{
                  display: 'block',
                  color: '#c19941',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(193, 153, 65, 0.3)',
                  borderRadius: '6px',
                  color: '#fff',
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(193, 153, 65, 0.6)';
                  e.target.style.boxShadow = '0 0 20px rgba(193, 153, 65, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(193, 153, 65, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          )}

          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                color: '#c19941',
                fontSize: '11px',
                fontWeight: 'bold',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(193, 153, 65, 0.3)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '13px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                e.target.style.borderColor = 'rgba(193, 153, 65, 0.6)';
                e.target.style.boxShadow = '0 0 20px rgba(193, 153, 65, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(193, 153, 65, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                color: '#c19941',
                fontSize: '11px',
                fontWeight: 'bold',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(193, 153, 65, 0.3)',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '13px',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                e.target.style.borderColor = 'rgba(193, 153, 65, 0.6)';
                e.target.style.boxShadow = '0 0 20px rgba(193, 153, 65, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(193, 153, 65, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {authMode === 'register' && formData.password && (
            <div style={{ marginBottom: '16px' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '4px',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    height: '4px',
                    background:
                      formData.password.length > 0 ? '#4ade80' : '#666',
                    borderRadius: '2px',
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    height: '4px',
                    background:
                      formData.password.length > 6 ? '#4ade80' : '#666',
                    borderRadius: '2px',
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: '10px',
                  color: formData.password.length >= 6 ? '#4ade80' : '#f97316',
                  margin: 0,
                  letterSpacing: '0.5px',
                }}
              >
                {formData.password.length < 6
                  ? '⚠ Password must be at least 6 characters'
                  : '✓ Strong password'}
              </p>
            </div>
          )}

          {authMode === 'register' && (
            <div style={{ marginBottom: '24px' }}>
              <label
                style={{
                  display: 'block',
                  color: '#c19941',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(193, 153, 65, 0.3)',
                  borderRadius: '6px',
                  color: '#fff',
                  fontSize: '13px',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(193, 153, 65, 0.6)';
                  e.target.style.boxShadow = '0 0 20px rgba(193, 153, 65, 0.2)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(193, 153, 65, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          )}

          {authMode === 'login' && (
            <div style={{ marginBottom: '24px', textAlign: 'right' }}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: '#c19941',
                  fontSize: '12px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#d4a855')}
                onMouseLeave={(e) => (e.target.style.color = '#c19941')}
              >
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: 'linear-gradient(135deg, #c19941 0%, #a17a2f 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(193, 153, 65, 0.3)',
              opacity: loading ? 0.7 : 1,
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow =
                  '0 15px 40px rgba(193, 153, 65, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(193, 153, 65, 0.3)';
            }}
          >
            {loading
              ? 'Processing...'
              : authMode === 'login'
                ? 'Sign In'
                : 'Create Account'}
          </button>
        </form>

        {/* Toggle form mode */}
        <div
          style={{
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(193, 153, 65, 0.2)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <p
            style={{ color: '#a0a0a0', fontSize: '12px', margin: '0 0 12px 0' }}
          >
            {authMode === 'login'
              ? "Don't have an account?"
              : 'Already have an account?'}
          </p>
          <button
            onClick={toggleAuthMode}
            style={{
              background: 'transparent',
              border: '1px solid rgba(193, 153, 65, 0.5)',
              color: '#c19941',
              padding: '10px 20px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(193, 153, 65, 0.1)';
              e.target.style.borderColor = '#c19941';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(193, 153, 65, 0.5)';
            }}
          >
            {authMode === 'login' ? 'Register Here' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}
