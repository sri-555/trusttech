````markdown
# 🚀 How to View Your Trustech Website

## ✅ Your Website is Already Running!

### Main Website
**URL:** http://localhost:8000

Open your browser and visit:
- **Home Page:** http://localhost:8000/index.html
- **Login Page:** http://localhost:8000/login.html
- **Brochure:** http://localhost:8000/brochure.html

### Backend API
**URL:** http://localhost:5000
- API is running and ready to handle requests

---

## 🎯 What's New - Features Added

### 1. **Login System Integration**
- ✅ Login/Signup page at `/login.html`
- ✅ User authentication with backend
- ✅ Login button in navigation bar
- ✅ User profile dropdown when logged in
- ✅ Logout functionality

### 2. **Brochure Page**
- ✅ Complete product catalog
- ✅ Pricing information
- ✅ Company information
- ✅ Accessible from navigation menu

### 3. **Interactive Features**
- ✅ "Know More" button redirects to Services section
- ✅ Feature buttons (➔) show detailed information modals:
  - Product Categories info
  - Analytics Dashboard info
  - Warranty Information
- ✅ Purchase buttons check login status

### 4. **Enhanced Navigation**
- ✅ Login/Logout in navbar
- ✅ User profile display when logged in
- ✅ Brochure link in navbar
- ✅ Smooth scrolling to sections

---

## 📝 How to Test Everything

### Test 1: View the Website
1. Open browser: http://localhost:8000/index.html
2. Navigate through all sections
3. Click on feature buttons (➔) to see modals

### Test 2: Create an Account
1. Click "🔐 Login" in navigation
2. Click "Sign Up" tab
3. Fill in your details:
   - Name: Your Name
   - Email: test@example.com
   - Phone: 1234567890
   - Password: password123
4. Click "Create Account"
5. You'll be redirected to home page

### Test 3: Login
1. Go to login page
2. Enter your credentials
3. Click "Login"
4. Notice your name appears in navbar

### Test 4: Contact Form
1. Scroll to contact section
2. Fill in the form
3. Click "Submit"
4. Check backend data: `backend/db/data/contacts.json`

### Test 5: View Brochure
1. Click "📄 Brochure" in navbar
2. View all products and pricing
3. Click "View Products Online" to return

---

## 🔧 Servers Running

### Web Server (Frontend)
```
Status: ✅ Running
Port: 8000
URL: http://localhost:8000
```

### Backend API Server
```
Status: ✅ Running
Port: 5000
URL: http://localhost:5000
Database: File-based (no MongoDB needed)
```

---

## 📂 Project Structure

```
trusttect/
├── index.html              # Main website
├── login.html              # Login/Signup page
├── brochure.html           # Product brochure
├── style.css               # Styles
├── js/
│   ├── api.js             # API client
│   ├── main.js            # Main page logic
│   ├── login-page.js      # Login page logic
│   ├── contact.js         # Contact form handler
│   └── products.js        # Products handler
├── backend/
│   ├── server-simple.js   # Backend server
│   ├── db/
│   │   ├── simple-db.js   # Database handler
│   │   └── data/          # JSON data files
│   └── ...
└── login/                 # React app (optional)
```

---

## 🎨 Features Breakdown

### Navigation Bar
- Home, About, Services, Features, Products, Testimonial, Contact
- Brochure link
- Login button (shows when logged out)
- User profile (shows when logged in with logout option)

### Home Section
- "View Products" button → scrolls to products
- Hero image and description

### About Section
- "Know More" button → scrolls to Services section

### Features Section
- Three feature cards with interactive buttons:
  1. Product Categories → Shows category info
  2. Analytics Dashboard → Shows analytics info
  3. Warranty Info → Shows warranty details

### Products Section
- 8 product cards
- "Purchase" buttons (require login)

### Contact Section
- Working contact form
- Submits to backend API
- Saves to database

---

## 🔐 Test Accounts

You can create your own accounts, or use these test credentials after registering:

**Create a test account:**
- Email: admin@trustech.com
- Password: admin123
- Name: Admin User

---

## 🛠️ Troubleshooting

### Website not loading?
- Check if web server is running on port 8000
- Try: http://localhost:8000/index.html

### Login not working?
- Check if backend is running on port 5000
- Check browser console for errors (F12)

### Contact form not submitting?
- Verify backend is running
- Check network tab in browser (F12)

---

## 🎉 Next Steps

1. **Test all features** - Click everything!
2. **Create an account** - Try the login system
3. **Submit contact form** - Test backend integration
4. **View brochure** - Check product catalog
5. **Customize** - Add your own products, images, content

---

## 📞 Need Help?

All servers are running and ready to use. Just open your browser and start exploring!

**Main URL:** http://localhost:8000/index.html

---

## 🛑 Troubleshooting: "This site can't be reached"

If your browser shows "This site can't be reached", follow these checks in order. Most checks use Windows PowerShell commands (you're on Windows).

1) Quick browser checks
- Make sure the URL is correct: http://localhost:8000/index.html
- Try another browser or an Incognito/Private window.
- Clear the browser cache (Ctrl+Shift+Del) or hard-reload the page (Ctrl+Shift+R).

2) Verify basic network connectivity
- Ping a public IP to confirm internet access:

```powershell
ping 8.8.8.8
```

- Use Test-NetConnection (PowerShell) to test DNS + HTTP:

```powershell
Test-NetConnection -ComputerName google.com -InformationLevel Detailed
Test-NetConnection -ComputerName localhost -Port 8000
```

If ping to 8.8.8.8 fails, you have a network problem (Wi‑Fi/router). Fix network first.

3) DNS and cache fixes
- Flush local DNS cache and reset winsock:

```powershell
ipconfig /flushdns
netsh winsock reset
```

- Check DNS resolution with nslookup:

```powershell
nslookup google.com
nslookup localhost
```

4) Hosts file and proxy settings
- Check your hosts file (it can block or remap domains):

Path: C:\Windows\System32\drivers\etc\hosts

Open it with admin Notepad:

```powershell
Start-Process notepad C:\Windows\System32\drivers\etc\hosts -Verb RunAs
```

- Check and reset WinHTTP proxy (if any):

```powershell
netsh winhttp show proxy
netsh winhttp reset proxy
```

5) Firewall / VPN / Proxy
- Temporarily disable VPN or proxy and try again.
- Check if Windows Firewall is blocking the port:

```powershell
Get-NetFirewallProfile | Format-Table Name,Enabled
# To check specific rules you can inspect inbound rules in Windows Defender Firewall GUI
```

6) Is the site local? (Check servers)
If the site is served from your machine (localhost), confirm both frontend and backend servers are running.

- Frontend (static files on port 8000) — start a simple static server if needed:

Using Node (no install required):
```powershell
cd C:\trusttect
npx http-server . -p 8000
# or, if you prefer Python
python -m http.server 8000
```

- Backend (API on port 5000) — start it using the project's start script:

```powershell
cd C:\trusttect\backend
npm install        # only needed once or when dependencies change
npm start          # runs `node server.js` as defined in package.json
```

- Verify a server is listening on the port (example 5000 or 8000):

```powershell
netstat -ano | findstr ":5000"
Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
Test-NetConnection -ComputerName localhost -Port 5000
```

If nothing listens on the port, the server isn't running or it failed to start — check the terminal output where you ran `npm start` for errors.

7) Check server logs and console
- Run the backend in a terminal and watch the logs for startup errors. If the server exits, paste the error here.
- For frontend network requests, open the browser DevTools (F12) → Network tab. Reload the page and inspect failed requests. The Console tab often displays helpful error messages (DNS errors, CORS, refused connection, etc.).

8) Common problems and fixes
- CORS errors: look for "Access-Control-Allow-Origin" errors in Console. If present, enable CORS in the backend (the repo already depends on cors; ensure it is used in `server.js`).
- Port conflict: some other process may be using the port. Change port or stop the conflicting process (use the PID from netstat to find it).
- Service only accessible on IPv6/127.0.0.1 vs 0.0.0.0: ensure the server binds to 0.0.0.0 or localhost as appropriate.

9) Traceroute for remote sites
- If the site is remote, run tracert to the domain to find where it fails:

```powershell
tracert example.com
```

10) When you still need help — what to share
If these steps don't fix it, share the following so I can help further:
- The exact URL you tried (copy/paste)
- Whether this is `localhost` / a local dev server or a remote URL
- Output of these commands (paste text):

```powershell
ipconfig /all
netstat -ano | findstr ":8000"  # or :5000 depending on which server you expect
Test-NetConnection -ComputerName localhost -Port 8000
cd C:\trusttect\backend; npm start  # and copy any error output
```

---

If you'd like, I added these troubleshooting steps into this document for quick reference. Tell me whether the site is local or remote and the URL you're trying and I will walk through the relevant checks with you.

````
# 🚀 How to View Your Trustech Website

## ✅ Your Website is Already Running!

### Main Website
**URL:** http://localhost:8000

Open your browser and visit:
- **Home Page:** http://localhost:8000/index.html
- **Login Page:** http://localhost:8000/login.html
- **Brochure:** http://localhost:8000/brochure.html

### Backend API
**URL:** http://localhost:5000
- API is running and ready to handle requests

---

## 🎯 What's New - Features Added

### 1. **Login System Integration**
- ✅ Login/Signup page at `/login.html`
- ✅ User authentication with backend
- ✅ Login button in navigation bar
- ✅ User profile dropdown when logged in
- ✅ Logout functionality

### 2. **Brochure Page**
- ✅ Complete product catalog
- ✅ Pricing information
- ✅ Company information
- ✅ Accessible from navigation menu

### 3. **Interactive Features**
- ✅ "Know More" button redirects to Services section
- ✅ Feature buttons (➔) show detailed information modals:
  - Product Categories info
  - Analytics Dashboard info
  - Warranty Information
- ✅ Purchase buttons check login status

### 4. **Enhanced Navigation**
- ✅ Login/Logout in navbar
- ✅ User profile display when logged in
- ✅ Brochure link in navbar
- ✅ Smooth scrolling to sections

---

## 📝 How to Test Everything

### Test 1: View the Website
1. Open browser: http://localhost:8000/index.html
2. Navigate through all sections
3. Click on feature buttons (➔) to see modals

### Test 2: Create an Account
1. Click "🔐 Login" in navigation
2. Click "Sign Up" tab
3. Fill in your details:
   - Name: Your Name
   - Email: test@example.com
   - Phone: 1234567890
   - Password: password123
4. Click "Create Account"
5. You'll be redirected to home page

### Test 3: Login
1. Go to login page
2. Enter your credentials
3. Click "Login"
4. Notice your name appears in navbar

### Test 4: Contact Form
1. Scroll to contact section
2. Fill in the form
3. Click "Submit"
4. Check backend data: `backend/db/data/contacts.json`

### Test 5: View Brochure
1. Click "📄 Brochure" in navbar
2. View all products and pricing
3. Click "View Products Online" to return

---

## 🔧 Servers Running

### Web Server (Frontend)
```
Status: ✅ Running
Port: 8000
URL: http://localhost:8000
```

### Backend API Server
```
Status: ✅ Running
Port: 5000
URL: http://localhost:5000
Database: File-based (no MongoDB needed)
```

---

## 📂 Project Structure

```
trusttect/
├── index.html              # Main website
├── login.html              # Login/Signup page
├── brochure.html           # Product brochure
├── style.css               # Styles
├── js/
│   ├── api.js             # API client
│   ├── main.js            # Main page logic
│   ├── login-page.js      # Login page logic
│   ├── contact.js         # Contact form handler
│   └── products.js        # Products handler
├── backend/
│   ├── server-simple.js   # Backend server
│   ├── db/
│   │   ├── simple-db.js   # Database handler
│   │   └── data/          # JSON data files
│   └── ...
└── login/                 # React app (optional)
```

---

## 🎨 Features Breakdown

### Navigation Bar
- Home, About, Services, Features, Products, Testimonial, Contact
- Brochure link
- Login button (shows when logged out)
- User profile (shows when logged in with logout option)

### Home Section
- "View Products" button → scrolls to products
- Hero image and description

### About Section
- "Know More" button → scrolls to Services section

### Features Section
- Three feature cards with interactive buttons:
  1. Product Categories → Shows category info
  2. Analytics Dashboard → Shows analytics info
  3. Warranty Info → Shows warranty details

### Products Section
- 8 product cards
- "Purchase" buttons (require login)

### Contact Section
- Working contact form
- Submits to backend API
- Saves to database

---

## 🔐 Test Accounts

You can create your own accounts, or use these test credentials after registering:

**Create a test account:**
- Email: admin@trustech.com
- Password: admin123
- Name: Admin User

---

## 🛠️ Troubleshooting

### Website not loading?
- Check if web server is running on port 8000
- Try: http://localhost:8000/index.html

### Login not working?
- Check if backend is running on port 5000
- Check browser console for errors (F12)

### Contact form not submitting?
- Verify backend is running
- Check network tab in browser (F12)

---

## 🎉 Next Steps

1. **Test all features** - Click everything!
2. **Create an account** - Try the login system
3. **Submit contact form** - Test backend integration
4. **View brochure** - Check product catalog
5. **Customize** - Add your own products, images, content

---

## 📞 Need Help?

All servers are running and ready to use. Just open your browser and start exploring!

**Main URL:** http://localhost:8000/index.html
