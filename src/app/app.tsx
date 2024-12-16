import { useState } from 'react';
import { Navbar } from '../components/navbar/navbar';
import About from './about';
import Contact from './contact';
import Experience from './experience';
import Landing from './landing';
import { useIsMobile } from '../components/functions/screen-size';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem('theme') === 'dark'
  );

  return (
    <div className={`app theme-${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar
        isDarkMode={isDarkMode}
        onIsDarkModeChange={(isDarkMode) => {
          setIsDarkMode(isDarkMode);
          localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        }}
      />
      <Landing title="resume" />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
