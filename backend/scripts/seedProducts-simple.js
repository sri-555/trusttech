const db = require('../db/simple-db');

const products = [
  {
    name: 'Wireless Earbuds',
    description: 'Compact in-ear speakers for private listening, often wireless and portable.',
    price: 2999,
    category: 'earbuds',
    image: '/image/ear.jpeg',
    stock: 50,
    brand: 'TechNest',
    inStock: true
  },
  {
    name: 'Wireless Mouse',
    description: 'A handheld device that controls the cursor on your screen—click, drag, scroll!',
    price: 899,
    category: 'mouse',
    image: '/image/mou.jpeg',
    stock: 75,
    brand: 'TechNest',
    inStock: true
  },
  {
    name: 'Mechanical Keyboard',
    description: 'A panel of keys used to type text and commands into your computer.',
    price: 3499,
    category: 'keyboard',
    image: '/image/key.jpeg',
    stock: 40,
    brand: 'TechNest',
    inStock: true
  },
  {
    name: 'HD Webcam',
    description: 'A small camera used for video calls, streaming, or recording on a computer.',
    price: 2499,
    category: 'webcam',
    image: '/image/web.jpeg',
    stock: 30,
    brand: 'TechNest',
    inStock: true
  },
  {
    name: 'Premium Mobile Case',
    description: 'A protective cover for your phone that can also add grip or style',
    price: 599,
    category: 'mobile-case',
    image: '/image/mobcase.jpeg',
    stock: 100,
    brand: 'TechNest',
    inStock: true
  },
  {
    name: 'Gaming Mouse Pad',
    description: 'A smooth surface that improves mouse movement and precision.',
    price: 399,
    category: 'mouse-pad',
    image: '/image/mpad.jpeg',
    stock: 80,
    brand: 'TechNest',
    inStock: true
  },
  {
    name: 'Premium Headphones',
    description: 'Over-ear or on-ear audio gear for immersive sound and noise isolation.',
    price: 4999,
    category: 'headphones',
    image: '/image/head.jpeg',
    stock: 45,
    brand: 'TechNest',
    inStock: true
  },
  {
    name: '20000mAh Power Bank',
    description: 'A portable battery that charges your devices on the go.',
    price: 1999,
    category: 'power-bank',
    image: '/image/pow.jpeg',
    stock: 60,
    brand: 'TechNest',
    inStock: true
  }
];

async function seedProducts() {
  try {
    await db.initDB();
    console.log('Database initialized');

    await db.products.deleteMany();
    console.log('Cleared existing products');

    await db.products.insertMany(products);
    console.log('✅ Products seeded successfully!');
    console.log(`📦 Added ${products.length} products`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
}

seedProducts();
