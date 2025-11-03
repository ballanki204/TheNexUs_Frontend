import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");

    try {
      // Using a free API for demo purposes (JSONPlaceholder echo)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const botMsg = {
          sender: "bot",
          text: `Viora AI: ${input}. (Demo response)`,
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        throw new Error("API failed");
      }
    } catch (error) {
      // Fallback to simulated response if API fails
      setTimeout(() => {
        const botResponse = {
          sender: "bot",
          text: "Thank you for your message. This is a demo response.",
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="fixed bottom-20 md:bottom-20 right-10 md:right-10 z-50">
        {/* Notification Indicator */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-12 h-12 p-0 bg-blue-500 hover:bg-blue-600"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 md:bottom-25 right-10 md:right-20 w-60 md:w-80 h-80 md:h-96 z-40 flex flex-col shadow-lg">
          <CardHeader className="pb-2 flex-shrink-0">
            <CardTitle className="text-lg"> Viora AI</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col min-h-0">
            <ScrollArea className="flex-1">
              <div className="space-y-2 pb-2">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-lg max-w-xs ${
                      m.sender === "user"
                        ? "bg-blue-500 text-white self-end ml-auto"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="flex space-x-2 mt-2 flex-shrink-0">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
