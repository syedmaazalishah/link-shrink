import React, { useState } from 'react';
import { ChevronDown, Code2, Cpu, Rocket, ExternalLink, GitBranch,IndianRupee } from 'lucide-react';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-white/10 mb-2">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-5 text-left transition-all duration-300 group"
    >
      <span className="text-xl font-medium text-white/90 group-hover:text-blue-400 transition-colors">
        {title}
      </span>
      <ChevronDown 
        className={`text-white/50 transition-transform duration-500 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} 
      />
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
      <div className="text-slate-300 leading-relaxed text-lg">
        {children}
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 font-sans selection:bg-blue-500/30">
      
      {/* --- HERO SECTION --- */}
      <header className="mb-24 relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-6">
          BrokenMaaX
        </h1>
        <p className="text-2xl text-blue-400 font-light tracking-wide max-w-2xl">
          Crafting minimalist digital tools through the lens of full-stack engineering.
        </p>
      </header>

      {/* --- FEATURE CARDS (Glassmorphism) --- */}
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: <Rocket size={24}/>, title: 'Performant', desc: 'Optimized for instant URL redirection.' },
          { icon: <Code2 size={24}/>, title: 'Clean Code', desc: 'Built with React, Node, and Scalable Logic.' },
          { icon: <Cpu size={24}/>, title: 'Modern UI', desc: 'Focusing on Glassmorphism and UX flow.' }
        ].map((feat, i) => (
          <div key={i} className="p-8 rounded-2xl border border-white/5 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-500 group cursor-default">
            <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{feat.icon}</div>
            <h3 className="text-white font-bold text-xl mb-2">{feat.title}</h3>
            <p className="text-slate-400">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* --- ACCORDION SECTION --- */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          Deep Dive <span className="h-[2px] w-20 bg-blue-500/50"></span>
        </h2>
        
        <div className="space-y-2">
          <AccordionItem 
            title="Why I built this platform?" 
            isOpen={openIndex === 0} 
            onClick={() => toggleAccordion(0)}
          >
            I believe that simple tools shouldn't be boring. This link shortener is a study in 
            eliminating digital friction. It’s about taking a common utility and making it 
            visually stunning and technically flawless.
          </AccordionItem>

          <AccordionItem 
            title="The Technical Stack" 
            isOpen={openIndex === 1} 
            onClick={() => toggleAccordion(1)}
          >
            This is a full-stack journey. Utilizing **React** for the reactive frontend, 
            **Node.js** for the logic layer, and **Tailwind CSS** for precision styling. 
            I focus on writing custom logic that replaces the need for heavy external libraries.
          </AccordionItem>

          <AccordionItem 
            title="The Vision for BrokenMaaX" 
            isOpen={openIndex === 2} 
            onClick={() => toggleAccordion(2)}
          >
            I'm a designer at heart and a developer by trade. Every hobby project I release is a 
            piece of a larger puzzle—building a community where developers can share, 
            break, and fix things together.
          </AccordionItem>
        </div>
      </section>

      {/* --- CONNECT SECTION --- */}
      <footer className="relative p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Want to see more?</h3>
            <p className="text-slate-400">Follow my growth as I build more full-stack projects.</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group">
              <GitBranch className="text-white group-hover:text-blue-400" />
            </a>
            <a href="#" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all group">
              <IndianRupee className="text-white group-hover:text-red-400" />
            </a>
            <a href="#" className="flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/20">
              Portfolio <ExternalLink size={18} />
            </a>
          </div>
        </div>
        {/* Decorative blur for footer */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
      </footer>
    </div>
  );
};

export default AboutPage;






// -- older version of about page


// import React from 'react';

// const About = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-6 py-16 font-sans text-slate-800">
//       {/* Header Section */}
//       <header className="text-center mb-16">
//         <h1 className="text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
//           About This Project
//         </h1>
//         <p className="text-xl text-slate-600 italic">
//           Turning long, complex links into simple, shareable assets.
//         </p>
//       </header>

//       {/* Main Content Grid */}
//       <div className="grid md:grid-cols-2 gap-12">
//         <section>
//           <h2 className="text-2xl font-bold mb-4 border-b-2 border-slate-200 pb-2">
//             The Vision
//           </h2>
//           <p className="text-lg leading-relaxed mb-4">
//             This link shortener was built for the minimalists. In an era of digital noise, 
//             I wanted to create a tool that focuses on speed and utility without the 
//             clutter of traditional redirect services.
//           </p>
//           <ul className="space-y-3">
//             <li className="flex items-start">
//               <span className="mr-2 text-blue-500 font-bold">→</span>
//               <span><strong>Instant Generation:</strong> No waiting, just shortening.</span>
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2 text-blue-500 font-bold">→</span>
//               <span><strong>Clean UX:</strong> A design that stays out of your way.</span>
//             </li>
//             <li className="flex items-start">
//               <span className="mr-2 text-blue-500 font-bold">→</span>
//               <span><strong>Full-Stack Integrity:</strong> Secure and reliable link mapping.</span>
//             </li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-bold mb-4 border-b-2 border-slate-200 pb-2">
//             Behind the Code
//           </h2>
//           <p className="text-lg leading-relaxed mb-4">
//             My name is <strong>BrokenMaaX</strong>. As a full-stack designer, I treat every 
//             hobby project as a laboratory for growth. 
//           </p>
//           <p className="text-lg leading-relaxed">
//             Building this platform allowed me to refine my workflow with <strong>React</strong> and 
//             <strong> Node.js</strong>, pushing for better performance and a more polished 
//             developer experience. I'm constantly iterating to see how far a simple 
//             utility can go.
//           </p>
//         </section>
//       </div>

//       {/* Footer / CTA Section */}
//       <footer className="mt-20 pt-10 border-t border-slate-200 text-center">
//         <h3 className="text-xl font-semibold mb-6">Let's Connect & Build</h3>
//         <div className="flex justify-center space-x-8 text-lg">
//           <a 
//             href="https://github.com/your-username" 
//             className="font-medium hover:text-blue-600 transition-colors duration-200"
//             target="_blank" 
//             rel="noreferrer"
//           >
//             GitHub
//           </a>
//           <a 
//             href="https://youtube.com/your-channel" 
//             className="font-medium hover:text-red-600 transition-colors duration-200"
//             target="_blank" 
//             rel="noreferrer"
//           >
//             YouTube
//           </a>
//           <a 
//             href="mailto:hello@example.com" 
//             className="font-medium hover:text-green-600 transition-colors duration-200"
//           >
//             Email
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default About;