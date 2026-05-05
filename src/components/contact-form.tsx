"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border p-8 rounded-3xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Full name"
            required
            className="bg-secondary/30 border-border focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="bg-secondary/30 border-border focus:border-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
            rows={5}
            className="bg-secondary/30 border-border focus:border-primary transition-colors resize-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base font-bold group"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </Button>

        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-green-500/10 border border-green-500/50 text-green-500 flex items-center gap-3 text-sm"
          >
            <CheckCircle className="h-5 w-5" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-500 flex items-center gap-3 text-sm"
          >
            <AlertCircle className="h-5 w-5" />
            <span>Something went wrong. Please try again later.</span>
          </motion.div>
        )}
      </form>
    </div>
  );
}
