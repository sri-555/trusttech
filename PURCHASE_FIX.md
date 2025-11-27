# 🛒 Purchase System Troubleshooting

## Issue: Can't Purchase After Login

Let me help you fix this! Follow these steps:

---

## Step 1: Test Page

I've created a test page to diagnose the issue:

**Open:** http://localhost:8000/test-purchase.html

This page will show you:
1. If scripts are loaded correctly
2. If you're logged in
3. If purchase buttons work
4. Manual login test

---

## Step 2: Check Browser Console

1. Open your website: http://localhost:8000/index.html
2. Press `F12` to open Developer Tools
3. Click on "Console" tab
4. Try to click a purchase button
5. Look for any error messages

**What to look for:**
- "Products.js loaded" - Should appear
- "Found purchase buttons: 8" - Should show 8 buttons
- "Purchase button clicked!" - Should appear when you click
- Any red error messages

---

## Step 3: Verify Login

### Check if you're actually logged in:

1. Open browser console (F12)
2. Type this and press Enter:
```javascript
localStorage.getItem('authToken')
```

**Result:**
- If you see a long string → You're logged in ✓
- If you see `null` → You're NOT logged in ✗

### Check user data:
```javascript
localStorage.getItem('user')
```

**Result:**
- Should show user information
- If `null` → Login didn't work properly

---

## Step 4: Clear Cache and Re-login

Sometimes the browser cache causes issues:

1. Press `Ctrl + Shift + Delete`
2. Select "Cached images and files"
3. Click "Clear data"
4. Close and reopen browser
5. Go to: http://localhost:8000/login.html
6. Login again
7. Try purchasing

---

## Step 5: Manual Test

Open browser console (F12) and run these commands:

### Test 1: Check if API is loaded
```javascript
console.log(typeof API)
```
Should show: `object`

### Test 2: Check auth token
```javascript
console.log(API.getAuthToken())
```
Should show: a token string or `null`

### Test 3: Manually add to cart
```javascript
addToCart('Test Product', 999)
```
Should show a notification

### Test 4: View cart
```javascript
viewCart()
```
Should open cart modal

---

## Common Issues & Solutions

### Issue 1: "API is not defined"
**Problem:** Scripts not loading in correct order
**Solution:** 
- Check if `js/api.js` loads before `js/products.js`
- Hard refresh: `Ctrl + F5`

### Issue 2: "addToCart is not a function"
**Problem:** products.js not loaded
**Solution:**
- Check browser console for errors
- Verify file exists: `js/products.js`
- Hard refresh: `Ctrl + F5`

### Issue 3: Login works but purchase doesn't
**Problem:** Token not being saved
**Solution:**
```javascript
// In console, manually set token
localStorage.setItem('authToken', 'test-token')
localStorage.setItem('user', JSON.stringify({name: 'Test User', email: 'test@test.com'}))
```
Then try purchasing

### Issue 4: Button doesn't respond
**Problem:** Event listener not attached
**Solution:**
- Check if button has `id="pbut"`
- Check console for "Found purchase buttons: 8"
- Try clicking different products

---

## Quick Fix: Force Login

If nothing works, try this manual login:

1. Open browser console (F12)
2. Paste this code:
```javascript
// Manual login
localStorage.setItem('authToken', 'manual-test-token');
localStorage.setItem('user', JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    role: 'user'
}));
// Reload page
location.reload();
```

3. Try purchasing again

---

## Debug Mode

I've added console.log statements to products.js. 

When you click purchase, you should see:
```
Products.js loaded
Found purchase buttons: 8
Setting up button 0
Setting up button 1
...
Purchase button clicked!
Product: [Product Name]
Auth token: Found
Price: [Price]
```

If you don't see these messages, there's a JavaScript error.

---

## Test Checklist

Run through this checklist:

- [ ] Both servers running (port 8000 and 5000)
- [ ] Opened http://localhost:8000/index.html
- [ ] Logged in successfully
- [ ] Can see user name in navbar
- [ ] Browser console shows no errors
- [ ] Clicked purchase button
- [ ] Checked console for messages

---

## Still Not Working?

### Option 1: Use Test Page
Open: http://localhost:8000/test-purchase.html
- Click all test buttons
- Share what you see

### Option 2: Check Files
Verify these files exist:
- `js/api.js`
- `js/products.js`
- `js/main.js`

### Option 3: Restart Everything
1. Stop both servers (Ctrl+C)
2. Clear browser cache
3. Start backend: `cd backend && npm run dev:simple`
4. Start frontend: `python -m http.server 8000`
5. Open fresh browser window
6. Login and try again

---

## What Should Happen

When purchase works correctly:

1. Click "Purchase" button
2. If not logged in → Alert asks to login
3. If logged in → Notification slides in
4. Modal appears with product details
5. Cart badge updates
6. Can view cart
7. Can checkout

---

## Need More Help?

Tell me:
1. What happens when you click purchase?
2. Any error messages in console?
3. Are you logged in? (check navbar for your name)
4. What does test page show?

I'll help you fix it! 🔧
