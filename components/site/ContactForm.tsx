'use client';

import { useState, useTransition } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { sendContactEmail } from '@/app/actions/contact';

const services = [
  'Life Insurance',
  'Health Insurance',
  'Mutual Funds / SIP',
  'Retirement Planning',
  'Child Education Planning',
  'Loans & Credit',
  'Portfolio Review',
  'Other',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: services[0],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('idle');
    startTransition(async () => {
      const result = await sendContactEmail(form);
      if (result.success) {
        setStatus('success');
        setStatusMessage(result.message);
        setForm({
          name: '',
          email: '',
          phone: '',
          service: services[0],
          message: '',
        });
      } else {
        setStatus('error');
        setStatusMessage(result.message);
      }
    });
  }

  const fieldClass =
    'w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold text-navy">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Aarav Sharma"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-semibold text-navy">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold text-navy">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service" className="text-sm font-semibold text-navy">
            Service Interested In
          </Label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className={fieldClass}
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-semibold text-navy">
          Your Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a little about what you need..."
          className={fieldClass}
        />
      </div>

      {status !== 'idle' && (
        <div
          className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
            status === 'success'
              ? 'border-green-200 bg-green-50 text-green-800'
              : 'border-red-200 bg-red-50 text-red-800'
          }`}
        >
          {status === 'success' ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          )}
          <p>{statusMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
