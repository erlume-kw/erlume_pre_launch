import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/erlume", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/erlume", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/erlume", label: "Twitter" },
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@erlume.com", href: "mailto:hello@erlume.com" },
    { icon: Phone, text: "+965 1234 5678", href: "tel:+96512345678" },
  ];

  return (
    <footer className="border-t bg-background">
        {/* <div className="max-w-7xl mx-auto px-4 py-12"> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  */}
          {/* Brand Section */}
          {/* <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={new URL("../assets/erlume_Icon_1_Transparent_green.png", import.meta.url).toString()}
                alt="Erlume logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold">Erlume</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Kuwait's trusted destination for luxury pre-loved bags. 
              Transparent, hassle-free resale experience.
            </p>
          </div> */}

          {/* Quick Links */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/policies" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Policies
              </Link>
            </nav>
          </div> */}

          {/* Contact & Social */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {contact.text}
                  </a>
                );
              })}
            </div>
            
            <div className="pt-2">
              <h4 className="text-sm font-medium text-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Erlume. All rights reserved.
          </p>
        </div>
      {/* </div> */}
    </footer>
  );
};
