import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-6 sm:mt-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1 text-left mb-2 sm:mb-0">
            <h2 className="text-base sm:text-xl md:text-2xl font-bold text-primary mb-1 sm:mb-3">
              POS
            </h2>
            <p className="text-primary/80 text-[10px] sm:text-sm leading-tight sm:leading-relaxed max-w-[200px] mx-auto sm:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Links Columns */}
          <div className="text-center">
            <h3 className="text-xs sm:hidden font-semibold mb-1 text-primary">Main</h3>
            {["Home", "About Us", "Portfolio", "Services", "Contact"].slice(0,3).map((item) => (
              <a key={item} href="#" className="block text-primary/80 text-[10px] sm:text-sm mb-1 sm:mb-3 hover:text-greenColor">
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-xs sm:hidden font-semibold mb-1 text-primary">Company</h3>
            {["Clients", "Team", "Career", "Testimonials", "Journal"].slice(0,3).map((item) => (
              <a key={item} href="#" className="block text-primary/80 text-[10px] sm:text-sm mb-1 sm:mb-3 hover:text-greenColor">
                {item}
              </a>
            ))}
          </div>
          
          <div className="col-span-2 sm:col-span-1 text-center">
            <h3 className="text-xs sm:hidden font-semibold mb-1 text-primary">Legal</h3>
            {["Privacy Policy", "Terms & Conditions", "Partners"].map((item) => (
              <a key={item} href="#" className="block text-primary/80 text-[10px] sm:text-sm mb-1 sm:mb-3 hover:text-greenColor">
                {item}
              </a>
            ))}
          </div>

          {/* Social & CTA */}
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
            <div className="flex gap-3 sm:gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-primary/80 hover:text-greenColor">
                  <Icon size={14} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
            <a href="#" className="bg-greenColor hover:bg-greenColor/80 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium whitespace-nowrap">
              Contact Us
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-greyColor/20 mt-4 sm:mt-8 pt-3 sm:pt-6 text-center">
          <p className="text-greyColor/60 text-[8px] sm:text-sm">
            © 2019-2020 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;