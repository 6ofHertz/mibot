
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-primary">
                Afya<span className="text-accent">Mkononi</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Bringing quality healthcare to mothers and children, right at your fingertips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/maternal" className="text-sm hover:text-primary transition-colors">Maternal Care</Link></li>
              <li><Link to="/services/pediatric" className="text-sm hover:text-primary transition-colors">Pediatric Care</Link></li>
              <li><Link to="/services/consultations" className="text-sm hover:text-primary transition-colors">Video Consultations</Link></li>
              <li><Link to="/services/prescriptions" className="text-sm hover:text-primary transition-colors">Prescriptions</Link></li>
              <li><Link to="/services/emergencies" className="text-sm hover:text-primary transition-colors">Emergency Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/doctors" className="text-sm hover:text-primary transition-colors">Our Doctors</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="text-sm hover:text-primary transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-sm text-muted-foreground text-center">
          <p>&copy; {currentYear} AfyaMkononi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
