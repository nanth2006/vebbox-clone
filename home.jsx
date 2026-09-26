import Navbar from "./components/navbar";
import AboutUs from "./Aboutus";
import Services from "./Services";
import Products from "./Products";
import Contact from "./conduct";
import ScrollToTopButton from "./components/scrolltop";

function Home() {
  
   
    const get = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
};
    
    return (
        <>
            <Navbar />

            {/* header section */}
            <section id="home" className="scroll-mt-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10">
                        <div className="">
                            <h1 className="font-bold text-4xl md:text-5xl leading-tight py-4">
                                Gro᭙ your business <br/>᭙ith VEBBOX
                            </h1>
                            <p className="font-sans text-2xl text-gray-500 pb-4 max-w-md">
                                ᭙e are team of talented developers making Excellent Solutions to business
                            </p>
                            <button   className="bg-white rounded-full  mt-4 border border-2 border-[#3498db] text-blue-400 font-2xl w-40 h-12 hover:bg-blue-500 hover:text-white transition-colors" onClick={get}>
                                Get Started
                            </button>
                        </div>
                        <div className="overflow-visible">
                            <img
                                src="https://www.vebbox.com/assets/img/hero-img.png"
                                className="animate-float [animation-duration:6s]"
                                alt="hero illustration"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services section */}
            <section id="services" className="scroll-mt-24">
                <Services />
            </section>

            {/* Products section */}
            <section id="products" className="scroll-mt-24">
                <Products />
            </section>

            {/* About us section */}
            <section id="aboutus" className="scroll-mt-24">
                <AboutUs />
            </section>

            {/* Contact section */}
            <section id="contact" className="scroll-mt-24">
                <Contact />
            </section>
            <ScrollToTopButton/>
        </>
    );
}

export default Home;
