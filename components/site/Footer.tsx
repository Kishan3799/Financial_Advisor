import Link from 'next/link';
import {
  Shield,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/918750733329';

const footerLinks = {
  Services: [
    { label: 'Life Insurance', href: '#about' },
    { label: 'Mutual Funds', href: '#investments' },
    { label: 'Retirement Planning', href: '#future' },
    { label: 'Child Education', href: '#future' },
    { label: 'Loans & Credit', href: '#loans' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Partners', href: '#partners' },
    { label: 'Credits', href: '/credits' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Tools: [
    { label: 'SIP Calculator', href: '/calculator/sipcalculator' },
    { label: 'Get a Free Quote', href: WHATSAPP_URL },
    { label: 'Book a Meeting', href: 'https://calendly.com/choudharyavinashkumar6/one-to-one-meeting-for-child-education-planning?month=2026-07' },
  ],
};

const socials = [
  { 
    icon: Facebook, 
    href: 'https://www.facebook.com/profile.php?id=61578741775478', 
    label: 'Facebook',
    bgClass: 'bg-[#1877f2]',
    shadowClass: 'shadow-[0_0_15px_rgba(24,119,242,0.4)] hover:shadow-[0_0_20px_rgba(24,119,242,0.8)]'
  },
  { 
    icon: Twitter, 
    href: 'https://x.com/C_capitalcrux', 
    label: 'Twitter',
    bgClass: 'bg-black',
    shadowClass: 'shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]'
  },
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/avinash-choudhary-8b2840375/', 
    label: 'LinkedIn',
    bgClass: 'bg-[#0077b5]',
    shadowClass: 'shadow-[0_0_15px_rgba(0,119,181,0.4)] hover:shadow-[0_0_20px_rgba(0,119,181,0.8)]'
  },
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/c_capitalcrux/', 
    label: 'Instagram',
    bgClass: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
    shadowClass: 'shadow-[0_0_15px_rgba(238,42,123,0.4)] hover:shadow-[0_0_20px_rgba(238,42,123,0.8)]'
  },
  { 
    icon: Youtube, 
    href: 'https://www.youtube.com/@Choudhary.CapitalCrux', 
    label: 'YouTube',
    bgClass: 'bg-[#ff0000]',
    shadowClass: 'shadow-[0_0_15px_rgba(255,0,0,0.4)] hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]'
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + address */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-gold">
                <Shield className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold leading-tight">
                Choudhary<span className="text-gold"> Capital Crux</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              12+ years of trusted financial expertise — protecting families and
              growing wealth across insurance, investments, and future planning.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  West Vinod Nagar
                  <br />
                  Delhi -110092
                </span>
              </p>
              <a
                href="tel:+918750733329"
                className="flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                +91 87507 33329
              </a>
              <a
                href="mailto:choudharyavinashkumar6@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                choudharyavinashkumar6@gmail.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
                {heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) =>
                  link.href.startsWith('/') ? (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={
                          link.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="text-sm text-white/70 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Choudhary Capital Crux. All rights
            reserved. Mutual fund investments are subject to market risks. Please
            read the scheme documents carefully before investing.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target='_blank'
                aria-label={s.label}
                className={`group relative flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:rounded-[10px] ${s.bgClass} ${s.shadowClass}`}
              >
                <s.icon className="h-4 w-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
