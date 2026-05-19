import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout, updateUserProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    country: user?.country || '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!user) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f5f5f5',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>
            Please log in to view your profile
          </h2>
          <button
            onClick={() => navigate('/')}
            style={{
              background: '#c19941',
              color: '#fff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!formData.name || !formData.email) {
      setError('Name and email are required');
      return;
    }
    updateUserProfile(formData);
    setSuccess('Profile updated successfully!');
    setIsEditing(false);
    setError('');
    setTimeout(() => setSuccess(''), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fcfaf5 0%, #f5f0e8 100%)',
        paddingTop: '40px',
        paddingBottom: '60px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '36px',
              fontFamily: 'Georgia, serif',
              color: '#1a1410',
              margin: 0,
            }}
          >
            My Account
          </h1>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'transparent',
              border: '1px solid #c19941',
              color: '#c19941',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#c19941';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#c19941';
            }}
          >
            ← Back
          </button>
        </div>

        {/* Success Message */}
        {success && (
          <div
            style={{
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
              color: '#fff',
              padding: '16px',
              borderRadius: '6px',
              marginBottom: '24px',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            ✓ {success}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div
            style={{
              background: 'rgba(255, 71, 87, 0.2)',
              border: '1px solid rgba(255, 71, 87, 0.5)',
              color: '#ff6b7a',
              padding: '16px',
              borderRadius: '6px',
              marginBottom: '24px',
              fontSize: '14px',
            }}
          >
            {error}
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
          }}
        >
          {/* Profile Card */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '32px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontFamily: 'Georgia, serif',
                color: '#1a1410',
                marginTop: 0,
                marginBottom: '24px',
                paddingBottom: '12px',
                borderBottom: '2px solid #c19941',
              }}
            >
              Profile Information
            </h2>

            <div style={{ marginBottom: '20px' }}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  background:
                    'linear-gradient(135deg, #c19941 0%, #a17a2f 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  color: '#fff',
                  marginBottom: '16px',
                }}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>

            {!isEditing ? (
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#888',
                      fontSize: '12px',
                      display: 'block',
                    }}
                  >
                    NAME
                  </label>
                  <p
                    style={{
                      color: '#333',
                      fontSize: '16px',
                      margin: '4px 0 0 0',
                      fontWeight: '500',
                    }}
                  >
                    {formData.name}
                  </p>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#888',
                      fontSize: '12px',
                      display: 'block',
                    }}
                  >
                    EMAIL
                  </label>
                  <p
                    style={{
                      color: '#333',
                      fontSize: '16px',
                      margin: '4px 0 0 0',
                      fontWeight: '500',
                    }}
                  >
                    {formData.email}
                  </p>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label
                    style={{
                      color: '#888',
                      fontSize: '12px',
                      display: 'block',
                    }}
                  >
                    PHONE
                  </label>
                  <p
                    style={{
                      color: '#666',
                      fontSize: '16px',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {formData.phone || 'Not provided'}
                  </p>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    background: '#c19941',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#a17a2f';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#c19941';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#c19941',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#c19941',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#c19941',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={handleSave}
                    style={{
                      flex: 1,
                      background: '#c19941',
                      color: '#fff',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        name: user.name,
                        email: user.email,
                        phone: user.phone || '',
                        address: user.address || '',
                        city: user.city || '',
                        country: user.country || '',
                      });
                    }}
                    style={{
                      flex: 1,
                      background: '#e0e0e0',
                      color: '#333',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Address Card */}
          <div
            style={{
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '32px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
          >
            <h2
              style={{
                fontSize: '18px',
                fontFamily: 'Georgia, serif',
                color: '#1a1410',
                marginTop: 0,
                marginBottom: '24px',
                paddingBottom: '12px',
                borderBottom: '2px solid #c19941',
              }}
            >
              Address
            </h2>

            {!isEditing ? (
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#888',
                      fontSize: '12px',
                      display: 'block',
                    }}
                  >
                    ADDRESS
                  </label>
                  <p
                    style={{
                      color: '#666',
                      fontSize: '14px',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {formData.address || 'Not provided'}
                  </p>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#888',
                      fontSize: '12px',
                      display: 'block',
                    }}
                  >
                    CITY
                  </label>
                  <p
                    style={{
                      color: '#666',
                      fontSize: '14px',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {formData.city || 'Not provided'}
                  </p>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label
                    style={{
                      color: '#888',
                      fontSize: '12px',
                      display: 'block',
                    }}
                  >
                    COUNTRY
                  </label>
                  <p
                    style={{
                      color: '#666',
                      fontSize: '14px',
                      margin: '4px 0 0 0',
                    }}
                  >
                    {formData.country || 'Not provided'}
                  </p>
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  style={{
                    background: '#c19941',
                    color: '#fff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    width: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#a17a2f';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#c19941';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Edit Address
                </button>
              </div>
            ) : (
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#c19941',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Your address"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#c19941',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Your city"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      color: '#c19941',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      display: 'block',
                      marginBottom: '6px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Your country"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={handleSave}
                    style={{
                      flex: 1,
                      background: '#c19941',
                      color: '#fff',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        name: user.name,
                        email: user.email,
                        phone: user.phone || '',
                        address: user.address || '',
                        city: user.city || '',
                        country: user.country || '',
                      });
                    }}
                    style={{
                      flex: 1,
                      background: '#e0e0e0',
                      color: '#333',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Account Settings */}
        <div
          style={{
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '32px',
            marginTop: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          <h2
            style={{
              fontSize: '18px',
              fontFamily: 'Georgia, serif',
              color: '#1a1410',
              marginTop: 0,
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '2px solid #c19941',
            }}
          >
            Account Settings
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
            }}
          >
            <div>
              <h3
                style={{
                  color: '#333',
                  fontSize: '14px',
                  marginBottom: '12px',
                }}
              >
                Member Since
              </h3>
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                {new Date().toLocaleDateString()}
              </p>
            </div>
            <div>
              <h3
                style={{
                  color: '#333',
                  fontSize: '14px',
                  marginBottom: '12px',
                }}
              >
                Account Status
              </h3>
              <p
                style={{
                  color: '#4ade80',
                  fontSize: '14px',
                  margin: 0,
                  fontWeight: 'bold',
                }}
              >
                ✓ Active
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: '32px',
              paddingTop: '24px',
              borderTop: '1px solid #e0e0e0',
            }}
          >
            <button
              onClick={handleLogout}
              style={{
                background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
                color: '#fff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow =
                  '0 6px 20px rgba(255, 107, 107, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
