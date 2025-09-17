import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    // In a real implementation, this would serve an actual CV file
    const cvPath = path.join(process.cwd(), "public", "Munawar_Abbas_CV.pdf");
    
    // Check if CV file exists
    if (fs.existsSync(cvPath)) {
      res.download(cvPath, "Munawar_Abbas_CV.pdf");
    } else {
      // If CV file doesn't exist, return a 404 error
      res.status(404).json({ 
        message: "CV file not found. Please contact the developer to obtain the latest CV." 
      });
    }
  });

  // Contact form submission endpoint (for future EmailJS integration)
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: "All fields are required." 
      });
    }

    // In a real implementation, this would:
    // 1. Validate email format
    // 2. Send email via EmailJS or similar service
    // 3. Store in database if needed
    // 4. Send confirmation email
    
    console.log("Contact form submission:", { name, email, subject, message });
    
    res.json({ 
      message: "Message sent successfully! We'll get back to you soon." 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
