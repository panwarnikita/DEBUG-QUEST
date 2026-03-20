"use client";
import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Play, ChevronLeft, Layout, Info, Terminal as TerminalIcon, FileCode, FileJson, ArrowRight, MessageSquareCode } from "lucide-react";
import { allLevels } from "../data/levels";

export default function LabRoom({ level, categoryName, onBack, onNext }: any) {
  const categoryLevels = allLevels[level.category.toLowerCase()] || allLevels['react'];
  const currentLevel = categoryLevels[level.id] || categoryLevels[1];

  const fileNames = Object.keys(currentLevel.files);
  const [activeFile, setActiveFile] = useState(fileNames[0]);
  const [userCode, setUserCode] = useState(currentLevel.files[activeFile]);

  const [hintCount, setHintCount] = useState(0);
  const [isZiaThinking, setIsZiaThinking] = useState(false);
  const [isZiaSpeaking, setIsZiaSpeaking] = useState(false);
  
  const [logs, setLogs] = useState<string[]>(["System: Initialization complete.", "Status: Kernels loaded."]);
  const [isSuccess, setIsSuccess] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const firstFile = Object.keys(currentLevel.files)[0];
    setActiveFile(firstFile);
    setUserCode(currentLevel.files[firstFile]);
    setHintCount(0);
  }, [level.id, level.category]);

  const speak = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = () => { setIsZiaSpeaking(true); videoRef.current?.play(); };
    utterance.onend = () => { setIsZiaSpeaking(false); videoRef.current?.pause(); };
    window.speechSynthesis.speak(utterance);
  };

  const askZia = () => {
    if (hintCount >= 10) {
      speak("Nikita, neural credits exhausted. Rely on your logic now.");
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      speak("Voice recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsZiaThinking(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setLogs(prev => [...prev, "System: Analyzing voice input..."]);
      processZiaRequest(transcript); 
    };

    recognition.onerror = () => {
      setIsZiaThinking(false);
      setLogs(prev => [...prev, "❌ Error: Could not capture voice."]);
      speak("I couldn't hear you clearly. Can you try again?");
    };

    recognition.start();
  };

  const processZiaRequest = async (userQuestion: string) => {
    try {
      const response = await fetch("http://localhost:8000/zia-mentor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userCode: userCode,
          question: userQuestion,
          bugReport: currentLevel.bugReport,
          context: `Hint ${hintCount + 1}. ${hintCount >= 7 ? 'GIVE DIRECT CODE HELP.' : 'NO CODE.'}`
        })
      });
      const data = await response.json();
      speak(data.reply); 
      setHintCount(prev => prev + 1);
    } catch (err) {
      setLogs(prev => [...prev, "❌ Error: Neural link failure."]);
    } finally {
      setIsZiaThinking(false);
    }
  };

  useEffect(() => {
    setIsSuccess(false);
    setLogs(["System: Level calibrated.", `Status: Stage 0${level.id} analytical mode active.`]);
    const introMsg = `Hello Nikita! ${currentLevel.bugReport}`;
    const timer = setTimeout(() => speak(introMsg), 1000);
    return () => clearTimeout(timer);
  }, [level.id]);

  const handleRun = () => {
    setLogs(prev => [...prev, "System: Running analysis..."]);
    if (currentLevel.solutionCheck(userCode)) {
      setIsSuccess(true);
      setLogs(prev => [...prev, "✅ SUCCESS: Logic integrity verified.", "Status: System stabilized."]);
      speak("Excellent, Nikita. You successfully debugged this code!");
    } else {
      setLogs(prev => [...prev, "❌ ERROR: Critical logic failure.", "Status: Regression detected."]);
      speak("The system rejected that change. Try another approach.");
    }
  };

  return (
    <div className="h-screen w-screen bg-[#050505] text-zinc-300 flex flex-col overflow-hidden font-sans">
      <nav className="h-14 border-b border-white/5 flex items-center justify-between px-8 bg-[#080808]">
        <div className="flex items-center gap-4 text-left">
          <button onClick={() => onBack(isSuccess)} className="p-2 hover:bg-zinc-800 rounded-lg transition-all"><ChevronLeft size={20} /></button>
          <div className="flex flex-col">
            <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase italic">Zia Neural Lab</span>
            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-black italic">{categoryName} // STAGE 0{level.id}</span>
          </div>
        </div>
        <button onClick={handleRun} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-2 rounded-lg text-[11px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-cyan-500/20">
          <Play size={12} fill="white" className="mr-2 inline" /> Run Analysis
        </button>
      </nav>

      <div className="flex-grow flex overflow-hidden">
        <aside className="w-[350px] bg-[#080808] border-r border-white/5 flex flex-col shadow-xl flex-shrink-0">
          <div className="p-6 border-b border-white/5 flex-grow-0 text-left">
            <h4 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-4 flex items-center gap-2 font-mono underline underline-offset-4 italic"><FileJson size={14} /> Project Source</h4>
            <div className="flex flex-col gap-2">
              {Object.keys(currentLevel.files).map((fileName) => (
                <button key={fileName} onClick={() => { setActiveFile(fileName); setUserCode(currentLevel.files[fileName]); }} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-mono transition-all ${activeFile === fileName ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-zinc-500 hover:bg-white/5'}`}><FileCode size={14} /> {fileName}</button>
              ))}
            </div>
          </div>
          
          <div className="flex-grow flex flex-col items-center justify-center p-8 bg-gradient-to-b from-transparent to-cyan-950/5">
            <div className="relative w-44 h-44 mb-6 rounded-full border-2 border-white/5 overflow-hidden bg-black shadow-2xl">
              <video ref={videoRef} src="/AI.mp4" className="w-full h-full object-cover" loop muted playsInline />
            </div>
            
            <button 
              onClick={askZia}
              disabled={isZiaThinking || isSuccess}
              className={`w-full py-3 rounded-xl border flex items-center justify-center gap-2 transition-all duration-500 ${isZiaThinking ? 'border-cyan-500/50 bg-cyan-500/10' : 'border-white/10 hover:border-cyan-500 bg-white/5'}`}
            >
              <MessageSquareCode size={14} className={isZiaThinking ? "animate-pulse text-cyan-400" : ""} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                {isZiaThinking ? 'Listening...' : `Ask Zia (${hintCount}/7)`}
              </span>
            </button>
            <div className="w-full h-1 bg-white/5 mt-3 rounded-full overflow-hidden"><div className="h-full bg-cyan-500 transition-all duration-700" style={{ width: `${(hintCount/7)*100}%` }} /></div>
          </div>
        </aside>

        <section className="flex-grow flex flex-col bg-[#0a0a0a] border-r border-white/5 relative min-w-0">
          <div className="h-[70%] overflow-hidden">
            <Editor height="100%" theme="vs-dark" language={level.category === 'html' ? 'html' : (level.category === 'python' || level.category === 'ai_ml') ? 'python' : 'javascript'} value={userCode} onChange={(val) => setUserCode(val || "")} options={{ fontSize: 16, minimap: { enabled: false }, padding: { top: 20 }, scrollBeyondLastLine: false, fontFamily: "Fira Code, monospace" }} />
          </div>
          <div className="h-[30%] bg-[#080808] border-t border-white/5 p-6 overflow-y-auto text-left">
            <h4 className="text-[12px] font-black text-red-500 uppercase mb-2 tracking-widest flex items-center gap-2 font-mono italic"><Info size={14} /> Neural_Diagnostic_Report</h4>
            <p className="text-[16px] text-zinc-100 font-bold italic border-l-2 border-red-600 pl-4 py-1 leading-relaxed">"{currentLevel.bugReport}"</p>
          </div>
        </section>

        <aside className="w-[450px] h-full flex flex-col bg-[#050505] flex-shrink-0">
          <div className="h-[55%] p-6 flex flex-col bg-[#070707] border-b border-white/5">
            <h4 className="text-[9px] font-black text-zinc-600 uppercase mb-4 flex items-center gap-2 font-mono italic underline underline-offset-4 text-left"><Layout size={14} className="text-cyan-500" /> VIRTUAL_BROWSER_HOST</h4>
            <div className="flex-grow bg-white rounded-3xl border-8 border-zinc-900 shadow-2xl overflow-hidden flex flex-col text-black scale-95 origin-center">
              <div className="h-6 bg-zinc-100 flex items-center px-4 gap-2 border-b border-zinc-200">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-grow flex items-center justify-center p-4">
                {currentLevel.renderPreview && currentLevel.renderPreview(isSuccess)}
              </div>
            </div>
          </div>

          <div className="flex-grow p-6 bg-black/40 flex flex-col overflow-hidden text-left">
            <h4 className="text-[9px] font-black text-zinc-600 uppercase mb-4 tracking-widest flex items-center gap-2 italic font-mono"><TerminalIcon size={14} /> Output_Stream_v1.0</h4>
            <div className="flex-grow text-[10px] font-mono text-zinc-500 overflow-y-auto space-y-1">
              {logs.map((log, i) => (<div key={i} className={log.includes("✅") ? "text-green-400 font-bold" : log.includes("❌") ? "text-red-500 font-bold" : ""}>{`> ${log}`}</div>))}
            </div>
            {isSuccess && <button onClick={onNext} className="mt-4 w-full bg-green-600 hover:bg-green-500 text-black py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 animate-bounce">Initiate Stage 0{level.id + 1} <ArrowRight size={14} /></button>}
          </div>
        </aside>
      </div>
    </div>
  );
}