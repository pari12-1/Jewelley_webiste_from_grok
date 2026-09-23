import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-sand-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="font-serif text-2xl text-ivory">
            Nira Atelier
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand">
            Jewellery made slowly and worn meaningfully. Handcrafted in small batches from a quiet
            studio in Jaipur.
          </p>
          <div className="mt-5 flex gap-4">
            <a href="https://instagram.com" aria-label="Instagram" className="text-sand hover:text-gold-light">
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a href="mailto:hello@niraatelier.com" aria-label="Email" className="text-sand hover:text-gold-light">
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-[0.7rem] font-medium tracking-[0.14em] text-gold uppercase">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-sand">
            <li>
              <Link to="/collections" className="hover:text-ivory">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-ivory">
                About the Maker
              </Link>
            </li>
            <li>
              <Link to="/custom" className="hover:text-ivory">
                Custom Orders
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-ivory">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-[0.7rem] font-medium tracking-[0.14em] text-gold uppercase">
            Care & info
          </h4>
          <ul className="space-y-2 text-sm text-sand">
            <li>Shipping & returns</li>
            <li>Jewellery care</li>
            <li>Sizing guide</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-sans text-[0.7rem] font-medium tracking-[0.14em] text-gold uppercase">
            Studio
          </h4>
          <p className="text-sm leading-relaxed text-sand">
            Based in Jaipur, India
            <br />
            hello@niraatelier.com
            <br />
            Typically replies within 2 days
          </p>
        </div>
      </div>
      <div className="border-t border-sand/15 py-5 text-center text-xs text-sand/70">
        © {new Date().getFullYear()} Nira Atelier. All pieces made by hand.
      </div>
    </footer>
  );
}
