import { notFound } from 'next/navigation';
import LoanDetailPage from '@/components/site/LoanDetailPage';
import { loanPlans, getLoanPlan } from '@/lib/loans-data';

export function generateStaticParams() {
  return Object.keys(loanPlans).map((slug) => ({ slug }));
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const selected = getLoanPlan(params.slug);
  if (!selected) notFound();
  return <LoanDetailPage plan={selected} />;
}
