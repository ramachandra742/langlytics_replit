import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { geminiService, type ChatMessage } from "./gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat endpoint using Gemini AI
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, conversationHistory } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const response = await geminiService.generateResponse(
        message, 
        conversationHistory || []
      );

      res.json({ response });
    } catch (error) {
      console.error('Chat API error:', error);
      res.status(500).json({ 
        error: 'Failed to generate response',
        response: "I'm having trouble connecting right now. Please contact our team at hello@langlytics.ai"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
