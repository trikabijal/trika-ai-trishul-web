
import { useState } from "react";
import { useGoogleSheets, FormData } from "@/hooks/useGoogleSheets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const BetaSignupForm = () => {
  const { submitToGoogleSheets, loading, error } = useGoogleSheets();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    const result = await submitToGoogleSheets(data);
    if (result) {
      toast.success("Thanks for signing up for the AXONO beta! We'll be in touch soon.");
      form.reset();
    } else {
      toast.error(error || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-center">Join the AXONO Beta</h3>
      <p className="mb-6 text-center">
        Be one of the first to experience how AXONO transforms your meeting notes into actionable tasks.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-trika-primary hover:bg-trika-primary/90 text-white"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Join the Beta"}
          </Button>
        </form>
      </Form>
      
      <p className="mt-4 text-xs text-gray-500 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </div>
  );
};

export default BetaSignupForm;
