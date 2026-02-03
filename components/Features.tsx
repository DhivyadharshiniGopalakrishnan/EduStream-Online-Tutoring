
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Why EduStream</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Personalized Support for Every Learner</h3>
          <p className="text-lg text-slate-600">We don't just provide content; we provide the guidance you need to master it.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-indigo-100 transition-all shadow-sm hover:shadow-xl group">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform shadow-lg shadow-indigo-200">
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
