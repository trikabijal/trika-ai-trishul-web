
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AxonoCaseStudy = () => {
  const openCalendly = () => {
    window.open("https://calendly.com/bijal-trika/30min", "_blank");
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
            <Button variant="outline" className="mb-6" asChild>
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AXONO: Turning Meeting Notes into Actionable Tasks
            </h1>
            <p className="text-xl text-trika-gray max-w-3xl">
              A Case Study on Bridging the Gap Between Conversation and Execution
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                alt="AXONO Case Study" 
                className="w-full h-auto rounded-xl shadow-lg mb-6"
              />
              
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-trika-primary">Executive Summary</h2>
                <p className="mb-6 text-trika-gray">
                  As organizations increasingly adopt AI-powered meeting transcription tools, one key challenge remains unsolved: 
                  transforming the wealth of captured discussion into tangible, actionable work. While tools like Fireflies, Otter, 
                  and Supernormal provide excellent summaries, these summaries often get lost in email inboxes, disconnected from 
                  the systems where work is actually tracked.
                </p>
                <p className="mb-8 text-trika-gray">
                  AXONO solves this by seamlessly converting AI-generated meeting notes—delivered via email—into structured tasks 
                  within tools like Jira, Asana, and Todoist. Without requiring any change in user behavior, AXONO automates the 
                  crucial step of identifying, categorizing, and syncing action items into existing productivity platforms.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-trika-primary">The Problem Landscape</h2>
                <p className="mb-6 text-trika-gray">
                  Modern teams rely heavily on meetings. With AI note-takers, the capture of these conversations has become easier—but 
                  what happens next? Most professionals receive well-formatted summaries in their inboxes but never act on them. Unlike 
                  handwritten notes that once demanded review, these emails are transactional, easily overlooked and rarely revisited.
                </p>
                <p className="mb-8 text-trika-gray">
                  This behavior change has introduced a gap: meeting summaries are being recorded, but actions are not being executed. 
                  Important decisions and commitments risk being buried under the weight of daily email noise.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-trika-primary">AXONO's Vision</h2>
                <p className="mb-4 text-trika-gray">AXONO was built with three guiding principles:</p>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-trika-gray">
                  <li>
                    <span className="font-semibold">Zero Behavioral Change:</span> Users should not need to learn new habits. 
                    Meeting notes already arrive via email—this should be the primary interface.
                  </li>
                  <li>
                    <span className="font-semibold">Semantic Understanding:</span> The system must differentiate between general commentary 
                    and real action items—requiring true language understanding, not just keyword parsing.
                  </li>
                  <li>
                    <span className="font-semibold">Unified Task Flow:</span> The task management system should reflect the user's 
                    real-world to-do list, whether it resides in Jira, Todoist, Asana, or others.
                  </li>
                </ul>
                <p className="mb-8 text-trika-gray">
                  With these tenets, AXONO turns a passive stream of meeting summaries into a proactive engine for task execution.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-trika-primary">System Overview</h2>
                <p className="mb-6 text-trika-gray">
                  Once a user connects their email account, AXONO monitors incoming messages for meeting summaries—especially those from 
                  known AI transcribers. Without requiring manual triage, AXONO reads each email, analyzes its contents using natural 
                  language processing, and extracts potential action items.
                </p>
                <p className="mb-4 text-trika-gray">
                  These items are then semantically mapped to existing entries in the user's task management system:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-trika-gray">
                  <li>If a match is found, AXONO updates the ticket's status or appends relevant notes.</li>
                  <li>If no match exists, a new task is created with contextual information and appropriate metadata.</li>
                </ul>
                <p className="mb-8 text-trika-gray">
                  Tasks are intelligently categorized into "new" and "update" buckets before being synchronized back to the task system. 
                  Additionally, a webhook interface allows real-time processing of incoming emails for teams needing immediacy.
                </p>
                <p className="mb-8 text-trika-gray">
                  The system is flexible—designed to support Jira but easily extendable to other platforms like Asana, Todoist, ClickUp, and Notion.
                </p>
                
                <h2 className="text-2xl font-bold mb-4 text-trika-primary">Why This Matters</h2>
                <p className="mb-4 text-trika-gray">AXONO creates real business value by:</p>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-trika-gray">
                  <li><span className="font-semibold">Ensuring Accountability:</span> Tasks aren't lost in translation—they're executed.</li>
                  <li><span className="font-semibold">Reducing Manual Work:</span> No more copying from emails to tickets.</li>
                  <li><span className="font-semibold">Improving Visibility:</span> Cross-functional teams gain a unified view of commitments and progress.</li>
                  <li><span className="font-semibold">Working Seamlessly:</span> By using email and task systems, the workflow feels familiar yet powerful.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-trika-primary">Key Use Cases</h2>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-trika-gray">
                  <li>Product managers capturing meeting actions without duplicating work.</li>
                  <li>Engineering teams ensuring sprint backlogs reflect real meeting outcomes.</li>
                  <li>Executives tracking follow-ups from cross-team strategy sessions.</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-trika-light rounded-xl p-6 sticky top-32">
                <h3 className="font-bold text-xl mb-4">Key Results</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-4xl font-bold text-trika-primary">85%</p>
                    <p className="text-sm text-trika-gray">Reduction in lost action items</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-4xl font-bold text-trika-primary">42%</p>
                    <p className="text-sm text-trika-gray">Increase in task completion</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-4xl font-bold text-trika-primary">2.5 hrs</p>
                    <p className="text-sm text-trika-gray">Saved per user weekly</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-3">Interested in similar results?</h3>
                  <Button 
                    onClick={openCalendly}
                    className="orange-gradient text-white w-full mb-3 hover:opacity-90"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/case-studies">
                      View More Case Studies
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AxonoCaseStudy;
