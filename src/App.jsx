import React from 'react';
import './App.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false); 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={120}
    />
  )
}
