// Simple JSON file-based database for testing without MongoDB
const fs = require('fs').promises;
const path = require('path');

const DB_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DB_DIR, 'users.json');
const PRODUCTS_FILE = path.join(DB_DIR, 'products.json');
const ORDERS_FILE = path.join(DB_DIR, 'orders.json');
const CONTACTS_FILE = path.join(DB_DIR, 'contacts.json');

// Initialize database
async function initDB() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
    
    // Initialize files if they don't exist
    const files = [
      { path: USERS_FILE, data: [] },
      { path: PRODUCTS_FILE, data: [] },
      { path: ORDERS_FILE, data: [] },
      { path: CONTACTS_FILE, data: [] }
    ];

    for (const file of files) {
      try {
        await fs.access(file.path);
      } catch {
        await fs.writeFile(file.path, JSON.stringify(file.data, null, 2));
      }
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Read from file
async function read(file) {
  try {
    const data = await fs.readFile(file, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write to file
async function write(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
}

// Generate ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

module.exports = {
  initDB,
  users: {
    find: async (query = {}) => {
      const users = await read(USERS_FILE);
      if (Object.keys(query).length === 0) return users;
      return users.filter(user => 
        Object.keys(query).every(key => user[key] === query[key])
      );
    },
    findOne: async (query) => {
      const users = await read(USERS_FILE);
      return users.find(user => 
        Object.keys(query).every(key => user[key] === query[key])
      );
    },
    findById: async (id) => {
      const users = await read(USERS_FILE);
      return users.find(user => user._id === id);
    },
    create: async (userData) => {
      const users = await read(USERS_FILE);
      const newUser = { _id: generateId(), ...userData, createdAt: new Date() };
      users.push(newUser);
      await write(USERS_FILE, users);
      return newUser;
    }
  },
  products: {
    find: async (query = {}) => {
      const products = await read(PRODUCTS_FILE);
      if (Object.keys(query).length === 0) return products;
      return products.filter(product => 
        Object.keys(query).every(key => {
          if (key === 'name' && query[key].$regex) {
            return product.name.toLowerCase().includes(query[key].$regex.toLowerCase());
          }
          return product[key] === query[key];
        })
      );
    },
    findById: async (id) => {
      const products = await read(PRODUCTS_FILE);
      return products.find(product => product._id === id);
    },
    create: async (productData) => {
      const products = await read(PRODUCTS_FILE);
      const newProduct = { _id: generateId(), ...productData, createdAt: new Date() };
      products.push(newProduct);
      await write(PRODUCTS_FILE, products);
      return newProduct;
    },
    updateById: async (id, updates) => {
      const products = await read(PRODUCTS_FILE);
      const index = products.findIndex(p => p._id === id);
      if (index === -1) return null;
      products[index] = { ...products[index], ...updates };
      await write(PRODUCTS_FILE, products);
      return products[index];
    },
    deleteById: async (id) => {
      const products = await read(PRODUCTS_FILE);
      const filtered = products.filter(p => p._id !== id);
      await write(PRODUCTS_FILE, filtered);
      return { deletedCount: products.length - filtered.length };
    },
    deleteMany: async () => {
      await write(PRODUCTS_FILE, []);
    },
    insertMany: async (items) => {
      const products = await read(PRODUCTS_FILE);
      const newProducts = items.map(item => ({ _id: generateId(), ...item, createdAt: new Date() }));
      products.push(...newProducts);
      await write(PRODUCTS_FILE, products);
      return newProducts;
    }
  },
  orders: {
    find: async (query = {}) => {
      const orders = await read(ORDERS_FILE);
      if (Object.keys(query).length === 0) return orders;
      return orders.filter(order => 
        Object.keys(query).every(key => order[key] === query[key])
      );
    },
    create: async (orderData) => {
      const orders = await read(ORDERS_FILE);
      const newOrder = { _id: generateId(), ...orderData, createdAt: new Date() };
      orders.push(newOrder);
      await write(ORDERS_FILE, orders);
      return newOrder;
    },
    findByIdAndUpdate: async (id, updates) => {
      const orders = await read(ORDERS_FILE);
      const index = orders.findIndex(o => o._id === id);
      if (index === -1) return null;
      orders[index] = { ...orders[index], ...updates };
      await write(ORDERS_FILE, orders);
      return orders[index];
    }
  },
  contacts: {
    find: async () => read(CONTACTS_FILE),
    create: async (contactData) => {
      const contacts = await read(CONTACTS_FILE);
      const newContact = { _id: generateId(), ...contactData, createdAt: new Date() };
      contacts.push(newContact);
      await write(CONTACTS_FILE, contacts);
      return newContact;
    },
    findByIdAndUpdate: async (id, updates) => {
      const contacts = await read(CONTACTS_FILE);
      const index = contacts.findIndex(c => c._id === id);
      if (index === -1) return null;
      contacts[index] = { ...contacts[index], ...updates };
      await write(CONTACTS_FILE, contacts);
      return contacts[index];
    }
  }
};
