# Portfolio Website

A modern, responsive portfolio website built with React (frontend) and Node.js/Express (backend) with MongoDB.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with glassmorphism UI
- **Full-Stack**: React frontend with Node.js backend
- **API Integration**: RESTful APIs for dynamic content
- **Modern UI**: Clean design with smooth animations
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Vite (build tool)
- CSS3 with modern features
- ESLint for code quality

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- RESTful API design

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

## 🚀 Getting Started

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd portfolio-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file in backend root:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd portfolio-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Usage

- **Home**: Hero section with introduction
- **About**: Personal information and skills overview
- **Work**: Featured projects showcase
- **Skills**: Technical skills and expertise
- **Experience**: Professional experience timeline
- **Education**: Educational background
- **Contact**: Contact form and social links

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server (if configured)

## 🌐 API Endpoints

- `GET /` - Server status
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get all skills
- `GET /api/experiences` - Get all experiences
- `GET /api/educations` - Get all education
- `GET /api/social-links` - Get social links
- `POST /api/contact` - Send contact message

## 📁 Project Structure

```
portfolio-project/
├── portfolio-backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── portfolio-ui/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   └── styles.css
│   ├── index.html
│   └── package.json
└── SETUP_GUIDE.md
```

## 🎨 Customization

- **Colors**: Modify CSS custom properties in `styles.css`
- **Content**: Update data in MongoDB collections
- **Images**: Replace images in `portfolio-ui/src/assets/images/`
- **Text**: Edit component files in `portfolio-ui/src/components/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Uttam Bhardwaj**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [https://github.com/bhardwajuttam485-ai]

---

⭐ If you found this project helpful, please give it a star!</content>
<parameter name="filePath">c:\Users\DELL\portfolio-u\portfolio-project\README.md