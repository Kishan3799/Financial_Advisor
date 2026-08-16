'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  TrendingUp,
  Calendar,
  Percent,
  IndianRupee,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Calculator as CalcIcon,
  ShieldCheck,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';

const yearOptions = [3, 5, 7, 10, 15, 20, 25, 30];

function formatINR(value: number) {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  if (value >= 1000) return `₹${(value / 1000).toFixed(1)}K`;
  return `₹${Math.round(value).toLocaleString('en-IN')}`;
}

function formatFullINR(value: number) {
  return `₹${Math.round(value).toLocaleString('en-IN')}`;
}

function calculateSIP(monthly: number, years: number, rate: number) {
  const n = years * 12;
  const i = rate / 100 / 12;
  const futureValue =
    i === 0
      ? monthly * n
      : monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const totalInvested = monthly * n;
  return { futureValue, totalInvested, gains: futureValue - totalInvested };
}

export default function SIPCalculatorPage() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(9.5);

  const { futureValue, totalInvested, gains } = useMemo(
    () => calculateSIP(monthly, years, rate),
    [monthly, years, rate]
  );

  // Yearly progression for the chart
  const chartData = useMemo(() => {
    const data: { year: string; invested: number; future: number }[] = [];
    for (let y = 1; y <= years; y++) {
      const months = y * 12;
      const i = rate / 100 / 12;
      const fv =
        i === 0
          ? monthly * months
          : monthly * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
      data.push({
        year: `Yr ${y}`,
        invested: Math.round(monthly * months),
        future: Math.round(fv),
      });
    }
    return data;
  }, [monthly, years, rate]);

  // Table at 5-year intervals from year 2026
  const tableData = useMemo(() => {
    const startYear = 2026;
    const rows: { year: number; invested: number; future: number; gains: number }[] = [];
    for (let y = 5; y <= years; y += 5) {
      const months = y * 12;
      const i = rate / 100 / 12;
      const fv =
        i === 0
          ? monthly * months
          : monthly * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
      const inv = monthly * months;
      rows.push({
        year: startYear + (y - 1),
        invested: inv,
        future: fv,
        gains: fv - inv,
      });
    }
    // Always include the final year if it's not already a 5-year interval
    if (years % 5 !== 0) {
      rows.push({ year: startYear + (years - 1), invested: totalInvested, future: futureValue, gains });
    }
    return rows;
  }, [monthly, years, rate, totalInvested, futureValue, gains]);

  const fieldClass =
    'w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm font-semibold text-navy focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-colors';

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="bg-navy pt-32 pb-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
              <CalcIcon className="h-6 w-6" />
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
              SIP Calculator
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            S.I.P. — your smart way to create wealth systematically
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            A Systematic Investment Plan turns small monthly contributions into a
            substantial corpus through the power of compounding. Adjust the inputs
            below to see your projected wealth grow in real time.
          </p>

          {/* Social share */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              <Share2 className="mr-1.5 inline h-3.5 w-3.5" />
              Share
            </span>
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Share"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all hover:bg-gold hover:text-navy"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator body */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Inputs */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-border bg-white p-7 shadow-card">
                <h2 className="text-lg font-bold text-navy">Investment Details</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Adjust to see your projected returns instantly.
                </p>

                {/* Monthly investment */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm font-semibold text-navy">
                      <IndianRupee className="h-4 w-4 text-gold-dark" />
                      Monthly Investment
                    </label>
                    <div className="flex items-center rounded-lg border border-navy/15 bg-secondary/50 px-3 py-1.5">
                      <IndianRupee className="h-3.5 w-3.5 text-navy/50" />
                      <input
                        type="number"
                        value={monthly}
                        min={500}
                        step={500}
                        onChange={(e) =>
                          setMonthly(Math.max(0, Number(e.target.value)))
                        }
                        className="w-24 bg-transparent text-right text-sm font-bold text-navy focus:outline-none"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={100000}
                    step={500}
                    value={monthly}
                    onChange={(e) => setMonthly(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹500</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                {/* Investment period */}
                <div className="mt-7 space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <Calendar className="h-4 w-4 text-gold-dark" />
                    Investment Period (Years)
                  </label>
                  <select
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className={fieldClass}
                  >
                    {yearOptions.map((y) => (
                      <option key={y} value={y}>
                        {y} Years
                      </option>
                    ))}
                  </select>
                </div>

                {/* Expected return */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm font-semibold text-navy">
                      <Percent className="h-4 w-4 text-gold-dark" />
                      Expected Return Rate (p.a.)
                    </label>
                    <div className="flex items-center rounded-lg border border-navy/15 bg-secondary/50 px-3 py-1.5">
                      <input
                        type="number"
                        value={rate}
                        min={1}
                        max={30}
                        step={0.5}
                        onChange={(e) =>
                          setRate(Math.max(0, Number(e.target.value)))
                        }
                        className="w-16 bg-transparent text-right text-sm font-bold text-navy focus:outline-none"
                      />
                      <Percent className="h-3.5 w-3.5 text-navy/50" />
                    </div>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={20}
                    step={0.5}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-2 rounded-xl bg-navy/5 p-4 text-xs text-navy/70">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                  <span>
                    These projections are illustrative and based on the expected
                    return you enter. Mutual fund investments are subject to
                    market risks.
                  </span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Total Investment
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-navy">
                    {formatINR(totalInvested)}
                  </p>
                </div>
                <div className="rounded-2xl border border-gold/40 bg-gold/5 p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">
                    Estimated Gains
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-gold-dark">
                    {formatINR(gains)}
                  </p>
                </div>
                <div className="rounded-2xl border border-navy/20 bg-navy p-5 text-white shadow-card">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    Future Value
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-gold">
                    {formatINR(futureValue)}
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-6 rounded-3xl border border-border bg-white p-6 shadow-card">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-gold-dark" />
                  <h3 className="text-base font-bold text-navy">
                    Wealth Growth Over Time
                  </h3>
                </div>
                <div className="mt-6 h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4b5563" stopOpacity={0.5} />
                          <stop offset="95%" stopColor="#4b5563" stopOpacity={0.05} />
                        </linearGradient>
                        <linearGradient id="colorFuture" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.5} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                      <XAxis
                        dataKey="year"
                        tick={{ fontSize: 12, fill: '#64748b' }}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis
                        tickFormatter={(v) => formatINR(v)}
                        tick={{ fontSize: 12, fill: '#64748b' }}
                        tickLine={false}
                        axisLine={false}
                        width={70}
                      />
                      <Tooltip
                        formatter={(value: number) => formatFullINR(value)}
                        contentStyle={{
                          borderRadius: 12,
                          border: '1px solid #e2e8f0',
                          fontSize: 13,
                          boxShadow: '0 8px 24px -8px rgba(10,25,47,0.15)',
                        }}
                      />
                      <Legend
                        wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
                        iconType="circle"
                      />
                      <Area
                        type="monotone"
                        dataKey="invested"
                        name="Total Invested"
                        stroke="#4b5563"
                        strokeWidth={2}
                        fill="url(#colorInvested)"
                      />
                      <Area
                        type="monotone"
                        dataKey="future"
                        name="Future Value"
                        stroke="#3b82f6"
                        strokeWidth={2.5}
                        fill="url(#colorFuture)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Data table */}
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white shadow-card">
            <div className="border-b border-border p-6">
              <h3 className="text-lg font-bold text-navy">
                Value of your SIP in different stages of investment
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Projected future values at 5-year intervals, starting from 2026.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="bg-navy/5 text-xs font-bold uppercase tracking-wider text-navy/70">
                    <th className="px-6 py-4">Year</th>
                    <th className="px-6 py-4">Years Invested</th>
                    <th className="px-6 py-4">Total Invested</th>
                    <th className="px-6 py-4">Estimated Gains</th>
                    <th className="px-6 py-4">Future Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {tableData.map((row, idx) => (
                    <tr key={row.year} className={idx % 2 === 1 ? 'bg-secondary/30' : ''}>
                      <td className="px-6 py-4 text-sm font-bold text-navy">{row.year}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {idx === tableData.length - 1 && years % 5 !== 0
                          ? `${years} yrs`
                          : `${5 * (idx + 1)} yrs`}
                      </td>
                      <td className="px-6 py-4 text-sm text-navy">
                        {formatFullINR(row.invested)}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gold-dark">
                        {formatFullINR(row.gains)}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-navy">
                        {formatFullINR(row.future)}
                      </td>
                    </tr>
                  ))}
                  {tableData.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-sm text-muted-foreground">
                        Increase the investment period to see 5-year projections.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-navy p-10 text-center text-white shadow-card">
            <h3 className="text-2xl font-bold">Ready to start your SIP?</h3>
            <p className="max-w-lg text-sm text-white/70">
              Let us help you pick the right mutual funds for your goals. Get a
              free, no-obligation consultation today.
            </p>
            <a
              href="https://wa.me/918750733329"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-gold transition-all hover:bg-gold-dark"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
