
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Check if this is a direct access to a deep URL
    const isDirectAccess = document.referrer === "";
    
    // If it's a direct access and the path exists in our routes, try to redirect
    if (isDirectAccess) {
      // Give the router a moment to initialize before trying to navigate
      const timer = setTimeout(() => {
        // Try navigating to the same path
        navigate(location.pathname, { replace: true });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
