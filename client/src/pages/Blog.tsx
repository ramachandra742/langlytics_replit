import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, Heart, FileText, Brain, Sparkles } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing Document Analysis with Voice-Enabled AI: The Future of ChatMyDocs",
      excerpt: "Discover how our VoiceRAG technology is transforming the way businesses interact with their documents, enabling natural conversations with data.",
      content: "In today's fast-paced business environment, accessing and analyzing documents quickly is crucial. Traditional document search methods are time-consuming and often fail to provide the insights businesses need. ChatMyDocs revolutionizes this process by combining voice recognition with advanced Retrieval Augmented Generation (RAG) technology...",
      author: "Langlytics AI Team",
      publishDate: "2024-12-15",
      readTime: "8 min read",
      category: "AI Solutions",
      tags: ["VoiceRAG", "Document Analysis", "AI", "Business Intelligence"],
      icon: FileText,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      title: "RowSpeak: Transforming Data Analytics Through Natural Voice Conversations",
      excerpt: "Learn how artificial intelligence is making data analysis accessible to everyone through natural language processing and voice interactions.",
      content: "Data analysis has traditionally been the domain of specialized analysts and data scientists. RowSpeak changes this paradigm by allowing anyone to analyze complex datasets through simple voice commands. Our AI-powered platform understands natural language queries and provides instant insights...",
      author: "Data Science Team",
      publishDate: "2024-12-10",
      readTime: "6 min read",
      category: "Data Analytics",
      tags: ["Voice Analytics", "Data Science", "Business Intelligence", "AI"],
      icon: Brain,
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "AI Companionship: Bridging Loneliness with Technology and Empathy",
      excerpt: "Exploring how Voice AI Companions are providing emotional support to elderly individuals and stroke survivors, creating meaningful human-AI connections.",
      content: "Loneliness and social isolation affect millions of people worldwide, particularly the elderly and those recovering from medical conditions like strokes. Our Voice AI Companion addresses this critical social issue by providing 24/7 emotional support and meaningful conversations...",
      author: "Healthcare AI Team",
      publishDate: "2024-12-05",
      readTime: "10 min read",
      category: "Healthcare AI",
      tags: ["AI Companion", "Healthcare", "Emotional Support", "Elder Care"],
      icon: Heart,
      gradient: "from-pink-500 to-red-500"
    },
    {
      id: 4,
      title: "The Future of AI-Powered Solutions: Building Human-Centered Technology",
      excerpt: "Understanding our philosophy behind creating AI solutions that enhance human connection rather than replace it, with a focus on accessibility and empathy.",
      content: "At Langlytics, we believe that artificial intelligence should augment human capabilities rather than replace them. Our approach to AI development focuses on creating solutions that are inherently human-centered, accessible, and designed with empathy at their core...",
      author: "Langlytics Leadership",
      publishDate: "2024-11-28",
      readTime: "12 min read",
      category: "AI Philosophy",
      tags: ["AI Ethics", "Human-Centered Design", "Technology Philosophy", "Future of AI"],
      icon: Sparkles,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const categories = ["All", "AI Solutions", "Data Analytics", "Healthcare AI", "AI Philosophy"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-background/80">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Latest Insights
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                AI Insights Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the latest developments in AI technology, insights from our solutions, 
                and thoughts on the future of human-AI collaboration.
              </p>
            </div>

            {/* Categories */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:bg-primary/10"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="card-hover p-8 bg-card/50 backdrop-blur-sm overflow-hidden relative group animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${post.gradient} text-white`}>
                        <post.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs mb-2">
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" className="glow-primary">
                Load More Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest articles, insights, and updates about AI technology and solutions 
              delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="glow-primary px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;