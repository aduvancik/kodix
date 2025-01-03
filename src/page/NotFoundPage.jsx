import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Go Back to Home
            </Link>
        </div>
    );
}
