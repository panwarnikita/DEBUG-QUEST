"use client";
import React, { useState } from 'react';
import { Layout, Code, Terminal, Globe, ArrowLeft, BrainCircuit, Database, Beaker, LogOut, Sparkles } from 'lucide-react';
import LabRoom from './components/LabRoom'; 
import Login from './components/Login';
import { allLevels } from './data/levels'; 

const categories = [
  { id: 'react', name: 'React JS Lab', icon: <Code size={48} />, color: 'from-cyan-400 to-blue-600', count: 20, desc: 'Debug Hooks, State management, and Component lifecycles.' },
  { id: 'html', name: 'Web Architecture', icon: <Globe size={48} />, color: 'from-orange-500 to-red-600', count: 16, desc: 'Fix complex layouts, CSS Grid disasters, and responsive design.' },
  { id: 'javascript', name: 'JS Core & Async', icon: <Terminal size={48} />, color: 'from-yellow-400 to-green-600', count: 16, desc: 'Master asynchronous flows, closures, and logical handling.' },
  { id: 'python', name: 'Python Logic', icon: <Layout size={48} />, color: 'from-purple-500 to-pink-600', count: 16, desc: 'Solve algorithmic bottlenecks and data processing bugs.' },
  { id: 'fullstack', name: 'Fullstack / API', icon: <Database size={48} />, color: 'from-emerald-500 to-teal-700', count: 16, desc: 'Bridge the gap between Client and Server payloads.' },
  { id: 'ai_ml', name: 'AI / ML Models', icon: <Beaker size={48} />, color: 'from-indigo-500 to-purple-800', count: 16, desc: 'Validate data shapes and debug neural logic.' },
];

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<any>(null);
  const [userProgress, setUserProgress] = useState<{ [key: string]: number }>({
    react: 1, html: 1, javascript: 1, python: 1, fullstack: 1, ai_ml: 1
  });

  if (!user) {
    return <Login onLoginSuccess={(userData: any) => setUser(userData)} />;
  }

  if (selectedLevel) {
    const categoryData = categories.find(c => c.id === selectedCategory);
    return (
      <LabRoom 
        level={selectedLevel} 
        categoryName={categoryData?.name}
        onBack={(success: boolean) => {
          if (success && selectedLevel.id === userProgress[selectedLevel.category]) {
            setUserProgress(prev => ({ ...prev, [selectedLevel.category]: prev[selectedLevel.category] + 1 }));
          }
          setSelectedLevel(null);
        }} 
        onNext={() => {
          const nextId = selectedLevel.id + 1;
          const catLevels = allLevels[selectedLevel.category];
          if (catLevels && catLevels[nextId]) {
            setSelectedLevel({ ...catLevels[nextId], category: selectedLevel.category });
          } else {
            alert("Missions Completed!");
            setSelectedLevel(null);
          }
        }}
      />
    );
  }

  if (selectedCategory) {
    const categoryData = categories.find(c => c.id === selectedCategory);
    const levelsInCat = allLevels[selectedCategory] || {};
    const stages = Array.from({ length: categoryData?.count || 12 }, (_, i) => {
      const stageId = i + 1;
      return levelsInCat[stageId] || { id: stageId, title: 'Neural Mission', difficulty: 'Novice' };
    });

    return (
      <div className="h-screen w-screen bg-[#0a0a0b] text-white p-10 flex flex-col overflow-hidden no-scrollbar">
        <button onClick={() => setSelectedCategory(null)} className="flex items-center gap-2 text-zinc-500 hover:text-white mb-6 uppercase text-[10px] tracking-widest font-black transition-all">
          <ArrowLeft size={16} /> Back to Disciplines
        </button>
        <h1 className={`text-5xl font-black mb-8 uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${categoryData?.color}`}>
          {categoryData?.name}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow overflow-y-auto no-scrollbar pb-10">
          {stages.map((lvl) => {
            const isCompleted = lvl.id < userProgress[selectedCategory];
            return (
              <div 
                key={lvl.id} 
                onClick={() => setSelectedLevel({ ...lvl, category: selectedCategory })}
                className={`group relative p-8 rounded-[2.5rem] border-2 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[180px]
                  bg-[#111113] border-zinc-800 hover:border-cyan-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)] hover:-translate-y-2`}
              >
                <div className="flex justify-between items-start">
                  <BrainCircuit size={32} className={isCompleted ? 'text-green-500' : 'text-cyan-500'} />
                  {isCompleted ? (
                    <div className="text-[10px] font-black text-green-500 uppercase">Cleared</div>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-black italic mb-1 uppercase tracking-tighter text-white">Stage {lvl.id}</h3>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.2em] opacity-100">{lvl.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-[#0a0a0b] text-white p-10 flex flex-col items-center justify-center overflow-hidden no-scrollbar relative">
      
      {/* 🚀 Top Left: Welcome User (No Icon) */}
      <div className="absolute top-10 left-10 text-left">
          <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-[0.4em] mb-1 italic flex items-center gap-2">
            <Sparkles size={12} className="text-cyan-500" /> Welcome 
          </p>
          <p className="text-xl font-black text-white uppercase tracking-tight">{user.name}</p>
      </div>

      {/* 🚀 Top Right: Logout Button */}
      <div className="absolute top-10 right-10">
          <button 
            onClick={() => setUser(null)}
            className="group flex items-center gap-3 px-6 py-3 bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 rounded-full transition-all duration-300 shadow-lg"
          >
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Logout</span>
              <LogOut size={18} className="text-red-500 group-hover:translate-x-1 transition-transform" />
          </button>
      </div>

      <header className="mb-16 text-center">
          <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase mb-4 italic">Debug - Quest</h1>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.6em] uppercase opacity-40">Interactive debugging system</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            onClick={() => setSelectedCategory(cat.id)} 
            className="group relative min-h-[300px] p-10 rounded-[3.5rem] border border-white/5 bg-[#111113] hover:border-white/20 transition-all duration-700 cursor-pointer overflow-hidden flex flex-col justify-between shadow-2xl"
          >
            <div className={`absolute top-0 left-0 w-3 h-full bg-gradient-to-b ${cat.color} opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div>
              <div className="text-cyan-400 mb-8 group-hover:scale-110 transition-transform duration-700">
                {cat.icon}
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter leading-none">{cat.name}</h3>
              <p className="text-zinc-500 text-xs font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">{cat.desc}</p>
            </div>

            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black text-zinc-600 bg-white/5 px-4 py-2 rounded-full uppercase tracking-widest">{cat.count} Stages</span>
              <BrainCircuit size={24} className="text-cyan-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




