import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
        setIsOpen(false);
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="sticky top-0 bg-white z-40 shadow-xs">
            <div className="max-w-6xl mx-auto px-7 py-3">
                <div className="flex justify-between items-center h-12">
                    <Link to="/" onClick={() => scrollToSection("home")}>
                        <img
                            src="https://www.vebbox.com/assets/img/LOGO.png"
                            className="w-48 h-11 animate-pulse"
                            alt="Vebbox logo"
                        />
                    </Link>

                    {/* Desktop menu - md and above */}
                    <div className="hidden md:flex text-gray-500 gap-5 items-center">
                        <a 
                            href="/#home" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} 
                            className="hover:text-blue-400 hover:underline cursor-pointer"
                        >
                            Home
                        </a>
                        <a 
                            href="/#services" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("services"); }} 
                            className="hover:text-blue-400 hover:underline cursor-pointer"
                        >
                            Services
                        </a>
                        <a 
                            href="/#products" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("products"); }} 
                            className="hover:text-blue-400 hover:underline cursor-pointer"
                        >
                            Products
                        </a>
                        <a 
                            href="/#aboutus" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("aboutus"); }} 
                            className="hover:text-blue-400 hover:underline cursor-pointer"
                        >
                            About us
                        </a>
                        <a 
                            href="/#contact" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} 
                            className="hover:text-blue-400 hover:underline cursor-pointer"
                        >
                            Contact
                        </a>
                        <button 
                            className="bg-blue-400 rounded-full px-3 w-34 text-white h-10 hover:bg-blue-300 hover:scale-105 transition-all cursor-pointer" 
                            onClick={() => scrollToSection("products")}
                        >
                            Get Started
                        </button>
                        <Link 
                            to="/login" 
                            className="bg-blue-400 rounded-full text-white flex items-center justify-center h-10 w-34 hover:bg-blue-300 hover:scale-105 transition-all"
                        >
                            Members
                        </Link>
                        <Link 
                            to="/admin-login" 
                            className="bg-blue-400 rounded-full h-10 text-white w-34 flex items-center justify-center hover:bg-blue-300 hover:scale-105 transition-all"
                        >
                            HR
                        </Link>
                    </div>

                    {/* Hamburger button - mobile only */}
                    <button
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
                    >
                        <span className="block w-6 h-1 bg-black"></span>
                        <span className="block w-6 h-1 bg-black"></span>
                        <span className="block w-6 h-1 bg-black"></span>
                    </button>
                </div>
            </div>

            {/* Full-screen mobile overlay menu */}
            <div
                className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ${
                    isOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="max-w-6xl mx-auto px-7 py-3">
                    <div className="flex justify-between items-center h-12">
                        <img
                            src="https://www.vebbox.com/assets/img/LOGO.png"
                            className="w-48 h-11"
                            alt="Vebbox logo"
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="text-3xl leading-none font-bold cursor-pointer"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 pt-10 text-lg">
                        <a 
                            href="/#home" 
                            className="hover:text-blue-400" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
                        >
                            Home
                        </a>
                        <a 
                            href="/#services" 
                            className="hover:text-blue-400" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
                        >
                            Services
                        </a>
                        <a 
                            href="/#products" 
                            className="hover:text-blue-400" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("products"); }}
                        >
                            Products
                        </a>
                        <a 
                            href="/#aboutus" 
                            className="hover:text-blue-400" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("aboutus"); }}
                        >
                            About us
                        </a>
                        <a 
                            href="/#contact" 
                            className="hover:text-blue-400" 
                            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                        >
                            Contact
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center pt-10 gap-3">
                        <button
                            className="bg-blue-400 rounded-full px-8 py-2 text-white hover:bg-blue-300 w-full sm:w-auto cursor-pointer"
                            onClick={() => scrollToSection("products")}
                        >
                            Get Started
                        </button>
                        <Link 
                            to="/login" 
                            className="bg-blue-400 rounded-full text-white text-center py-2 px-8 w-full sm:w-auto hover:bg-blue-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Members
                        </Link>
                        <Link 
                            to="/admin-login" 
                            className="bg-blue-400 rounded-full text-white text-center py-2 px-8 w-full sm:w-auto hover:bg-blue-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
