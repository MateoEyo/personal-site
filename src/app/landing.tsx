
import LinkedIn from "../components/buttons/linkedin";
import Github from "../components/buttons/github";
import { scrollToSection } from "../components/functions/functions";

export function Landing({ title }: { title: string }) {

  return (
    <header id="home" className="landing">
      <h1 className="landing-header">
        <span className="header-background">Mateo</span>
        <br></br>
        <span className="header-background">Matic</span>
      </h1>
      <div className="landing-text">
        <div className="slider-wrapper">
          I am
          <div className="slider">
            <div className="slider-text-1">
              an Engineer
            </div>
            <div className="slider-text-2">
              a Hobbyist
            </div>
            <div className="slider-text-3">
              an Agile Expert
            </div>
          </div>
        </div>
      </div>
      <div className="landing-buttons">
        <div className="landing-button">
          <Github />
        </div>
        <div className="landing-button">
          <LinkedIn />
        </div>
      </div>
      <div className="btn-down-arrow" >
        <button onClick={() => scrollToSection('about')}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Landing;