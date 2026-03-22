"use client";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Zap, ShieldCheck, Sparkles, BrainCircuit, Terminal, ChevronRight, Activity, Cpu, Code2 } from "lucide-react";
import { useState, useEffect } from 'react';

export default function Login({ onLoginSuccess }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-screen bg-[#050505]" />;

  const features = [
    { icon: <BrainCircuit className="text-cyan-400" size={24} />, title: "ZIA AI Mentor", desc: "Get real-time voice guidance and step-by-step logic analysis." },
    { icon: <Activity className="text-cyan-400" size={24} />, title: "20+ Neural Levels", desc: "Solve real-world architectural bugs in React, JS, and Python." },
    { icon: <Terminal className="text-cyan-400" size={24} />, title: "Interactive Lab", desc: "Execute code instantly with our high-speed virtual browser." }
  ];

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row overflow-hidden font-sans text-white relative">


      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none" />


      <div className="hidden md:flex md:w-[60%] relative p-16 flex-col justify-between z-10">

        <div className="relative z-10 flex items-center gap-3">
          <div className="p-2.5 bg-cyan-600 rounded-xl shadow-lg shadow-cyan-900/20">
            <Zap size={20} className="text-black" fill="black" />
          </div>
          <span className="text-2xl font-black tracking-tight uppercase italic">
            DEBUG<span className="text-cyan-500">QUEST</span>
          </span>
        </div>


        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8">
            <Sparkles size={12} className="text-cyan-400" />
            <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest italic font-mono">Trusted by 500+ Developers</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter uppercase italic mb-6">
            Bored of Theory? <br />
            <span className="text-cyan-500">Let's Debug</span>
          </h1>

          <p className="text-zinc-500 text-lg mb-12 max-w-lg leading-relaxed font-medium">
            Join the neural lab where you solve complex code disasters. No boring lectures, just real-world practice with Zia.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-[#0a0a0c]/80 border border-white/5 shadow-2xl hover:border-cyan-500/30 transition-all group backdrop-blur-md">
                <div className="p-3 bg-zinc-900 rounded-xl group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">{f.title}</h4>
                  <p className="text-xs text-zinc-500 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="relative z-10 flex items-center gap-8 text-zinc-600">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <ShieldCheck size={16} />
            <span>ISO 27001 Certified Lab</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <Code2 size={16} />
            <span>System v4.1.0 Ready</span>
          </div>
        </div>
      </div>


      <div className="flex-grow flex flex-col items-center justify-center p-12 bg-[#080808]/60 backdrop-blur-sm border-l border-white/5 relative z-10">


        <div className="absolute top-10 right-10 text-white/[0.02] -rotate-12 pointer-events-none"><Cpu size={150} /></div>

        <div className="w-full max-w-md flex flex-col items-center text-center z-20">

          <div className="mb-12 group">
            <h2 className="text-4xl lg:text-5xl font-black uppercase italic text-white mb-4 tracking-tighter whitespace-nowrap transition-all duration-500 group-hover:tracking-widest">
              Welcome <span className="text-cyan-500">Coders</span>
            </h2>
            <p className="text-zinc-500 text-sm font-medium tracking-wide font-mono">
              Initialize neural link to begin session.
            </p>
          </div>


          <div className="w-full bg-[#0c0c0e] rounded-[3rem] border border-white/10 p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col items-center relative overflow-hidden transition-all duration-500 group hover:border-cyan-500/40 hover:-translate-y-2 hover:shadow-[0_40px_120px_rgba(6,182,212,0.15)]">

            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />


            <div className="mb-10 text-center relative z-10">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-2 block">Authentication Hub</span>
              <h3 className="text-xl font-bold text-white tracking-tight">Sync Your Progress</h3>
            </div>

            <div className="mb-12 w-full flex flex-col items-center relative z-10">
              <div className="scale-125 active:scale-95 transition-all">
                <GoogleLogin
                  onSuccess={async (res) => {
                    const decoded: any = jwtDecode(res.credential || "");
                    const response = await fetch("https://debug-quest-ii12.onrender.com/auth/google", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        email: decoded.email,
                        name: decoded.name,
                        picture: decoded.picture,
                        sub: decoded.sub
                      })
                    });
                    onLoginSuccess(await response.json());
                  }}
                  theme="filled_black"
                  shape="pill"
                  width="300"
                />
              </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10 relative z-10" />

            <button className="flex items-center gap-2 text-[11px] font-bold text-cyan-500 hover:text-cyan-400 transition-colors uppercase tracking-[0.4em] group font-mono relative z-10">
              Explore Missions <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>

          <p className="mt-16 text-[9px] text-zinc-800 font-bold uppercase tracking-[0.6em] font-mono">
            ZIA Neural Core // Established 2026
          </p>
        </div>
      </div>
    </div>
  );
}