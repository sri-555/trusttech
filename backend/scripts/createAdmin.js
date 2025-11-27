const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

function parseArgs() {
  const args = {};
  process.argv.slice(2).forEach(arg => {
    const [k, v] = arg.split('=');
    if (k && v) args[k.replace(/^--/, '')] = v;
  });
  return args;
}

async function run() {
  const { email, password, name } = parseArgs();

  if (!email || !password || !name) {
    console.error('Usage: node createAdmin.js --email=admin@example.com --password=admin123 --name="Admin User"');
    process.exit(1);
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error('Please set MONGODB_URI in your environment or .env file');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    let user = await User.findOne({ email });
    if (user) {
      user.role = 'admin';
      if (password) user.password = password;
      if (name) user.name = name;
      await user.save();
      console.log(`Updated existing user ${email} to role=admin`);
    } else {
      user = new User({ name, email, password, role: 'admin' });
      await user.save();
      console.log(`Created new admin user ${email}`);
    }

    console.log('Done. You can now login with this admin account.');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

run();
