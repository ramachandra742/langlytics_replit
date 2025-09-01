import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, FileText, Brain, ArrowRight, Users, Shield, Zap } from "lucide-react";

export const Solutions = () => {
  const solutions = [
    {
      icon: FileText,
      title: "ChatMyDocs",
      description: "Revolutionary VoiceRAG system that enables real-time voice conversations with your documents, transforming how you interact with information.",
      features: ["Voice-to-Document", "Real-time Analysis", "Multi-format Support", "Intelligent Insights"],
      gradient: "from-blue-500 to-purple-500",
      users: "Business & Research"
    },
    {
      icon: Brain,
      title: "RowSpeak",
      description: "AI-powered voice data analysis platform that transforms raw data into meaningful insights through natural conversation and intelligent interpretation.",
      features: ["Voice Data Analysis", "Real-time Insights", "Natural Language Queries", "Smart Visualization"],
      gradient: "from-green-500 to-teal-500",
      users: "Data Analytics & Business Intelligence"
    },
    {
      icon: Heart,
      title: "Voice AI Companion",
      description: "Advanced AI companion designed to provide emotional support and meaningful conversations for elderly people, isolated individuals, and stroke survivors.",
      features: ["24/7 Emotional Support", "Natural Conversations", "Health Monitoring", "Emergency Detection"],
      gradient: "from-pink-500 to-red-500",
      users: "Elder Care & Support"
    }
  ];

  const capabilities = [
    { icon: Brain, title: "Advanced AI Models", description: "Powered by cutting-edge language models" },
    { icon: Users, title: "Human-Centric Design", description: "Built with empathy and accessibility in mind" },
    { icon: Shield, title: "Privacy First", description: "Your conversations and data remain secure" },
    { icon: Zap, title: "Real-time Processing", description: "Instant responses and seamless interactions" }
  ];

  return (
    <section id="solutions" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">AI Solutions</span> That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We create AI-powered solutions that enhance human connection and productivity, 
            making advanced technology accessible to everyone.
          </p>
        </div>

        {/* Main Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className={`card-hover p-8 bg-card/50 backdrop-blur-sm overflow-hidden relative group ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.gradient} text-white`}>
                    <solution.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{solution.title}</h3>
                    <span className="text-sm text-muted-foreground">{solution.users}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="group w-full" onClick={() => window.location.href = '/contact'}>
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};