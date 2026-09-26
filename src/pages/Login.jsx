import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        
        if (!formData.email || !formData.password) {
            setError("Please fill in all fields.");
            return;
        }

        setLoading(true);
        const apiUrl = import.meta.env.VITE_API_URL;

        if (apiUrl) {
            try {
                const response = await fetch(`${apiUrl}/api/auth/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();
                if (response.ok) {
                    // Store token or auth state if returned
                    if (data.token) {
                        localStorage.setItem("authToken", data.token);
                    }
                    navigate("/");
                } else {
                    setError(data.message || "Invalid email or password.");
                }
            } catch (err) {
                setError("Unable to connect to login server. Please try again later.");
            } finally {
                setLoading(false);
            }
        } else {
            // Frontend demonstration when backend API URL is not set
            setTimeout(() => {
                setLoading(false);
                alert("Login successful! (VITE_API_URL not configured)");
                navigate("/");
            }, 600);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link to="/">
                    <img
                        className="mx-auto h-12 w-auto mb-4"
                        src="https://www.vebbox.com/assets/img/LOGO.png"
                        alt="VEBBOX"
                    />
                </Link>
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Member Portal Login
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                    Access your VEBBOX member dashboard
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="member@vebbox.in"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer disabled:opacity-50"
                            >
                                {loading ? "Signing in..." : "Sign in"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <Link to="/" className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
