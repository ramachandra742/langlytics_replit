import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Cookie, Settings, BarChart, Shield } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-background/80">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Cookie className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold gradient-text mb-6">Cookie Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Cookie className="w-6 h-6 text-primary" />
                  What Are Cookies
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our AI services.</p>
                  <p>We use cookies in compliance with the Digital Personal Data Protection Act, 2023 and are working towards international compliance standards.</p>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-primary" />
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p>These cookies are necessary for our AI services to function properly. They enable:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Authentication and security for your AI companion sessions</li>
                      <li>Maintaining your session with ChatMyDocs</li>
                      <li>Remembering your privacy preferences</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Performance Cookies</h3>
                    <p>These help us understand how our AI services are being used:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>AI model performance and response accuracy</li>
                      <li>Voice processing quality and speed</li>
                      <li>Document analysis efficiency metrics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Functional Cookies</h3>
                    <p>These enhance your experience with our AI solutions:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Remembering your AI companion preferences</li>
                      <li>Saving your document analysis settings</li>
                      <li>Language and accessibility preferences</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BarChart className="w-6 h-6 text-primary" />
                  Analytics and Tracking
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use analytics cookies to improve our AI services and understand user behavior:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>How users interact with our AI solutions</li>
                    <li>Most frequently used features across our platforms</li>
                    <li>Technical performance of our integrations with AI providers</li>
                    <li>Error rates and system reliability metrics</li>
                  </ul>
                  <p className="font-semibold">All analytics data is anonymized and cannot be used to identify individual users.</p>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Your Cookie Choices
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have control over cookie usage:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">Browser Settings</h4>
                      <p className="text-sm">Most browsers allow you to control cookies through settings. You can block or delete cookies, but some features may not work properly.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">Opt-Out Options</h4>
                      <p className="text-sm">You can opt-out of analytics cookies while still using our essential AI services. Contact us for assistance with cookie preferences.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may use third-party services that set cookies for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AI model hosting and processing services</li>
                    <li>Content delivery networks for faster loading</li>
                    <li>Security and fraud prevention</li>
                    <li>Customer support chat systems</li>
                  </ul>
                  <p>These services have their own privacy policies and cookie practices.</p>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                <div className="text-muted-foreground">
                  <p>We may update this Cookie Policy as our AI services evolve. We will notify users of significant changes through our website or email.</p>
                  <div className="mt-6">
                    <p><strong>Questions about cookies:</strong></p>
                    <p>Email: cookies@langlytics.ai</p>
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

export default Cookies;