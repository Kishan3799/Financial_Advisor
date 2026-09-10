import {
  Shield,
  HeartPulse,
  Link as LinkIcon,
  Home as HomeIcon,
  Ship,
  ShieldAlert,
  Car,
  Flame,
  Plane,
  Users,
  HardHat,
  BadgeDollarSign,
  Laptop,
  Store,
  Cog,
  Construction,
  Wrench,
} from 'lucide-react';
import type { InsurancePlan } from '@/components/site/InsuranceDetailPage';

export const insurancePlans: Record<string, InsurancePlan> = {
  'life-insurance-plan': {
    slug: 'life-insurance-plan',
    title: 'Life Insurance Plan',
    icon: Shield,
    tagline:
      'Ensure your family\u2019s financial security and lifestyle never depends on a single income.',
    heroImage: '/images/life-insurance-hero.jpg',
    overview:
      'A Life Insurance Plan pays a lump-sum benefit to your nominees if something happens to you, replacing lost income so your family can maintain their lifestyle, repay loans, and fund future goals like education and marriage. It is the foundation of every sound financial plan.',
    features: [
      'High life cover at affordable premiums',
      'Flexible term options from 10 to 40 years',
      'Optional critical illness and accident riders',
      'Tax benefits under Section 80C and 10(10D)',
      'Lump-sum payout or monthly income option',
    ],
    whoNeeds:
      'Every earning member of a family \u2014 especially if you have dependents, outstanding loans (home, car, education), or children whose education and marriage are still ahead.',
    claimProcess: [
      'Share your details and coverage needs via WhatsApp or the contact form.',
      'Our advisor compares plans from 9+ insurers and shares a personalised quote.',
      'Complete a quick medical/kyc check and sign the proposal form.',
      'Policy is issued digitally and delivered to your inbox within 24\u201348 hours.',
    ],
  },
  'health-insurance': {
    slug: 'health-insurance',
    title: 'Health Insurance',
    icon: HeartPulse,
    tagline:
      'Cashless hospitalisation and complete medical cover so a health emergency never becomes a financial crisis.',
    heroImage:
      'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Health Insurance covers the cost of hospitalisation, surgeries, daycare procedures, and pre/post-hospitalisation expenses. With cashless treatment at thousands of network hospitals, you focus on recovery while the insurer settles the bills directly.',
    features: [
      'Cashless treatment at 10,000+ network hospitals',
      'Covers pre and post-hospitalisation expenses',
      'Daycare procedures like cataract and dialysis covered',
      'No-claim bonus for every claim-free year',
      'Family floater option covers all members in one sum insured',
    ],
    whoNeeds:
      'Individuals and families of every age \u2014 medical inflation makes out-of-pocket hospitalisation costs unaffordable for most households. Even a ₹5 Lakh cover can save years of savings.',
    claimProcess: [
      'Tell us the members to cover and any pre-existing conditions.',
      'We compare plans from Star Health, HDFC ERGO and more for your needs.',
      'Choose cashless network hospitals near you and complete the proposal.',
      'Policy issued instantly \u2014 show your e-card at any network hospital for cashless care.',
    ],
  },
  'unit-link-insurance-plan': {
    slug: 'unit-link-insurance-plan',
    title: 'Unit Link Insurance Plan (ULIP)',
    icon: LinkIcon,
    tagline:
      'Life insurance plus market-linked wealth creation in a single, tax-efficient plan.',
    heroImage:
      'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'A Unit Linked Insurance Plan (ULIP) combines life insurance cover with investment in equity and debt funds. A portion of your premium buys life cover; the rest is invested in market-linked funds of your choice, letting you build long-term wealth while staying protected.',
    features: [
      'Life cover plus market-linked returns in one plan',
      'Switch between equity and debt funds free of cost',
      'Premiums and maturity proceeds tax-free under 80C & 10(10D)',
      'Lock-in of just 5 years \u2014 ideal for long-term goals',
      'Fund options from conservative to aggressive growth',
    ],
    whoNeeds:
      'Investors aged 25\u201345 who want insurance and wealth creation together, and are comfortable with market-linked returns for goals 10+ years away.',
    claimProcess: [
      'Share your risk appetite and investment horizon.',
      'Our advisor recommends fund allocation across equity/debt options.',
      'Complete KYC and the proposal form \u2014 choose your fund mix.',
      'Policy is issued; track and switch funds online anytime.',
    ],
  },
  'home-insurance': {
    slug: 'home-insurance',
    title: 'Home Insurance',
    icon: HomeIcon,
    tagline:
      'Protect the structure, contents, and belongings of your most valuable asset.',
    heroImage:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Home Insurance covers your house against fire, burglary, natural disasters, and damage to its contents \u2014 from electronics and furniture to jewellery. Choose structure-only cover or a comprehensive plan that includes your belongings.',
    features: [
      'Cover against fire, burglary, and natural disasters',
      'Optional protection for household contents and valuables',
      'Temporary accommodation allowance if home is uninhabitable',
      'Liability cover for third-party injury on your property',
      'Affordable annual premiums starting from ₹500',
    ],
    whoNeeds:
      'Homeowners and tenants alike \u2014 whether you own a flat, independent house, or rented property, home insurance safeguards both the structure and your belongings for a small annual cost.',
    claimProcess: [
      'Share your property type and the value of structure & contents.',
      'We recommend the right sum insured and cover type.',
      'Complete the proposal and submit property documents.',
      'Policy issued digitally \u2014 claim support is available 24/7.',
    ],
  },
  'marine-insurance': {
    slug: 'marine-insurance',
    title: 'Marine Insurance',
    icon: Ship,
    tagline:
      'Cover your goods against loss or damage while in transit \u2014 by sea, air, or road.',
    heroImage:
      'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Marine Insurance protects cargo, freight, and vessels against physical loss or damage during transit \u2014 whether by sea, air, rail, or road. It covers perils like sinking, collision, fire, theft, and jettison so your business shipments stay protected end-to-end.',
    features: [
      'Cargo cover for import, export, and domestic transit',
      'Protection against fire, theft, sinking, and collision',
      'Single shipment or annual open-policy options',
      'Warehouse-to-warehouse coverage available',
      'Quick claim settlement with surveyor support',
    ],
    whoNeeds:
      'Importers, exporters, manufacturers, and logistics companies moving goods by sea, air, or land \u2014 a single transit loss can wipe out months of margin without cover.',
    claimProcess: [
      'Share your cargo type, route, and shipment value.',
      'We tailor a single-shipment or annual open cover for you.',
      'Submit the bill of lading and invoice; cover starts at loading.',
      'In case of loss, our surveyor assists the claim end-to-end.',
    ],
  },
  'accidental-insurance': {
    slug: 'accidental-insurance',
    title: 'Accidental Insurance',
    icon: ShieldAlert,
    tagline:
      'Financial support for you and your family if an accident causes injury, disability, or worse.',
    heroImage:
      'https://img.magnific.com/premium-photo/insurance-agent-writing-clipboard-report-car-accident_926199-2678157.jpg?semt=ais_hybrid&w=740&q=80',
    overview:
      'Personal Accident Insurance provides a lump-sum payout if an accident results in death, permanent total disability, or permanent partial disability. It also covers temporary total disability with a weekly income benefit \u2014 protecting your earnings when you cannot work.',
    features: [
      'Lump-sum payout for accidental death & disability',
      'Weekly income benefit during temporary disability',
      'Covers medical expenses from accidents',
      'Worldwide coverage, 24/7 protection',
      'Affordable premiums starting at just ₹100/month',
    ],
    whoNeeds:
      'Anyone who drives, commutes, or works in physically demanding roles \u2014 especially the sole breadwinner of a family. It complements health insurance which only covers hospital bills, not loss of income.',
    claimProcess: [
      'Choose your occupation class and desired sum insured.',
      'We compare accidental cover from top insurers.',
      'Complete a one-page proposal \u2014 no medical tests required.',
      'Policy issued instantly; claim with FIR and medical reports if needed.',
    ],
  },
  'car-insurance': {
    slug: 'car-insurance',
    title: 'Car Insurance',
    icon: Car,
    tagline:
      'Drive with complete confidence \u2014 comprehensive cover for your car and third-party liability.',
    heroImage:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Car Insurance covers damage to your vehicle from accidents, theft, fire, and natural disasters, plus your legal liability to third parties for injury or property damage. Add-ons like zero depreciation and engine protect ensure you pay nothing out of pocket.',
    features: [
      'Comprehensive cover for own damage + third-party liability',
      'Zero-depreciation add-on for full claim value',
      'Cashless repairs at 4,000+ network garages',
      'Engine protect, roadside assistance & NCB protection add-ons',
      'Instant policy issuance and quick renewals',
    ],
    whoNeeds:
      'Every car owner \u2014 third-party liability is mandatory by law. Comprehensive cover is strongly recommended for any vehicle less than 10 years old to avoid large out-of-pocket repair bills.',
    claimProcess: [
      'Share your car\u2019s make, model, year, and registration number.',
      'We compare premiums and recommend the right add-ons.',
      'Choose cashless garage network; pay and receive policy instantly.',
      'For claims, drop your car at a network garage \u2014 we handle the rest.',
    ],
  },
  'fire-insurance': {
    slug: 'fire-insurance',
    title: 'Fire Insurance',
    icon: Flame,
    tagline:
      'Safeguard your property and assets from fire, explosion, and allied perils.',
    heroImage: '/images/fire-insurance-hero.jpg',
    overview:
      'Fire Insurance covers loss or damage to buildings, plant, machinery, stock, and contents caused by fire, lightning, explosion, and allied perils like storm, flood, and impact damage. It is the core protection for any commercial or residential property.',
    features: [
      'Covers fire, lightning, explosion, and impact damage',
      'Optional add-ons for storm, flood, and earthquake',
      'Coverage for building, stock, and machinery',
      'Loss of profit (business interruption) cover available',
      'Reinstatement value or market value basis',
    ],
    whoNeeds:
      'Property owners, business owners, and industrial units \u2014 a single fire can destroy decades of investment. Fire insurance is often a lender requirement for mortgaged properties.',
    claimProcess: [
      'Share property details and the value of structure, stock & machinery.',
      'We recommend sum insured and the right add-on perils.',
      'Insurer surveys large risks; proposal is approved and cover starts.',
      'In case of loss, a surveyor assesses damage and claim is settled.',
    ],
  },
  'travel-insurance': {
    slug: 'travel-insurance',
    title: 'Travel Insurance',
    icon: Plane,
    tagline:
      'Travel with peace of mind \u2014 cover medical emergencies, trip cancellations, and lost baggage worldwide.',
    heroImage:
      'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Travel Insurance covers overseas medical emergencies, trip cancellation, lost baggage, flight delays, and lost passports while you travel abroad. A single hospitalisation in the US or Europe can cost lakhs \u2014 this policy keeps you protected worldwide.',
    features: [
      'Overseas medical emergency cover up to $500,000',
      'Trip cancellation and interruption reimbursement',
      'Lost baggage and passport replacement assistance',
      'Flight delay and missed-connection cover',
      '24/7 global assistance helpline',
    ],
    whoNeeds:
      'Anyone travelling abroad for leisure, business, or studies \u2014 especially to countries with high medical costs (USA, Europe, Australia). Schengen visa applications require travel insurance with a minimum €30,000 medical cover.',
    claimProcess: [
      'Share your destination, trip dates, and traveller ages.',
      'We compare single-trip and multi-trip annual plans.',
      'Buy online instantly \u2014 visa-compliant certificate issued immediately.',
      'For claims, call the 24/7 helpline; reimbursement is processed post-trip.',
    ],
  },
  'group-insurance': {
    slug: 'group-insurance',
    title: 'Group Insurance',
    icon: Users,
    tagline:
      'Protect your employees and their families with a single, customisable group policy.',
    heroImage:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Group Insurance provides life, health, or accident cover to a group of people \u2014 typically employees of a company \u2014 under a single master policy. It offers better coverage at lower premiums than individual plans and is a powerful employee retention and benefit tool.',
    features: [
      'Single master policy covers all eligible employees',
      'Lower premiums than individual plans',
      'Customisable sum insured and add-on covers',
      'Coverage without medical tests up to defined limits',
      'Optional parent-in-law and maternity add-ons',
    ],
    whoNeeds:
      'Employers with 10 or more employees who want to offer group health or life cover as a benefit \u2014 a strong retention and hiring tool that also provides tax benefits to the company.',
    claimProcess: [
      'Share your employee count, ages, and desired coverage.',
      'We design a custom group plan and negotiate the best premium.',
      'Onboard employees via a simple declaration form.',
      'Employees use cashless hospitalisation or file claims through HR.',
    ],
  },
  'workmen-compensation-policy': {
    slug: 'workmen-compensation-policy',
    title: 'Workmen Compensation Policy',
    icon: HardHat,
    tagline:
      'Meet your legal duty and protect your workforce from workplace injury or death.',
    heroImage:
      'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'The Workmen Compensation Policy covers an employer\u2019s legal liability under the Workmen Compensation Act for injury, death, or occupational disease suffered by employees at the workplace. It pays compensation to the worker or their family and covers legal costs.',
    features: [
      'Covers employer liability for workplace injury & death',
      'Includes medical, disability, and fatal compensation',
      'Legal cost coverage for defended claims',
      'Compliant with the Workmen Compensation Act, 1923',
      'Tailored payroll-based premium',
    ],
    whoNeeds:
      'Factory owners, contractors, and businesses with workers in hazardous or manual roles \u2014 the Act makes this cover mandatory for most industrial and construction employers.',
    claimProcess: [
      'Share your payroll, worker categories, and risk levels.',
      'We structure the policy per the Workmen Compensation Act tariff.',
      'Submit payroll records; cover begins on the agreed date.',
      'For claims, report the incident \u2014 the insurer settles compensation directly.',
    ],
  },
  'trade-credit-insurance': {
    slug: 'trade-credit-insurance',
    title: 'Trade Credit Insurance',
    icon: BadgeDollarSign,
    tagline:
      'Secure your business receivables against the risk of buyer default or insolvency.',
    heroImage:
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Trade Credit Insurance covers businesses against non-payment of commercial debt arising from buyer insolvency, protracted default, or political events. It lets you offer competitive credit terms to buyers while protecting your cash flow and balance sheet.',
    features: [
      'Covers buyer insolvency and protracted default',
      'Domestic and export receivables covered',
      'Access to buyer credit risk intelligence',
      'Bank financing friendly \u2014 improves working-capital terms',
      'Customised credit limits per buyer',
    ],
    whoNeeds:
      'Businesses selling on credit terms to other businesses (B2B) \u2014 especially manufacturers, traders, and exporters where a single large buyer default could threaten cash flow.',
    claimProcess: [
      'Share your buyer list, credit terms, and annual receivables.',
      'The insurer assigns individual credit limits per buyer.',
      'Policy starts; ship goods and report sales monthly.',
      'If a buyer defaults, file a claim after the waiting period \u2014 payout follows.',
    ],
  },
  'cyber-security-insurance': {
    slug: 'cyber-security-insurance',
    title: 'Cyber Security Insurance',
    icon: Laptop,
    tagline:
      'Defend your business against the financial fallout of data breaches, ransomware, and digital threats.',
    heroImage:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Cyber Security Insurance covers the costs of a cyber incident \u2014 data breach response, forensic investigation, ransomware negotiation, business interruption, and legal liability to affected parties. It bridges the gap traditional policies leave wide open.',
    features: [
      'Covers data breach response and forensic costs',
      'Ransomware negotiation and extortion payment cover',
      'Business interruption and cyber extortion loss',
      'Third-party liability for compromised customer data',
      'Regulatory fines and notification cost coverage',
    ],
    whoNeeds:
      'Any business that stores customer data, processes online payments, or relies on digital systems \u2014 from startups and D2C brands to clinics and professional firms. A single breach can cost lakhs and permanent reputational damage.',
    claimProcess: [
      'Share your business type, data handling, and IT setup.',
      'We assess your cyber risk and recommend sum insured.',
      'Complete the proposal and IT security questionnaire.',
      'During an incident, the insurer\u2019s response team is activated immediately.',
    ],
  },
  'shopkeepers-insurance': {
    slug: 'shopkeepers-insurance',
    title: 'Shopkeepers Insurance',
    icon: Store,
    tagline:
      'A single, affordable policy that covers your shop\u2019s premises, stock, and liabilities.',
    heroImage:
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Shopkeepers Insurance is a package policy designed for small retailers, covering the shop premises, stock, and contents against fire, burglary, and natural disasters, plus third-party liability and optional money-in-transit cover \u2014 all in one affordable plan.',
    features: [
      'Covers shop building, stock, and contents',
      'Protection against fire, burglary & natural disasters',
      'Third-party liability cover included',
      'Optional money-in-safe and money-in-transit add-ons',
      'Package premium is far cheaper than buying covers separately',
    ],
    whoNeeds:
      'Owners of retail shops, pharmacies, electronics stores, and small commercial establishments \u2014 one policy bundles the fire, burglary, and liability cover a shop needs at a fraction of the cost.',
    claimProcess: [
      'Share your shop size, stock value, and location.',
      'We recommend the right sum insured and optional add-ons.',
      'Complete a short proposal \u2014 no survey required for small risks.',
      'Policy issued instantly; claim support is available 24/7.',
    ],
  },
  'plant-machinery-insurance': {
    slug: 'plant-machinery-insurance',
    title: 'Plant & Machinery Insurance',
    icon: Cog,
    tagline:
      'Protect your essential equipment from sudden breakdown, damage, and repair costs.',
    heroImage:
      'https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Plant & Machinery Insurance (also called Machinery Breakdown Policy) covers sudden and unforeseen damage to your equipment \u2014 from electrical short-circuits and mechanical failure to operator error. It pays the cost of repair or replacement so downtime doesn\u2019t derail your business.',
    features: [
      'Covers sudden mechanical and electrical breakdown',
      'Protection for boilers, turbines, generators & CNC machines',
      'Optional add-on for consequential loss (business interruption)',
      'Reinstatement value or market value basis',
      '24/7 claim support and quick surveyor dispatch',
    ],
    whoNeeds:
      'Manufacturing units, factories, and businesses reliant on expensive equipment \u2014 a single machine failure can halt production for weeks. This policy keeps repair costs from becoming a cash-flow crisis.',
    claimProcess: [
      'List the machines, their values, and year of manufacture.',
      'We recommend sum insured and a reinstatement or market-value basis.',
      'Insurer may survey large risks; policy is issued after approval.',
      'On breakdown, a surveyor inspects \u2014 repair or replacement is funded.',
    ],
  },
  'contractors-all-risk-insurance': {
    slug: 'contractors-all-risk-insurance',
    title: "Contractor's All Risk Insurance (CAR)",
    icon: Construction,
    tagline:
      'Comprehensive cover for construction projects \u2014 from foundation to handover.',
    heroImage:
      'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      "Contractor's All Risk (CAR) Insurance covers civil construction projects against physical loss or damage to the works, construction plant, and equipment, plus third-party liability for injury or property damage arising at the site. It protects the contractor and the principal throughout the project.",
    features: [
      'Covers contract works, materials, and construction equipment',
      'Third-party property damage and bodily injury liability',
      'Protection during construction and the maintenance period',
      'Optional debris removal and escalation add-ons',
      'Flexible cover period matching the contract duration',
    ],
    whoNeeds:
      'Civil contractors, builders, and project owners executing construction contracts \u2014 most large tenders require CAR cover as a condition of the contract.',
    claimProcess: [
      'Share contract value, project scope, and duration.',
      'We tailor the sum insured and third-party liability limit.',
      'Insurer surveys the site; cover starts on the agreed date.',
      'For any loss during construction, a surveyor assesses and the claim is settled.',
    ],
  },
  'erection-all-risk-insurance': {
    slug: 'erection-all-risk-insurance',
    title: 'Erection All Risk Insurance (EAR)',
    icon: Wrench,
    tagline:
      'Protect your plant installation and commissioning projects from start to handover.',
    heroImage:
      'https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Erection All Risk (EAR) Insurance covers the installation, testing, and commissioning of plant, machinery, and equipment at a project site. It protects against physical loss or damage during erection, plus third-party liability \u2014 the right policy for mechanical and electrical installation projects.',
    features: [
      'Covers erection, testing, and commissioning of machinery',
      'Protection against physical loss or damage during installation',
      'Third-party liability for bodily injury & property damage',
      'Includes the maintenance period after handover',
      'Optional cross-liability and debris removal add-ons',
    ],
    whoNeeds:
      'Contractors and suppliers executing mechanical/electrical plant erection projects \u2014 from power plants and factories to large equipment installations. EAR is the standard cover required for such tenders.',
    claimProcess: [
      'Share the project value, equipment type, and erection schedule.',
      'We structure the sum insured and liability limits for the project.',
      'Insurer surveys the site; cover starts at the commencement of erection.',
      'For any loss, a surveyor inspects and the claim is settled promptly.',
    ],
  },
};

export function getInsurancePlan(slug: string): InsurancePlan | undefined {
  return insurancePlans[slug];
}
