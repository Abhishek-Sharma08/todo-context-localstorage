# 📝 Todo App with Context API & LocalStorage

A simple and responsive **Todo List App** built with **React**, leveraging the **Context API** for state management and **LocalStorage** for data persistence.  
This project demonstrates clean React architecture and the use of modern hooks.

---

## ✨ Features

- ✅ Add, edit, and delete todos  
- 🎯 Mark tasks as completed or pending  
- 💾 Persistent storage using **LocalStorage**  
- ⚡ Global state management with **React Context API**  
- 🎨 Clean and responsive UI with TailwindCSS  
- 🌓 Light & Dark theme support *(if included in your code)*

---

## 🛠️ Tech Stack

- **React** (with hooks)  
- **Context API** (for global state)  
- **LocalStorage** (for saving todos)  
- **TailwindCSS** (for styling)

---
todo-context-localstorage/
│── public/                     # Static assets (favicon, images, etc.)
│
│── src/
│   ├── assets/                 # Images, icons, etc.
│   │
│   ├── components/             # Reusable UI components
│   │   ├── TodoForm.jsx        # Input form to add todos
│   │   ├── TodoItem.jsx        # Single todo item
│   │   ├── TodoList.jsx        # List of all todos
│   │   └── ThemeToggle.jsx     # Button for light/dark theme (if included)
│   │
│   ├── context/                # Context API setup
│   │   └── TodoContext.jsx     # Provides state & actions globally
│   │
│   ├── hooks/                  # Custom hooks
│   │   └── useLocalStorage.js  # Hook for LocalStorage sync
│   │
│   ├── styles/                 # Global styles (if needed)
│   │   └── globals.css
│   │
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # React entry point
│   └── index.css               # TailwindCSS entry file
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

