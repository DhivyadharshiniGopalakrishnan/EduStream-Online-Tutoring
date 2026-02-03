
import React, { useState } from 'react';
import { generateStudyPlan } from '../services/geminiService';

declare var html2pdf: any;

const AIStudyPlanner: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [exam, setExam] = useState('JEE');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setPlan(null);
    const result = await generateStudyPlan(topic, exam);
    setPlan(result || "Failed to generate plan.");
    setLoading(false);
  };

  const formatMarkdownToHTML = (text: string) => {
    return text
      .split('\n')
      .map(line => {
        const trimmed = line.trim();
        if (!trimmed) return '<div style="height: 12px;"></div>';

        // Headers
        if (trimmed.startsWith('### ')) {
          return `<h3 style="color: #4f46e5; margin-top: 20px; margin-bottom: 10px; font-weight: 700; font-size: 18px; font-family: sans-serif;">${trimmed.substring(4)}</h3>`;
        }
        if (trimmed.startsWith('## ')) {
          return `<h2 style="color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 30px; margin-bottom: 15px; font-weight: 800; font-size: 24px; font-family: sans-serif;">${trimmed.substring(3)}</h2>`;
        }
        if (trimmed.startsWith('# ')) {
          return `<h1 style="color: #4f46e5; margin-bottom: 25px; font-weight: 900; font-size: 30px; font-family: sans-serif;">${trimmed.substring(2)}</h1>`;
        }

        // Bullet points
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const content = trimmed.substring(2).replace(/\*\*(.*?)\*\*/g, '<b style="color:#000;">$1</b>');
          return `<div style="margin-left: 15px; margin-bottom: 8px; font-family: sans-serif; font-size: 14px; color: #334155; line-height: 1.6;">
                    <span style="color: #4f46e5; font-weight: bold; margin-right: 10px;">•</span>
                    ${content}
                  </div>`;
        }

        // Standard text
        const formattedLine = trimmed.replace(/\*\*(.*?)\*\*/g, '<b style="color:#000;">$1</b>');
        return `<p style="margin-bottom: 12px; font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #334155;">${formattedLine}</p>`;
      })
      .join('');
  };

  const handleDownloadPDF = async () => {
    if (!plan) return;

    // Create a container that is hidden from view but not display:none
    const wrapper = document.createElement('div');
    wrapper.id = 'pdf-export-wrapper';
    Object.assign(wrapper.style, {
      height: '0',
      overflow: 'hidden',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%'
    });

    const renderDiv = document.createElement('div');
    Object.assign(renderDiv.style, {
      width: '790px', // Standard A4-ish width for capture
      padding: '40px',
      backgroundColor: '#ffffff',
      color: '#1e293b',
      boxSizing: 'border-box'
    });

    const htmlContent = formatMarkdownToHTML(plan);
    
    renderDiv.innerHTML = `
      <div style="font-family: Arial, sans-serif; background-color: white; padding: 20px;">
        <div style="border-bottom: 4px solid #4f46e5; padding-bottom: 25px; margin-bottom: 35px;">
          <h1 style="color: #4f46e5; margin: 0; font-size: 34px; font-weight: 900;">EduStream</h1>
          <p style="margin: 5px 0 0 0; color: #64748b; font-size: 16px; font-weight: 700;">30-Day Master Study Roadmap</p>
          <div style="margin-top: 15px; display: flex; justify-content: space-between; align-items: center;">
             <span style="font-size: 18px; font-weight: 700; color: #334155;">Topic: ${topic}</span>
             <span style="font-size: 14px; color: #64748b; font-weight: 600;">Exam: ${exam}</span>
          </div>
        </div>
        
        <div style="min-height: 800px;">
          ${htmlContent}
        </div>

        <div style="margin-top: 50px; border-top: 2px solid #f1f5f9; padding-top: 30px; text-align: center;">
          <h3 style="color: #4f46e5; font-weight: 800; margin: 0 0 10px 0; font-size: 18px;">Accelerate your success with EduStream</h3>
          <p style="color: #64748b; font-size: 12px; margin: 0; line-height: 1.5;">
            Personalized 1-on-1 calls and text support starting at ₹1000/month.<br/>
            <strong>Visit:</strong> edustream.in | <strong>WhatsApp:</strong> +91 9508878686
          </p>
          <div style="margin-top: 20px; font-size: 10px; color: #94a3b8;">
            © ${new Date().getFullYear()} EduStream India • Handcrafted Roadmap
          </div>
        </div>
      </div>
    `;

    wrapper.appendChild(renderDiv);
    document.body.appendChild(wrapper);

    const fileName = `EduStream_Roadmap_${topic.replace(/\s+/g, '_')}.pdf`;

    const opt = {
      margin: 10,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        logging: false,
        letterRendering: true,
        windowWidth: 800
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      // Give the browser time to render the new DOM elements
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const worker = html2pdf().set(opt).from(renderDiv);
      await worker.save();
    } catch (error) {
      console.error("PDF Export error:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      document.body.removeChild(wrapper);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-[2.5rem] p-8 md:p-12 border border-indigo-100 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <i className="fa-solid fa-robot text-[120px] text-indigo-600"></i>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <span className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 inline-block">
                AI Powered Planner
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Master Roadmap Generator</h3>
              <p className="text-slate-600">Create a 30-day curriculum for any subject. Download as a professional PDF roadmap.</p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter topic (e.g. Modern Physics, ReactJS, UPSC History...)"
                    className="w-full px-6 py-4 rounded-2xl border border-indigo-200 focus:ring-4 focus:ring-indigo-200 outline-none transition-all shadow-sm"
                  />
                </div>
                <div className="md:w-48">
                  <select 
                    value={exam}
                    onChange={(e) => setExam(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl border border-indigo-200 focus:ring-4 focus:ring-indigo-200 outline-none bg-white font-semibold text-slate-700 shadow-sm cursor-pointer"
                  >
                    <option value="JEE">JEE / NEET</option>
                    <option value="Class 10 Boards">Class 10</option>
                    <option value="Class 12 Boards">Class 12</option>
                    <option value="GATE">GATE CS/IT</option>
                    <option value="University Exam">University</option>
                  </select>
                </div>
                <button 
                  onClick={handleGenerate}
                  disabled={loading || !topic}
                  className={`px-8 py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-3 ${
                    loading || !topic ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
                  }`}
                >
                  {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-wand-sparkles"></i>}
                  {loading ? 'Generating Your Roadmap...' : 'Get 30-Day Plan'}
                </button>
              </div>

              {plan && (
                <div className="mt-8 animate-fade-in space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-2">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                      <i className="fa-solid fa-calendar-check text-indigo-600"></i>
                      Your 1-Month Roadmap
                    </h4>
                    <button 
                      onClick={handleDownloadPDF}
                      className="bg-green-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-3 hover:bg-green-700 transition-all shadow-xl active:scale-95"
                    >
                      <i className="fa-solid fa-file-pdf"></i> Download PDF Roadmap
                    </button>
                  </div>
                  
                  <div className="p-8 bg-white rounded-3xl border border-indigo-100 shadow-inner max-h-[500px] overflow-y-auto custom-scrollbar">
                    <pre className="whitespace-pre-wrap font-sans text-slate-700 text-sm md:text-base leading-relaxed">
                      {plan}
                    </pre>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button 
                      onClick={() => setPlan(null)}
                      className="text-slate-400 hover:text-indigo-600 font-bold flex items-center gap-2 transition-all py-2 px-4 rounded-xl hover:bg-indigo-50"
                    >
                      <i className="fa-solid fa-rotate-left"></i> Create New Topic Roadmap
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStudyPlanner;
