import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/AIAgents_1756723459217.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-blue-900/80 z-10" />
      
      {/* Animated AI Particles */}
      <div className="absolute inset-0 z-20">
        <div className="ai-grid opacity-20"></div>
      </div>
      
      {/* Neural Network Animation */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 text-center pt-20">
        <div className="animate-fade-in-up">
          {/* AI Badge */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse"></div>
              <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/90 backdrop-blur-sm border border-blue-500/30">
                <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Powered by Advanced AI Agents
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <div className="mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Langlytics
              </span>
            </div>
          </h1>
          
          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-200 mb-6 leading-relaxed">
            Deploy Custom AI Agents to Automate Complex Workflows
          </h2>
          
          {/* Supporting Tagline */}
          <h3 className="text-lg md:text-xl font-medium text-slate-300 mb-8">
            Generative AI Solutions & Services
          </h3>
          
          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Langlytics helps businesses automate complex workflows, accelerate decisions, and scale with AI. Our custom AI agents and enterprise services deliver measurable results from day one.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="relative group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative flex items-center">
                    🔹 Explore Solutions
                  </span>
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group px-8 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-lg"
                onClick={() => window.location.href = '/contact'}
              >
                🔹 Explore Services
              </Button>
            </div>
            
            <Button 
              variant="ghost" 
              size="lg" 
              className="group px-6 py-4 text-base font-medium bg-slate-900/50 backdrop-blur-sm text-slate-300 hover:bg-slate-800/70 hover:text-white shadow-lg ml-0 sm:ml-4"
              onClick={() => window.location.href = '/contact'}
            >
              <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              ▶️ Watch Demo
            </Button>
          </div>
          
          {/* Services Bar Animation */}
          <div className="mb-16 overflow-hidden">
            <div className="relative">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-4 animate-pulse"></div>
              <div className="flex justify-center">
                <div className="animate-fade-in-up text-sm text-slate-400 font-medium tracking-wider">
                  <span className="animate-pulse">Automation</span>
                  <span className="mx-3 text-blue-400">•</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>AI Agents</span>
                  <span className="mx-3 text-blue-400">•</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>Analytics</span>
                  <span className="mx-3 text-blue-400">•</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>Consulting</span>
                  <span className="mx-3 text-blue-400">•</span>
                  <span className="animate-pulse" style={{ animationDelay: '0.8s' }}>Integration</span>
                </div>
              </div>
            </div>
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