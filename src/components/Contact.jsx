import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState({ loading: false, message: "", error: false });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: "", error: false });

        const apiUrl = import.meta.env.VITE_API_URL;

        if (apiUrl) {
            try {
                const response = await fetch(`${apiUrl}/api/contact`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                if (response.ok) {
                    setStatus({ loading: false, message: "Message sent successfully!", error: false });
                    setFormData({ name: "", email: "", subject: "", message: "" });
                } else {
                    setStatus({ loading: false, message: "Failed to send message. Please try again.", error: true });
                }
            } catch (err) {
                setStatus({ loading: false, message: "Server connection error.", error: true });
            }
        } else {
            // Frontend simulation when backend is not configured yet
            setTimeout(() => {
                setStatus({ loading: false, message: "Thank you! Your message has been received.", error: false });
                setFormData({ name: "", email: "", subject: "", message: "" });
            }, 600);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-8 py-16">
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-14">
                <span className="h-0.5 w-16 bg-blue-500"></span>
                <h2 className="text-4xl font-bold tracking-wide">CONTACT US</h2>
                <span className="h-0.5 w-16 bg-blue-500"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left: Company info */}
                <div>
                    <h3 className="text-3xl font-extrabold mb-4">VEBBOX</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.
                    </p>
                    <div className="flex gap-3">
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.H836RvDYYgQZcZn0TC8qBAHaHa?r=0&pid=Api&h=220&P=0" alt="twitter" className="w-9 h-9 rounded-full border border-blue-400 p-1 hover:bg-blue-500 transition hover:scale-110" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.0q5xvWn_jzjUEGwPRPgBagHaHa?r=0&pid=Api&h=220&P=0" alt="facebook" className="w-9 h-9 rounded-full border border-blue-400 hover:bg-blue-500 transition hover:scale-110 p-1" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.OBWbbdpABO8c5LSB367XAwHaHa?r=0&pid=Api&h=220&P=0" alt="instagram" className="w-9 h-9 rounded-full border border-blue-400 hover:bg-blue-500 transition hover:scale-110 p-1" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <img src="https://tse4.mm.bing.net/th/id/OIP.dCosGRB2fZ-uGcUxZvt_2gHaHa?r=0&pid=Api&h=220&P=0" alt="linkedin" className="w-9 h-9 rounded-full border border-blue-400 p-1 hover:bg-blue-500 transition hover:scale-110" />
                        </a>
                    </div>
                </div>

                {/* Middle: Address / contact details */}
                <div className="space-y-6">
                    <div className="flex gap-3 items-start">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/599/083/original/location-icon-vector.jpg" alt="location" className="w-6 h-6 shrink-0 mt-1" />
                        <p className="text-gray-700 text-sm leading-relaxed">
                            72, Second floor, Kumbeswaran E St, South Street, Kumbakonam, Tamil Nadu 612001
                        </p>
                    </div>
                    <div className="flex gap-3 items-start">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/599/083/original/location-icon-vector.jpg" alt="location" className="w-6 h-6 shrink-0 mt-1" />
                        <p className="text-gray-700 text-sm leading-relaxed">
                            753, 1st floor, Mullai St, opposite to indian overseas bank, New Housing Unit, Thanjavur, Tamil Nadu 613005
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="https://png.pngtree.com/png-clipart/20210309/original/pngtree-message-icon-text-png-image_5820378.jpg" alt="email" className="w-6 h-6 shrink-0" />
                        <a href="mailto:info@vebbox.in" className="text-gray-700 hover:text-blue-500 text-sm">info@vebbox.in</a>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/013/187/172/original/phone-icon-collection-call-sign-phone-icon-set-telephone-call-sign-contact-us-illustration-contact-icon-phone-mobile-call-icon-free-vector.jpg" alt="phone" className="w-6 h-6 shrink-0" />
                        <a href="tel:+916379321835" className="text-gray-700 hover:text-blue-500 text-sm">+91 63793 21835</a>
                    </div>
                </div>

                {/* Right: Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {status.message && (
                        <div className={`p-3 rounded-md text-sm ${status.error ? "bg-red-50 text-red-700 border border-red-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
                            {status.message}
                        </div>
                    )}
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500" 
                        required 
                    />
                    <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject" 
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500" 
                    />
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message" 
                        rows="4" 
                        className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
                        required
                    ></textarea>
                    <div className="flex justify-center">
                        <button 
                            type="submit" 
                            disabled={status.loading}
                            className="bg-blue-500 text-white rounded-full px-8 py-3 hover:bg-blue-600 transition-colors font-medium cursor-pointer disabled:opacity-50"
                        >
                            {status.loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
