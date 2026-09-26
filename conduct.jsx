import { Icon } from "lucide-react";

function Contact() {
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
                    <h1 className="text-3xl font-extrabold mb-4">VEBBOX</h1>
                    <p className="text-gray-500 mb-6">
                        Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.
                    </p>
                    <div className="flex gap-3">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.H836RvDYYgQZcZn0TC8qBAHaHa?r=0&pid=Api&h=220&P=0" alt="twitter" className="w-9 h-9 rounded-full border border-blue-400 p-1 hover:bg-blue-500 hover:text-white hover:scale-150" />
                        <img src="https://tse4.mm.bing.net/th/id/OIP.0q5xvWn_jzjUEGwPRPgBagHaHa?r=0&pid=Api&h=220&P=0" alt="facebook" className="w-9 h-9 rounded-full border border-blue-400 hover:bg-blue-500 hover:scale-150 p-1" />
                        <img src="https://tse4.mm.bing.net/th/id/OIP.OBWbbdpABO8c5LSB367XAwHaHa?r=0&pid=Api&h=220&P=0" alt="instagram" className="w-9 h-9 rounded-full border border-blue-400 hover:bg-blue-500  hover:scale-150 p-1" />
                        <img src="https://tse4.mm.bing.net/th/id/OIP.dCosGRB2fZ-uGcUxZvt_2gHaHa?r=0&pid=Api&h=220&P=0" alt="linkedin" className="w-9 h-9 rounded-full border border-blue-400 p-1 hover:bg-blue-500 hover:scale-150 " />
                    </div>
                </div>

                {/* Middle: Address / contact details */}
                <div className="space-y-6">
                    <div className="flex gap-3 " >
                       
                        <img src="https://static.vecteezy.com/system/resources/previews/000/599/083/original/location-icon-vector.jpg"  alt="location" className="w-6 h-6 flex-shrink-0 mt-1 hover:text-blue-400" />
                        <p className="text-gray-700">
                            72, Second floor, Kumbeswaran E St, South Street, Kumbakonam, Tamil Nadu 612001
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/599/083/original/location-icon-vector.jpg" alt="location" className="w-6 h-6 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">
                            753,1, st floor, Mullai St, opposite to indian overseas bank, New Housing Unit, Thanjavur, Tamil Nadu 613005
                        </p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="https://png.pngtree.com/png-clipart/20210309/original/pngtree-message-icon-text-png-image_5820378.jpg" alt="email" className="w-6 h-6" />
                        <p className="text-gray-700">info@vebbox.in</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="https://static.vecteezy.com/system/resources/previews/013/187/172/original/phone-icon-collection-call-sign-phone-icon-set-telephone-call-sign-contact-us-illustration-contact-icon-phone-mobile-call-icon-free-vector.jpg" alt="phone" className="w-6 h-6" />
                        <p className="text-gray-700">+91 63793 21835</p>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500" required />
                    <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 " required />
                    <input type="text" placeholder="Subject" className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500" />
                    <textarea placeholder="Message" rows="5" className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"></textarea>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 text-white rounded-full px-8 py-3 hover:bg-blue-600 transition-colors ">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
