
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Trusted by 5,000+ Students across India
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              Affordable <span className="text-indigo-600">Online Tutoring</span> for Every Student
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Personalized guidance focused on Indian school boards and competitive exams. Get unlimited text support and direct call-based tutoring starting at just ₹1000.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#pricing" 
                onClick={(e) => scrollToSection(e, 'pricing')}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
              >
                Get Started Today
              </a>
              <a 
                href="#resources" 
                onClick={(e) => scrollToSection(e, 'resources')}
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <i className="fa-solid fa-play text-indigo-600"></i>
                Browse Resources
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start grayscale opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/NPTEL_Logo.png/220px-NPTEL_Logo.png" alt="NPTEL" className="h-8 grayscale" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Khan_Academy_logo_%282018%29.svg/1200px-Khan_Academy_logo_%282018%29.svg.png" alt="Khan Academy" className="h-6" />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
              alt="Students Studying" 
              className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <i className="fa-solid fa-check-double"></i>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Doubt Cleared</div>
                  <div className="text-xs text-slate-500">By Expert Tutors</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
