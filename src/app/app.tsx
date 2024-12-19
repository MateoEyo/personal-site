import { useState } from 'react';
import { Navbar } from '../components/navbar/navbar';
import About from './about';
import Contact from './contact';
import Experience from './experience';
import Landing from './landing';
import { FadeInSection } from '../components/functions/fade';

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

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Experience />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>
    </div>
  );
}

export default App;
