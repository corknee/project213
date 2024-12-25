import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

export function PricingCard({ name, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <div className={`p-8 rounded-lg ${highlighted ? 'bg-blue-600 text-white ring-4 ring-blue-600 ring-offset-2' : 'bg-white'}`}>
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="mt-4">
        <span className="text-4xl font-bold">${price}</span>
        <span className={`${highlighted ? 'text-blue-100' : 'text-gray-500'}`}>/month</span>
      </div>
      <p className={`mt-4 ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check size={20} className={feature.included ? 'text-green-500' : 'text-gray-300'} />
            <span className={`ml-3 ${highlighted ? 'text-blue-100' : 'text-gray-600'}`}>{feature.text}</span>
          </li>
        ))}
      </ul>
      <Button
        className="w-full mt-8"
        variant={highlighted ? 'secondary' : 'primary'}
      >
        Get Started
      </Button>
    </div>
  );
}