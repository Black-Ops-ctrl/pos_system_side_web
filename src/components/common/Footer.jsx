import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-8">
      <div className="w-full px-4 py-8">
        {/* Mobile: Stacked Layout, Desktop: Centered Grid */}
        <div className="flex flex-col md:grid md:grid-cols-5 md:max-w-4xl lg:max-w-6xl md:mx-auto gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-primary mb-2">POS</h2>
            <p className="text-primary/70 text-sm max-w-[250px] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Main Links */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold text-primary mb-2">Main</h3>
            {["Home", "About Us", "Portfolio", "Services", "Contact"].map((item) => (
              <a key={item} href="#" className="block text-primary/70 text-sm mb-2 hover:text-greenColor">
                {item}
              </a>
            ))}
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold text-primary mb-2">Company</h3>
            {["Clients", "Team", "Career", "Testimonials", "Journal"].map((item) => (
              <a key={item} href="#" className="block text-primary/70 text-sm mb-2 hover:text-greenColor">
                {item}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold text-primary mb-2">Legal</h3>
            {["Privacy Policy", "Terms & Conditions", "Partners"].map((item) => (
              <a key={item} href="#" className="block text-primary/70 text-sm mb-2 hover:text-greenColor">
                {item}
              </a>
            ))}
          </div>

          {/* Social & CTA */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold text-primary mb-2">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-primary/70 hover:text-greenColor">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a href="#" className="inline-block bg-greenColor hover:bg-greenColor/80 text-white px-5 py-2 rounded-full text-sm font-medium">
              Contact Us
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-greyColor/20 mt-8 pt-6 text-center max-w-4xl lg:max-w-6xl mx-auto">
          <p className="text-greyColor/60 text-sm">
            © 2019-2020 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;