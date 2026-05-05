"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send, User, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const currentInput = input;
    setInput("");
    await sendMessage({ text: currentInput });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-[350px] md:w-[400px] h-[500px] bg-card border border-border rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-border bg-secondary/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-bold">Nadeem's Assistant</div>
                  <div className="text-[10px] text-green-500 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center">
                    <Bot className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold">How can I help?</div>
                    <p className="text-xs text-muted-foreground">
                      Ask me about Nadeem's experience, technical skills, or his favorite tech stack.
                    </p>
                  </div>
                </div>
              )}
              
              {messages.map((m) => (
                <div 
                  key={m.id} 
                  className={cn(
                    "flex gap-3",
                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                    m.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                  )}>
                    {m.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
                    m.role === "user" ? "bg-primary text-primary-foreground rounded-tr-none" : "bg-secondary/50 border border-border rounded-tl-none"
                  )}>
                    {m.parts.map((part, i) => {
                      if (part.type === "text") {
                        return <p key={i}>{part.text}</p>;
                      }
                      return null;
                    })}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-secondary/50 border border-border p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0.2s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background">
              <div className="relative">
                <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="pr-12 h-12 bg-secondary/30 border-border rounded-xl focus:border-primary transition-colors"
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="absolute right-1.5 top-1.5 h-9 w-9 rounded-lg"
                  disabled={!input.trim() || isLoading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full shadow-2xl group relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent rounded-full border-2 border-background flex items-center justify-center">
            <Sparkles className="h-3 w-3 text-white" />
          </span>
        )}
      </Button>
    </div>
  );
}
