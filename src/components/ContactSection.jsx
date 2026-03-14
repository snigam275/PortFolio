import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// LeetCode SVG icon
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

// HackerRank SVG icon
const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.715 24 2.25 19.114 1.608 18 .963 16.886.963 7.114 1.608 6 2.25 4.886 10.715 0 12 0zm-.04 4.34c-.933 0-1.772.205-2.405.525-.172.089-.344.187-.516.297l-.28.193v.235L8.74 7.8v.219l.22.09c.158.063.285.118.392.164.283.12.433.201.517.294.083.092.158.243.158.548v6.388c0 .317-.082.47-.17.558-.09.09-.243.165-.52.279a7.6 7.6 0 0 1-.39.148l-.217.078v.217l.02 2.216v.236l.236.12c.11.056.23.11.358.163.637.263 1.474.44 2.423.44 1.047 0 1.955-.224 2.61-.64.136-.086.26-.177.375-.274l.22-.186V17.7l-.023-2.261-.001-.223-.22-.085c-.161-.063-.29-.119-.395-.166-.278-.12-.422-.2-.503-.287-.08-.087-.152-.234-.152-.541V7.899c0-.296.065-.44.145-.528.08-.088.222-.166.497-.285.104-.046.233-.1.394-.163l.222-.085V6.62l-.02-2.058-.002-.235-.233-.103a5.2 5.2 0 0 0-.402-.156C13.822 4.56 12.974 4.34 11.96 4.34zm4.383 4.045h-1.517v2.77h-4.57V8.385H8.74v7.23h1.516v-3.03h4.57v3.03h1.517z"/>
  </svg>
);

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:nigamshreya21@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    nigamshreya21@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+916306444186"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    +91 6306444186
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Deoria, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/shreya275" target="_blank" rel="noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://www.github.com/snigam275" target="_blank" rel="noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://leetcode.com/u/iNjayfOD52/" target="_blank" rel="noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <LeetCodeIcon />
                </a>
                <a href="https://www.hackerrank.com/profile/nigamshreya21" target="_blank" rel="noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:text-primary hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1">
                  <HackerRankIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Shreya Nigam..." />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="email" id="email" name="email" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" required rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..." />
              </div>
              <button type="submit" disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};