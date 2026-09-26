import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
        const get = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
};
    

    return (
        <nav className="sticky top-0 bg-white z-40 ">
            <div className="max-w-6xl mx-auto px-7 py-3">
                <div className="flex justify-between items-center h-12">
                    <img
                        src="https://www.vebbox.com/assets/img/LOGO.png"
                        className="w-48 h-11 animate-pulse"
                        alt="Vebbox logo"
                    />

                    {/* Desktop menu - md and above */}
                    <div className="hidden md:flex text-gray-500 gap-5 items-center">
                        <a href="#home" className="hover:text-blue-400 hover:underline">Home</a>
                        <a href="#services" className="hover:text-blue-400 hover:underline">Services</a>
                        <a href="#products" className="hover:text-blue-400 hover:underline">Products</a>
                        <a href="#aboutus" className="hover:text-blue-400 hover:underline">About us</a>
                        <a href="#contact" className="hover:text-blue-400 hover:underline"></a>
                        <button className="bg-blue-400 rounded-full px-3 w-34  text-white h-10 hover:bg-blue-300 hover:scale-109" onClick={get}>
                            Get Started
                        </button>
                        <Link to="/login" className="bg-blue-400 rounded-full text-white pt-2 pl-9 h-10 w-34 hover:bg-blue-300 hover:scale-105">Members</Link>
                        <Link  to="/admin-login"className="bg-blue-400 rounded-full h-10 text-white w-34 pl-14 pt-2 hover:bg-blue-300 hover:scale-107 ">HR</Link>
                    </div>

                    {/* Hamburger button - mobile only */}
                    <button
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
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
                    <div className="flex justify-between items-center w-1.5 h-15">
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                            className="text-3xl leading-none"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 pt-10 text-lg">
                        <a href="#home" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#services" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#products" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Products</a>
                        <a href="#aboutus" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About us</a>
                          <a href="#contact" className="hover:text-blue-400"></a>
                          
                       
                    </div>

                    <div className="flex justify-center pt-16 gap-3">
                        <button
                            className="bg-blue-400 rounded-full px-10 text-white hover:bg-blue-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </button>
                                                <Link to="/login" className="bg-blue-400 rounded-full text-white pt-2 pl-8 h-10 w-34 hover:bg-blue-300">Members</Link>
                        <Link  to="/admin-login"className="bg-blue-400 rounded-full h-10 text-white w-34 pl-10 pt-2 hover:bg-blue-300 ">Admin</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
