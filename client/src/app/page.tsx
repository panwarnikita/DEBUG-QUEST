"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { Layout, Code, Terminal, Globe, ArrowLeft, BrainCircuit, Database, Beaker, LogOut, Sparkles, ChevronRight, Activity, Cpu, Zap, Lock, Flame, Target } from 'lucide-react';
import LabRoom from './components/LabRoom';
import Login from './components/Login';
import { allLevels } from './data/levels';

const categories = [
  { id: 'react', name: 'React', icon: <Code size={40} />, color: 'from-cyan-400 to-blue-600', count: 20, desc: 'Debug Hooks, State management, and Component lifecycles.' },
  { id: 'html', name: 'HTML/CSS', icon: <Globe size={40} />, color: 'from-orange-500 to-red-600', count: 16, desc: 'Fix complex layouts, CSS Grid disasters, and responsive design.' },
  { id: 'javascript', name: 'JavaSccript', icon: <Terminal size={40} />, color: 'from-yellow-400 to-green-600', count: 16, desc: 'Master asynchronous flows, closures, and logical handling.' },
  { id: 'python', name: 'Python', icon: <Layout size={40} />, color: 'from-purple-500 to-pink-600', count: 16, desc: 'Solve algorithmic bottlenecks and data processing bugs.' },
  { id: 'fullstack', name: 'Fullstack / API', icon: <Database size={40} />, color: 'from-emerald-500 to-teal-700', count: 16, desc: 'Bridge the gap between Client and Server payloads.' },
  { id: 'ai_ml', name: 'AI / ML Models', icon: <Beaker size={40} />, color: 'from-indigo-500 to-purple-800', count: 16, desc: 'Validate data shapes and debug neural logic.' },
];

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<any>(null);
  const [streak, setStreak] = useState(0);
  const [userProgress, setUserProgress] = useState<{ [key: string]: number }>({
    react: 1, html: 1, javascript: 1, python: 1, fullstack: 1, ai_ml: 1
  });

  useEffect(() => {
    if (user) {
      const savedProgress = localStorage.getItem(`progress_${user.email}`);
      if (savedProgress) setUserProgress(JSON.parse(savedProgress));

      const lastLogin = localStorage.getItem(`lastLogin_${user.email}`);
      const today = new Date().toDateString();
      const yesterdayDate = new Date();
      yesterdayDate.setDate(yesterdayDate.getDate() - 1);
      const yesterday = yesterdayDate.toDateString();
      let currentStreak = parseInt(localStorage.getItem(`streak_${user.email}`) || "0");

      if (lastLogin !== today) {
        if (lastLogin === yesterday) currentStreak += 1;
        else currentStreak = 1;
        localStorage.setItem(`streak_${user.email}`, currentStreak.toString());
        localStorage.setItem(`lastLogin_${user.email}`, today);
      }
      setStreak(currentStreak);
    }
  }, [user]);

  useEffect(() => {
    if (user) localStorage.setItem(`progress_${user.email}`, JSON.stringify(userProgress));
  }, [userProgress, user]);

  const totalStats = useMemo(() => {
    let totalLevels = 0, clearedLevels = 0;
    categories.forEach(cat => {
      totalLevels += cat.count;
      clearedLevels += (userProgress[cat.id] - 1);
    });
    return { percent: Math.round((clearedLevels / totalLevels) * 100), clearedLevels };
  }, [userProgress]);

  if (!user) return <Login onLoginSuccess={(userData: any) => setUser(userData)} />;

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
      return levelsInCat[stageId] || { id: stageId, title: 'Neural Mission' };
    });

    return (
      <div className="h-screen w-screen bg-[#0a0a0b] text-white p-10 flex flex-col overflow-hidden no-scrollbar relative">
        <button onClick={() => setSelectedCategory(null)} className="flex items-center gap-2 text-zinc-500 hover:text-white mb-6 uppercase text-[10px] tracking-widest font-black transition-all">
          <ArrowLeft size={16} /> BACK TO LABS
        </button>

        <h1 className={`text-6xl font-black mb-10 uppercase tracking-tighter italic 
  ${selectedCategory === 'react' ? 'text-cyan-400' :
            selectedCategory === 'python' ? 'text-purple-400' :
              selectedCategory === 'javascript' ? 'text-yellow-700' :
                selectedCategory === 'html' ? 'text-orange-700' :
                  selectedCategory === 'fullstack' ? 'text-emerald-500' :
                    'text-indigo-400'}`}>
          {categoryData?.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow overflow-y-auto no-scrollbar pb-10">
          {stages.map((lvl) => {
            const isCompleted = lvl.id < userProgress[selectedCategory];
            const isLocked = lvl.id > userProgress[selectedCategory];
            return (
              <div
                key={lvl.id}
                onClick={() => !isLocked && setSelectedLevel({ ...lvl, category: selectedCategory })}
                className={`group relative p-8 rounded-[2.5rem] border-2  border-gray-500 transition-all duration-500 flex flex-col justify-between min-h-[180px]
                  bg-[#111113] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:-translate-y-2
                  ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex justify-between items-start">
                  {isLocked ? <Lock size={20} className="text-zinc-700 group-hover:text-cyan-400 transition-colors" /> : <BrainCircuit size={32} className={isCompleted ? 'text-green-500' : 'text-cyan-500'} />}
                  {isCompleted && <div className="text-[10px] font-black text-green-500 uppercase tracking-widest">Cleared</div>}
                  {isLocked && <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest group-hover:text-cyan-400 transition-colors ">  <div className="w-2 h-2 rounded-full bg-cyan-500 " /></div>}
                </div>
                <div>
                  <h3 className="text-2xl font-black italic mb-1 uppercase tracking-tighter text-white">
                    Stage {lvl.id}
                  </h3>
                  <p className={`text-[10px] font-mono uppercase tracking-[0.2em] ${isLocked ? 'text-zinc-500' : 'text-zinc-500'}`}>{lvl.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }


  return (
    <div className="h-screen w-screen bg-[#050505] text-white flex flex-col md:flex-row overflow-hidden relative">


      <div className="hidden md:flex md:w-[25%] bg-[#080808] border-r border-white/5 p-5 flex-col justify-start pt-20 px-12 gap-20 relative z-10">


        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-600 rounded-xl"><Zap size={20} className="text-black" fill="black" /></div>
            <span className="text-4xl font-black tracking-tight uppercase italic">DEBUG<span className="text-cyan-500 text-4xl">QUEST</span></span>
          </div>
        </div>


        <div className="space-y-6 mb-40">
          <div className="p-6 rounded-[2.5rem] bg-[#0c0c0e] border border-white/5 shadow-xl">
            <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em] mb-3 font-bold flex items-center gap-2"><Activity size={14} className="text-cyan-500" /> Total Efficiency</p>
            <p className="text-4xl font-black italic">{totalStats.percent}%</p>
            <p className="text-[10px] text-zinc-600 mt-1 uppercase tracking-widest">{totalStats.clearedLevels} Bug problem solved</p>
          </div>

          <div className="p-6 rounded-[2.5rem] bg-[#0c0c0e] border border-white/5 flex justify-between items-center">
            <div>
              <p className="text-[9px] text-zinc-500 uppercase tracking-[0.3em] mb-1 font-bold italic text-cyan-500">Daily Streak</p>
              <p className="text-2xl font-black italic">{streak} DAYS</p>
            </div>
            <Flame size={24} className={streak > 0 ? "text-orange-500 animate-pulse" : "text-zinc-800"} />
          </div>
        </div>


        <div className="space-y-6 pt-6 border-t border-white/5">
          <div className="px-1">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={12} className="text-cyan-400" />
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.3em]">Neural Link Stable</span>
            </div>

            <p className="text-[18px] font-black text-white uppercase tracking-tight italic leading-tight whitespace-nowrap">
              Welcome, <span className="text-cyan-500">{user.name}</span>
            </p>
          </div>
          <button onClick={() => setUser(null)} className="group flex items-center gap-3 px-6 py-3 bg-red-500/5 hover:bg-red-500/10 border border-red-500/20 rounded-xl transition-all w-fit">
            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Logout</span>
            <LogOut size={16} className="text-red-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>


      <div className="flex-grow p-12 relative flex flex-col justify-center overflow-y-auto no-scrollbar">
        <header className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter uppercase italic text-white/90">Select <span className="text-cyan-400 text-4xl">Lab</span></h1>
          <p className="text-zinc-600 font-mono text-[10px] tracking-[0.6em] uppercase">Ready for mission synchronization</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[85rem]">
          {categories.map((cat) => (
            <div key={cat.id} onClick={() => setSelectedCategory(cat.id)} className="group relative min-h-[300px] p-10 rounded-[3rem] border border-white/5 bg-[#0c0c0e] hover:border-cyan-500/40 transition-all duration-700 cursor-pointer overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${cat.color} opacity-30 group-hover:opacity-100 transition-all duration-700`} />
              <div>
                <div className="text-white mb-8 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-700">{cat.icon}</div>
                <h3 className="text-3xl font-black mb-3 uppercase tracking-tighter italic">{cat.name}</h3>

                <p className="text-zinc-500 text-xs font-medium leading-relaxed opacity-60 group-hover:opacity-100 line-clamp-2">{cat.desc}</p>
              </div>
              <div className="flex justify-between items-end font-black">
                <span className="text-[10px] text-zinc-600 bg-white/5 px-4 py-2 rounded-full uppercase tracking-widest">{cat.count} Missions</span>
                <ChevronRight size={24} className="text-zinc-800 group-hover:text-cyan-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}











