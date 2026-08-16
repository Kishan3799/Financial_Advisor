import { notFound } from 'next/navigation';
import InvestmentDetailPage from '@/components/site/InvestmentDetailPage';
import { investmentPlans, getInvestmentPlan } from '@/lib/investments-data';

export function generateStaticParams() {
  return Object.keys(investmentPlans).map((slug) => ({ slug }));
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const selected = getInvestmentPlan(params.slug);
  if (!selected) notFound();
  return <InvestmentDetailPage plan={selected} />;
}
