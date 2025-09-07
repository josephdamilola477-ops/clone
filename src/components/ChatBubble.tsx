"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function ChatBubble() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="icon"
        className="rounded-full w-16 h-16 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform hover:scale-110"
        aria-label="Chat with us"
      >
        <MessageSquare className="h-8 w-8" />
      </Button>
    </div>
  );
}
