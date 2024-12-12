import { Toggle } from '../buttons/buttons';
import { scrollToSection } from '../functions/functions';

export interface NavbarProps {
  isDarkMode: boolean;
  onIsDarkModeChange: (isDarkMode: boolean) => void;
}

export function Navbar(props: NavbarProps) {
  const { isDarkMode, onIsDarkModeChange } = props;

  return (
    <div >
      <div className='nav-btn'>
        <button className='btn-contact' onClick={openNav}>menu</button> 
      </div>
      <div id='navbar' className="navbar">
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
    </div>
  );
}

function openNav() {
  const navbarElement = document.getElementById('navbar');
  if (navbarElement !== null) {
    navbarElement.style.width = "100%";
    navbarElement.style.display = "inline";
  }
}

function closeNav() {
  const navbarElement = document.getElementById('navbar');
  if (navbarElement !== null) {
    navbarElement.style.width = "0";
    navbarElement.style.display = "none";
  }
}