import { Toggle } from '../buttons/buttons';
import { scrollToSection } from '../functions/functions';

export interface NavbarProps {
  isDarkMode: boolean;
  onIsDarkModeChange: (isDarkMode: boolean) => void;
  isMobile: boolean;
  onIsMobile: (isMobile: boolean) => void;
}

export function Navbar(props: NavbarProps) {
  const { isDarkMode, onIsDarkModeChange, isMobile, onIsMobile } = props;

  return (
    <div className={`navbar theme-${isMobile ? 'desktop' : 'mobile'}`}>
      <div className={`navmenu theme-${isMobile ? 'desktop' : 'mobile'}`}>
        <button className='btn-contact' onClick={openNav}>menu</button> 
      </div>
      <div>
        logo
      </div>

      <ul>
        <div className="nav-item-container">
          <button>
            <li className="nav-item" onClick={() => scrollToSection('home')}>
              Home
            </li>
          </button>
        </div>

        <div className="nav-item-container">
          <button>
            <li className="nav-item" onClick={() => scrollToSection('about')}>
              About
            </li>
          </button>
        </div>

        <div className="nav-item-container">
          <button>
            <li
              className="nav-item"
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </li>
          </button>
        </div>

        <div className="nav-item-container">
          <button>
            <li className="nav-item" onClick={() => scrollToSection('contact')}>
              Contact
            </li>
          </button>
        </div>
      </ul>

      <div>
        <Toggle
          isOn={isDarkMode}
          onChange={(isOn) => {
            onIsDarkModeChange(isOn);
          }}
        />
      </div>
    </div>
  );
}

function openNav() {
  const navbarElement = document.getElementById('navbar');
  if (navbarElement !== null) {
    navbarElement.style.width = "100%";
    navbarElement.style.display = "inline";
    navbarElement.style.transition = "500ms";
  }
}