const productList = [
    {
        image: "https://www.vebbox.com/assets/img/more-services-1.jpg",
        title: "Data Analyzer",
        content: "The systematic application of statistical and logical techniques to describe the data scope, modularize the data structure illustrate via images, tables, and graphs."
    },
    {
        image: "https://www.vebbox.com/assets/img/more.jpg",
        title: "Websites",
        content: "We create a enhanced website, customers can easily access information about your business. They can see what products or services you sell, your prices, your location and much more."
    },
    {
        image: "https://www.vebbox.com/assets/img/more-services-3.jpg",
        title: "Billing Software",
        content: "A billing software can be any software designed to handle time and billing tracking as well as invoicing customers for services and products."
    },
    {
        image: "https://www.vebbox.com/assets/img/more-services-4.jpg",
        title: "Industrial Trainings",
        content: "Our Industrial Training is to expose the students to actual working environment and enhance their knowledge and skill from what they have learned in the college."
    }
];

function Products() {
    return (
        <div className="max-w-6xl mx-auto px-8 py-10">
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-2">
                <span className="h-0.5 w-16 bg-blue-500"></span>
                <h2 className="text-4xl font-bold tracking-wide">PRODUCTS</h2>
                <span className="h-0.5 w-16 bg-blue-500"></span>
            </div>
            <p className="text-center text-gray-500 mb-10 animate-pulse">
                People don't buy products, they buy solutions
            </p>

            {/* Product cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {productList.map((product, index) => (
                    <div
                        key={index}
                        className="relative rounded-lg overflow-hidden shadow-md group"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-xs rounded-md px-6 py-5 text-center shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 group/card">
                            <h3 className="text-2xl font-bold mb-2 group-hover/card:text-white">{product.title}</h3>
                            <p className="text-sm px-2 pb-1 text-gray-600 group-hover/card:text-white">{product.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
