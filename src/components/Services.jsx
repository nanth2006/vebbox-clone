import { Globe } from "lucide-react";

const servicesList = [
    {
        title: "Custom Application Development Services",
        desc: "We rely on our technological expertise and specialised industry experience to develop any type of web, mobile, desktop, and hybrid app per your business requirements.",
        icon: Globe
    },
    {
        title: "App Maintenance Services",
        desc: "Our application maintenance and modernization services are designed to ensure the scalability, performance, and sustainability of your entire software infrastructure as your business grows.",
        icon: Globe
    },
    {
        title: "Digital Marketing Services",
        desc: "We provide digital marketing services by managing social media, creating promotional content, and running targeted ads to increase brand visibility, customer engagement, and support business growth.",
        icon: Globe
    },
    {
        title: "API Integration Services",
        desc: "We build and implement custom APIs for all breeds of applications, helping to add functionality to your software systems and facilitate communication between your apps and others.",
        icon: Globe
    },
    {
        title: "IT Security Services",
        desc: "Our thorough threat audits help us identify your software infrastructure's most pressing vulnerabilities, allowing us to integrate the encryptions, security services and access protocols you require.",
        icon: Globe
    },
    {
        title: "Software Deployment Services",
        desc: "Our implementation specialists will work with your IT team to establish detailed software deployment objectives and timelines, covering configuration, testing, project governance, troubleshooting and more.",
        icon: Globe
    },
    {
        title: "Data Backup and Recovery Services",
        desc: "We implement robust data backup and recovery strategies for cloud-based, on-premises and hybrid servers, designed to ensure the integrity of your data and the continuity of your business.",
        icon: Globe
    },
    {
        title: "QA and Software Testing Services",
        desc: "Comprehensive quality assurance is built into our custom software service model, but we can also provide on-demand QA and a suite of functional and usability software tests upon request.",
        icon: Globe
    },
];

function Services() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-10">
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-2">
                <span className="h-0.5 w-16 bg-blue-500"></span>
                <h2 className="text-4xl font-bold tracking-wide">SERVICES</h2>
                <span className="h-0.5 w-16 bg-blue-500"></span>
            </div>

            <p className="text-center text-gray-500 mb-10">
                Our software development services
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {servicesList.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <div
                            key={index}
                            className="rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl hover:bg-blue-500 group transition-all duration-300 py-8 px-9 flex flex-col justify-start w-full bg-white"
                        >
                            {/* Blue Circle Icon */}
                            <div className="w-12 h-12 rounded-full bg-blue-500 group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-300">
                                <Icon
                                    size={26}
                                    strokeWidth={1.5}
                                    className="text-white group-hover:text-blue-500 transition-colors duration-300"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold pb-3 group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed text-gray-600 group-hover:text-blue-50 transition-colors duration-300">
                                {service.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Services;
