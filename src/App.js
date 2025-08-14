import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LuSquareMenu } from "react-icons/lu";

import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Students from './components/Students';
import Sidebar from "./components/Sidebar";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        
        {/* Sidebar fixed height, not scroll */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main Content scrollable */}
        <main className="flex-1 flex flex-col">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-4"
          >
            <LuSquareMenu className="h-8 w-8 text-blue-500" />
          </button>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/students" element={<Students />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
