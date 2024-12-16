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
            <a href='#' className='close-btn' onClick={closeNav}/>
          </div>
        </div>

        <ul>
          <div className="nav-item-container">
            <button>
              <li className="nav-item" onClick={() => {closeNav(); scrollToSection('home')}}>
                Home
              </li>
            </button>
          </div>

          <div className="nav-item-container">
            <button>
            <li className="nav-item" onClick={() => {closeNav(); scrollToSection('about')}}>
                About
              </li>
            </button>
          </div>

          <div className="nav-item-container">
            <button>
            <li className="nav-item" onClick={() => {closeNav(); scrollToSection('experience')}}>
                Experience
              </li>
            </button>
          </div>

          <div className="nav-item-container">
            <button>
            <li className="nav-item" onClick={() => {closeNav(); scrollToSection('contact')}}>
                Contact
              </li>
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

function closeNav() {
  const elem = document.getElementById("nav");

  if(elem !== null) {
    elem.style.width = "0%"
  }
}