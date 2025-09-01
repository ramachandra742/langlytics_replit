import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, User } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16 min-h-screen flex items-center">
        {/* Hero Section */}
        <section className="w-full py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your business with AI? Let's discuss how our solutions can help you achieve your goals.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Contact Form */}
              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Send us a Message
                </h2>
                
                <form className="space-y-6" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you within 24 hours.');
                  }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" className="interactive-element" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" className="interactive-element" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@company.com" className="interactive-element" required />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Your Company" className="interactive-element" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <Input placeholder="+91 98765 43210" className="interactive-element" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">How can we help you?</label>
                    <Textarea 
                      placeholder="Tell us about your project or requirements..."
                      className="interactive-element min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="glow-primary w-full group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email Us</h3>
                        <p className="text-muted-foreground">hello@langlytics.com</p>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <p className="text-muted-foreground">+91 8904604850</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Visit Us</h3>
                        <p className="text-muted-foreground">Bangalore, India</p>
                        <p className="text-sm text-muted-foreground">By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response Info */}
                <div className="card-hover p-6 rounded-2xl bg-gradient-primary/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">Quick Response Guarantee</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Email inquiries: Within 24 hours</li>
                    <li>• Phone calls: Immediate during business hours</li>
                    <li>• Project consultations: Within 48 hours</li>
                    <li>• Technical support: Priority response</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;