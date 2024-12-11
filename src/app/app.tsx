import { useState } from 'react';
import { Navbar } from '../components/navbar/navbar';
import About from './about';
import Contact from './contact';
import Experience from './experience';
import Landing from './landing';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col">
      <Navbar
        isDarkMode={isDarkMode}
        onIsDarkModeChange={(isDarkMode) => {
          setIsDarkMode(isDarkMode);

          document.body.classList.remove('theme-light', 'theme-dark');
          document.body.classList.add(
            isDarkMode ? 'theme-dark' : 'theme-light'
          );
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
