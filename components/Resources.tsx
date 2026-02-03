
import React from 'react';
import { RESOURCES } from '../constants';

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Free Open Learning</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Guided Paths through Open Platforms</h3>
            <p className="text-lg text-slate-600">
              We leverage high-quality free content from top educators. Our tutors help you navigate these vast resources with structured learning paths.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                <i className="fa-brands fa-youtube text-2xl"></i>
              </div>
              <div>
                <div className="font-bold">1000+ Hours</div>
                <div className="text-sm text-slate-500">Curated Free Content</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES.map((resource, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 transition-all group shadow-sm hover:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <i className={`${resource.icon} text-xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{resource.name}</h4>
              </div>
              <p className="text-slate-600 mb-6 line-clamp-2">{resource.description}</p>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Visit Channel <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h4 className="text-2xl font-bold mb-4">Confused where to start?</h4>
            <p className="text-indigo-100 text-lg mb-8">
              Open platforms can be overwhelming. EduStream tutors build your custom roadmap using these free videos, saving you hours of searching.
            </p>
            <a href="#contact" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors inline-block active:scale-95">
              Request Your Roadmap
            </a>
          </div>
          <i className="fa-solid fa-map-location-dot absolute right-[-20px] bottom-[-20px] text-[180px] opacity-10 rotate-12"></i>
        </div>
      </div>
    </section>
  );
};

export default Resources;
