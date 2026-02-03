
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'JEE / NEET Prep',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Constructing the email body
    const subject = encodeURIComponent(`New Enrollment Inquiry: ${formData.name} - ${formData.course}`);
    const body = encodeURIComponent(
      `Student Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Interested Course: ${formData.course}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoUrl = `mailto:edustreamofficial99@gmail.com?subject=${subject}&body=${body}`;
    
    // Open the user's email client
    window.location.href = mailtoUrl;
    
    // Show success state
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Enroll Now</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Start Your Journey Today</h3>
              <p className="text-lg text-slate-600">Have questions? Fill out the form or reach out via WhatsApp. Our team will get back to you within 4 working hours.</p>
            </div>

            <div className="space-y-6">
              <a href="mailto:edustreamofficial99@gmail.com" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-indigo-100 transition-all">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Us</div>
                  <div className="font-bold text-slate-900">edustreamofficial99@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/919508878686" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-indigo-100 transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-md">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Call / WhatsApp</div>
                  <div className="font-bold text-slate-900">+91 9508878686</div>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 group hover:border-indigo-100 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Headquarters</div>
                  <div className="font-bold text-slate-900">Gandhipuram, Coimbatore, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-100 relative min-h-[500px] flex flex-col justify-center">
            {!isSubmitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="example@mail.com"
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Interested Course / Exam</label>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white font-medium text-slate-700"
                  >
                    <option>JEE / NEET Prep</option>
                    <option>Class 10/12 Boards</option>
                    <option>College CS / IT Engineering</option>
                    <option>General Mentorship</option>
                    <option>Others</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">How can we help?</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your learning goals..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all active:scale-[0.98]"
                >
                  Send Enrollment Inquiry
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-check text-4xl"></i>
                </div>
                <h4 className="text-3xl font-extrabold text-slate-900">Inquiry Triggered!</h4>
                <p className="text-slate-600 text-lg">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been generated. Please check your email app to finalize sending the details to us!
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-indigo-600 font-bold hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
