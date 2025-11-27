# 🌐 How to Access Your Website

## ✅ Servers Are Running!

Both servers are currently running and working:

### Frontend Server
- **Status:** ✅ Running
- **Port:** 8000
- **Service:** Python HTTP Server

### Backend Server
- **Status:** ✅ Running
- **Port:** 5000
- **Service:** Node.js Express

---

## 🔗 URLs to Try

### Option 1: Using localhost
```
http://localhost:8000/index.html
```

### Option 2: Using 127.0.0.1
```
http://127.0.0.1:8000/index.html
```

### Option 3: Using IPv6
```
http://[::1]:8000/index.html
```

---

## 🎯 Step-by-Step Access

### 1. Open Your Browser
- Chrome
- Firefox
- Edge
- Safari

### 2. Type in Address Bar
```
localhost:8000/index.html
```

### 3. Press Enter

---

## 🔍 Troubleshooting

### If "Site Can't Be Reached":

#### Check 1: Verify Servers Are Running
Open Command Prompt and run:
```bash
netstat -ano | findstr :8000
netstat -ano | findstr :5000
```

You should see both ports listed.

#### Check 2: Try Different URLs
1. `http://localhost:8000/index.html`
2. `http://127.0.0.1:8000/index.html`
3. `http://localhost:8000`

#### Check 3: Check Firewall
Windows Firewall might be blocking. Allow Python and Node.js.

#### Check 4: Try Different Browser
If Chrome doesn't work, try Firefox or Edge.

#### Check 5: Clear Browser Cache
- Press Ctrl + Shift + Delete
- Clear cache and cookies
- Try again

---

## 🚀 Quick Fix

If nothing works, restart the servers:

### Stop Servers
Press Ctrl+C in the terminal windows

### Start Frontend
```bash
python -m http.server 8000
```

### Start Backend (in another terminal)
```bash
cd backend
npm run dev:simple
```

### Access Website
```
http://localhost:8000/index.html
```

---

## 📱 What You Should See

When you access the website, you should see:
- Navigation bar at top
- "Trustech Accessories" heading
- Product images
- Login button
- Cart button
- Colorful gradient design

---

## ✅ Test Connection

Open Command Prompt and run:
```bash
curl http://localhost:8000/index.html
```

If you see HTML code, the server is working!

---

## 🔧 Alternative: Open File Directly

If servers don't work, you can open the HTML file directly:

1. Open File Explorer
2. Navigate to your project folder
3. Double-click `index.html`

**Note:** Some features won't work without the server (like login and cart).

---

## 💡 Common Issues

### Issue: "ERR_CONNECTION_REFUSED"
**Solution:** Server not running. Start the servers.

### Issue: "This site can't be reached"
**Solution:** Wrong URL. Use `localhost:8000/index.html`

### Issue: "404 Not Found"
**Solution:** Wrong file path. Make sure to include `/index.html`

### Issue: Blank page
**Solution:** Check browser console (F12) for errors.

---

## 📞 Need Help?

The servers are confirmed running. Try these URLs:

1. http://localhost:8000/index.html
2. http://127.0.0.1:8000/index.html
3. http://localhost:8000

One of these should work!
