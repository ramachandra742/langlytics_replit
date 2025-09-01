import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <Features />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
