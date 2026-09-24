# Project Management System

A full-stack project management application for creating projects, managing tasks, tracking progress, and organizing team workflows.

## 🚀 Features

- Create and manage projects
- Create, assign, and manage tasks
- Kanban board with drag-and-drop
- Task status and priority management
- List and table views
- Search projects, tasks, and users
- Dark mode
- Responsive dashboard
- Persistent UI state

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Redux Toolkit & RTK Query
- Tailwind CSS
- Material UI
- React DnD

### Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

## 🏗️ Architecture

    Next.js + React
           ↓
       REST APIs
           ↓
       Express.js
           ↓
        Prisma
           ↓
      PostgreSQL

## 📂 Project Structure

    Project-Management/
    ├── client/       # Next.js frontend
    └── server/       # Express.js backend

## ⚙️ Setup

### 1. Clone the repository

    git clone <your-repository-url>
    cd Project-Management

### 2. Install dependencies

    cd client
    npm install

    cd ../server
    npm install

### 3. Configure environment variables

Create `server/.env`:

    DATABASE_URL="your_postgresql_connection_string"
    PORT=5000

Create `client/.env.local`:

    NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/

### 4. Setup the database

    cd server
    npx prisma generate
    npx prisma migrate dev
    npm run seed

### 5. Run the application

Start the backend:

    cd server
    npm run dev

Start the frontend in another terminal:

    cd client
    npm run dev

## 🔑 Key Highlights

- RESTful API architecture
- Relational database design using Prisma
- RTK Query for API state, caching, and cache invalidation
- Drag-and-drop task management
- Debounced global search
- Responsive dashboard UI
- PostgreSQL database integration

## 🔮 Future Improvements

- Authentication and authorization
- Role-based access control
- Task editing and deletion
- Comments and attachments
- Complete timeline/Gantt view
- Automated testing

## 👨‍💻 Author

**Saurabh and Shamma**
