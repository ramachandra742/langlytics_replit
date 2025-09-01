import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Minimize2 } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Rama-Lakshman, your AI assistant. I can help you learn about Langlytics' services and solutions. How can I assist you today?",
      sender: "bot"
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user"
    };

    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simple bot responses based on keywords
    setTimeout(() => {
      let botResponse = "Thank you for your message! Our team will get back to you soon.";
      
      const input = inputValue.toLowerCase();
      if (input.includes("voice ai") || input.includes("companion")) {
        botResponse = "Our Voice AI Companion is designed for elderly people, those living alone, and stroke survivors. It provides 24/7 companionship with natural voice interactions and emotional support.";
      } else if (input.includes("chatmydocs") || input.includes("rag")) {
        botResponse = "ChatMyDocs is our VoiceRAG solution that enables real-time conversations with AI about your documents. Upload any document and have natural conversations about its content!";
      } else if (input.includes("custom") || input.includes("solutions")) {
        botResponse = "We build end-to-end custom AI solutions tailored to your specific needs. From voice assistants to document processing, we can create the perfect AI solution for your business.";
      } else if (input.includes("contact") || input.includes("demo")) {
        botResponse = "You can contact us at hello@langlytics.ai or +91 8904604850. We're based in Bangalore, India. Would you like me to redirect you to our contact page?";
      } else if (input.includes("price") || input.includes("cost")) {
        botResponse = "Our pricing varies based on your specific requirements. Please contact our team for a customized quote. We offer flexible plans for businesses of all sizes.";
      } else if (input.includes("support") || input.includes("help")) {
        botResponse = "We provide 24/7 customer support with real human agents and AI chatbot assistance. You can reach us anytime for immediate help with any issues.";
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot"
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glow-primary shadow-2xl animate-pulse hover:animate-none transform hover:scale-110 transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="w-6 h-6 animate-bounce" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 w-80 bg-card border border-primary/20 rounded-2xl shadow-2xl backdrop-blur-sm animate-slide-in-right transition-all duration-300 ${
          isMinimized ? 'h-14' : 'h-96'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-primary rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Rama-Lakshman</h3>
                <p className="text-xs text-white/80">AI Assistant</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-6 h-6 text-white hover:bg-white/20"
              >
                <Minimize2 className="w-3 h-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 text-white hover:bg-white/20"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 p-4 space-y-3 max-h-64 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex animate-fade-in-up ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm transition-all duration-300 hover:scale-105 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground shadow-lg'
                          : 'bg-muted text-muted-foreground shadow-md'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our AI solutions..."
                    className="flex-1 text-sm"
                  />
                  <Button
                    onClick={sendMessage}
                    size="icon"
                    className="w-8 h-8 shrink-0"
                  >
                    <Send className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};