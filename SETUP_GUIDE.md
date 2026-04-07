# 📋 Portfolio Setup & Data Management Guide

## ✅ Current Status
- **Backend**: Running on `http://localhost:5000/` ✅
- **Frontend**: Running on `http://localhost:5174/` ✅
- **MongoDB**: Connected (MongoDB Atlas) ✅
- **CSS**: Fully Responsive ✅

---

## 🗄️ MongoDB Data Setup

### Option 1: Using MongoDB Atlas (Recommended)
Since the backend is configured to use MongoDB Atlas, you can:

1. **Access your MongoDB Atlas dashboard** at https://cloud.mongodb.com
2. **Navigate to your cluster** → Collections
3. **Create collections** in the `portfolioDB` database:
   - `projects`
   - `skills`
   - `experiences`
   - `educations`
   - `sociallinks`

### Option 2: Using MongoDB Compass (Local)
If you want to use local MongoDB instead:

1. Launch **MongoDB Compass**
2. Connect to: `mongodb://127.0.0.1:27017`
3. Create database: `portfolioDB`
4. Create collections: `projects`, `skills`, `experiences`, `educations`, `sociallinks`

### Step 3: Insert Sample Data into Projects Collection
1. Click on `portfolioDB` → `projects`
2. Click the **Insert Document** button (green button)
3. Copy-paste this data (one at a time):

**Project 1:**
```json
{
  "title": "E-Commerce Platform",
  "desc": "Full-stack e-commerce solution with React, Node.js, and MongoDB",
  "tags": ["React", "Node.js", "MongoDB", "Stripe"],
  "image": ""
}
```

**Project 2:**
```json
{
  "title": "Social Media App",
  "desc": "Real-time social networking application with messaging features",
  "tags": ["React", "Socket.io", "Express", "MongoDB"],
  "image": ""
}
```

**Project 3:**
```json
{
  "title": "Analytics Dashboard",
  "desc": "Business analytics dashboard with real-time data visualization",
  "tags": ["React", "D3.js", "Node.js", "PostgreSQL"],
  "image": ""
}
```

### Step 4: Insert Sample Data into Skills Collection
1. Click on `portfolioDB` → `skills`
2. Click the **Insert Document** button
3. Copy-paste these skills:

**Skill 1:**
```json
{
  "title": "React.js",
  "text": "Building interactive and responsive user interfaces",
  "icon": "⚛️"
}
```

**Skill 2:**
```json
{
  "title": "Node.js",
  "text": "Server-side JavaScript development and API creation",
  "icon": "🟢"
}
```

**Skill 3:**
```json
{
  "title": "MongoDB",
  "text": "NoSQL database design and optimization",
  "icon": "🍃"
}
```

**Skill 4:**
```json
{
  "title": "CSS/SCSS",
  "text": "Advanced styling and responsive design",
  "icon": "🎨"
}
```

**Skill 5:**
```json
{
  "title": "JavaScript",
  "text": "Core JavaScript fundamentals and ES6+",
  "icon": "⚙️"
}
```

**Skill 6:**
```json
{
  "title": "Web Design",
  "text": "UI/UX design and user experience optimization",
  "icon": "✨"
}
```

### Step 5: Insert Sample Data into Experiences Collection
1. Click on `portfolioDB` → `experiences`
2. Click the **Insert Document** button
3. Add experience data:

**Experience 1:**
```json
{
  "title": "Full Stack Developer",
  "company": "Tech Company",
  "duration": "2023 - Present",
  "description": "Developing modern web applications using React and Node.js"
}
```

### Step 6: Insert Sample Data into Educations Collection
1. Click on `portfolioDB` → `educations`
2. Click the **Insert Document** button
3. Add education data:

**Education 1:**
```json
{
  "degree": "Bachelor of Technology",
  "institution": "Your University",
  "year": "2023",
  "description": "Computer Science and Engineering"
}
```

### Step 7: Insert Sample Data into Social Links Collection
1. Click on `portfolioDB` → `sociallinks`
2. Click the **Insert Document** button
3. Add social link data:

**Social Link 1:**
```json
{
  "name": "LinkedIn",
  "icon": "in",
  "url": "https://linkedin.com/in/yourprofile"
}
```

---

## 🚀 API Endpoints Reference

### Projects Endpoints
- **GET** `http://localhost:5000/api/projects` - Fetch all projects
- **POST** `http://localhost:5000/api/projects` - Create new project
- **PUT** `http://localhost:5000/api/projects/:id` - Update project
- **DELETE** `http://localhost:5000/api/projects/:id` - Delete project

### Skills Endpoints
- **GET** `http://localhost:5000/api/skills` - Fetch all skills
- **POST** `http://localhost:5000/api/skills` - Create new skill
- **PUT** `http://localhost:5000/api/skills/:id` - Update skill
- **DELETE** `http://localhost:5000/api/skills/:id` - Delete skill

### Experience Endpoints
- **GET** `http://localhost:5000/api/experiences` - Fetch all experiences
- **POST** `http://localhost:5000/api/experiences` - Create new experience
- **PUT** `http://localhost:5000/api/experiences/:id` - Update experience
- **DELETE** `http://localhost:5000/api/experiences/:id` - Delete experience

### Education Endpoints
- **GET** `http://localhost:5000/api/educations` - Fetch all educations
- **POST** `http://localhost:5000/api/educations` - Create new education
- **PUT** `http://localhost:5000/api/educations/:id` - Update education
- **DELETE** `http://localhost:5000/api/educations/:id` - Delete education

### Social Links Endpoints
- **GET** `http://localhost:5000/api/social-links` - Fetch all social links
- **POST** `http://localhost:5000/api/social-links` - Create new social link
- **PUT** `http://localhost:5000/api/social-links/:id` - Update social link
- **DELETE** `http://localhost:5000/api/social-links/:id` - Delete social link

### Contact Endpoints
- **POST** `http://localhost:5000/api/contact` - Send contact message

---

## 💻 Using API with cURL (Alternative to Compass)

### Add a Project via API
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Project Name",
    "desc": "Project description here",
    "tags": ["Tag1", "Tag2"],
    "image": ""
  }'
```

### Add a Skill via API
```bash
curl -X POST http://localhost:5000/api/skills \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Skill Name",
    "text": "Skill description",
    "icon": "🔥"
  }'
```

### Fetch All Projects
```bash
curl http://localhost:5000/api/projects
```

### Fetch All Skills
```bash
curl http://localhost:5000/api/skills
```

---

## 📱 Responsive Design Features Added

### Mobile-First Approach
✅ Fluid typography using clamp() function
✅ Flexible grid layouts with auto-fit
✅ Touch-friendly button sizes (min 44px height)
✅ Optimized spacing for all screen sizes

### Breakpoints
- **Desktop**: Full layout (1100px+)
- **Tablet**: 2-column grid (760px - 1100px)
- **Mobile**: Single column (480px - 760px)
- **Small Mobile**: Extra small screens (<480px)

### Key Responsive Features
- Navigation adapts for mobile
- Hero section stacks vertically on mobile
- Project and skill cards are responsive
- Buttons full-width on small screens
- Text scales proportionally
- Contact form optimized for mobile input

---

## 🔧 Troubleshooting

### MongoDB Connection Issues
**Problem**: "MongoDB disconnected" or "Failed to connect"
**Solution**:
1. Check MongoDB Atlas dashboard for cluster status
2. Verify MONGO_URI in `portfolio-backend/.env` file
3. Ensure IP whitelist includes your current IP (0.0.0.0/0 for testing)
4. Check network connectivity to MongoDB Atlas

**For Local MongoDB (if using instead):**
1. Ensure MongoDB is running: `mongod` in terminal
2. Check if port 27017 is accessible
3. Update MONGO_URI to `mongodb://127.0.0.1:27017/portfolioDB`

### Frontend not showing data
**Problem**: "Data not loading in frontend"
**Solution**:
1. Check if backend is running: `http://localhost:5000/api/projects`
2. Verify data exists in MongoDB Compass
3. Check browser console for errors (F12)
4. Clear cache and reload (Ctrl+Shift+R)

### Port Already in Use
**Problem**: "Port 5000 is already in use"
**Solution**:
```bash
taskkill /IM node.exe /F
```

---

## 📝 Backend Structure

```
portfolio-backend/
├── server.js                    # Main server file
├── .env                        # Environment variables
├── config/
│   └── db.js                   # MongoDB connection
├── models/
│   ├── Project.js              # Project schema
│   ├── Skill.js                # Skill schema
│   ├── Experience.js           # Experience schema
│   ├── Education.js            # Education schema
│   └── SocialLink.js           # Social link schema
├── controllers/
│   ├── projectController.js
│   ├── skillController.js
│   ├── experienceController.js
│   ├── educationController.js
│   ├── socialLinkController.js
│   └── contactController.js
└── routes/
    ├── projectRoutes.js
    ├── skillRoutes.js
    ├── experienceRoutes.js
    ├── educationRoutes.js
    ├── socialLinkRoutes.js
    └── contactRoutes.js
```

---

## 🎨 Frontend Structure

```
portfolio-ui/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Work.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── styles.css        # Fully Responsive CSS
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

---

## ✨ Next Steps

1. **Add Your Data**: Insert your projects and skills via MongoDB Compass
2. **Customize Content**: Edit HTML in components as needed
3. **Add Images**: Place project images in `public/` folder
4. **Deploy**: When ready, deploy to Vercel (frontend) & Heroku/Railway (backend)

---

## 📞 Contact Form Setup

The contact form sends emails via Gmail SMTP using Nodemailer.

### Current Configuration
- **SMTP Host**: smtp.gmail.com
- **Port**: 587 (TLS)
- **Email**: bhardwajuttam485@gmail.com
- **App Password**: Configured in `.env`

### To Change Email Settings
1. Update these variables in `portfolio-backend/.env`:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   RECEIVER_EMAIL=your-email@gmail.com
   ```

2. **For Gmail accounts**:
   - Enable 2-Factor Authentication
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the App Password (not your regular password)

3. **For other email providers**:
   - Update SMTP settings in `controllers/contactController.js`
   - Common alternatives: Outlook, Yahoo, custom SMTP

### Testing Email
Send a test message via the contact form or use this cURL command:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

---

**Last Updated**: April 8, 2026
**Status**: ✅ Production Ready
**MongoDB**: Atlas (Cloud)
**Frontend Port**: 5174
**Backend Port**: 5000
