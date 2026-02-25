import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-8 sm:mt-10 md:mt-10 lg:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-5 gap-6 sm:gap-4 md:gap-6 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3 font-helvetica">
              POS
            </h2>
            <p className="text-primary text-xs sm:text-sm leading-relaxed font-helvetica">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Links Columns */}
          {[
            ["Home", "About Us", "Portfolio", "Services", "Contact"],
            ["Clients", "Team", "Career", "Testimonials", "Journal"],
            ["Privacy Policy", "Terms & Conditions", "Partners"]
          ].map((column, colIndex) => (
            <div key={colIndex} className="text-center sm:text-left">
              {column.map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block text-primary text-xs sm:text-sm mb-2 sm:mb-3 font-helvetica"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}

          {/* Social & CTA */}
          <div className="flex flex-col items-center sm:items-center md:items-center lg:items-center gap-3 sm:gap-4">
            <div className="flex gap-2 sm:gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="text-primary/80 hover:text-primary transition-colors"
                >
                  <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
            <a 
              href="#" 
              className="bg-greenColor hover:bg-greenColor/80 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors font-helvetica whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-greyColor/20 mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-5 md:pt-6 text-center">
          <p className="text-greyColor/60 text-xs sm:text-sm font-helvetica">
            © 2019-2020 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;