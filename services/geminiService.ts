
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const EDUSTREAM_CONTEXT = `
You are the EduStream Support Assistant. Your goal is to help Indian students learn about our tutoring services.
Key Info:
- Website: EduStream – Online Tutoring
- Location: Gandhipuram, Coimbatore, India
- Email: edustreamofficial99@gmail.com
- Phone/WhatsApp: +91 9508878686
- Pricing Plans:
  1. Basic Plan (₹1,000/month): Unlimited text support + 5 tutor calls.
  2. Standard Plan (₹1,500/month): Unlimited text support + 10 tutor calls + priority resolution (Recommended).
  3. Advanced Plan (₹2,000/month): Unlimited text support + 15 tutor calls + personal exam plan.
- Resources: We use free platforms like NPTEL, Khan Academy, Physics Wallah, CodeWithHarry, and Gate Smashers.
- Support: We offer text-based doubt clearing and 1-on-1 calls.
- Target: School (10th/12th), JEE, NEET, and Engineering students.

Instructions:
- Be polite, encouraging, and helpful.
- Keep responses concise.
- If asked about enrollment, guide them to the 'Enroll Now' form or contact details.
- Use a friendly "Namaste" or "Hello" where appropriate.
`;

export async function generateStudyPlan(topic: string, examType: string) {
  // Using gemini-3-pro-preview for complex reasoning tasks like curriculum building
  // this also helps resolve Rpc failed 500 errors often seen with overloaded flash endpoints
  const model = 'gemini-3-pro-preview';
  
  const prompt = `Act as an expert Indian academic tutor. Provide a comprehensive 4-week (1 month) master study plan for the topic: "${topic}" focused on the "${examType}" exam. 
  The plan should be detailed, broken down by weeks (Week 1 to Week 4) and then specific daily tasks. 
  Include specific learning goals for each week, key sub-topics to master, and practice milestones.
  Suggest the best free Indian YouTube channels (like PW, NPTEL, CodeWithHarry, Gate Smashers, etc.) relevant to this topic for each stage.
  Keep the tone encouraging and professional. 
  Use simple English and format the output as clear, well-structured text suitable for a study guide.`;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a server error while building your roadmap. This is usually temporary—please try clicking 'Get Study Plan' again in a few seconds.";
  }
}

export async function chatWithSupport(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) {
  const model = 'gemini-3-flash-preview';

  try {
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: EDUSTREAM_CONTEXT,
      },
      history: history.length > 0 ? history : [],
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having a little trouble connecting. Please try again or contact us via WhatsApp at +91 9508878686.";
  }
}
