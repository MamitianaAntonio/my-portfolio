import { useState, useEffect } from 'react';
import { DarkModeToggle } from './components/ui/DarkModeToggle';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('isDarkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.setAttribute('data-theme', 'dark');
    } else {
      htmlElement.removeAttribute('data-theme');
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = (newValue) => {
    setIsDarkMode(newValue);
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col 
      justify-center items-center bg-(--bg-primary) 
      text-(--text-primary) transition-colors duration-300"
    >
      <div className="absolute top-8 right-8 flex items-center gap-4">
        <DarkModeToggle isDarkMode={isDarkMode} onChange={toggleDarkMode} />
      </div>
    </div>
  );
};
