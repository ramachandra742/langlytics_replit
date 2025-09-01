import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(13, 16, 34, 0.8), rgba(13, 16, 34, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 animated-bg opacity-50" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border-glow bg-card/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Next-Gen AI Solutions</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Langlytics</span>
            <br />
            <span className="text-glow">AI Revolution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AI That Adapts to Your Business Needs. Custom Gen AI solutions that grow with your business and deliver measurable results from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="glow-primary interactive-element group px-8 py-4 text-lg font-medium"
              >
                Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-glow interactive-element group px-8 py-4 text-lg font-medium"
              onClick={() => window.location.href = '/contact'}
            >
              <Zap className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "100+", label: "Early Adopters" },
              { number: "24/7", label: "AI Support" },
              { number: "5+", label: "Core Solutions" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};