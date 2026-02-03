# EduStream – Modern Online Tutoring Platform

EduStream is a clean, professional, and student-focused online tutoring website designed for the next generation of Indian learners. It bridges the gap between high-quality free open educational resources (OER) and personalized mentorship through human-led calls and AI-powered tools.

## 🚀 Core Objective
The primary goal of EduStream is to make quality education simple and accessible. By leveraging existing top-tier content from platforms like NPTEL and Khan Academy, EduStream provides the structured guidance and doubt-clearing support that self-studying students often lack.

## 🎯 Target Users
- **School Students:** Preparing for Class 10/12 Board exams (CBSE, ICSE, State Boards).
- **Competitive Aspirants:** Students aiming for JEE, NEET, and GATE.
- **College Students:** Engineering (CS/IT) and Science students looking for conceptual clarity.
- **General Learners:** Anyone needing personalized mentorship and structured learning paths.

## 🏗️ Website Structure
1.  **Header / Navigation:** Seamless access to Home, Courses, Resources, Pricing, and Contact sections with a sticky, blurred backdrop effect.
2.  **Hero Section:** High-impact area featuring a clear value proposition for affordable tutoring and quick call-to-action buttons.
3.  **Features Section (Why EduStream):** Highlights personalized support, including unlimited text help and 1-on-1 calls.
4.  **Resources Section:** Curated list of top-tier free educational channels (Physics Wallah, CodeWithHarry, etc.) integrated into the platform's learning philosophy.
5.  **AI Study Planner:** A specialized tool powered by **Gemini 3 Pro** that generates a custom 30-day master study roadmap for any topic, exportable as a professional PDF.
6.  **Pricing Section:** Transparent, tiered monthly plans (Basic, Standard, Advanced) tailored to Indian student budgets.
7.  **Why Choose Us:** Testimonials and key benefits focusing on localized expertise (India-focused curriculum).
8.  **Contact / Enrollment:** A functional inquiry form that triggers an email client with pre-filled details for easy enrollment.
9.  **AI Support Chatbot:** A persistent chatbot powered by **Gemini 3 Flash** for real-time customer support and platform navigation.

## 🎨 Design Requirements
- **Clean & Modern UI:** Utilizing the Inter font and a slate-and-indigo color palette for a professional yet welcoming look.
- **Responsive Layout:** Fully optimized for mobile, tablet, and desktop using Tailwind CSS's utility-first framework.
- **Readability:** High contrast and spacious layouts ensure that educational content is easy to consume.
- **Interactivity:** Smooth scroll animations, hover effects on cards, and real-time AI interactions.

## 🛠️ Tech Stack & Technical Details
- **Framework:** [React 19](https://react.dev/) (Client-side rendering via esm.sh)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a modern, responsive design.
- **AI Integration:** [Google Gemini API (@google/genai)](https://ai.google.dev/)
    - **Gemini 3 Pro:** Powers the complex reasoning required for the 30-day Study Planner.
    - **Gemini 3 Flash:** Powers the low-latency Support Chatbot.
- **Icons:** [Font Awesome 6](https://fontawesome.com/)
- **PDF Generation:** [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) for converting AI roadmaps into downloadable documents.
- **Fonts:** [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

## 📝 How to Run
1.  Ensure you have a modern web browser.
2.  Open the `index.html` file in your browser (or use a local development server like Live Server).
3.  The application uses ES6 modules, so it must be served via a protocol (http/https), not directly from the `file://` protocol.
4.  An API Key for Google Gemini is required and should be provided via the environment (managed by the platform provider in this context).

## prompt
You are an AI-powered Website Builder and Product Designer.

Your task is to design and generate a modern, user-friendly ONLINE TUTORING WEBSITE for students.

The website should clearly represent an online learning platform that connects students with tutors and provides structured educational resources.

================================================
CORE OBJECTIVE
================================================

Create a clean, professional, and student-focused online tutoring website that:

- Makes learning feel simple and accessible
- Clearly explains available courses and tutoring services
- Encourages students to enroll or contact tutors
- Works smoothly on both desktop and mobile devices

The website should look realistic, practical, and ready to be used in the real world.

================================================
TARGET USERS
================================================

- College students
- School students
- Learners preparing for exams
- Tutors and educators

================================================
WEBSITE STRUCTURE (MANDATORY)
================================================

The website must include the following sections:

1. Header / Navigation Bar
- Website name or logo
- Navigation links (Home, Courses, Tutors, Pricing, Contact)

2. Hero Section
- Clear headline about online tutoring
- Short description of the platform
- Call-to-action button (Enroll Now / Get Started)

3. Courses Section
- List of available subjects or courses
- Brief description for each course
- Simple layout using cards or boxes

4. Tutoring Features Section
- One-on-one tutoring
- Flexible schedules
- Expert tutors
- Online resources

5. Schedule / Pricing Section
- Sample class timings or plans
- Basic pricing structure (can be mock data)

6. Student Benefits Section
- Easy learning
- Exam-focused teaching
- Personalized guidance

7. Contact / Enrollment Section
- Contact form (name, email, message)
- Call-to-action to join or book a session

8. Footer
- Copyright
- Social links (icons optional)
- Basic contact information

================================================
DESIGN REQUIREMENTS
================================================

- Clean and modern UI
- Simple color palette (education-friendly)
- Readable typography
- Proper spacing and alignment
- Hover effects for buttons
- Responsive layout for mobile and tablet

================================================
TECHNICAL REQUIREMENTS
================================================

- Use HTML, CSS, and JavaScript
- Keep code clean and well-structured
- Separate HTML and CSS files
- JavaScript only if needed (simple interactions)
- Add comments to explain sections of the code

================================================
IMPORTANT RESTRICTIONS
================================================

❌ Do NOT add unnecessary advanced features  
❌ Do NOT include backend or database logic  
❌ Do NOT overcomplicate the design  
❌ Do NOT use placeholder explanations like “lorem ipsum” excessively  

✅ Focus on clarity and usability  
✅ Ensure the website is complete and functional  
✅ Keep the design professional and student-friendly  

================================================
FINAL OUTPUT EXPECTATION
================================================

Provide:
- Complete HTML code
- Separate CSS code
- Optional JavaScript (if used)
- Clear instructions on how to run or host the website

The final result should look like a real ONLINE TUTORING PLATFORM that could be presented to judges or users confidently.
---
*Handcrafted with ❤️ for Indian Students by EduStream.*