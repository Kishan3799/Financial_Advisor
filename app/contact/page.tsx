import React from 'react';
import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/site/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Choudhary Capital Crux',
  description:
    'Get in touch with Choudhary Capital Crux. Avinash Kumar Choudhary offers trusted financial advice, insurance plans, mutual funds portfolio reviews, and flexible loans.',
  keywords: [
    'contact choudhary capital crux',
    'financial advisor phone',
    'insurance agent delhi email',
    'avinash kumar choudhary contact',
  ],
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary/15 font-sans">
      <Navbar />

      {/* ─────────────── 1. HERO SECTION ─────────────── */}
      <section className="relative flex min-h-[550px] items-center overflow-hidden bg-navy pt-28 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-navy via-navy/95 to-[#0b2b5c]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255, 251, 244, 0.12),transparent_50%)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="inline-flex max-w-fit items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)] backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                Let's Connect
              </span>
              <h1 className="mt-6 text-2xl font-bold text-white sm:text-4xl lg:text-3xl leading-[1.1] uppercase">
                Collaborate with Choudhary <span className="text-gold">Capital Crux</span> for Insurance, Mutual Funds and Strategic Wealth Advisory
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Protect your family’s future, grow your capital systematically, and secure your retirement with 12+ years of trusted financial expertise.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end self-end h-[350px] lg:h-[450px] w-full overflow-hidden">
              {/* Backglow behind the image */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.2),transparent_60%)] pointer-events-none" />

              <img
                src="/Contact Us Image.png"
                alt="Contact Choudhary Capital Crux"
                className="h-full w-auto object-contain object-bottom select-none pointer-events-none animate-fade-up relative z-10"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── 2. CONTACT DETAILS & FORM SECTION ─────────────── */}
      <section className="bg-secondary/20 py-20 lg:py-28 relative">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left Column: Details & Social Media */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy/60 animate-pulse">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Our Channels
                </span>
                <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl tracking-tight">
                  Get In Touch Directly
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Have questions about custom insurance plans, SIP setup, or business loan options? Reach out and get professional, transparent guidance.
                </p>

                {/* Details List (Styled Premium Cards) */}
                <div className="mt-8 space-y-4">
                  {[
                    {
                      icon: Phone,
                      title: 'Phone & WhatsApp',
                      value: '+91 87507 33329',
                      href: 'tel:+918750733329',
                      subtitle: 'Call or message for instant consultation',
                    },
                    {
                      icon: Mail,
                      title: 'Email Address',
                      value: 'choudharyavinashkumar6@gmail.com',
                      href: 'mailto:choudharyavinashkumar6@gmail.com',
                      subtitle: 'For formal proposals and inquiries',
                    },
                    {
                      icon: MapPin,
                      title: 'Office Location',
                      value: 'West Vinod Nagar, Delhi -110092',
                      subtitle: 'Physical meetings by appointment only',
                    },
                  ].map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl border border-navy/5 bg-white/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-card"
                      >
                        {/* Left gradient highlight bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-navy/10 to-navy/5 transition-all duration-300 group-hover:w-1.5 group-hover:from-gold group-hover:to-gold-dark" />

                        <div className="flex items-start gap-4">
                          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:shadow-gold">
                            <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-navy/40">
                              {item.title}
                            </span>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="mt-0.5 block text-base font-bold text-navy hover:text-gold transition-colors break-all"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="mt-0.5 text-base font-bold text-navy leading-snug break-words">
                                {item.value}
                              </p>
                            )}
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Channels - Continuous in Left Column */}
              <div className="mt-4 pt-4 border-t border-navy/10">
                <div className="relative border-l-4 border-gold pl-4 py-1">
                  <h3 className="text-base font-bold text-navy leading-relaxed">
                    Follow <span className="text-gold">Choudhary Capital Crux</span> on his social channels for powerful insights, strategies, and inspiration.
                  </h3>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3.5">
                  {[
                    {
                      icon: Instagram,
                      href: 'https://www.instagram.com/c_capitalcrux/',
                      label: 'Instagram',
                      bgClass: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
                      shadowClass: 'shadow-[0_8px_20px_-4px_rgba(238,42,123,0.45)] hover:shadow-[0_12px_24px_-4px_rgba(238,42,123,0.65)]',
                    },
                    {
                      icon: Twitter,
                      href: 'https://x.com/C_capitalcrux',
                      label: 'Twitter',
                      bgClass: 'bg-black',
                      shadowClass: 'shadow-[0_8px_20px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5)]',
                    },
                    {
                      icon: Linkedin,
                      href: 'https://www.linkedin.com/in/choudhary-capital-crux-8b2840375?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
                      label: 'LinkedIn',
                      bgClass: 'bg-[#0077b5]',
                      shadowClass: 'shadow-[0_8px_20px_-4px_rgba(0,119,181,0.45)] hover:shadow-[0_12px_24px_-4px_rgba(0,119,181,0.65)]',
                    },
                    {
                      icon: Facebook,
                      href: 'https://www.facebook.com/share/1D7WC1A52y/?mibextid=wwXIfr',
                      label: 'Facebook',
                      bgClass: 'bg-[#1877f2]',
                      shadowClass: 'shadow-[0_8px_20px_-4px_rgba(24,119,242,0.45)] hover:shadow-[0_12px_24px_-4px_rgba(24,119,242,0.65)]',
                    },
                    {
                      icon: Youtube,
                      href: 'https://www.youtube.com/@Choudhary.CapitalCrux',
                      label: 'YouTube',
                      bgClass: 'bg-[#ff0000]',
                      shadowClass: 'shadow-[0_8px_20px_-4px_rgba(255,0,0,0.45)] hover:shadow-[0_12px_24px_-4px_rgba(255,0,0,0.65)]',
                    },
                  ].map((s) => {
                    const SocialIcon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={`group relative flex h-12 w-12 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:rounded-[14px] ${s.bgClass} ${s.shadowClass}`}
                      >
                        <SocialIcon className="h-5 w-5 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                        {/* Tooltip on hover */}
                        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 scale-50 rounded bg-navy px-3 py-1.5 text-[11px] font-bold text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 whitespace-nowrap z-20 shadow-xl">
                          {s.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="lg:col-span-7">
              <div className="bg-white/80 backdrop-blur border border-navy/5 shadow-card rounded-3xl p-8 lg:p-10">
                <h3 className="text-xl font-bold text-navy uppercase tracking-wider">Send a Message</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Provide your details and we will review your request and get back to you within 24 hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── 3. GOOGLE MAPS SECTION ─────────────── */}
      <section className="bg-white py-16 lg:py-24 border-t border-navy/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy/60">
              <MapPin className="h-3.5 w-3.5" />
              Office Map
            </span>
            <h2 className="mt-4 text-3xl font-bold text-navy">
              Locate Our Office
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Conveniently located in West Vinod Nagar, Delhi. Visit us for detailed planning sessions.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-navy/5 shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.571408012678!2d77.30135897624131!3d28.61262078521748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb3a1a9e3381%3A0xc07c7ea1b5853b0e!2sWest%20Vinod%20Nagar%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1723976800000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Choudhary Capital Crux Office Location"
              className="grayscale-[20%] contrast-[110%] w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
