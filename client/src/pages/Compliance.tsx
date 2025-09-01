import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, CheckCircle, Lock, FileCheck } from "lucide-react";

const Compliance = () => {
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
              <h1 className="text-4xl font-bold gradient-text mb-6">Compliance</h1>
              <p className="text-muted-foreground">Our commitment to legal and regulatory compliance</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileCheck className="w-6 h-6 text-primary" />
                  Regulatory Compliance
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Langlytics AI solutions are designed and operated in full compliance with applicable laws and regulations:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Digital Personal Data Protection Act, 2023</h3>
                        <p className="text-sm">Full compliance with India's latest data protection framework</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">International Standards (In Progress)</h3>
                        <p className="text-sm">Working towards GDPR and other international compliance standards</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Consumer Protection Act, 2019</h3>
                        <p className="text-sm">Consumer rights protection in digital services</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">DPDP Act, 2023</h3>
                        <p className="text-sm">Full compliance with Digital Personal Data Protection Act and cross-border data transfer regulations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  Data Protection Standards
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Our AI solutions implement comprehensive data protection measures:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Data Minimization:</strong> We collect only necessary data for AI companion and document analysis services</li>
                    <li><strong>Purpose Limitation:</strong> Personal data is used solely for stated purposes in our AI solutions</li>
                    <li><strong>Storage Limitation:</strong> Voice recordings and documents are retained only as long as necessary</li>
                    <li><strong>Security Safeguards:</strong> Industry-standard encryption and access controls protect all data</li>
                    <li><strong>Consent Management:</strong> Clear consent mechanisms for all data processing activities</li>
                    <li><strong>Data Subject Rights:</strong> Full support for access, correction, and deletion requests</li>
                  </ul>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">AI Ethics and Responsible Development</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We are committed to ethical AI development and deployment:</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Fairness and Non-Discrimination</h3>
                      <p>Our AI models are trained to avoid bias and provide equitable service to all users regardless of background, age, or disability status.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Transparency</h3>
                      <p>Users are always informed when interacting with AI systems, and we provide clear explanations of AI capabilities and limitations.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Human Oversight</h3>
                      <p>Critical decisions, especially in healthcare contexts, maintain human oversight and never fully replace professional judgment.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Security Compliance</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Our security framework adheres to recognized standards:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Technical Safeguards</h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>End-to-end encryption for voice data</li>
                        <li>Secure API authentication</li>
                        <li>Regular security assessments</li>
                        <li>Intrusion detection systems</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Operational Security</h3>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Staff background verification</li>
                        <li>Regular security training</li>
                        <li>Incident response procedures</li>
                        <li>Vendor security assessments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Healthcare Compliance</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>For our AI companions serving healthcare-adjacent use cases:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Compliance with Clinical Establishments Act where applicable</li>
                    <li>Adherence to Medical Device Rules for health-related AI features</li>
                    <li>Clear disclaimers that AI companions are not medical devices</li>
                    <li>Emergency escalation protocols for health-related concerns</li>
                    <li>Privacy protections for health-related conversations</li>
                  </ul>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Audit and Monitoring</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We maintain ongoing compliance through:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Regular internal compliance audits</li>
                    <li>Third-party security assessments</li>
                    <li>Continuous monitoring of AI model performance</li>
                    <li>Legal and regulatory update tracking</li>
                    <li>Staff compliance training programs</li>
                    <li>Incident documentation and reporting</li>
                  </ul>
                </div>
              </div>

              <div className="card-hover p-8 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold mb-4">Contact Our Compliance Team</h2>
                <div className="text-muted-foreground">
                  <p>For compliance-related questions, concerns, or reports:</p>
                  <div className="mt-4 space-y-2">
                    <p><strong>Compliance Officer:</strong> compliance@langlytics.ai</p>
                    <p><strong>Data Protection Officer:</strong> dpo@langlytics.ai</p>
                    <p><strong>Phone:</strong> +91 8904604850</p>
                    <p><strong>Address:</strong> Bangalore, Karnataka</p>
                  </div>
                  <p className="mt-4 text-sm">Reports can be made confidentially. We investigate all compliance concerns promptly and thoroughly.</p>
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

export default Compliance;