import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would integrate with EmailJS or Firebase Functions
      // For now, we'll simulate sending the email
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: 'fab fa-github', color: 'primary', label: 'GitHub' },
    { icon: 'fab fa-linkedin', color: 'secondary', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', color: 'accent', label: 'Twitter' },
    { icon: 'fab fa-instagram', color: 'primary', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text" data-testid="contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            Ready to bring your next project to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 gradient-text" data-testid="contact-info-title">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href="mailto:munawargolden3@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="contact-email"
                    >
                      munawargolden3@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-secondary"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a 
                      href="tel:03135506223" 
                      className="text-muted-foreground hover:text-secondary transition-colors"
                      data-testid="contact-phone"
                    >
                      03135506223
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-accent"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground" data-testid="contact-location">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.label}
                      href="#" 
                      className={`w-10 h-10 bg-${social.color}/20 rounded-lg flex items-center justify-center hover:bg-${social.color}/30 transition-colors group`}
                      data-testid={`social-${social.label.toLowerCase()}`}
                    >
                      <i className={`${social.icon} text-${social.color} group-hover:scale-110 transition-transform`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 gradient-text" data-testid="contact-form-title">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project discussion"
                  required
                  data-testid="input-subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-[1.02]"
                data-testid="button-send-message"
              >
                <span className="flex items-center justify-center">
                  <i className="fas fa-paper-plane mr-2"></i>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
