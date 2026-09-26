import Navbar from "../components/Navbar.jsx";
import AboutUs from "../components/AboutUs.jsx";
import Services from "../components/Services.jsx";
import Products from "../components/Products.jsx";
import Contact from "../components/Contact.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Home() {
    const scrollToProducts = () => {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Header / Hero section */}
            <section id="home" className="scroll-mt-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-12 md:py-16">
                        <div>
                            <h1 className="font-bold text-4xl md:text-5xl leading-tight py-4 text-gray-900">
                                Grow your business <br />with <span className="text-blue-600">VEBBOX</span>
                            </h1>
                            <p className="font-sans text-xl md:text-2xl text-gray-500 pb-4 max-w-md">
                                We are team of talented developers making Excellent Solutions to business
                            </p>
                            <button
                                className="bg-white rounded-full mt-4 border-2 border-[#3498db] text-blue-500 font-semibold w-40 h-12 hover:bg-blue-500 hover:text-white transition-all shadow-sm cursor-pointer"
                                onClick={scrollToProducts}
                            >
                                Get Started
                            </button>
                        </div>
                        <div className="overflow-visible flex justify-center">
                            <img
                                src="https://www.vebbox.com/assets/img/hero-img.png"
                                className="animate-float w-full max-w-md"
                                alt="hero illustration"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services section */}
            <section id="services" className="scroll-mt-24 py-8 bg-gray-50/50">
                <Services />
            </section>

            {/* Products section */}
            <section id="products" className="scroll-mt-24 py-8">
                <Products />
            </section>

            {/* About us section */}
            <section id="aboutus" className="scroll-mt-24 py-8 bg-gray-50/50">
                <AboutUs />
            </section>

            {/* Contact section */}
            <section id="contact" className="scroll-mt-24 py-8">
                <Contact />
            </section>

            <ScrollToTop />
        </div>
    );
}

export default Home;
