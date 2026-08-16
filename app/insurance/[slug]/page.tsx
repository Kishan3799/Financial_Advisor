import { notFound } from 'next/navigation';
import InsuranceDetailPage from '@/components/site/InsuranceDetailPage';
import { insurancePlans, getInsurancePlan } from '@/lib/insurance-data';

export function generateStaticParams() {
  return Object.keys(insurancePlans).map((slug) => ({ slug }));
}

export default function Page({
  params,
}: {
  params: { slug: string };
}) {
  const selected = getInsurancePlan(params.slug);
  if (!selected) notFound();
  return <InsuranceDetailPage plan={selected} />;
}
