import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // My links styles
    const linkClasses = "text-secondary hover:text-primary transition duration-300";

    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                
                
                <Link to="/" className="text-2xl font-bold text-primary">
                    Movie Glide
                </Link>

                {/* Desktop */}
                <nav className="hidden md:flex space-x-8 items-center">
                    <Link to="/" className={linkClasses}>Home</Link>
                    <Link to="/about" className={linkClasses}>About</Link>
                    <Link to="/contact" className={linkClasses}>Contact</Link>
                </nav>

            
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-primary focus:outline-none">
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-gray-800 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="flex flex-col items-center space-y-4 py-4">
                    <Link to="/" className={linkClasses} onClick={toggleMenu}>Home</Link>
                    <Link to="/aboutUs" className={linkClasses} onClick={toggleMenu}>About</Link>
                    <Link to="/contactUs" className={linkClasses} onClick={toggleMenu}>Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navigation;