import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-7xl font-extrabold text-blue-500 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="bg-blue-500 text-white rounded-full px-8 py-3 hover:bg-blue-600 transition shadow font-medium"
            >
                Back to Home
            </Link>
        </div>
    );
}

export default NotFound;
