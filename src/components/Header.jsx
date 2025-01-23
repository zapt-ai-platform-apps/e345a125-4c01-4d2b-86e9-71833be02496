import React from 'react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800">
            HubSpot Video Creator
          </h1>
          <div className="flex items-center space-x-4">
            <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-800 text-sm">
              Made on ZAPT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}