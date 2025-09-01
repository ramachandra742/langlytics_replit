import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MessageSquare, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  Heart,
  Clock,
  Sparkles
} from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Advanced Voice Recognition",
      description: "State-of-the-art speech processing with multilingual support and real-time transcription.",
      badge: "Voice AI",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Human-Centric Design",
      description: "Built with empathy and accessibility in mind, ensuring natural and meaningful interactions.",
      badge: "Design",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations and data remain secure with enterprise-grade encryption and privacy protection.",
      badge: "Security",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant responses and seamless interactions powered by cutting-edge AI technology.",
      badge: "Performance",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: BarChart3,
      title: "Intelligent Analytics",
      description: "Advanced data analysis and insights generation from documents and conversations.",
      badge: "Analytics",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Sparkles,
      title: "Advanced AI Models",
      description: "Powered by cutting-edge language models from leading providers like OpenAI, Claude, and Gemini.",
      badge: "AI Technology",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced Features
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Built for the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI solutions come packed with cutting-edge features designed to provide 
            the most advanced and user-friendly experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-hover p-8 bg-card/50 backdrop-blur-sm relative overflow-hidden group min-h-[280px] flex animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};