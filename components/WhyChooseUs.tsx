
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    { title: "Low-Cost Support", icon: "fa-solid fa-wallet", desc: "Pricing designed specifically for Indian student budgets." },
    { title: "Quality Free Resources", icon: "fa-brands fa-youtube", desc: "We use top-rated free videos so you don't pay for pre-recorded lectures." },
    { title: "Personal Guidance", icon: "fa-solid fa-handshake-angle", desc: "Every student gets a dedicated mentor for doubts and strategy." },
    { title: "India Focused", icon: "fa-solid fa-map-pin", desc: "Expertise in CBSE, ICSE, and regional state board curriculum." }
  ];

  return (
    <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-10">
        <i className="fa-solid fa-trophy text-[300px]"></i>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-indigo-400 font-bold tracking-wider uppercase text-sm">Why EduStream?</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">Better Learning, <br/>Zero Compromise.</h3>
            <p className="text-indigo-100 text-lg opacity-80">
              Traditional coaching is expensive. Self-study is lonely. EduStream bridges the gap with expert human interaction at the price of a streaming subscription.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/30 flex items-center justify-center text-indigo-300">
                    <i className={`${benefit.icon} text-lg`}></i>
                  </div>
                  <h4 className="font-bold text-xl">{benefit.title}</h4>
                  <p className="text-indigo-200 text-sm leading-relaxed opacity-70">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
             <div className="space-y-6">
               <div className="flex items-center gap-4">
                 <img src="https://picsum.photos/60/60?random=1" className="w-12 h-12 rounded-full border-2 border-indigo-400" alt="Student" />
                 <div>
                   <div className="font-bold">Ananya Sharma</div>
                   <div className="text-xs text-indigo-300 italic">Class 12 student, Pune</div>
                 </div>
               </div>
               <p className="text-indigo-50 leading-relaxed italic">
                 "I was struggling with Physics concepts on YouTube. EduStream's tutor calls helped me understand the logic behind formulas. The ₹1000 plan is literally a lifesaver for my monthly pocket money!"
               </p>
               <div className="flex text-yellow-400 gap-1">
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
                 <i className="fa-solid fa-star"></i>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
