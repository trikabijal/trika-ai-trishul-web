import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BetaSignupForm from "@/components/BetaSignupForm";
import { log } from "console";
const AxonoBlog = () => {
  const [loading, setLoading] = useState(false);
  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30min", "_blank");
  };


  const handleGoogleLogin = () => {
    setLoading(true);
    // Google OAuth configuration
    const clientId = "64596355684-vqh2t5risr0v4ko0e4jmh6vocqvsfsjj.apps.googleusercontent.com"; // This should be replaced with your actual client ID
    const redirectUri = `${window.location.origin}/auth/callback`;
    const scope = "https://www.googleapis.com/auth/gmail.readonly";
    
    console.log("Redirect url::", redirectUri);
    
    // Build the OAuth URL
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=${encodeURIComponent(
      scope
    )}&access_type=offline&prompt=consent`;
    
    // Redirect to Google OAuth page
    window.location.href = authUrl;
  };


  return <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Letting Action Items Die in Your Inbox
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-600">
              How AXONO transforms AI meeting summaries into real, trackable tasks
            </h2>
            <div className="text-sm text-gray-500 mb-8">
              May 10, 2025 · 5 min read
            </div>
          </div>
          
          <article className="prose prose-lg max-w-none">
            <p className="lead">
              AI tools have revolutionized how we capture meetings. Platforms like Fireflies, Otter, 
              and Supernormal transcribe conversations, summarize decisions, and highlight follow-ups—all 
              neatly delivered to your inbox.
            </p>
            
            <p>
              But there's a problem: inboxes aren't task lists. Those beautifully formatted summaries? 
              They get buried under promotions, notifications, and unread threads. The result? Important 
              action items get lost. Decisions don't get tracked. And follow-ups never happen.
            </p>
            
            <p>
              That's the gap AXONO fills. It seamlessly converts AI-generated meeting notes from your 
              inbox into actionable items in your favorite task tools like Jira, Asana, or 
              Todoist—without you lifting a finger.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">The Problem We Noticed</h3>
            
            <p>
              Before AI notetakers, many professionals took handwritten notes and reviewed them 
              later—a process that reinforced memory and made sure follow-ups happened. Now, with 
              automated summaries arriving by email, that review loop has been broken.
            </p>
            
            <p>
              We realized that while AI tools have made it easier to capture information, they haven't 
              helped teams act on it. Action items remain embedded in email content, disconnected from 
              where actual work is tracked.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">What AXONO Does</h3>
            
            <p>
              AXONO reads incoming meeting summary emails, extracts tasks, and routes them to your to-do 
              system automatically. Here's how it works:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Connect Your Email:</strong> AXONO integrates directly with your inbox.</li>
              <li><strong>Monitor for Meeting Notes:</strong> It identifies summaries from known AI note-taking platforms.</li>
              <li><strong>Extract Action Items:</strong> Using NLP, it detects tasks, updates, or follow-ups.</li>
              <li><strong>Match & Sync:</strong> It updates existing tasks or creates new ones in Jira, Asana, Todoist, or other tools.</li>
              <li><strong>Runs Continuously:</strong> It polls your inbox and also responds in real time via webhooks.</li>
            </ul>
            
            <p>
              No need to change your workflow. Just keep doing meetings the way you already do—AXONO takes 
              care of the follow-through.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Why It Matters</h3>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No More Lost Tasks:</strong> Your action items are captured and tracked without manual effort.</li>
              <li><strong>Zero Behavioral Change:</strong> You don't need to change how you work. AXONO meets you where you are.</li>
              <li><strong>Improved Visibility:</strong> Team members see real progress reflected in shared systems.</li>
              <li><strong>Structured, Scalable Workflows:</strong> From a 3-person startup to a 300-person org, AXONO scales effortlessly.</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-4">What's Next for AXONO</h3>
            
            <p>
              AXONO is built to adapt. While Jira is our reference platform, we're already expanding to others. 
              Upcoming features include:
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>Priority and Assignee Detection</li>
              <li>Meeting-to-Ticket Linking for better traceability</li>
              <li>Slack and Calendar Integration to widen our intake beyond email</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-4">From Conversation to Completion</h3>
            
            <p>
              AI note-takers are great at capturing what was said. AXONO makes sure something is done about it.
            </p>
            
            <p>
              If your team is already using meeting summaries and a task system, AXONO can close the loop. 
              Your meetings don't have to end with notes—they can end with progress.
            </p>
            <div className="flex justify-center mt-10">
                <Button 
                  onClick={handleGoogleLogin}
                  className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 flex items-center gap-2"
                  size="lg"
                  disabled={loading}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                    </g>
                  </svg>
                  {loading ? "Connecting..." : "Connect with Google"}
                </Button>
              </div>
            {/* <div className="mt-10 mb-8">
              <BetaSignupForm />
            </div> */}
            
            <div className="mt-10 mb-4 text-center">
              <p className="text-lg font-bold">Want to chat about Axono, or anything Gen AI. </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-12">
              <Button onClick={openCalendly} className="bg-trika-primary hover:bg-trika-primary/90 text-white" size="lg">Let's Chat</Button>
            </div>
          </article>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>;
};
export default AxonoBlog;