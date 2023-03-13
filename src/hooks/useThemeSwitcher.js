import { useEffect } from 'react';
import { useState } from 'react';

export default function useThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    localStorage.theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => {
    theme === 'light'
      ? (setTheme('dark'), (localStorage.theme = 'dark'))
      : (setTheme('light'), (localStorage.theme = 'light'));
  };

  return { toggleTheme };
}
