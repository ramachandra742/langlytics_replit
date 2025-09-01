import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, Database } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-background/80">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold gradient-text mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We collect information you provide directly to us when using our AI solutions:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal information (name, email, phone number) when you contact us</li>
                    <li>Voice recordings and conversations with our AI companions (processed locally when possible)</li>
                    <li>Document content uploaded to ChatMyDocs for analysis</li>
                    <li>Usage data to improve our AI models and services</li>
                    <li>Technical information (IP address, browser type, device information)</li>
                  </ul>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use the collected information for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and improving our AI companion and document analysis services</li>
                    <li>Personalizing your experience with our AI solutions</li>
                    <li>Responding to your inquiries and providing customer support</li>
                    <li>Integrating with AI model providers like OpenAI, Claude, and Gemini (we do not train our own models with your data)</li>
                    <li>Ensuring the security and integrity of our services</li>
                    <li>Complying with legal obligations under the Digital Personal Data Protection Act, 2023 and other Indian data protection laws</li>
                  </ul>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary" />
                  Data Storage and Security
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Your data security is our priority:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data is stored securely using industry-standard encryption</li>
                    <li>Voice data is processed locally when possible to minimize data transmission</li>
                    <li>Document content is encrypted and automatically deleted after processing</li>
                    <li>We comply with the Digital Personal Data Protection Act, 2023 and are working towards international compliance standards</li>
                    <li>Regular security audits and vulnerability assessments are conducted</li>
                    <li>Data backups are encrypted and stored in secure facilities</li>
                  </ul>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Under applicable laws, you have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal data and request copies</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent for data processing</li>
                  </ul>
                  <p className="mt-4">To exercise these rights, contact us at <a href="mailto:privacy@langlytics.com" className="text-primary hover:underline">privacy@langlytics.com</a></p>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="text-muted-foreground">
                  <p>For privacy-related questions or concerns:</p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Email:</strong> privacy@langlytics.com</p>
                    <p><strong>Phone:</strong> +91 8904604850</p>
                    <p><strong>Address:</strong> Bangalore, Karnataka</p>
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

export default Privacy;