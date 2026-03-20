"use client";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Command, ShieldCheck, Sparkles } from "lucide-react";
import { useState, useEffect } from 'react';

export default function Login({ onLoginSuccess }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-screen bg-[#050505]" />;

  return (
    <div className="h-screen w-screen bg-[#050505] flex items-center justify-center p-6 font-sans">
      
      {/* Background Glow - Bahut halka aur professional */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 w-full max-w-2xl">
        
        {/* Main Card - Horizontal feel dene ke liye max-width bada rakha hai */}
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[3rem] p-16 shadow-[0_40px_100px_rgba(0,0,0,0.7)] flex flex-col items-center relative overflow-hidden">
          
          {/* Top subtle line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>

          {/* 1. Project Logo & Name */}
          <div className="flex flex-col items-center mb-10">
            <div className="mb-6 p-5 bg-zinc-900/50 border border-white/10 rounded-[2rem] shadow-xl">
              <Command size={48} className="text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
              DEBUG<span className="text-cyan-500">QUEST</span>
            </h1>
          </div>

          {/* 2. Normal & Effective Text */}
          <div className="text-center max-w-md mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
               <Sparkles size={12} className="text-cyan-400" />
               <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">Ready to Start?</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Welcome to your Lab</h2>
            <p className="text-zinc-500 text-base leading-relaxed">
              Login with your account to access 20+ debugging levels and your AI mentor, Zia.
            </p>
          </div>

          {/* 3. Google Authentication Button */}
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="scale-125 transform active:scale-110 transition-transform">
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
                width="280"
              />
            </div>

            {/* Simple Footer Text */}
            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-700 tracking-[0.2em] uppercase">
              <ShieldCheck size={14} className="text-zinc-800" /> 
              Secure Access Session
            </div>
          </div>
        </div>

        {/* Outer Branding */}
        <p className="mt-10 text-center text-[9px] text-zinc-800 font-black tracking-[0.5em] uppercase">
          ZIA Neural Core // Established 2026
        </p>
      </div>
    </div>
  );
}