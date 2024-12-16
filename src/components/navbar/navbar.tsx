import { useEffect, useState } from 'react';
import { Toggle } from '../buttons/buttons';
import { scrollToSection } from '../functions/functions';
import { useIsMobile } from '../functions/screen-size';

export interface NavbarProps {
  isDarkMode: boolean;
  onIsDarkModeChange: (isDarkMode: boolean) => void;
}

export function Navbar(props: NavbarProps) {
  const { isDarkMode, onIsDarkModeChange } = props;
  const isMobile = useIsMobile();

  return (
    <div>
      <div className={`navmenu theme-${isMobile ? 'mobile' : 'desktop'}`} onClick={openNav}>
        <button className='btn-contact'>menu</button> 
      </div>

      <div id='nav' className={`navbar theme-${isMobile ? 'mobile' : 'desktop'}`}>
        <div>
          MM
          <div className='navmenu-close-btn'>
            <a href='#' className='close-btn' onClick={() => closeNav(isMobile)}/>
          </div>
        </div>

        <ul>
          <div className="nav-item-container">
            <button>
              <a href='#home' className="nav-item" onClick={() => closeNav(isMobile)}>
                Home
              </a>
            </button>
          </div>

          <div className="nav-item-container">
            <button>
              <a href='#about' className="nav-item" onClick={() => closeNav(isMobile)}>
                About
              </a>
            </button>
          </div>

          <div className="nav-item-container">
            <button>
              <a href='#experience' className="nav-item" onClick={() => closeNav(isMobile)}>
                Experience
              </a>
            </button>
          </div>

          <div className="nav-item-container">
            <button>
              <a href='#contact' className="nav-item" onClick={() => closeNav(isMobile)}>
                Contact
              </a>
            </button>
          </div>
        </ul>

        <div className='theme-toggle'>
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
  const elem = document.getElementById("nav");

  if(elem !== null) {
    elem.style.width = "100%"
  }
}

function closeNav(isMobile:boolean) {
  if(isMobile) {
    const elem = document.getElementById("nav");

    if(elem !== null) {
      elem.style.width = "0%"
    }
  }
}