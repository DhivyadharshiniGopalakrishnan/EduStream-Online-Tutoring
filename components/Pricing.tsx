
import React from 'react';
import { PRICING_PLANS } from '../constants';

const Pricing: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Transparent Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Affordable Guidance for Students</h3>
          <p className="text-lg text-slate-600">No hidden costs. Pay only for the calls you need. Unlimited text support included in all plans.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl p-8 border ${plan.recommended ? 'border-indigo-600 shadow-2xl scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-all`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 font-medium">/ month</span>
                </div>
                <div className="mt-2 inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-md">
                  {plan.calls}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                onClick={scrollToContact}
                className={`block w-full py-4 rounded-xl font-bold text-center transition-all active:scale-95 ${
                  plan.recommended 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
          <p className="text-slate-600 italic">
            "We believe quality education shouldn't be a luxury. Our flexible call pricing allows you to scale up support only when exams are near."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
