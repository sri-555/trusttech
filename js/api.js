const API_URL = 'http://localhost:5000/api';

// Get auth token from localStorage
const getAuthToken = () => localStorage.getItem('authToken');

// Set auth token
const setAuthToken = (token) => localStorage.setItem('authToken', token);

// Remove auth token
const removeAuthToken = () => localStorage.removeItem('authToken');

// API call helper
const apiCall = async (endpoint, options = {}) => {
  const token = getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth APIs
const authAPI = {
  register: async (userData) => {
    const response = await apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
    
    if (response.token) {
      setAuthToken(response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },

  login: async (credentials) => {
    const response = await apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
    
    if (response.token) {
      setAuthToken(response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },

  getCurrentUser: () => apiCall('/auth/me'),

  logout: () => {
    removeAuthToken();
    localStorage.removeItem('user');
    window.location.href = 'index.html';
  }
};

// Products APIs
const productsAPI = {
  getAll: (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return apiCall(`/products${queryString ? '?' + queryString : ''}`);
  },

  getById: (id) => apiCall(`/products/${id}`),

  create: (productData) => apiCall('/products', {
    method: 'POST',
    body: JSON.stringify(productData)
  }),

  update: (id, productData) => apiCall(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(productData)
  }),

  delete: (id) => apiCall(`/products/${id}`, {
    method: 'DELETE'
  })
};

// Contact API
const contactAPI = {
  submit: (contactData) => apiCall('/contact', {
    method: 'POST',
    body: JSON.stringify(contactData)
  }),

  getAll: () => apiCall('/contact')
};

// Orders APIs
const ordersAPI = {
  create: (orderData) => apiCall('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData)
  }),

  getMyOrders: () => apiCall('/orders/my-orders'),

  getAll: () => apiCall('/orders'),

  updateStatus: (id, status) => apiCall(`/orders/${id}/status`, {
    method: 'PATCH',
    body: JSON.stringify({ status })
  })
};

// Export APIs
window.API = {
  auth: authAPI,
  products: productsAPI,
  contact: contactAPI,
  orders: ordersAPI,
  setAuthToken,
  getAuthToken,
  removeAuthToken
};
