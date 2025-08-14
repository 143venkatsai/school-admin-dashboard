# School Admin Dashboard

A responsive React-based dashboard layout with a collapsible sidebar, built using **React Router**, **Tailwind CSS**, and **React Icons**. The dashboard includes multiple pages like **Dashboard**, **Leaderboard**, **Analytics**, **Settings**, and **Students**.

---

## 🚀 Features

- **Responsive Sidebar** — Collapsible on mobile, always visible on desktop.
- **React Router Navigation** — Smooth client-side routing.
- **Mobile Menu Button** — Toggle sidebar with a hamburger icon.
- **Scrollable Main Content** — Sidebar stays fixed while main content scrolls.
- **Reusable Components** — Modular design for easy customization.

---

## 🛠 Tech Stack

- **React** — Frontend library for building UI.
- **React Router** — For routing between pages.
- **Tailwind CSS** — For styling and layout.
- **React Icons** — For beautiful SVG icons.
- **JavaScript (ES6)**

---

## 🚀 Features

- **Sidebar Navigation**

  - Collapsible on mobile devices
  - Always visible on desktop

- **Dashboard Analytics**

  - **Stats Cards** — Total Students, Total Classes, Avg. Performance, Top Performer
  - **Bar Chart** — Class-wise student enrollment
  - **Pie Chart** — Student performance distribution

- **Leaderboard**

  - Displays top 10 performers with avatars, points, streaks, and achievements
  - Winner badges for **Top Scorer**, **Longest Streak**, **Most Lessons Completed**

- **Student Directory**

  - Search by name
  - Filter by class
  - Load more results

- **Responsive Design**
  - Mobile-friendly layout
  - Scrollable main content with fixed sidebar

---

## 📂 Project Structure

src/
│
├── components/
│ ├── Dashboard.jsx
│ ├── Leaderboard.jsx
│ ├── Analytics.jsx
│ ├── Settings.jsx
│ ├── Students.jsx
| |-- StudentEngagementTrends.jsx
│ └── Sidebar.jsx
│
├── App.jsx
└── index.js
