# SmartworkAI

**SmartworkAI** is a **SaaS platform** offering multiple AI-powered tools for productivity and creativity. Users can generate images, review resumes, remove backgrounds or objects from images, generate blog titles, and create articles — all in one platform.

---

## ✨ Features

- **AI Image Generator:** Create unique images from text prompts.  
- **Resume Review:** Analyze and improve resumes automatically.  
- **Background/Object Removal:** Clean up images by removing unwanted parts.  
- **Blog Title Generator:** Generate catchy titles for blogs.  
- **Article Generator:** Generate complete articles using AI.  
- **User-Friendly Interface:** Simple and intuitive SaaS design.  

---

## 🛠 Technologies Used

- **Frontend:** React, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** NeonDb(ope
- **AI Services:** OpenAI API (or other AI integrations)

---

## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/namanjain152003/smartworkai
cd SmartworkAI
```

### 2. Backend Setup
```bash
cd server
npm install
```

### 3. Set up environment variables (server/.env):
```bash
DATABASE_URL=<neonDB URL>
CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
CLERK_SECRET_KEY=<your-clerk-secret-key>
GEMINI_API_KEY=<your-gemini-api-key>
CLIPDROP_API_KEY=<your-clipdrop-api-key>
CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
CLOUDINARY_API_KEY=<cloudinary-api-key>
CLOUDINARY_API_SECRET=<cloudinary-api-secret>
```

### 4. Start the backend server:
```bash
npm run server
```

### 5. Frontend Setup
```bash
cd ../client
npm install
```

### 6. Set up environment variables (client/.env):
```bash
VITE_CLERK_PUBLISHABLE_KEY=<clerk-publishable-key>
VITE_BASE_URL=http://localhost:3000
```

### 7. Start the frontend:
```bash
npm run dev
```

