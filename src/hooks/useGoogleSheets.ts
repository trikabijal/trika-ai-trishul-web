
import { useState } from "react";

export interface FormData {
  name: string;
  email: string;
}

export const useGoogleSheets = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitToGoogleSheets = async (data: FormData) => {
    setLoading(true);
    setError(null);
    
    try {
      // This should be replaced with your actual Google Sheets Web App URL
      // You need to deploy a Google Apps Script as a web app that receives form data
      const sheetUrl = "https://script.google.com/macros/s/AKfycbyYy9A3BfnVLVjPaovXSUm82pDs2kwGe5oWZmYt53Fmi4R9GD0h_WTeKkILzsSnE_4j6A/exec";
      
      const response = await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors", // This is important for CORS handling with Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          timestamp: new Date().toISOString(),
          source: "AXONO Beta Signup"
        }),
      });
      
      // Since no-cors doesn't provide response details, we assume success
      setSuccess(true);
      setLoading(false);
      return true;
    } catch (err) {
      console.error("Error submitting to Google Sheets:", err);
      setError("Failed to submit your information. Please try again.");
      setLoading(false);
      return false;
    }
  };

  return {
    submitToGoogleSheets,
    loading,
    success,
    error,
    resetStatus: () => {
      setSuccess(false);
      setError(null);
    }
  };
};
