import {
  User,
  Briefcase,
  Home as HomeIcon,
  LineChart,
  Building2,
  Car,
  RotateCcw,
  Landmark,
  BadgeDollarSign,
  GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { LoanPlan } from '@/components/site/LoanDetailPage';

export const loanPlans: Record<string, LoanPlan> = {
  'personal-loan': {
    slug: 'personal-loan',
    title: 'Personal Loan',
    icon: User,
    tagline: 'Collateral-free personal financing for all your immediate needs.',
    heroImage:
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'A Personal Loan is an unsecured credit facility designed to cover immediate personal expenses like medical bills, weddings, home renovations, or travel plans. Without requiring any collateral, it offers quick access to funds with flexible repayment terms.',
    whyChoose: [
      'Flexible Repayment Options: Choose tenure lengths from 12 to 60 months tailored to your salary or income stream.',
      'Competitive Interest Rates: Lower interest rates for applicants with high credit scores and stable employment history.',
      'Quick Approval Process: Fully digital application and fast document verification for quick cash disbursement.',
      'No Hidden Charges: Completely transparent processing fee structures and zero hidden charges.',
    ],
    eligibility: [
      'Employment Type: Salaried professional or self-employed individual',
      'Age Limit: Minimum 21 years and maximum 60 years at maturity',
      'Monthly Income: Minimum monthly net income of ₹25,000',
      'Credit Score: Preferred credit score of 700 or above',
    ],
    benefits: [
      'Multipurpose Utility: Use the funds for any personal expense with zero usage restrictions.',
      'No Collateral Required: Secure your loan without pledging residential property, gold, or other assets.',
      'Boost Credit History: Making timely repayments on your personal loan helps build a stronger credit rating.',
      'Tax Savings: In specific cases, interest paid on home renovation loans is eligible for deductions.',
    ],
    process: [
      'Consult with our loan expert to analyze your borrowing capacity and select terms.',
      'Upload essential KYC, address verification, and salary documents online.',
      'Get your credit profile assessed and receive instant approval notifications.',
      'Sign the loan agreement digitally for direct bank transfer within 24 hours.',
    ],
  },
  'business-loan': {
    slug: 'business-loan',
    title: 'Business Loan',
    icon: Briefcase,
    tagline: 'Empower your business growth with quick and flexible capital solutions.',
    heroImage:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'A business loan is a financial product designed to provide funding to businesses for various purposes such as expansion, inventory purchases, equipment upgrades, or operational expenses. Whether you are a startup or an established enterprise, a business loan can provide the capital you need to grow and thrive.',
    whyChoose: [
      'Flexible Repayment Options: We understand the diverse financial needs of businesses. Our flexible repayment plans are tailored to suit your cash flow and business cycle.',
      'Competitive Interest Rates: With competitive interest rates, we ensure that your loan is affordable and does not burden your business finances.',
      'Quick Approval Process: Time is crucial for businesses. Our streamlined approval process ensures quick decisions on your loan application, so you can seize opportunities without delay.',
      'No Hidden Charges: Transparency is our commitment. We believe in clear communication, and there are no hidden charges or surprises when you choose RBM for your business loan.',
    ],
    eligibility: [
      'Business Type: Sole proprietorship, partnership, or registered company',
      'Business Vintage: Minimum operational history of 1 year',
      'Revenue: Stable income generation with acceptable revenue levels',
      'Credit History: Good credit score preferred',
    ],
    benefits: [
      'Business loans facilitate growth: Whether it\'s expanding your operations, investing in new equipment, or hiring more staff, a business loan provides the financial support for your business to grow.',
      'Business loans help manage cash flow: With a business loan, you can cover short-term cash flow gaps, ensuring smooth operations and preventing disruptions.',
      'Business loans offer tax benefits: The interest paid on business loans is often tax-deductible, reducing your overall tax liability.',
      'Business loans foster innovation: Access to capital allows businesses to innovate, develop new products, and stay ahead in the competitive market.',
    ],
    process: [
      'Contact our advisors or submit the digital enquiry form with your business details.',
      'Provide your business vintage registration documents and financial accounts.',
      'Receive tailor-made lending offers from our diverse network of banking partners.',
      'Complete the simple verification and get direct funds credited to your business account.',
    ],
  },
  'home-loan': {
    slug: 'home-loan',
    title: 'Home Loan',
    icon: HomeIcon,
    tagline: 'Build or purchase your dream home with low-interest mortgage options.',
    heroImage:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'A Home Loan is a secured loan that helps you purchase residential property, construct a house on land, or make structural additions to your existing home. With long tenures and low interest rates, home loans turn the dream of home ownership into an affordable reality.',
    whyChoose: [
      'Flexible Repayment Options: Long tenures up to 30 years to lower your monthly EMI burden.',
      'Competitive Interest Rates: Linked to benchmark lending rates for maximum transparency and savings.',
      'Quick Approval Process: Dedicated legal and technical support to speed up property verification.',
      'No Hidden Charges: Clear schedule of charges with zero prepayment penalties on floating-rate loans.',
    ],
    eligibility: [
      'Applicant Profile: Salaried, self-employed professionals, or business owners',
      'Age Limit: Minimum 18 years to maximum 70 years at the end of the loan tenure',
      'Income Stability: Stable cash flows with verified salary statements or income tax returns',
      'Property Status: Clear, legally verified property titles with approved architectural layouts',
    ],
    benefits: [
      'Build Assets: Move from renting to owning and build equity over a long term.',
      'Tax Exemptions: Save tax on principal repayment (Sec 80C) and interest paid (Sec 24b).',
      'Lower Interest Rates: Home loans feature the lowest interest rates compared to other retail credit options.',
      'Top-up Facility: Access additional funds at home loan interest rates for general purposes.',
    ],
    process: [
      'Submit the initial loan application along with property and income documentation.',
      'Complete property evaluation, legal review, and technical checks by our experts.',
      'Get pre-approved for your loan limit based on income and property valuation.',
      'Accept the final sanction letter and execute mortgage deeds for final payout.',
    ],
  },
  'loan-against-securities': {
    slug: 'loan-against-securities',
    title: 'Loan Against Securities',
    icon: LineChart,
    tagline: 'Unlock instant liquidity without selling your high-performing investments.',
    heroImage:
      'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Loan Against Securities (LAS) lets you pledge your mutual funds, equity shares, insurance policies, or bonds as collateral to secure an instant overdraft limit. It helps you meet emergency expenses without liquidating your investments, retaining your dividends and long-term gains.',
    whyChoose: [
      'Flexible Repayment Options: Pay interest only on the utilized overdraft amount, not on the entire limit.',
      'Competitive Interest Rates: Lower rates than personal loans since the facility is fully backed by assets.',
      'Quick Approval Process: Instant digital pledging and limit setting on approved security lists.',
      'No Hidden Charges: Transparent pledge fees, zero foreclosure charges, and zero processing surprises.',
    ],
    eligibility: [
      'Securities Profile: List of approved mutual funds, shares, and bonds accepted by our banking partners',
      'Minimum Asset Value: Mutual funds/Shares portfolio worth at least ₹1,00,000',
      'Applicant Profile: Indian citizens with demat holdings and active KYC status',
      'Age Range: 21 to 65 years at the time of overdraft generation',
    ],
    benefits: [
      'Keep Your Portfolio: Maintain your investment strategies, dividends, bonuses, and interest income.',
      'Pay for What You Use: Interest is charged only on the exact amount and duration of overdraft usage.',
      'No Fixed EMIs: Repay at your convenience with flexible deposit schedules.',
      'High Loan-to-Value: Borrow up to 50% on equity shares and up to 80% on debt mutual funds.',
    ],
    process: [
      'Link your demat account or mutual fund portfolio to review your maximum limit.',
      'Pledge your approved securities online using secure OTP verification.',
      'Overdraft account limit setup completed within a few hours.',
      'Withdraw funds directly as needed; make repayments whenever convenient.',
    ],
  },
  'loan-against-properties': {
    slug: 'loan-against-properties',
    title: 'Loan Against Properties',
    icon: Building2,
    tagline: 'Leverage the market value of your real estate to meet massive capital requirements.',
    heroImage:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Loan Against Property (LAP) is a secured loan backed by commercial or residential properties. Whether you need capital to scale business operations, purchase raw materials, pay off higher-interest loans, or fund children\'s higher education, LAP offers maximum loan amounts at highly competitive rates.',
    whyChoose: [
      'Flexible Repayment Options: Choose long-term EMI schedules up to 15 years to match your cash flows.',
      'Competitive Interest Rates: Pledged security allows us to offer significantly lower interest rates than unsecured credits.',
      'Quick Approval Process: Expert assistance for clear documentation, quick title search, and property verification.',
      'No Hidden Charges: Zero prepayment penalties for individuals with floating-rate property loans.',
    ],
    eligibility: [
      'Property Type: Commercial property, residential houses, or self-occupied industrial buildings',
      'Property Ownership: Clean title deeds, free of legal disputes and clear structural safety approvals',
      'Revenue stability: Stable verified income via trade certificates, audited balance sheets, or tax returns',
      'Applicant Profile: Salaried, self-employed professionals, partnerships, and private companies',
    ],
    benefits: [
      'Higher Loan Amount: Secure high-ticket loans ranging from ₹10 Lakhs to ₹10 Crores based on property value.',
      'Use the Property: Continue using your self-occupied residential or commercial property as usual.',
      'Cheaper Capital: Consolidate smaller, high-interest personal debts into a single, affordable property loan.',
      'High Tenure Flexibility: Extended repayment terms make EMIs highly manageable for growing businesses.',
    ],
    process: [
      'Share details of your property and your income documentation with our team.',
      'Our legal and technical team inspects the property for title and market value.',
      'Receive property-backed lending offers matching up to 70% of market valuation.',
      'Execute security documents and complete final disbursement to your bank.',
    ],
  },
  'new-car-loan': {
    slug: 'new-car-loan',
    title: 'New Car Loan',
    icon: Car,
    tagline: 'Drive home your dream car with high funding limits and flexible terms.',
    heroImage:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'A New Car Loan is designed to finance the purchase of your dream vehicle. With up to 100% on-road funding on selected models, competitive interest rates, and flexible repayment tenures, purchasing a new car is quick and hassle-free.',
    whyChoose: [
      'Flexible Repayment Options: Tailor your loan with step-up or step-down EMIs ranging up to 7 years.',
      'Competitive Interest Rates: Special institutional rates and customized tie-ups with leading automakers.',
      'Quick Approval Process: Instant digital approvals for corporate employees and existing customers.',
      'No Hidden Charges: Complete clarity on documentation fees, processing charges, and stamp duty.',
    ],
    eligibility: [
      'Employment Status: Minimum 1 year in continuous employment with current employer/business',
      'Age Bracket: Minimum 21 years up to 65 years at the time of loan completion',
      'Income Bracket: Minimum annual income of ₹3,00,000 for salaried applicants',
      'Credit Standing: Clean repayment history with no recent defaults or delays',
    ],
    benefits: [
      'Maximum On-road Funding: Get up to 100% funding on the vehicle\'s price (registration + insurance included).',
      'Quick Approvals: Seamless documentation for rapid delivery from the dealership showroom.',
      'Tax Savings: Business owners can claim depreciation benefits and interest expenses as business deductions.',
      'Add-on Covers: Finance your car insurance, extended warranty, and accessories directly within the loan.',
    ],
    process: [
      'Choose your car model, share details, and request a quote from our financial advisor.',
      'Submit your income proof, address KYC, and dealership proforma invoice.',
      'Get your profile approved and receive the loan sanction letter within 24 hours.',
      'Sign the documents; the bank sends the payment directly to the car dealer for delivery.',
    ],
  },
  'used-car-loan': {
    slug: 'used-car-loan',
    title: 'Used Car Loan',
    icon: Car,
    tagline: 'Secure finance for certified pre-owned vehicles with simplified processing.',
    heroImage:
      'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Used Car Loans help you buy pre-owned cars without draining your personal savings. We finance up to 90% of the car\'s current valuation, ensuring that buying a reliable pre-owned vehicle is simple, affordable, and fully supported.',
    whyChoose: [
      'Flexible Repayment Options: Affordable repayment periods up to 5 years designed to fit your budget.',
      'Competitive Interest Rates: Lower pre-owned interest rates backed by our evaluation processes.',
      'Quick Approval Process: Rapid car valuation checks and title verification procedures.',
      'No Hidden Charges: Zero hidden inspection fees and transparent processing.',
    ],
    eligibility: [
      'Car Condition: The car\'s age must not exceed 10 years at the time of loan maturity',
      'Applicant Income: Minimum annual cash flows of ₹2,500,000 for self-employed individuals',
      'Work Experience: Minimum 2 years of continuous work experience or running your own business',
      'Verification: Valid car registration, clear ownership records, and insurance history',
    ],
    benefits: [
      'Budget-Friendly: Buy premium car models at a fraction of their showroom price with easy financing.',
      'High Funding limits: Borrow up to 90% of the vehicle\'s evaluated value.',
      'Transfer support: Dedicated support for RTO owner transfer, registration, and hypothecation changes.',
      'Custom terms: Custom loan packages for both certified used car dealerships and direct individual purchases.',
    ],
    process: [
      'Share details of the pre-owned vehicle along with seller details and documents.',
      'Our banking partners conduct a technical evaluation to determine the vehicle\'s market value.',
      'Submit your KYC and income proofs to finalize the sanction terms.',
      'The bank processes the money directly to the seller; ownership transfer is completed with the RTO.',
    ],
  },
  'car-loan-refinance': {
    slug: 'car-loan-refinance',
    title: 'Car Loan Refinance',
    icon: RotateCcw,
    tagline: 'Reduce your high monthly car payments or access an instant top-up loan.',
    heroImage:
      'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Car Loan Refinancing allows you to replace your high-interest car loan with a new loan at lower interest rates. Alternatively, you can take a top-up loan against the equity of your already running car to meet immediate cash needs.',
    whyChoose: [
      'Flexible Repayment Options: Extend your loan duration to lower your monthly EMIs and free up cash flow.',
      'Competitive Interest Rates: Benefit from lower market rates or improve rates based on your improved credit score.',
      'Quick Approval Process: Fast digital verification using your active car loan track record.',
      'No Hidden Charges: Upfront details on loan foreclosure fees and processing charges.',
    ],
    eligibility: [
      'Active Loan: Minimum 12 months of clean repayment history on your existing car loan',
      'Car Ownership: Car must be free of major legal blockages or previous disputes',
      'Vehicle Age: Car must not be older than 8 years at the end of the new tenure',
      'Income Status: Proof of regular salary deposits or active business revenue streams',
    ],
    benefits: [
      'Lower Monthly EMIs: Save thousands on interest costs and enjoy lower monthly payments.',
      'Instant Top-Up Cash: Get access to cash based on the current market value of your vehicle.',
      'Debt Consolidation: Pay off high-rate credit cards by utilizing cheaper car equity financing.',
      'Improve Terms: Switch from variable interest rates to a fixed-rate structure for stability.',
    ],
    process: [
      'Share details of your active car loan statement, registration certificate, and income.',
      'Compare rates and estimate potential monthly savings with our loan advisor.',
      'The new bank settles your balance with the previous lender and takes over the loan.',
      'Your monthly EMIs shift to the new bank; top-up payouts are credited directly to you.',
    ],
  },
  'unsecured-od-cc-limit': {
    slug: 'unsecured-od-cc-limit',
    title: 'Unsecured OD & CC Limit',
    icon: BadgeDollarSign,
    tagline: 'Seamless working capital overdrafts to bridge short-term cash flow gaps.',
    heroImage:
      'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'Unsecured Overdraft (OD) and Cash Credit (CC) limits provide businesses with a revolving credit line without pledging physical assets like property or inventory. It is an ideal financial tool for managing seasonal sales, buying inventory, and paying suppliers.',
    whyChoose: [
      'Flexible Repayment Options: Revolving limits where you only pay interest on the utilized funds and duration.',
      'Competitive Interest Rates: Cost-effective interest rates calculated daily based on outstanding balances.',
      'Quick Approval Process: Streamlined banking evaluation based on your GST filings and bank statements.',
      'No Hidden Charges: Flat annual renewal rates with zero hidden charges on non-utilization.',
    ],
    eligibility: [
      'Business Type: Sole proprietorships, partnership firms, LLPs, or private limited companies',
      'GST Registration: Minimum 2 years of active GST filings with clean tax records',
      'Annual Turnover: Minimum annual banking turnover of ₹5,00,000 with healthy transaction volume',
      'Account Balance: Solid credit rating with zero cheque bounces in the past 12 months',
    ],
    benefits: [
      'No Collateral Required: Expand your working capital limits without risk to personal or business assets.',
      'Revolving Credit Line: Use, repay, and reuse funds up to the approved credit limit.',
      'Minimize Interest Outgo: Unlike term loans, interest is charged only on the exact outstanding balance.',
      'Cover Operational Gaps: Meet urgent supplier bills, salary payments, or logistics costs instantly.',
    ],
    process: [
      'Provide your basic business details, GST logs, and 12-month bank statements.',
      'Our advisors analyze your cash flows and establish the optimal overdraft limit.',
      'Receive formal digital approvals from our partner banks within 48 hours.',
      'The overdraft limit is linked to your current account, ready for immediate operations.',
    ],
  },
  'education-loan': {
    slug: 'education-loan',
    title: 'Education Loan',
    icon: GraduationCap,
    tagline: 'Finance higher education in India or abroad with student-friendly terms.',
    heroImage:
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overview:
      'An Education Loan provides financial assistance to students who want to pursue higher studies in India or abroad. It covers college fees, hostel expenses, travel tickets, and study materials, allowing students to focus on building successful careers.',
    whyChoose: [
      'Flexible Repayment Options: Moratorium periods that cover the course duration plus 6 to 12 months before payments begin.',
      'Competitive Interest Rates: Lower interest rates for premier universities and female students.',
      'Quick Approval Process: Fast process for university visa deadlines and fee submission dates.',
      'No Hidden Charges: Zero processing charges for selected domestic education loans.',
    ],
    eligibility: [
      'Student Status: Indian national with secured admission to a recognized college/university',
      'Course Profile: Job-oriented degree, diploma, or post-graduate professional courses',
      'Co-Applicant: Parent, guardian, or spouse with stable verifiable income',
      'Academic Record: Clean academic history with minimum passing qualifications',
    ],
    benefits: [
      'Global Opportunities: Finance courses globally at top universities with comprehensive cost coverage.',
      'Moratorium Period: Zero repayment pressure during the study course and job-hunting phase.',
      'Tax Deductions: Claim deduction on the interest paid under Section 80E of the Income Tax Act.',
      'Student Independence: Students can repay the loan themselves from their future salary.',
    ],
    process: [
      'Apply online with college admission offer letter and estimated fee schedule.',
      'Submit academic records, co-applicant income statements, and KYC documents.',
      'Get the loan approved and select the interest payment terms for the study phase.',
      'Direct fee disbursement is sent to the university according to the semester schedule.',
    ],
  },
};

export function getLoanPlan(slug: string): LoanPlan | undefined {
  return loanPlans[slug];
}
