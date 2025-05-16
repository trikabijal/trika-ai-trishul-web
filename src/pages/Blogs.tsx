
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 'axono-meeting-summaries',
    title: 'Stop Letting Action Items Die in Your Inbox',
    subtitle: 'How AXONO transforms AI meeting summaries into real, trackable tasks',
    description: 'AI tools have revolutionized how we capture meetings, but there\'s a problem: inboxes aren\'t task lists. AXONO fills this gap.',
    date: 'May 10, 2025',
    readTime: '5 min read'
  },
  // You can add more blog posts here later
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Trika<span className="text-trika-purple">.</span>ai Blog
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Insights on AI, automation, and enterprise solutions
          </p>
          
          <div className="grid grid-cols-1 gap-8 mb-16">
            {blogs.map(blog => (
              <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{blog.title}</CardTitle>
                  <CardDescription>{blog.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{blog.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {blog.date} · {blog.readTime}
                  </div>
                  <Button variant="outline" size="sm" asChild className="group">
                    <Link to={`/blogs/${blog.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Blogs;
