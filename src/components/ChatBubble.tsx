
"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function ChatBubble() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="lg"
        className="rounded-full h-16 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform hover:scale-110 flex items-center gap-3 px-6"
        aria-label="Chat with us"
      >
        <MessageSquare className="h-8 w-8" />
        <span className="text-lg font-semibold hidden sm:inline">Chat with us</span>
      </Button>
    </div>
  );
}
