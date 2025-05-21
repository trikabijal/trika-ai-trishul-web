import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BetaSignupForm from "@/components/BetaSignupForm";
import { log } from "console";
const SmartReceptionist = () => {
  const [loading, setLoading] = useState(false);
  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30min", "_blank");
  };

  return <div className="min-h-screen bg-white">
    <Navbar />
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Stop Letting Customer Conversations Go Cold
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-600">
            How Smart Receptionist turns WhatsApp and phone calls into qualified leads and scheduled actions
          </h2>
          <div className="text-sm text-gray-500 mb-8">
            May 10, 2025 · 5 min read
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="lead">
            Businesses lose leads and frustrate customers when queries go unanswered or get buried in disconnected systems.
            AI has made conversation capture easier, but what about action?
          </p>

          <p>
            <strong>Smart Receptionist</strong> is your always on AI receptionist that handles real-time customer queries over
            WhatsApp and phone calls not just transcribing them, but responding intelligently, qualifying leads, and even setting appointments.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">The Problem We Saw</h3>

          <p>
            Most customer questions are predictable: pricing, service hours, standard offerings. But answering them 24/7
            requires human time or it used to. Even with AI tools, most businesses struggle to structure incoming chats
            into useful, actionable steps.
          </p>

          <p>
            Valuable voice messages or casual WhatsApp questions go untracked. Hot leads cool down. And internal teams
            are left juggling disconnected information across chat, email, and CRMs.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-4">What Smart Receptionist Does</h3>

          <p>Smart Receptionist listens, understands, and responds to customer queries instantly, across voice and text. Here's what it delivers:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Real-Time Understanding:</strong> Interprets messages in multiple languages and formats (voice/text).</li>
            <li><strong>Smart Responses:</strong> Answers SOP-based questions using documents you provide.</li>
            <li><strong>Dynamic Pricing Queries:</strong> Responds to rate-related questions using customizable rate cards.</li>
            <li><strong>Lead Qualification:</strong> Engages new prospects with qualifying questions and tags leads into hot, warm, or cold.</li>
            <li><strong>Appointment Booking:</strong> Schedules follow-up calls based on customer availability.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">Why It Works</h3>

          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Always Available:</strong> Works 24/7 to handle routine and high-intent queries.</li>
            <li><strong>Multi-Channel Friendly:</strong> Supports WhatsApp messages and phone calls, including voice inputs.</li>
            <li><strong>No CRM Lag:</strong> Qualified leads are saved and synced immediately.</li>
            <li><strong>Built to Scale:</strong> Whether it’s 5 chats a day or 500, Smart Receptionist adapts to volume.</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">What’s Next for Smart Receptionist</h3>

          <p>Already handling real customer conversations in production, Smart Receptionist is being enhanced with:</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Order, shipment, and refund status tracking</li>
            <li>Account updates like address changes</li>
            <li>Cancellation and rebooking logic</li>
            <li>CRM integrations and analytics dashboards</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-4">From First Hello to Final Handoff</h3>

          <p>
            The AI Receptionist doesn’t just listen it acts. From answering FAQs to capturing leads and scheduling callbacks,
            Smart Receptionist transforms idle chat into business value.
          </p>

          <p>
            If you're receiving customer messages on WhatsApp or voice calls, it's time to convert those conversations into outcomes.
          </p>

          <div className="mt-10 mb-4 text-center">
            <p className="text-lg font-bold">Want to see Smart Receptionist in action? Let’s chat.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 mb-12">
            <Button onClick={openCalendly} className="bg-trika-primary hover:bg-trika-primary/90 text-white" size="lg">Schedule Demo</Button>
          </div>
        </article>
      </div>
    </div>
    <CTA />
    <Footer />
  </div>;
};
export default SmartReceptionist;