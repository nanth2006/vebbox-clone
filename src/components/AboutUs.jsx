import {
    Smile,
    Folder,
    Clock,
    Trophy
} from "lucide-react";

const stats = [
    {
        icon: Smile,
        number: "25",
        label: "Happy Clients",
        desc: "A satisfied customer is the best business goal."
    },
    {
        icon: Folder,
        number: "135",
        label: "Projects",
        desc: "We build projects with satisfied customers."
    },
    {
        icon: Clock,
        number: "12",
        label: "Working Technologies",
        desc: "We help enterprises accelerate adoption of new technologies, produce innovation."
    },
    {
        icon: Trophy,
        number: "25",
        label: "Developers",
        desc: "Our skilled technicians and engineers to implement the new technologies."
    },
];

function AboutUs() {
    return (
        <div className="max-w-6xl mx-auto px-8 py-10">
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-10">
                <span className="h-0.5 w-16 bg-blue-500"></span>
                <h2 className="text-4xl font-bold tracking-wide">ABOUT US</h2>
                <span className="h-0.5 w-16 bg-blue-500"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-base">
                <p className="px-4 pb-6 text-gray-600 leading-relaxed">
                    We are consummate custom software Development company delivering splendid business IT Solutions and related services to customers across the globe. Our development services are led by our dedicated and passionate team to provide best industry practices combined with technology expertise and business domain knowledge to drive digital transformation.
                </p>

                <p className="px-4 pb-6 text-gray-600 leading-relaxed">
                    Our skilled team combines technical excellence with deep business domain knowledge, ensuring every solution we deliver is scalable, secure, and tailored to help our clients grow and stay ahead in a rapidly evolving digital landscape.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="w-full flex justify-center">
                    <img
                        src="https://www.vebbox.com/assets/img/counts-img.svg"
                        alt="about illustration"
                        className="w-full max-w-lg mx-auto"
                    />
                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={index}
                                className="flex gap-4 items-start"
                            >
                                {/* Blue Icon */}
                                <div className="shrink-0">
                                    <Icon
                                        size={40}
                                        strokeWidth={2}
                                        className="text-blue-500"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-extrabold mb-1">
                                        {stat.number}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        <span className="font-bold text-black block mb-0.5">
                                            {stat.label}
                                        </span>
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
