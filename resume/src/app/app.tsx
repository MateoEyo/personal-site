import About from './about';
import Contact from './contact';
import Experience from './experience';
import Landing from './landing';

export function App() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <Landing title="resume" />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
