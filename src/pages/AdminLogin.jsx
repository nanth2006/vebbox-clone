import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
    const [formData, setFormData] = useState({ adminId: "", password: "" });
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

        if (!formData.adminId || !formData.password) {
            setError("Please fill in all credentials.");
            return;
        }

        setLoading(true);
        const apiUrl = import.meta.env.VITE_API_URL;

        if (apiUrl) {
            try {
                const response = await fetch(`${apiUrl}/api/admin/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });
                const data = await response.json();
                if (response.ok) {
                    if (data.token) {
                        localStorage.setItem("adminToken", data.token);
                    }
                    navigate("/");
                } else {
                    setError(data.message || "Invalid Admin/HR credentials.");
                }
            } catch (err) {
                setError("Failed to reach administrative server.");
            } finally {
                setLoading(false);
            }
        } else {
            setTimeout(() => {
                setLoading(false);
                alert("HR/Admin Login successful! (VITE_API_URL not configured)");
                navigate("/");
            }, 600);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <Link to="/">
                    <img
                        className="mx-auto h-12 w-auto mb-4"
                        src="https://www.vebbox.com/assets/img/LOGO.png"
                        alt="VEBBOX"
                    />
                </Link>
                <h2 className="text-3xl font-extrabold text-white">
                    HR & Admin Portal
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                    Authorized personnel only
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-800 py-8 px-6 shadow-2xl rounded-2xl sm:px-10 border border-slate-700">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-slate-300">
                                Admin Email / ID
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="adminId"
                                    required
                                    value={formData.adminId}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="admin@vebbox.in"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="appearance-none block w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-slate-400 hover:text-white cursor-pointer"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-3 px-4 rounded-full shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer disabled:opacity-50"
                            >
                                {loading ? "Authenticating..." : "Admin Access"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <Link to="/" className="text-sm text-blue-400 hover:text-blue-300 font-medium">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
