
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Code, 
  Settings, 
  GraduationCap, 
  Shield, 
  BarChart3,
  ArrowRight,
  Lightbulb,
  Cog,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "AI Consulting & Strategy",
      description: "Assess your business needs, define AI opportunities, and build a roadmap for success.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Design and build tailored AI agents, chatbots, and automation solutions specific to your workflows.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "AI Integration & Deployment",
      description: "Seamlessly integrate AI into your existing systems without disrupting operations with enterprise-grade security.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: GraduationCap,
      title: "AI Training & Support",
      description: "Enable your teams with hands-on training, documentation, and ongoing support for smooth adoption.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Managed AI Services",
      description: "Continuous monitoring, optimization, and management of your AI agents so you can focus on growth.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics Services",
      description: "From data cleaning to predictive analytics—unlock insights that fuel smarter decisions.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Complete <span className="gradient-text">AI Services</span> to Transform Your Business
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Beyond solutions, Langlytics provides expert services to help you integrate, optimize, and scale AI across your business. 
            Our team ensures you achieve measurable results from day one.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="card-hover p-8 bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden relative group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white inline-flex group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white border-0 shadow-xl"
              >
                <Users className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Talk to Our AI Experts
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group px-8 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50"
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Brain className="mr-2 w-5 h-5" />
              Explore Solutions
            </Button>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
