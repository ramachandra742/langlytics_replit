import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, AlertTriangle, Scale, Users } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-background/80">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold gradient-text mb-6">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>By accessing and using Langlytics AI solutions, you accept and agree to be bound by the terms and provision of this agreement. These terms are governed by the laws of India, including the Digital Personal Data Protection Act, 2023 and the Consumer Protection Act, 2019.</p>
                  <p>If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Service Description
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Langlytics provides AI-powered solutions including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Voice AI Companion:</strong> Emotional support and conversation for elderly, isolated individuals, and stroke survivors</li>
                    <li><strong>ChatMyDocs:</strong> Voice-enabled document analysis and conversation system</li>
                    <li><strong>Custom AI Solutions:</strong> Tailored artificial intelligence implementations for businesses</li>
                  </ul>
                  <p>Our services are designed to enhance human connection and productivity through advanced AI technology.</p>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>As a user of our services, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and truthful information</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not attempt to reverse engineer or compromise our AI systems</li>
                    <li>Respect the privacy and rights of other users</li>
                    <li>Not share or distribute harmful, offensive, or illegal content</li>
                    <li>Comply with all applicable local and national laws</li>
                  </ul>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                  Limitations and Disclaimers
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>AI Limitations:</strong> Our AI companions and document analysis tools are designed to assist but not replace professional medical, legal, or financial advice.</p>
                  <p><strong>Service Availability:</strong> While we strive for 24/7 availability, services may be temporarily unavailable due to maintenance, updates, or technical issues.</p>
                  <p><strong>Data Accuracy:</strong> AI-generated responses may not always be completely accurate. Users should verify important information independently.</p>
                  <p><strong>Emergency Situations:</strong> Our AI companions are not equipped to handle medical emergencies. In emergencies, contact local emergency services immediately.</p>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>All content, trademarks, and intellectual property rights in our services remain the property of Langlytics or our licensors. This includes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI models, algorithms, and training methodologies</li>
                    <li>Software code, user interfaces, and design elements</li>
                    <li>Documentation, guides, and educational materials</li>
                    <li>Trademarks, logos, and brand elements</li>
                  </ul>
                  <p>Users retain ownership of their personal data and content shared with our services.</p>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Termination</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Either party may terminate this agreement at any time. Upon termination:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your access to our services will be discontinued</li>
                    <li>Personal data will be handled according to our Privacy Policy</li>
                    <li>Outstanding obligations and liabilities will survive termination</li>
                  </ul>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <div className="text-muted-foreground">
                  <p>These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.</p>
                  <div className="mt-6">
                    <p><strong>Contact us for questions:</strong></p>
                    <p>Email: legal@langlytics.com</p>
                    <p>Phone: +91 8904604850</p>
                  </div>
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

export default Terms;