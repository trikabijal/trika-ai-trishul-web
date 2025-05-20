
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const OAuthCallback = () => {
  const [status, setStatus] = useState("Processing your login...");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        // Extract the authorization code from URL
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get("code");
        
        if (!code) {
          setStatus("Authorization failed. No code received.");
          toast.error("Login failed. Please try again.");
          setTimeout(() => navigate("/blogs/axono-meeting-summaries"), 2000);
          return;
        }

        // In a real implementation, you would send this code to your backend
        // The backend would exchange it for access and refresh tokens
        console.log("Authorization::", urlParams.toString());
        
        // For demonstration purposes, we'll just show a success message
        // In a real app, you would store the tokens securely (in the backend)
        setStatus("Login successful!");
        toast.success("Successfully connected with Google");
        
        // Store a flag that indicates the user has logged in
        localStorage.setItem("axono_demo_connected", "true");
        // Post the urlParams to another server
        try {
          fetch("https://api.trika.ai/oauth2callback", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Correct for JSON
              // Don't include Access-Control-Allow-Origin here — it's a server response header
              "Access-Control-Allow-Origin": "*", // This should be set on the server
              
            },
            body: JSON.stringify({ code: code }),
            credentials: "omit", // Only if cookies/sessions are involved
          })
          .then(res => res.json())
          .then(data => console.log("Success:", data))
          .catch(err => console.error("Fetch error:", err));
        } catch (err) {
          console.error("Failed to post OAuth data:", err);
        }
        // Redirect back to the blog
        // setTimeout(() => navigate("/blogs/axono-meeting-summaries"), 2000);
      } catch (error) {
        console.error("OAuth callback error:", error);
        setStatus("Authentication error. Please try again.");
        toast.error("Login failed. Please try again.");
        setTimeout(() => navigate("/blogs/axono-meeting-summaries"), 2000);
      }
    };

    handleOAuthCallback();
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {status}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-trika-primary"></div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            You'll be redirected automatically...
          </p>
        </div>
      </div>
    </div>
  );
};

export default OAuthCallback;
