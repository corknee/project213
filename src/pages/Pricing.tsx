import React from 'react';
import { PricingCard } from '../components/pricing/PricingCard';

const pricingPlans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small businesses and freelancers',
    features: [
      { text: '50 AI-generated articles/month', included: true },
      { text: 'Basic ad copy generation', included: true },
      { text: 'Social media post suggestions', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'Custom templates', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '99',
    description: 'Ideal for growing businesses and marketing teams',
    features: [
      { text: 'Unlimited AI-generated articles', included: true },
      { text: 'Advanced ad copy generation', included: true },
      { text: 'Social media campaign planning', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Custom templates', included: true },
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '299',
    description: 'For large organizations with complex needs',
    features: [
      { text: 'Everything in Professional', included: true },
      { text: 'Custom AI model training', included: true },
      { text: 'API access', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'SLA guarantee', included: true },
    ],
  },
];

export function Pricing() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-xl text-gray-600">Choose the plan that's right for your business</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}