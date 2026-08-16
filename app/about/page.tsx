import Link from 'next/link';
import { ArrowRight, Shield, Target, Users, TrendingUp, Handshake, Lightbulb } from 'lucide-react';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import ContactForm from '@/components/site/ContactForm';

const stats = [
  { value: '12+', label: 'Years of Excellence', icon: TrendingUp },
  { value: '1,500+', label: 'Families Protected', icon: Users },
  { value: '₹500Cr+', label: 'Assets Managed', icon: Shield },
  { value: '98%', label: 'Client Retention', icon: Handshake },
];

const values = [
  {
    icon: Shield,
    title: 'Unwavering Integrity',
    description: 'We believe in complete transparency. Our recommendations are driven solely by what is best for your financial future.',
  },
  {
    icon: Target,
    title: 'Client-First Approach',
    description: 'Your goals are our goals. We take the time to understand your unique situation before crafting personalized strategies.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description: 'The financial landscape evolves rapidly. We constantly adapt to provide you with the most modern and effective solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-navy pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business meeting"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center">
          <span className="inline-block rounded-full bg-gold/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-gold shadow-sm backdrop-blur-md">
            Our Story
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Guiding Your Financial Journey with <span className="text-gold">Trust & Expertise</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            At Choudhary Capital Crux, we don't just manage wealth; we build lasting relationships. 
            We navigate the complexities of the financial world so you can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-white py-12 relative z-20 -mt-8 mx-6 rounded-3xl shadow-xl lg:mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                <stat.icon className="h-6 w-6" />
              </span>
              <p className="text-3xl font-extrabold text-navy">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Split Section */}
      <section className="bg-secondary/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/8815888/pexels-photo-8815888.jpeg?auto=compress&cs=tinysrgb&w=1080" 
                  alt="Financial advisory" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 rounded-3xl bg-gold/20 backdrop-blur-3xl lg:block -z-10" />
            </div>
            
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Who We Are
                </span>
                <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
                  Redefining Wealth Management
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Founded with a vision to democratize premium financial advisory, Choudhary Capital Crux has grown from a boutique firm to a trusted partner for over a thousand families and businesses. 
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We specialize in holistic financial planning—bridging the gap between insurance protection, strategic investments, and long-term wealth creation. Our independence allows us to source the absolute best products in the market, tailoring them to fit seamlessly into your life.
                </p>
              </div>
              
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <h3 className="text-xl font-bold text-navy">Our Mission</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  To empower our clients with clarity, strategy, and confidence, ensuring their financial legacy is secure and thriving for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Our Core Values
          </span>
          <h2 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
            The Pillars of Our Practice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            These principles guide every decision we make and every strategy we implement for our clients.
          </p>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center rounded-3xl border border-border bg-secondary/20 p-8 text-center transition-all hover:bg-white hover:shadow-card hover:-translate-y-1"
              >
                <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-soft transition-colors group-hover:bg-gold/10 group-hover:text-gold-dark text-navy">
                  <value.icon className="h-8 w-8" />
                </span>
                <h3 className="text-xl font-bold text-navy">{value.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-5 bg-cover bg-center" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to secure your financial future?
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Whether you're looking to protect your family or grow your wealth, our expert advisors are here to help you take the next step.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark hover:scale-105"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/918750733329"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
