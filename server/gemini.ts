
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI (you'll need to set GEMINI_API_KEY in secrets)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

export class GeminiService {
  private model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  // Website content context for the AI
  private websiteContext = `
    You are Rama-Lakshman, an AI assistant for Langlytics, a company that specializes in AI solutions and services.

    Company Information:
    - Company: Langlytics
    - Location: Bangalore, India
    - Contact: hello@langlytics.ai, +91 8904604850
    - Specialization: Custom AI solutions, voice AI, document processing

    Our Solutions:
    1. ChatMyDocs - Revolutionary VoiceRAG system for real-time voice conversations with documents
    2. RowSpeak - AI-powered voice data analysis platform
    3. Voice AI Companion - Advanced AI companion for elderly care and emotional support

    Our Services:
    1. AI Consulting & Strategy - Business needs assessment and AI roadmap
    2. Custom AI Development - Tailored AI agents, chatbots, and automation
    3. AI Integration & Deployment - Seamless integration with enterprise security
    4. AI Training & Support - Team training and ongoing support
    5. Managed AI Services - Continuous monitoring and optimization
    6. Data & Analytics Services - Data cleaning to predictive analytics

    Key Features:
    - 24/7 customer support with real human agents
    - Enterprise-grade security and compliance
    - Natural voice interactions
    - Real-time document analysis
    - Emotional support capabilities
    - Multi-format document support

    Always be helpful, professional, and provide specific information about Langlytics' services when relevant.
  `;

  async generateResponse(userMessage: string, conversationHistory: ChatMessage[] = []): Promise<string> {
    try {
      // Build conversation context
      const conversationContext = conversationHistory
        .slice(-5) // Keep last 5 messages for context
        .map(msg => `${msg.sender}: ${msg.text}`)
        .join('\n');

      const prompt = `
        ${this.websiteContext}

        Previous conversation:
        ${conversationContext}

        User: ${userMessage}

        Provide a helpful response as Rama-Lakshman, the AI assistant for Langlytics. Be conversational, informative, and always relate back to how Langlytics can help with AI solutions when appropriate.
      `;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API error:', error);
      return "I'm experiencing some technical difficulties right now. Please try contacting our team directly at hello@langlytics.ai or +91 8904604850 for immediate assistance.";
    }
  }
}

export const geminiService = new GeminiService();
