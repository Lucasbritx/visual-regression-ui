import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header 
      className="w-full bg-[var(--bg-secondary)] border-b border-[var(--border-color)] px-4 sm:px-6 lg:px-8"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]" data-testid="header-title">
          Visual Regression Testing UI
        </h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md bg-[var(--button-secondary)] text-[var(--text-primary)] border border-[var(--border-color)] font-medium"
          data-testid="theme-toggle"
        >
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </header>
  );
};
