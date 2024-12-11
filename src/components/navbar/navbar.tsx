import { Toggle } from "../buttons/buttons"
import { scrollToSection } from "../functions/functions"

export function Navbar() {
    return (
        <div className="navbar">
            <div>

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
                    <li className="nav-item" onClick={() => scrollToSection('experience')}>  
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
                <Toggle />
            </div>
        </div>
    )
};