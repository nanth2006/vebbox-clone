              
import {
    Globe,
   
} from "lucide-react";

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

                <h2 className="text-4xl font-bold tracking-wide">
                    SERVICES
                </h2>

                <span className="h-0.5 w-16 bg-blue-500"></span>
            </div>

            <p className="text-center text-gray-500 mb-10">
               Our software development services
            </p>

            {/* Services */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 shadow-2xl shadow-gray-200">

                {servicesList.map((service, index) => {

                    const Icon = service.icon;

                    return (
                        <div
                            key={index}
                            className="rounded-lg border border-gray-200 shadow-sm shadow-gray-200 shadow-2xl hover:bg-blue-500 group-hover:text-white transition-colors duration-300 py-8 px-9 min-h-[275px] min-md:ml-3  lg:h-[500px] w-full"
                        >

                            {/* Blue Circle Icon */}
                            <div className="w-15 h-15 rounded-full bg-blue-500 flex items-center justify-center mb-7 hover:bg-white">
                                <Icon
                                    size={30}
                                    strokeWidth={1.5}
                                    className="text-white"
                                />
                            </div>

                            {/* Title */}
                            <h1 className="text-xl font-bold pb-4">
                                {service.title}
                            </h1>

                            {/* Description */}
                            <p className="text-base leading-[1.8] text-gray-600 hover:text-white">
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