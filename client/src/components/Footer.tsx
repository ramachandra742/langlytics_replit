import { Sparkles, Mail, MapPin, Phone } from "lucide-react";
const langlyticsLogo = "/lovable-uploads/00d70786-eb41-45d6-b4ec-bc40525e4f48.png";

export const Footer = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: ["ChatMyDocs", "RowSpeak", "Voice AI Companion"]
    },
    {
      title: "Services",
      links: ["AI Consulting", "Custom Development", "Integration", "Training & Support"]
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "News & Updates"]
    },
    {
      title: "Resources",
      links: ["Blogs", "Help Center", "Community"]
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
        { text: "Cookie Policy", href: "/cookies" },
        { text: "Compliance", href: "/compliance" }
      ]
    }
  ];

  return (
    <footer className="bg-background/95 border-t border-primary/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <div className="mb-2">
              <img 
                src={langlyticsLogo} 
                alt="Langlytics" 
                className="h-24 w-auto object-contain brightness-110 contrast-110 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering human connection through advanced AI solutions. 
              Building the future of artificial intelligence, one conversation at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@langlytics.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 8904604850</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={section.title === "Legal" && typeof link === 'object' ? link.href : "#"} 
                      className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                    >
                      {section.title === "Legal" && typeof link === 'object' ? link.text : link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Langlytics. All rights reserved. | Bangalore, India
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs text-muted-foreground">Powered by Advanced AI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                <span className="text-xs text-muted-foreground">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};