import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";



function Navigation() {

    
    const [isOpen, setIsopen] = useState(false);
    function toggle() {
        setIsopen(!isOpen);
    };



    return (
        <div className="relative flex flex-col">
             <button type="button" className="absolute right-0" onClick={toggle}>{isOpen ? <FaTimes className="text-4xl" /> : <FaBars className="text-4xl" />}</button>
              <nav className={`absolute top-8 right-0 overflow-hidden transition-all duration-300 ease-out flex flex-col bg-amber-300 gap-2 text-center  ${isOpen ? "max-h-48" : "max-h-0"}`}>
                <Link to={"/"} className="">Home</Link>
                <Link to={"/aboutUs"}>About Us</Link>
                <Link to={"/contactUs"}>Contact Us</Link>
            </nav>
        </div>
       
    )
}

export default Navigation;