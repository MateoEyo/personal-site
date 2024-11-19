import About from './about';
import Contact from './contact';
import Experience from './experience';
import Landing from './landing';

export function App() {
  return (
    <div className='flex flex-col'>
      <Landing title="resume" />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
