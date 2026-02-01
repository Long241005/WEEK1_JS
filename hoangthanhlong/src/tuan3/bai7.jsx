import { useState, createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

function Bai7() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('user-theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('user-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ 
        padding: '20px', 
        borderRadius: '10px',
        backgroundColor: theme === 'light' ? '#ffffff' : '#242424', 
        color: theme === 'light' ? '#213547' : '#ffffff',
        transition: 'all 0.3s'
      }}>
        <h3>Bài 7: Theme Switcher (Context API)</h3>
        <Layout />
      </div>
    </ThemeContext.Provider>
  );
}

function Layout() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <p>Component: Layout (Level 1)</p>
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div style={{ padding: '10px', border: '1px solid #646cff', marginTop: '10px' }}>
      <p>Component: Card (Level 2)</p>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ marginTop: '10px' }}>
      <p>Component: Button (Level 3 - Deep)</p>
      <button onClick={toggleTheme}>
        Chuyển sang {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}

export default Bai7;