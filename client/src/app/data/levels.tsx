import React, { useState } from 'react';

// --- LEVEL 1 PREVIEW COMPONENT ---
const GalleryPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [previewImg, setPreviewImg] = useState("https://images.unsplash.com/photo-1506744038136-46273834b3fb");
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
  ];

  return (
    <div className="w-full max-w-[320px] p-4 bg-white rounded-3xl shadow-2xl border border-zinc-200">
      <p className="text-[10px] font-bold text-zinc-400 mb-3 text-center uppercase tracking-widest italic font-mono">
        {isSuccess ? "Live_Interface_Online" : "Static_Preview_Mode"}
      </p>
      <div className="relative h-40 w-full rounded-2xl overflow-hidden mb-4 bg-zinc-100 border border-zinc-200">
        <img src={previewImg} className="w-full h-full object-cover transition-all duration-500" />
      </div>
      <div className="flex gap-3 justify-center">
        {images.map((url, i) => (
          <button 
            key={i} 
            onClick={() => isSuccess && setPreviewImg(url)}
            className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all ${isSuccess && previewImg === url ? 'border-cyan-500 scale-110 shadow-lg' : 'border-zinc-100'}`}
          >
            <img src={url} className="w-full h-full object-cover opacity-80" />
          </button>
        ))}
      </div>
      <p className={`mt-4 text-[10px] text-center font-bold font-mono ${isSuccess ? 'text-green-600' : 'text-red-400 animate-pulse'}`}>
        {isSuccess ? "✓ REACTIVE_LINK_STABLE" : "⚠ NEURAL_LINK_BROKEN"}
      </p>
    </div>
  );
};

// --- LEVEL 2 PREVIEW COMPONENT ---
const PowerPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className={`p-10 w-64 rounded-[2rem] text-center transition-all duration-500 shadow-xl ${isOn && isSuccess ? 'bg-cyan-600 shadow-cyan-500/50' : 'bg-zinc-200'}`}>
      <div className={`w-12 h-12 mx-auto rounded-full mb-4 border-4 border-white shadow-inner ${isOn && isSuccess ? 'bg-white animate-pulse' : 'bg-zinc-400'}`} />
      <h2 className={`text-xl font-black italic ${isOn && isSuccess ? 'text-white' : 'text-zinc-500'}`}>
        {isOn && isSuccess ? "POWER_ON" : "STDBY"}
      </h2>
      <button 
        onClick={() => isSuccess && setIsOn(!isOn)}
        className="mt-6 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-zinc-900 text-white rounded-lg active:scale-95 transition-transform"
      >
        {isSuccess ? "Push to Toggle" : "LOCKED"}
      </button>
    </div>
  );
};


// --- LEVEL 3 PREVIEW COMPONENT ---
const IdentityPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [name, setName] = useState("");
  
  return (
    <div className="flex flex-col p-6 bg-[#080808] rounded-3xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)] w-full max-w-[300px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <span className="font-mono text-[9px] tracking-[0.3em] text-cyan-500 uppercase">Identity_Scanner</span>
      </div>

      <input 
        disabled={!isSuccess}
        value={isSuccess ? name : "LOCKED_INPUT"}
        onChange={(e) => setName(e.target.value)}
        className={`w-full bg-black border p-3 rounded-xl font-mono text-xs transition-all outline-none
          ${isSuccess ? 'border-zinc-700 text-white focus:border-cyan-500' : 'border-red-900/50 text-red-500/50 cursor-not-allowed'}`}
        placeholder="Awaiting DNA String..."
      />

      <div className="mt-8 p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <p className="font-mono text-[8px] text-zinc-500 uppercase mb-2">Decoded_Result:</p>
        <p className="font-mono text-sm text-cyan-400 break-all min-h-[20px]">
          {isSuccess ? (name || "________________") : "SYSTEM_SYNC_ERROR"}
        </p>
      </div>
    </div>
  );
};


// --- LEVEL 4 PREVIEW COMPONENT ---
const NullSafetyPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [showData, setShowData] = useState(false);

  return (
    <div className="flex flex-col p-6 bg-[#080808] rounded-3xl border border-red-500/20 shadow-xl w-full max-w-[300px]">
      <div className="flex justify-between items-center mb-6">
        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Database_Status</span>
        <div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-red-500 animate-ping'}`} />
      </div>

      <div className={`p-4 rounded-2xl border mb-4 transition-all duration-500
        ${isSuccess ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/10 border-red-500/30'}`}>
        <p className="font-mono text-[10px] text-zinc-400 mb-2">User_Profile:</p>
        <h2 className="font-mono text-sm font-bold text-white">
          {isSuccess ? "Nikita_Dev_Intern" : "FATAL_CRASH: Cannot read property 'name' of null"}
        </h2>
      </div>

      <button 
        onClick={() => setShowData(!showData)}
        className={`w-full py-3 rounded-xl font-mono text-[10px] font-black uppercase tracking-widest transition-all
          ${isSuccess ? 'bg-zinc-100 text-black active:scale-95' : 'bg-red-900/20 text-red-500 border border-red-900/50 cursor-not-allowed'}`}
      >
        {isSuccess ? "Fetch_User_Data" : "System_Halted"}
      </button>
    </div>
  );
};

// --- LEVEL 5 PREVIEW COMPONENT ---
const InfiniteLoopPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [requestCount, setRequestCount] = useState(0);

  React.useEffect(() => {
    if (!isSuccess) {
      const interval = setInterval(() => {
        setRequestCount(prev => prev + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col p-6 bg-[#080808] rounded-3xl border border-orange-500/20 shadow-xl w-full max-w-[300px]">
      <div className="flex justify-between items-center mb-4">
        <span className="font-mono text-[9px] text-orange-500 uppercase tracking-widest italic">Network_Monitor</span>
        <div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-orange-500 animate-ping'}`} />
      </div>

      <div className="bg-black p-4 rounded-xl border border-white/5 mb-4">
        <p className="font-mono text-[10px] text-zinc-500 mb-1">API_Requests_Sent:</p>
        <p className={`font-mono text-2xl font-black ${isSuccess ? 'text-green-600' : 'text-orange-500'}`}>
          {isSuccess ? "1" : requestCount}
        </p>
      </div>

      <div className={`text-[9px] font-mono p-2 rounded ${isSuccess ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500 animate-bounce'}`}>
        {isSuccess ? "STATUS: Connection Stable" : "CRITICAL: Memory Leak / Loop Detected"}
      </div>
    </div>
  );
};

  // --- LEVEL 6 PREVIEW COMPONENT ---
const PropDrillPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  return (
    <div className="flex flex-col p-6 bg-[#080808] rounded-3xl border border-purple-500/20 shadow-xl w-full max-w-[300px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
        <span className="font-mono text-[9px] text-purple-500 uppercase">Data_Pipeline</span>
      </div>

      <div className="space-y-3">
        <div className="h-8 w-full bg-zinc-900 rounded border border-white/5 flex items-center px-3 font-mono text-[10px] text-zinc-400">Parent_Node: "Active"</div>
        <div className="h-8 w-full bg-zinc-900 rounded border border-white/5 flex items-center px-3 font-mono text-[10px] text-zinc-400">Middle_Node: "Relaying..."</div>
        <div className={`h-12 w-full rounded border flex items-center justify-center font-mono text-xs font-bold transition-all duration-500
          ${isSuccess ? 'border-green-500/30 bg-green-500/5 text-green-400' : 'border-dashed border-zinc-700 bg-transparent text-zinc-700'}`}>
          {isSuccess ? "✓ DATA_RECEIVED" : "NO_DATA_SIGNAL"}
        </div>
      </div>
    </div>
  );
};

// --- LEVEL 7 PREVIEW COMPONENT ---
const StaleStatePreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [count, setCount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const triggerProcess = () => {
    setIsProcessing(true);
    // Simulating multiple rapid updates
    setTimeout(() => {
      setCount(prev => isSuccess ? prev + 1 : 1); // If failed, it resets to 1 instead of adding
      setIsProcessing(false);
    }, 500);
  };

  return (
    <div className="flex flex-col p-6 bg-[#080808] rounded-3xl border border-blue-500/20 shadow-xl w-full max-w-[300px]">
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest italic">Core_Processor</span>
        <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-yellow-500 animate-pulse' : 'bg-blue-500'}`} />
      </div>

      <div className="bg-black p-6 rounded-2xl border border-white/5 mb-6 text-center relative overflow-hidden">
        {isProcessing && <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />}
        <p className="font-mono text-[10px] text-zinc-500 mb-1">Data_Packets_Synced:</p>
        <p className={`font-mono text-3xl font-black ${isSuccess ? 'text-cyan-400' : 'text-blue-700'}`}>
          {count.toString().padStart(2, '0')}
        </p>
      </div>

      <button 
        onClick={triggerProcess}
        className={`w-full py-4 rounded-xl font-mono text-[10px] font-black uppercase tracking-[0.2em] transition-all
          ${isSuccess 
            ? 'bg-zinc-100 text-black hover:bg-cyan-400 active:scale-95' 
            : 'bg-zinc-900 text-zinc-700 border border-zinc-800'}`}
      >
        {isSuccess ? "Sync_Packet" : "Link_Unstable"}
      </button>

      {!isSuccess && (
        <p className="mt-4 text-[9px] text-red-500/50 font-mono text-center italic">
          Warning: Sequence_Collision_Detected
        </p>
      )}
    </div>
  );
};

// --- LEVEL 8 PREVIEW COMPONENT ---
const DataMismatchPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  return (
    <div className="flex flex-col p-6 bg-[#080808] rounded-3xl border border-green-500/20 shadow-xl w-full max-w-[300px]">
      <div className="flex justify-between items-center mb-4">
        <span className="font-mono text-[9px] text-green-500 uppercase tracking-widest italic">FastAPI_Stream</span>
        <div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-red-500 animate-pulse'}`} />
      </div>

      <div className="bg-black p-4 rounded-xl border border-white/5 mb-4 font-mono text-[11px]">
        <p className="text-zinc-500 mb-2 uppercase text-[8px]">Raw_Buffer:</p>
        <div className={isSuccess ? "text-cyan-400" : "text-red-400 break-all"}>
          {isSuccess ? '{"status": "READY", "temp": 32}' : "[object Object] OR Unexpected Token <"}
        </div>
      </div>

      <div className={`p-3 rounded-lg border text-center font-mono text-xs
        ${isSuccess ? 'border-green-500/30 bg-green-500/5 text-green-400' : 'border-red-500/30 bg-red-500/5 text-red-500'}`}>
        {isSuccess ? "DECODING_SUCCESSFUL" : "PARSING_FAILED: Data Type Mismatch"}
      </div>
    </div>
  );
};

// --- LEVEL 9 PREVIEW COMPONENT ---
const LoginPortalPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="relative w-full max-w-[320px] p-8 bg-[#050505] rounded-[2.5rem] border-2 border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-[80px]" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white/30 rounded-full border-t-white animate-spin" />
        </div>
        
        <h2 className="text-white font-black tracking-tighter text-xl mb-2">NEURAL_AUTH</h2>
        <p className="text-[10px] text-zinc-500 font-mono mb-8 uppercase tracking-[0.2em]">Secure_Access_Protocol</p>

        <div className="space-y-4">
          <div className="relative">
            <input 
              readOnly
              type={isSuccess && isVisible ? "text" : "password"} 
              value="secret_neural_key"
              className="w-full bg-zinc-900/50 border border-white/10 p-4 rounded-2xl text-xs font-mono text-cyan-500 outline-none"
            />
            <button 
              onClick={() => isSuccess && setIsVisible(!isVisible)}
              className={`absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded
                ${isSuccess ? 'text-cyan-400 hover:bg-cyan-500/10' : 'text-zinc-700 cursor-not-allowed'}`}
            >
              {isVisible ? "Hide" : "Show"}
            </button>
          </div>
          
          <button className={`w-full py-4 rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase transition-all
            ${isSuccess ? 'bg-white text-black shadow-xl' : 'bg-zinc-800 text-zinc-600 opacity-50'}`}>
            Initiate_Login
          </button>
        </div>
      </div>
    </div>
  );
};

// --- LEVEL 10 PREVIEW COMPONENT ---
const SearchPortalPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [query, setQuery] = useState("");
  const allModules = ["Quantum_Core", "Bio_Link", "Neural_Mesh", "Stealth_Mod"];
  
  // Logic simulation
  const displayedModules = isSuccess 
    ? allModules.filter(m => m.toLowerCase().includes(query.toLowerCase())) 
    : allModules;

  return (
    <div className="w-full h-full min-h-[400px] bg-white flex flex-col items-center justify-start p-10 relative">
      <div className="w-full max-w-[450px]">
        {/* Header with Blue Accents */}
        <div className="flex items-center gap-3 mb-8 border-b-2 border-blue-600 pb-4">
          <div className="w-4 h-4 rounded-full bg-blue-600 shadow-md" />
          <h2 className="text-sm font-black tracking-widest text-blue-900 uppercase">Search Interface</h2>
        </div>

        {/* Big Search Input */}
        <div className="relative mb-10">
          <input 
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="TYPE_TO_SEARCH..."
            className="w-full bg-zinc-100 border-2 border-zinc-200 p-2 rounded-2xl text-lg font-bold text-blue-600 outline-none focus:border-blue-500 transition-all shadow-sm"
          />
          <div className={`absolute right-6 top-1/2 -translate-y-1/2 font-black text-xs ${isSuccess ? 'text-green-600' : 'text-red-500 animate-pulse'}`}>
            {isSuccess ? "FILTER_ACTIVE" : "LOGIC_DISABLED"}
          </div>
        </div>

        {/* Module List with Bigger Text */}
        <div className="space-y-4">
          {displayedModules.map((m) => (
            <div key={m} className="p-2 bg-white border-2 border-zinc-100 rounded-2xl flex justify-between items-center shadow-sm hover:border-blue-200 transition-all">
              <span className="font-mono text-lg font-bold text-zinc-800">{m}</span>
              <span className="text-[10px] bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-black uppercase">Active</span>
            </div>
          ))}
          {displayedModules.length === 0 && (
            <div className="text-center py-12 text-zinc-400 font-bold text-xl italic underline decoration-blue-500 decoration-2">No Matches Found</div>
          )}
        </div>
      </div>
    </div>
  );
};


// --- LEVEL 11 PREVIEW COMPONENT ---
const SubscriptionPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [isYearly, setIsYearly] = useState(false);
  
  // Logic simulation for the student's fix
  const price = isSuccess 
    ? (isYearly ? 99 : 12) 
    : 12;

  return (
    <div className="w-full h-full min-h-[400px] bg-white flex flex-col items-center justify-center p-8 border-t-4 border-blue-600">
      <div className="w-full max-w-[350px] text-center">
        <h2 className="text-blue-900 font-black text-[10px] uppercase tracking-[0.4em] mb-8">Billing_Protocol_v3</h2>
        
        {/* Futuristic Toggle Button */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-[10px] font-bold ${!isYearly ? 'text-blue-600' : 'text-zinc-400'}`}>MONTHLY</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-zinc-100 rounded-full p-1 relative border border-zinc-200 transition-all"
          >
            <div className={`w-5 h-5 bg-blue-600 rounded-full transition-all duration-300 ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-[10px] font-bold ${isYearly ? 'text-blue-600' : 'text-zinc-400'}`}>YEARLY</span>
        </div>

        {/* Pricing Card */}
        <div className="bg-zinc-50 border-2 border-zinc-100 p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          {isYearly && isSuccess && (
            <div className="absolute top-4 right-[-35px] bg-blue-600 text-white text-[8px] font-black px-10 py-1 rotate-45 uppercase">Best Value</div>
          )}
          
          <p className="text-zinc-500 font-bold text-[10px] uppercase mb-2">Neural_Access_Plan</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-blue-900 text-5xl font-black">${price}</span>
            <span className="text-zinc-400 font-bold">/{isYearly && isSuccess ? 'yr' : 'mo'}</span>
          </div>

          <div className="mt-8 space-y-3">
            <div className="h-1 w-full bg-zinc-200 rounded-full" />
            <div className="h-1 w-2/3 bg-zinc-200 rounded-full" />
          </div>
        </div>

        {!isSuccess && isYearly && (
          <p className="mt-6 text-red-500 font-bold text-[10px] uppercase animate-pulse">Error: Price_Calculation_Static</p>
        )}
      </div>
    </div>
  );
};



// --- LEVEL 12 PREVIEW COMPONENT ---
const TaskTrackerPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Sync Neural Link" },
    { id: 2, text: "Calibrate Sensors" },
    { id: 3, text: "Update Bio-Firmware" }
  ]);

  const handleDelete = (id: number) => {
    if (isSuccess) {
      setTasks(tasks.filter(t => t.id !== id));
    } else {
      alert("Logic Error: Deletion script failed to execute.");
    }
  };

  return (
    <div className="w-full h-full min-h-[400px] bg-white flex flex-col items-center justify-center p-8 border-t-4 border-emerald-600 shadow-sm">
      <div className="w-full max-w-[350px]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-emerald-900 font-black text-[10px] uppercase tracking-[0.3em]">Task_Manager_v1.2</h2>
          <span className="bg-emerald-100 text-emerald-700 text-[8px] font-black px-2 py-1 rounded">SECURE</span>
        </div>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl flex justify-between items-center group transition-all hover:border-emerald-200 shadow-sm">
              <span className="font-mono text-sm font-bold text-zinc-700">{task.text}</span>
              <button 
                onClick={() => handleDelete(task.id)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                ✕
              </button>
            </div>
          ))}
          {tasks.length === 0 && (
            <div className="text-center py-10">
              <p className="text-emerald-600 font-bold text-sm italic">✓ All Protocols Completed</p>
              <button onClick={() => window.location.reload()} className="mt-4 text-[9px] uppercase font-black text-zinc-400 underline">Reset_Lab</button>
            </div>
          )}
        </div>

        {!isSuccess && (
          <div className="mt-8 p-3 bg-red-50 border border-red-100 rounded-xl">
             <p className="text-[9px] text-red-600 font-bold text-center uppercase tracking-tighter">
                CRITICAL: State Mutation Failed // Item Persistent
             </p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- LEVEL 13 PREVIEW COMPONENT ---
const TweetBoxPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [text, setText] = useState("");
  const limit = 280;
  
  // Logic simulation: If success, do math. If not, stay static.
  const charsLeft = isSuccess ? limit - text.length : limit;

  return (
    <div className="w-full h-full min-h-[400px] bg-white flex flex-col items-center justify-center p-10 border-t-8 border-black shadow-2xl">
      <div className="w-full max-w-[400px]">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-black tracking-tighter text-black">THOUGHT_STREAM</h2>
          <span className={`font-mono text-sm font-bold ${charsLeft < 20 ? 'text-red-500' : 'text-zinc-400'}`}>
            {charsLeft} / {limit}
          </span>
        </div>

        <textarea 
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your neural network?"
          className="w-full h-40 bg-zinc-50 border-2 border-zinc-200 p-5 rounded-3xl text-lg font-medium text-black outline-none focus:border-black transition-all resize-none shadow-inner"
        />

        <div className="mt-6 flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-200" />
            <div className="w-3 h-3 rounded-full bg-zinc-200" />
          </div>
          <button 
            className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all
              ${isSuccess && text.length > 0 ? 'bg-black text-white scale-105 shadow-lg' : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'}`}
          >
            Broadcast
          </button>
        </div>
        
        {!isSuccess && text.length > 0 && (
          <p className="mt-4 text-[10px] text-center font-bold text-red-500 uppercase tracking-widest animate-pulse">
            Logic_Error: Counter_Is_Non_Reactive
          </p>
        )}
      </div>
    </div>
  );
};


// --- LEVEL 14 PREVIEW COMPONENT ---
const PowerUpPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full h-full min-h-[400px] bg-white flex flex-col items-center justify-center p-10 border-t-8 border-purple-600 shadow-xl">
      <div className="w-full max-w-[320px]">
        <h2 className="text-[10px] font-black tracking-[0.5em] text-zinc-400 mb-8 text-center uppercase">Neural_Enhancer_v4</h2>

        <div 
          onClick={() => setIsActive(!isActive)}
          className={`cursor-pointer p-8 rounded-[3rem] border-4 transition-all duration-500 flex flex-col items-center text-center
            ${(isSuccess && isActive) 
              ? 'border-purple-600 bg-purple-50 shadow-[0_0_40px_rgba(147,51,234,0.3)] scale-105' 
              : 'border-zinc-100 bg-white shadow-sm'}`}
        >
          <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-colors duration-500
            ${(isSuccess && isActive) ? 'bg-purple-600 text-white' : 'bg-zinc-100 text-zinc-400'}`}>
            <span className="text-2xl font-black">⚡</span>
          </div>

          <h3 className={`text-xl font-black mb-2 transition-colors duration-500
            ${(isSuccess && isActive) ? 'text-purple-900' : 'text-zinc-300'}`}>
            OVERDRIVE
          </h3>
          
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            {(isSuccess && isActive) ? 'System_Optimized' : 'Standby_Mode'}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <input 
            type="checkbox" 
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
            className="w-5 h-5 accent-purple-600 cursor-pointer"
          />
          <label className="font-mono text-[10px] font-black text-zinc-500 uppercase">Activate_Module</label>
        </div>

        {!isSuccess && isActive && (
          <p className="mt-6 text-center text-[10px] font-bold text-red-500 uppercase animate-bounce">
            CSS_Link_Broken // Class_Not_Applied
          </p>
        )}
      </div>
    </div>
  );
};


// --- LEVEL 15 PREVIEW COMPONENT ---
const JoinPortalPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [email, setEmail] = useState("");
  const isInvalid = email.length < 5;

  return (
    <div className="w-full h-full min-h-[400px] bg-white flex flex-col items-center justify-center p-10 border-t-8 border-pink-500 shadow-2xl">
      <div className="w-full max-w-[350px] text-center">
        <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-pink-100">
          <span className="text-3xl">💖</span>
        </div>
        
        <h2 className="text-2xl font-black text-zinc-800 mb-2 uppercase tracking-tighter">Join_The_Pulse</h2>
        <p className="text-[10px] font-bold text-zinc-400 mb-8 uppercase tracking-[0.2em]">Security_Clearance_Required</p>

        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ENTER_NEURAL_EMAIL"
          className="w-full bg-zinc-50 border-2 border-zinc-100 p-4 rounded-2xl text-center font-bold text-pink-600 outline-none focus:border-pink-300 transition-all mb-4"
        />

        <button 
          disabled={!isSuccess} // Simulation: Button stays active if logic is wrong
          className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all
            ${(!isInvalid || !isSuccess) ? 'bg-pink-500 text-white shadow-lg active:scale-95' : 'bg-zinc-100 text-zinc-300 cursor-not-allowed'}`}
        >
       Join Now
        </button>

        {!isSuccess && email.length === 0 && (
          <p className="mt-4 text-[9px] font-black text-red-500 uppercase animate-pulse">
            Validation_Bypass_Detected // Input_Empty
          </p>
        )}
      </div>
    </div>
  );
};


// --- LEVEL 16 PREVIEW COMPONENT ---
const FocusPortalPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  React.useEffect(() => {
    if (isSuccess && inputRef.current) {
      inputRef.current.focus();
      setIsFocused(true);
    }
  }, [isSuccess]);

  return (
    <div className="w-full min-h-[400px] bg-white flex flex-col items-center justify-center p-10 border-t-8 border-slate-900 shadow-2xl">
      <div className="w-full max-w-[350px]">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 bg-slate-900 rotate-45" />
          <h2 className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">Secure_Terminal_v7</h2>
        </div>

        <div className={`relative transition-all duration-500 ${isFocused ? 'scale-105' : 'scale-100'}`}>
          <input 
            ref={inputRef}
            type="text"
            readOnly={!isSuccess}
            placeholder="AWAITING_INPUT..."
            className={`w-full bg-zinc-50 border-2 p-5 rounded-xl font-mono text-sm outline-none transition-all
              ${isSuccess ? 'border-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.1)]' : 'border-zinc-100 text-zinc-300'}`}
          />
          {isSuccess && (
            <div className="absolute -right-2 -top-2 w-4 h-4 bg-slate-900 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-[8px] text-white">!</span>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-2">
          <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
            <div className={`h-full bg-slate-900 transition-all duration-1000 ${isSuccess ? 'w-full' : 'w-0'}`} />
          </div>
          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest text-right">
            {isSuccess ? 'Auto_Focus_Engaged' : 'Manual_Intervention_Required'}
          </p>
        </div>
      </div>
    </div>
  );
};


// --- LEVEL 17 PREVIEW COMPONENT ---
const RenderLoopPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isSuccess) {
      const interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col p-6 bg-[#080808] rounded-3xl border border-red-500/20 shadow-xl w-full max-w-[300px]">
      <div className="flex justify-between items-center mb-4">
        <span className="font-mono text-[9px] text-red-500 uppercase tracking-widest italic">CPU_OVERHEAT_WARNING</span>
        <div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-red-500 animate-ping'}`} />
      </div>
      <div className="bg-black p-4 rounded-xl border border-white/5 mb-4 text-center overflow-hidden">
        <p className="font-mono text-[10px] text-zinc-500 mb-1 italic uppercase">Renders_Detected:</p>
        <p className={`font-mono text-4xl font-black ${isSuccess ? 'text-green-400' : 'text-red-500'}`}>
          {isSuccess ? "01" : count}
        </p>
      </div>
      <div className={`p-2 rounded text-[8px] font-mono text-center uppercase ${isSuccess ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500 animate-bounce'}`}>
        {isSuccess ? "✓ LifeCycle_Optimized" : "⚠ Error: Infinite_Re-Render_Loop"}
      </div>
    </div>
  );
};

// --- LEVEL 18 PREVIEW COMPONENT ---
const FragmentPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-3xl shadow-xl w-full max-w-[300px] border border-zinc-100">
      <div className="flex items-center gap-2 mb-6 border-b pb-2">
        <div className="w-3 h-3 bg-zinc-800 rounded-sm" />
        <h2 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">DOM_Structure_Validator</h2>
      </div>
      <div className={`p-6 rounded-2xl border-2 transition-all duration-500 
        ${isSuccess ? 'bg-zinc-50 border-emerald-500' : 'bg-red-50 border-red-200 border-dashed'}`}>
        {isSuccess ? (
          <div className="space-y-3">
            <div className="h-2 w-full bg-emerald-200 rounded" />
            <div className="h-2 w-2/3 bg-emerald-200 rounded" />
          </div>
        ) : (
          <div className="flex flex-col items-center text-red-400">
            <span className="text-xl mb-2">⚠</span>
            <p className="text-[9px] font-mono text-center leading-tight">Parsing Error: Component must return a single root element.</p>
          </div>
        )}
      </div>
      <p className="mt-4 text-[8px] font-bold text-zinc-400 text-center uppercase tracking-widest">
        {isSuccess ? "Hierarchy: Valid" : "Hierarchy: Detached"}
      </p>
    </div>
  );
};

// --- LEVEL 19 PREVIEW COMPONENT ---
const PropFlowPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  return (
    <div className="flex flex-col p-8 bg-[#050505] rounded-[2.5rem] border-2 border-white/5 shadow-2xl w-full max-w-[320px] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-3xl" />
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-1.5 h-1.5 rounded-full ${isSuccess ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]' : 'bg-zinc-800'}`} />
        <span className="font-mono text-[9px] text-zinc-600 uppercase tracking-[0.3em]">Data_Pipeline_v2</span>
      </div>
      <div className="space-y-4">
        <div className="p-3 bg-zinc-900/50 rounded-xl border border-white/5 font-mono text-[10px] text-zinc-400">Source: Nikita</div>
        <div className="flex justify-center"><div className={`w-[2px] h-6 ${isSuccess ? 'bg-blue-500' : 'bg-zinc-800'} transition-colors`} /></div>
        <div className={`p-4 rounded-2xl border flex items-center justify-center font-mono text-xs font-bold transition-all duration-700
          ${isSuccess ? 'border-blue-500 bg-blue-500/5 text-blue-400' : 'border-zinc-800 text-zinc-800'}`}>
          {isSuccess ? "Welcome, Nikita!" : "Welcome, undefined"}
        </div>
      </div>
    </div>
  );
};

// --- LEVEL 20 PREVIEW COMPONENT ---
const ToggleLogicPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  return (
    <div className="flex flex-col p-10 bg-white rounded-[3rem] shadow-2xl w-full max-w-[300px] items-center text-center border border-zinc-100">
      <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 transition-all duration-700
        ${isSuccess ? 'bg-emerald-500 text-white shadow-lg' : 'bg-zinc-100 animate-spin-slow border-2 border-t-zinc-400 border-zinc-100'}`}>
        {isSuccess ? <span>✓</span> : <div className="w-6 h-6 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin" />}
      </div>
      <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">Interface_Ready</h3>
      <p className={`font-mono text-xs font-bold ${isSuccess ? 'text-zinc-800' : 'text-zinc-300'}`}>
        {isSuccess ? "DASHBOARD_ACTIVE" : "LOADING_SYSTEM..."}
      </p>
      {!isSuccess && <p className="mt-4 text-[8px] text-red-500 font-bold uppercase animate-pulse italic">Error: String_Boolean_Mismatch</p>}
    </div>
  );
};






// --- MAIN LEVELS OBJECT ---
export const reactLevels: any = {
  1: {
    id: 1,
    title: "State Management: Neural Gallery",
    files: {
      "Gallery.js": `import React, { useState } from 'react';\n\nexport default function Gallery() {\n  const images = [\n    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",\n    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",\n    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"\n  ];\n  const [mainImg, setMainImg] = useState(images[0]);\n\n  return (\n    <div className="p-4 bg-white rounded-3xl shadow-xl max-w-sm mx-auto border border-zinc-200">\n      <div className="relative h-44 mb-4 overflow-hidden rounded-2xl border-4 border-zinc-100">\n        <img src={mainImg} className="w-full h-full object-cover" />\n      </div>\n      <div className="flex gap-2 justify-center">\n        {images.map((img, i) => (\n          <button \n            key={i} \n            onClick={() => console.log("Clicked!")}\n            className="w-12 h-12 rounded-xl overflow-hidden border-2 border-zinc-200"\n          >\n            <img src={img} className="w-full h-full object-cover" />\n          </button>\n        ))}\n      </div>\n    </div>\n  );\n}`
    },
    bugReport: "VISUAL: The gallery is stuck. Clicking the small images doesn't change the big one. TECHNICAL: The onClick handler is missing the state setter function. MISSION: Connect 'setMainImg(img)' to make it reactive.",
    solutionCheck: (code: string) => code.includes("setMainImg(img)"),
    renderPreview: (isSuccess: boolean) => <GalleryPreview isSuccess={isSuccess} />
  },

  2: {
    id: 2,
    title: "Logic Flow: Power Grid",
    files: {
      "PowerControl.js": `import React, { useState } from 'react';\n\nexport default function PowerControl() {\n  const [isOn, setIsOn] = useState(false);\n\n  const toggleSystem = () => {\n    // 🔍 BUG: Function is empty!\n  };\n\n  return (\n    <div className={\`p-8 rounded-3xl \${isOn ? 'bg-cyan-900' : 'bg-zinc-100'}\`}>\n      <h2 className={isOn ? 'text-white' : 'text-black'}>\n        SYSTEM: {isOn ? 'ONLINE' : 'OFFLINE'}\n      </h2>\n      <button onClick={toggleSystem} className="mt-4 p-2 bg-black text-white">\n        TOGGLE\n      </button>\n    </div>\n  );\n}`
    },
    bugReport: "VISUAL: The 'TOGGLE_POWER' button does not respond when clicked. TECHNICAL: The 'toggleSystem' function is empty, so it doesn't update the state.",
    solutionCheck: (code: string) => code.includes("setIsOn(!isOn)"),
    renderPreview: (isSuccess: boolean) => <PowerPreview isSuccess={isSuccess} />
  },
  3: {
    id: 3,
    title: "Data Sync: Biometric Identity Link",
    files: {
      "IdentityForm.js": `import React, { useState } from 'react';

export default function IdentityForm() {
  const [identity, setIdentity] = useState("");

  return (
    <div className="p-10 bg-gray-900 text-white">
      <label className="block mb-2">Enter Access Code:</label>
      <input 
        type="text" 
        value={identity}
        onChange={(e) => setIdentity(_)}
        className="text-black p-2 w-full"
      />
      
      <div className="mt-5 p-4 border border-dashed">
        <p>Current Identity: {identity}</p>
      </div>
    </div>
  )
};`
    },
    bugReport: "VISUAL: The input field is completely frozen. You can click it, but you cannot type anything inside. TECHNICAL: This is a 'Controlled Component' error. You have successfully bound the 'value' to the state variable, but you are missing the event listener that captures the user's keystrokes and updates the state. MISSION: Implement the missing property on the input tag to sync the typed text back into the 'identity' state.",
    solutionCheck: (code: string) => code.includes("onChange") && (code.includes("e.target.value") || code.includes("event.target.value")),
    renderPreview: (isSuccess: boolean) => <IdentityPreview isSuccess={isSuccess} />
  },

  4: {
    id: 4,
    title: "Crash Recovery: The Null Pointer",
    files: {
      "UserProfile.js": `import React, { useState } from 'react';

export default function UserProfile() {
  // Simulating an API response that starts as null
  const [user, setUser] = useState(null);

  return (
    <div className="p-10 bg-black text-white text-center">
      <h1>User Dashboard</h1>
      <p>Welcome, {user.name}</p>

      <button onClick={() => setUser({ name: "Nikita" })}>
        Load Profile
      </button>
    </div>
  )
};`
    },
    bugReport: "VISUAL: The entire screen goes white or shows a 'TypeError' immediately. TECHNICAL: You are trying to access 'user.name' while the 'user' state is still 'null'. In React, you must handle the case where data hasn't loaded yet. MISSION: Use 'Conditional Rendering' or the 'Optional Chaining' operator (?.) to stop the app from accessing the name property until the user object exists.",
    solutionCheck: (code: string) => code.includes("user?.name") || code.includes("user && user.name") || code.includes("user ?"),
    renderPreview: (isSuccess: boolean) => <NullSafetyPreview isSuccess={isSuccess} />
  },
  5: {
    id: 5,
    title: "Performance: The Infinite Loop",
    files: {
      "DataFetcher.js": `import React, { useState, useEffect } from 'react';

export default function DataFetcher() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  });

  return (
    <div className="p-10 bg-gray-900 text-white">
      <h1>Requests Sent: {count}</h1>
    </div>
  )
};`
    },
    bugReport: "VISUAL: The request counter is increasing rapidly without stopping, causing the system to lag. TECHNICAL: The 'useEffect' hook is triggering a re-render by updating state, and since it has no constraints, it runs again immediately after that render. MISSION: Restrict the effect so that it only executes once when the component initially loads.",
    solutionCheck: (code: string) => code.includes("}, []);"),
    renderPreview: (isSuccess: boolean) => <InfiniteLoopPreview isSuccess={isSuccess} />
  },

  6: {
    id: 6,
    title: "Data Flow: The Prop Relay",
    files: {
      "App.js": `import React from 'react';
import UserCard from './UserCard';

export default function App() {
  const userName = "Zia_Admin";
  return <UserCard name={userName} />;
}`,
      "UserCard.js": `import React from 'react';
import ProfileDisplay from './ProfileDisplay';

export default function UserCard({ name }) {
  return (
    <div className="border p-4">
      <ProfileDisplay />
    </div>
  );
}`,
      "ProfileDisplay.js": `import React from 'react';

export default function ProfileDisplay({ name }) {
  return <h2 className="text-xl">User: {name}</h2>;
}`
    },
    bugReport: "VISUAL: The 'ProfileDisplay' component is not showing the user's name, even though the data is correctly defined in the main 'App' component. TECHNICAL: The 'UserCard' component is receiving the 'name' prop but is failing to pass it down to its child. This breaks the data pipeline. MISSION: Ensure the 'name' prop is relayed through 'UserCard' so it reaches the final display component.",
    solutionCheck: (code: string) => code.includes("name={name}"),
    renderPreview: (isSuccess: boolean) => <PropDrillPreview isSuccess={isSuccess} />
  },
  7: {
    id: 7,
    title: "Logic: The Race Condition",
    files: {
      "AsyncCounter.js": `import React, { useState } from 'react';

export default function AsyncCounter() {
  const [count, setCount] = useState(0);

  const handleBurstUpdate = () => {
    
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
  };

  return (
    <div className="p-10 text-center bg-gray-900 text-white">
      <h2 className="text-4xl">{count}</h2>
      <button 
        onClick={handleBurstUpdate}
        className="mt-4 px-6 py-2 bg-blue-500"
      >
        BURST_SYNC
      </button>
    </div>
  )
};`
    },
    bugReport: "VISUAL: Rapid clicks on 'BURST_SYNC' are being ignored. The counter only increases by 1 even if you click 5 times quickly. TECHNICAL: The function captures a 'stale' version of the count variable inside the closure. To fix this, you must ensure the update always uses the most recent value provided by the state engine. MISSION: Modify the state setter to use a callback function that receives the latest value.",
    solutionCheck: (code: string) => code.includes("prev") || code.includes("c =>") || code.includes("current =>"),
    renderPreview: (isSuccess: boolean) => <StaleStatePreview isSuccess={isSuccess} />
  },
  8: {
    id: 8,
    title: "Integration: The JSON Ghost",
    files: {

      "SensorDisplay.js": `import React, { useState, useEffect } from 'react';

export default function SensorDisplay() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    const response = await fetch('https://api.example.com/sensor-data');
    
    const result = await response.text(); 
    setData(result);
  };

  return (
    <div className="p-8 bg-gray-900 text-white">
      <button onClick={fetchData} className="bg-green-600 p-2">Fetch Data</button>
      <div className="mt-4 font-mono text-cyan-400">
        Output: {data.status}
      </div>
    </div>
  )
};`
    },
    bugReport: "VISUAL: The screen shows 'Output: ' (empty) or '[object Object]' instead of the actual data. TECHNICAL: The frontend is fetching the data as plain text using '.text()', but the API is sending a structured JSON object. Because it's not parsed correctly, accessing properties like '.status' fails. MISSION: Change how the response is handled so that it becomes a JavaScript object that you can easily access.",
    solutionCheck: (code: string) => code.includes(".json()"),
    renderPreview: (isSuccess: boolean) => <DataMismatchPreview isSuccess={isSuccess} />
  },

  9: {
    id: 9,
    title: "UI Logic: The Visibility Breach",
    files: {
      "LoginPortal.js": `import React, { useState } from 'react';

export default function LoginPortal() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="p-10 bg-black">
      <input 
        type="text" 
        placeholder="Enter Secret Key"
        className="p-3 rounded bg-gray-800 text-white"
      />
      
      <button 
        onClick={() => setShowPassword(!showPassword)}
        className="ml-2 text-cyan-500"
      >
        {showPassword ? "HIDE" : "SHOW"}
      </button>
    </div>
  )
};`
    },
    bugReport: "VISUAL: The password is always visible as plain text, even when the button says 'SHOW'. This is a critical security UI flaw. TECHNICAL: The 'type' attribute of the input is hardcoded. It needs to react to the 'showPassword' state to switch between 'password' and 'text' types. MISSION: Replace the fixed type string with a conditional expression that uses the state variable.",
    solutionCheck: (code: string) => code.includes("type={") && code.includes("showPassword ?") && code.includes('"text"') && code.includes('"password"'),
    renderPreview: (isSuccess: boolean) => <LoginPortalPreview isSuccess={isSuccess} />
  },
  10: {
    id: 10,
    title: "Logic: The Ghost Search",
    files: {
      "ModuleSearch.js": `import React, { useState } from 'react';

export default function ModuleSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const modules = ["Quantum_Core", "Bio_Link", "Neural_Mesh", "Stealth_Mod"];

  return (
    <div className="p-10 bg-white min-h-screen">
      <input 
        type="text" 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 border-blue-500 p-4 w-full text-lg rounded-xl"
        placeholder="Search modules..."
      />
      
      <ul className="mt-8">
        {modules.find(mod => mod.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(mod => (
          <li key={mod} className="py-4 text-xl font-bold border-b-2 border-gray-100 text-gray-800">
            {mod}
          </li>
        ))}
      </ul>
    </div>
  )
};`
    },
    bugReport: "VISUAL: The search bar is not filtering the list. No matter what you type, all items remain visible. TECHNICAL: The component is rendering the static 'modules' array directly. It should instead render a dynamic list that filters items based on whether they include the 'searchTerm'. MISSION: Update the rendering Method.",
    solutionCheck: (code: string) => code.includes(".filter") && code.includes(".map"),
    renderPreview: (isSuccess: boolean) => <SearchPortalPreview isSuccess={isSuccess} />
  },

  11: {
    id: 11,
    title: "Logic: The Frozen Subscription",
    files: {
      "Subscription.js": `import React, { useState } from 'react';

export default function Subscription() {
  const [isYearly, setIsYearly] = useState(false);

  const price = 12;

  return (
    <div className="p-10 bg-white text-center">
      <button 
        className="bg-blue-600 text-white p-2 rounded"
        onClick={() => setIsYearly(!isYearly)}
      >
        Toggle Plan
      </button>

      <h1 className="text-4xl font-bold mt-5">
        Price: \${price}
      </h1>
    </div>
  )
};`
    },
    bugReport: "VISUAL: Clicking the 'Toggle Plan' button changes the button state, but the Price stays at $12. TECHNICAL: The 'price' variable is a static number. It needs to be dynamic based on the 'isYearly' state. MISSION: Use a ternary operator to set the price: if isYearly is true, it should be 99, else it should be 12.",
    solutionCheck: (code: string) => code.includes("isYearly ?") && code.includes("99") && code.includes("12"),
    renderPreview: (isSuccess: boolean) => <SubscriptionPreview isSuccess={isSuccess} />
  },

  12: {
    id: 12,
    title: "Logic: The Ghost Deletion",
    files: {
      "TaskManager.js": `import React, { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task A" },
    { id: 2, text: "Task B" }
  ]);

  const removeTask = (id) => {

  };

  return (
    <div className="p-10 bg-white">
      {tasks.map(t => (
        <div key={t.id} className="flex justify-between p-2 border-b">
          <span>{t.text}</span>
          <button onClick={() => removeTask(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
};`
    },
    bugReport: "VISUAL: Clicking 'Delete' doesn't remove the item from the list. The task remains visible on the screen. TECHNICAL: The 'removeTask' function is empty. In React, to remove an item from a list, you must filter the array and update the state with the new version. MISSION: Implement the logic to filter the tasks array so that it excludes the task with the matching ID.",
    solutionCheck: (code: string) => code.includes(".filter") && code.includes("id") && code.includes("setTasks"),
    renderPreview: (isSuccess: boolean) => <TaskTrackerPreview isSuccess={isSuccess} />
  },

  13: {
    id: 13,
    title: "Logic: The Frozen Counter",
    files: {
      "TweetBox.js": `import React, { useState } from 'react';

export default function TweetBox() {
  const [content, setContent] = useState("");
  const MAX_LIMIT = 280;

  const remaining = MAX_LIMIT;

  return (
    <div className="p-10 bg-white">
      <textarea 
        onChange={(e) => setContent(e.target.value)}
        className="border p-4 w-full"
      />
      <p>Characters Left: {remaining}</p>
    </div>
  )
};`
    },
    bugReport: "VISUAL: As you type in the box, the 'Characters Left' number stays at 280. It doesn't count down. TECHNICAL: The 'remaining' variable is a static constant. It needs to dynamically calculate the difference between the limit and the current text length. MISSION: Update the 'remaining' variable using a simple subtraction involving the 'content' state.",
    solutionCheck: (code: string) => code.includes("MAX_LIMIT - content.length") || code.includes("content.length"),
    renderPreview: (isSuccess: boolean) => <TweetBoxPreview isSuccess={isSuccess} />
  },

  14: {
    id: 14,
    title: "UI: The Power-Up Glow",
    files: {
      "Enhancer.js": `import React, { useState } from 'react';

export default function Enhancer() {
  const [active, setActive] = useState(false);

  return (
    <div className="p-10 bg-white">
      <div className="p-10 rounded-xl bg-gray-200 text-white">
        <h1>Overdrive</h1>
      </div>

      <button onClick={() => setActive(!active)}>
        Toggle Power
      </button>
    </div>
  )
};`
    },
    bugReport: "VISUAL: The card stays gray even when the power is toggled 'on'. It doesn't turn purple. TECHNICAL: The background color class is a fixed string. It needs to be dynamic so it changes based on the 'active' state variable. MISSION: Use a template literal and a ternary operator inside the className to switch between 'bg-gray-200' and 'bg-purple-600'.",
    solutionCheck: (code: string) => code.includes("active ?") && code.includes("bg-purple-600"),
    renderPreview: (isSuccess: boolean) => <PowerUpPreview isSuccess={isSuccess} />
  },

  15: {
    id: 15,
    title: "Logic: The Locked Portal",
    files: {
      "JoinForm.js": `import React, { useState } from 'react';

export default function JoinForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="p-10 bg-white text-center border-t-4 border-pink-500">
      <input 
        type="text" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-2 p-2 w-full mb-4"
        placeholder="Email..."
      />
      
      <button 
        disabled={false}
        className="bg-pink-500 text-white p-3 w-full"
      >
        JOIN NOW
      </button>
    </div>
  )
};`
    },
    bugReport: "VISUAL: The 'Join Now' button stays bright pink and clickable even when the email field is empty. This allows empty submissions. TECHNICAL: The 'disabled' attribute is a hardcoded boolean. It needs to react to the 'email' state. MISSION: Change 'disabled={false}' so that it becomes true when the email string is empty.",
    solutionCheck: (code: string) => code.includes("email === \"\"") || code.includes("email.length === 0") || code.includes("!email"),
    renderPreview: (isSuccess: boolean) => <JoinPortalPreview isSuccess={isSuccess} />
  },

   16: {
    id: 16,
    title: "Hooks: The Auto-Focus Lens",
    files: {
      "AccessCode.js": `import React, { useEffect, useRef } from 'react';

export default function AccessCode() {
  const inputRef = useRef(null); 

  useEffect(() => {
    if (inputRef.current) {
       inputRef.current.focus();
    }
  }, []);

  return (
    <div className="p-10 bg-white">
      <h2 className="mb-4 font-bold text-slate-800 uppercase text-xs">Enter Access Key:</h2>
      <input 
        type="text" 
        className="border-2 border-slate-900 p-4 w-full rounded-lg"
        placeholder="Focus me on load..."
      />
    </div>
  )
};`
    },
    bugReport: "VISUAL: When the page loads, the input field is not active. You have to click it manually to type. TECHNICAL: The 'useRef' hook is declared, but it hasn't been linked to the input element via the 'ref' attribute. MISSION: Connect the 'inputRef' to the input element so the useEffect can trigger the focus() method on mount.",
    solutionCheck: (code: string) => code.includes("ref={inputRef}"),
    renderPreview: (isSuccess: boolean) => <FocusPortalPreview isSuccess={isSuccess} />
  },

  17: {
    id: 17,
    title: "Hooks: The Infinite Re-render",
    files: {
      "App.js": `import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 🔍 BUG: Updating state inside useEffect 
    // that depends on the same state.
    setCount(count + 1);
  }, [count]);

  return (
    <div className="p-10">
      <h1>Renders: {count}</h1>
    </div>
  );
}`
    },
    bugReport: "VISUAL: The counter is moving so fast it's blurring, and the browser is lagging. TECHNICAL: The useEffect updates 'count', and since 'count' is in the dependency array, it triggers the effect again immediately. MISSION: Fix the dependency array so the effect only runs once when the component mounts.",
    solutionCheck: (code: string) => code.includes("}, []);"),
    renderPreview: (isSuccess: boolean) => <RenderLoopPreview isSuccess={isSuccess} />
  },

  18: {
    id: 18,
    title: "Syntax: The Fragment Mystery",
    files: {
      "Component.js": `import React from 'react';

export default function Component() {
  return (
    // 🔍 BUG: Adjacent JSX elements must be wrapped
    <h1>Mission Alpha</h1>
    <p>Status: Active</p>
  );
}`
    },
    bugReport: "VISUAL: The editor is showing red lines and the app won't start. TECHNICAL: React components must return a single root element. You cannot return two tags side-by-side. MISSION: Wrap the adjacent elements using a React Fragment (<>...</>) or a <div>.",
    solutionCheck: (code: string) => (code.includes("<>") || code.includes("<div")) && (code.includes("</>") || code.includes("</div>")),
    renderPreview: (isSuccess: boolean) => <FragmentPreview isSuccess={isSuccess} />
  },

  19: {
    id: 19,
    title: "Data Flow: The Prop Drilling Trap",
    files: {
      "Dashboard.js": `import React from 'react';
import Profile from './Profile';

export default function Dashboard() {
  const user = "Nikita";
  // 🔍 BUG: Data is available here but not sent down
  return <Profile />;
}`,
      "Profile.js": `import React from 'react';

export default function Profile({ name }) {
  return <h2>Welcome, {name}</h2>;
}`
    },
    bugReport: "VISUAL: The screen says 'Welcome, ' but the name is empty. TECHNICAL: The parent component has the 'user' variable but isn't passing it to the child. MISSION: Pass the 'user' variable as a prop named 'name' to the <Profile /> component.",
    solutionCheck: (code: string) => code.includes("name={user}"),
    renderPreview: (isSuccess: boolean) => <PropFlowPreview isSuccess={isSuccess} />
  },

  20: {
    id: 20,
    title: "Logic: The Conditional Ghost",
    files: {
      "SystemLoader.js": `import React, { useState } from 'react';

export default function SystemLoader() {
  // 🔍 BUG: Logic check fails due to string initialization
  const [isLoading, setIsLoading] = useState("true");

  return (
    <div className="p-10">
      {isLoading ? (
        <p>System Loading...</p>
      ) : (
        <p>DASHBOARD_ACTIVE</p>
      )}
      
      <button onClick={() => setIsLoading(false)}>
        STOP_LOADER
      </button>
    </div>
  );
}`
    },
    bugReport: "VISUAL: Clicking 'STOP_LOADER' doesn't work; the loading text stays on screen. TECHNICAL: The state is initialized as a string \"true\". In JS, a non-empty string is always truthy. Setting it to false later doesn't fix the initial type confusion. MISSION: Change the initial state from the string \"true\" to the actual boolean true.",
    solutionCheck: (code: string) => code.includes("useState(true)"),
    renderPreview: (isSuccess: boolean) => <ToggleLogicPreview isSuccess={isSuccess} />
  }

};



// --- STAGES 1-5 (EASY) ---

const HeroBannerPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 bg-zinc-800 rounded-3xl overflow-hidden border-4 border-white/5 relative">
    {isSuccess ? (
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" className="w-full h-full object-cover" />
    ) : (
      <div className="flex flex-col items-center justify-center h-full text-red-500 bg-red-500/5">
        <span className="text-3xl mb-2">🖼️</span>
        <p className="text-[9px] font-black uppercase tracking-[0.3em]">Error: 404_Banner_Not_Found</p>
      </div>
    )}
  </div>
);

const FormButtonPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-xl text-black">
    <div className="space-y-3 text-left">
      <div className="h-2 w-20 bg-zinc-200 rounded" />
      <input disabled placeholder="user@neural.link" className="w-full p-3 bg-zinc-50 border rounded-xl text-xs" />
      <button className={`w-full py-3 rounded-xl font-black text-[10px] transition-all ${isSuccess ? 'bg-orange-600 text-white shadow-lg' : 'bg-zinc-200 text-zinc-400'}`}>
        {isSuccess ? "AUTH_SUCCESS" : "RESET_MODE"}
      </button>
    </div>
  </div>
);

const GhostInputPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl">
    <input disabled placeholder={isSuccess ? "Type your name..." : ""} value={isSuccess ? "" : "Type your name..."} 
      className={`w-full p-3 rounded-xl bg-black border text-xs outline-none transition-all ${isSuccess ? 'border-orange-500 text-orange-500' : 'border-white/10 text-zinc-500'}`} />
    <p className="mt-4 text-[8px] text-zinc-600 font-mono text-center uppercase tracking-widest">{isSuccess ? "Placeholder_Active" : "Static_Value_Detected"}</p>
  </div>
);

const FlexNavPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-4 bg-zinc-100 rounded-3xl">
    <div className={`flex gap-4 p-4 bg-orange-600 rounded-2xl text-white font-black text-[9px] ${isSuccess ? 'flex-row justify-center' : 'flex-col items-start'}`}>
      <span>HOME</span><span>WORK</span><span>LAB</span>
    </div>
  </div>
);

const HeadingHierarchyPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white border-2 rounded-3xl text-black text-left">
    <div className="border-l-4 border-orange-500 pl-4">
      <h1 className={`font-black uppercase tracking-tighter transition-all ${isSuccess ? 'text-3xl text-black' : 'text-xs text-zinc-400 italic'}`}>
        {isSuccess ? "LATEST_INSIGHTS" : "this is just a paragraph"}
      </h1>
    </div>
  </div>
);

// --- STAGES 6-15 (MEDIUM) ---

const ZIndexModalPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 bg-zinc-900 rounded-3xl relative p-4">
    <div className="w-full h-full bg-orange-500/20 rounded-xl flex items-end p-4 border border-orange-500/30">
      <p className="text-[8px] text-orange-500 font-bold uppercase tracking-widest">UI_Layer_01</p>
    </div>
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center transition-all ${isSuccess ? 'z-50 scale-100' : 'z-[-1] scale-75 opacity-50'}`}>
      <p className="text-[10px] font-black text-black uppercase">System_Modal</p>
    </div>
  </div>
);

const GridSystemPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 p-4 bg-zinc-50 rounded-3xl border">
    <div className={`grid h-full gap-3 ${isSuccess ? 'grid-cols-3' : 'grid-cols-1'}`}>
      <div className="bg-zinc-200 rounded-xl" /><div className="bg-orange-500 rounded-xl shadow-lg" /><div className="bg-zinc-200 rounded-xl" />
    </div>
  </div>
);

const ObjectFitPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 bg-zinc-200 rounded-3xl overflow-hidden border-2">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" className={`w-full h-full ${isSuccess ? 'object-cover' : 'object-fill'}`} />
  </div>
);

const StickyHeaderPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="h-44 w-full bg-zinc-100 overflow-y-auto relative no-scrollbar rounded-3xl border">
    <div className={`w-full bg-black text-white p-3 text-[9px] font-black tracking-widest ${isSuccess ? 'sticky top-0 shadow-xl' : 'relative'}`}>STICKY_NAV</div>
    <div className="p-4 space-y-4">{[1, 2, 3].map(i => <div key={i} className="h-10 bg-zinc-300/30 rounded-xl w-full" />)}</div>
  </div>
);

const EllipsisTextPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-white rounded-3xl border flex justify-center">
    <div className="w-32 p-3 bg-zinc-100 rounded-xl border border-zinc-200 overflow-hidden">
      <p className={`text-[11px] font-bold text-black ${isSuccess ? 'truncate' : 'whitespace-normal break-all'}`}>NEURAL_ENCRYPTION_KEY_LONG_ERROR</p>
    </div>
  </div>
);

const LabelLinkPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl border flex items-center justify-center gap-3">
    <input type="checkbox" id="check-test" className="w-5 h-5 accent-orange-600" />
    <label htmlFor={isSuccess ? "check-test" : "disabled"} className={`text-xs font-black uppercase ${isSuccess ? 'cursor-pointer text-black' : 'text-zinc-300'}`}>Accept_Terms</label>
  </div>
);

const MediaUnitPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
    <span className={`font-mono text-[10px] uppercase ${isSuccess ? 'text-green-500' : 'text-red-500 animate-pulse'}`}>{isSuccess ? "✓ Breakpoint_Fixed" : "⚠ Error: Unit_Missing"}</span>
  </div>
);

const BoxSizingPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 bg-zinc-50 rounded-3xl flex items-center justify-center relative">
    <div className={`bg-orange-500 border-[10px] border-black p-6 transition-all duration-500 ${isSuccess ? 'w-24 h-24' : 'w-40 h-40'}`} />
  </div>
);

const AltTagPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 bg-zinc-100 rounded-3xl flex items-center justify-center border-2 border-dashed">
    <div className="text-center"><span className="text-2xl mb-2 block">{isSuccess ? "✅" : "❌"}</span><p className="text-[10px] font-black text-zinc-500 uppercase">Accessibility_Status</p></div>
  </div>
);

const TransitionPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 flex items-center justify-center">
    <button className={`px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:scale-125 transition-all ${isSuccess ? 'duration-300' : 'duration-[5000ms]'}`}>HOVER_ANIMATION</button>
  </div>
);

// --- TOUGH: STAGE 16 ---

const PolygonGeometryPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-48 bg-[#0a0a0b] rounded-3xl flex items-center justify-center">
    <div className={`w-32 h-32 bg-gradient-to-br from-orange-400 to-red-600 transition-all duration-1000 ${isSuccess ? '[clip-path:polygon(50%_0%,100%_38%,82%_100%,18%_100%,0%_38%)]' : 'rounded-none'}`} />
  </div>
);



export const htmlLevels: any = {
  1: {
    id: 1,
    title: "Asset Integrity: Hero Banner",
    files: { "index.html": `<section class="hero">\n  <img \n    scr="https://images.unsplash.com/photo-1498050108023-c5249f4df085" \n    alt="Banner" \n  />\n</section>` },
    bugReport: "Zia: The hero section is failing to render the primary visual asset. Our monitoring tools indicate a failure in the browser's resource fetching phase. Inspect the image attribute syntax to ensure it follows the standard HTML documentation for external assets.",
    solutionCheck: (c: string) => c.includes('src='),
    renderPreview: (s: boolean) => <HeroBannerPreview isSuccess={s} />
  },
  2: {
    id: 2,
    title: "Interaction: Form Reset Bug",
    files: { "auth.html": `<form>\n  <input type="email" />\n  <button type="reset" class="btn">SUBMIT</button>\n</form>` },
    bugReport: "Zia: User interaction tests show that the authentication form loses all input data upon clicking the action button. The current configuration is triggering a state reset rather than a data dispatch. You need to reconfigure the button's behavior to facilitate a standard form submission.",
    solutionCheck: (c: string) => c.includes('type="submit"'),
    renderPreview: (s: boolean) => <FormButtonPreview isSuccess={s} />
  },
  3: {
    id: 3,
    title: "UX: Ghost Placeholder",
    files: { "login.html": `<input type="text" value="Enter Email..." />` },
    bugReport: "Zia: The user experience is being hindered because the input fields are initialized with static content. This forces users to manually clear the text before entering their own data. Implement a non-static hint that disappears automatically when the user begins typing.",
    solutionCheck: (c: string) => c.includes('placeholder='),
    renderPreview: (s: boolean) => <GhostInputPreview isSuccess={s} />
  },
  4: {
    id: 4,
    title: "Structure: Broken Navbar",
    files: { "style.css": ".nav {\n  width: 100%;\n  display: block; /* 🔍 Need horizontal alignment */\n}" },
    bugReport: "Zia: The navigation architecture is vertically misaligned, breaking the standard horizontal flow expected in a desktop header. The container's box-model behavior is currently forcing a single-stack layout. Apply a modern layout engine to distribute these nodes across the horizontal axis.",
    solutionCheck: (c: string) => c.includes('display: flex'),
    renderPreview: (s: boolean) => <FlexNavPreview isSuccess={s} />
  },
  5: {
    id: 5,
    title: "Semantics: SEO Heading",
    files: { "blog.html": `<header>\n  <p class="title">NEURAL_DASHBOARD</p>\n</header>` },
    bugReport: "Zia: SEO crawlers are identifying a lack of hierarchy in the page structure. The main title of the application is wrapped in a generic content tag, preventing search engines from recognizing it as a primary heading. Upgrade the semantic weight of this element to reflect its importance.",
    solutionCheck: (c: string) => c.includes('<h1>') && c.includes('</h1>'),
    renderPreview: (s: boolean) => <HeadingHierarchyPreview isSuccess={s} />
  },
  6: {
    id: 6,
    title: "Layers: Invisible Modal",
    files: { "modal.css": ".modal {\n  position: absolute;\n  z-index: -1; /* 🔍 Modal is hidden behind background */\n}" },
    bugReport: "Zia: The system-level modal is triggering correctly, but it is physically rendered behind the background plane of the application. This stacking order conflict makes the interface inaccessible to the user. You must recalibrate the element's position on the third axis.",
    solutionCheck: (c: string) => c.includes('z-index: 1') || c.includes('z-index: 50'),
    renderPreview: (s: boolean) => <ZIndexModalPreview isSuccess={s} />
  },
  7: {
    id: 7,
    title: "Grid: Dashboard Layout",
    files: { "dashboard.css": ".container {\n  display: grid;\n  grid-template-columns: 1fr; /* 🔍 Needs 3 columns */\n}" },
    bugReport: "Zia: The dashboard layout has collapsed into a single column, failing to utilize the available screen width. The grid definition is currently restricted to a single fractional unit. Expand the column definition to create a balanced three-part layout for the metrics display.",
    solutionCheck: (c: string) => c.includes('repeat(3') || c.includes('1fr 1fr 1fr'),
    renderPreview: (s: boolean) => <GridSystemPreview isSuccess={s} />
  },
  8: {
    id: 8,
    title: "Visuals: Avatar Distortion",
    files: { "style.css": "img {\n  width: 100px; height: 100px;\n  /* 🔍 Image looks squished */\n}" },
    bugReport: "Zia: The user's profile avatar is appearing distorted because the image is being forced to fill a fixed square container without regard for its original aspect ratio. We need to define a resizing strategy that preserves the image's proportions while filling the area.",
    solutionCheck: (c: string) => c.includes('object-fit: cover'),
    renderPreview: (s: boolean) => <ObjectFitPreview isSuccess={s} />
  },
  9: {
    id: 9,
    title: "Positioning: Header Float",
    files: { "header.css": "header {\n  position: sticky;\n  /* 🔍 Where should it stick? */\n}" },
    bugReport: "Zia: The navigation header is meant to remain anchored at the top of the viewport during a scroll event. However, it currently lacks the directional constraint necessary to activate its sticky behavior. Define the anchor point to stabilize the navigation.",
    solutionCheck: (c: string) => c.includes('top: 0'),
    renderPreview: (s: boolean) => <StickyHeaderPreview isSuccess={s} />
  },
  10: {
    id: 10,
    title: "Typography: Ellipsis Rule",
    files: { "card.css": ".title {\n  white-space: nowrap;\n  /* 🔍 Text is overflowing the card */\n}" },
    bugReport: "Zia: Long data strings in the news cards are overflowing the container borders and breaking the UI grid. We need to implement a truncation method that hides the excess characters and appends a visual indicator to show the text has been cut off.",
    solutionCheck: (c: string) => c.includes('overflow: hidden') && c.includes('text-overflow: ellipsis'),
    renderPreview: (s: boolean) => <EllipsisTextPreview isSuccess={s} />
  },
  11: {
    id: 11,
    title: "Accessibility: Label Link",
    files: { "form.html": `<label>Accept Terms</label>\n<input type="checkbox" id="terms" />` },
    bugReport: "Zia: Accessibility reports show that the terms and conditions checkbox cannot be toggled by clicking its associated text. The label is purely visual and has no logical connection to the input element. Establish a programmatic relationship between the two.",
    solutionCheck: (c: string) => c.includes('for="terms"'),
    renderPreview: (s: boolean) => <LabelLinkPreview isSuccess={s} />
  },
  12: {
    id: 12,
    title: "Media Queries: Missing Unit",
    files: { "responsive.css": "@media (max-width: 768) { ... }" },
    bugReport: "Zia: The mobile layout isn't triggering on handheld devices. The media query is currently mathematically invalid because it lacks a specific unit of measurement for the viewport width. Add the required unit to activate the responsive breakpoints.",
    solutionCheck: (c: string) => c.includes('768px'),
    renderPreview: (s: boolean) => <MediaUnitPreview isSuccess={s} />
  },
  13: {
    id: 13,
    title: "Layout: Sizing Model",
    files: { "style.css": ".box {\n  width: 200px; padding: 20px;\n  /* 🔍 Box is expanding beyond 200px */\n}" },
    bugReport: "Zia: The layout calculation is broken. Adding internal spacing is causing the total width of the elements to exceed their defined 200px boundary. We need to switch to a sizing model that includes padding and borders within the defined width.",
    solutionCheck: (c: string) => c.includes('box-sizing: border-box'),
    renderPreview: (s: boolean) => <BoxSizingPreview isSuccess={s} />
  },
  14: {
    id: 14,
    title: "SEO: Image Description",
    files: { "index.html": `<img src="profile.jpg" />` },
    bugReport: "Zia: Our latest accessibility audit flagged this image. For users relying on screen readers, this visual element is a 'dead end' because it has no textual alternative. Provide a concise description of the image content.",
    solutionCheck: (c: string) => c.includes('alt='),
    renderPreview: (s: boolean) => <AltTagPreview isSuccess={s} />
  },
  15: {
    id: 15,
    title: "Animations: Slow Motion",
    files: { "anim.css": ".btn {\n  transition: all 5s; /* 🔍 Too slow for a button */\n}" },
    bugReport: "Zia: User feedback indicates that button hover effects feel laggy and unresponsive. The duration of the visual transition is significantly higher than the standard response time. Optimize the timing to ensure the UI feels snappy and immediate.",
    solutionCheck: (c: string) => c.includes('0.3s') || c.includes('.3s'),
    renderPreview: (s: boolean) => <TransitionPreview isSuccess={s} />
  },
  16: {
    id: 16,
    title: "Geometry: Clip-Path Polygon",
    files: { "shape.css": ".node {\n  clip-path: polygon(50 0, 100 38, 82 100, 18 100, 0 38);\n}" },
    bugReport: "Zia: The complex geometric node shape is failing to render correctly across different screen resolutions. The polygon coordinates are currently using unitless values, which the rendering engine cannot interpret as specific positions on the element's plane. Re-declare the points using relative units.",
    solutionCheck: (c: string) => c.includes('50%') && c.includes('100%'),
    renderPreview: (s: boolean) => <PolygonGeometryPreview isSuccess={s} />
  }
};





// --- JS STAGES 1-16 PREVIEW COMPONENTS ---

const CalcPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [res, setRes] = React.useState<any>(0);
  return (
    <div className="w-full p-6 bg-white rounded-3xl shadow-xl text-black border-t-8 border-yellow-400">
      <div className="bg-zinc-100 p-4 rounded-xl mb-4 font-mono text-right text-2xl font-bold">{res}</div>
      <button onClick={() => setRes(isSuccess ? 10 + 5 : "105")} className="w-full p-3 bg-zinc-800 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Run 10 + 5</button>
      <p className={`text-[8px] mt-4 font-bold text-center ${isSuccess ? 'text-green-600' : 'text-red-500 animate-pulse'}`}>{isSuccess ? "✓ MATH_SYNC_OK" : "⚠ TYPE_COERCION_ERROR"}</p>
    </div>
  );
};

const FilterPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl border border-white/5">
    <div className="flex justify-between mb-4"><span className="text-[10px] text-zinc-500 font-black uppercase">User_Stream</span><div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-yellow-500'}`} /></div>
    <div className="space-y-2">
      {(isSuccess ? ["Nikita", "Zia"] : ["Admin"]).map(u => <div key={u} className="p-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-cyan-400">{u}</div>)}
    </div>
  </div>
);

const ScopePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black rounded-3xl border border-white/10 font-mono text-[10px]">
    <div className="text-zinc-500 mb-2">// Console_Output:</div>
    {isSuccess ? [0,1,2,3,4].map(i => <div key={i} className="text-green-500 tracking-tighter">{`> Booting Node: ${i}`}</div>) : <div className="text-red-500 italic animate-pulse tracking-tighter">{`> Booting Node: 5 (Repeated 5x)`}</div>}
  </div>
);

const OptionalChainPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-lg border-b-8 border-red-500">
    <div className={`p-4 rounded-xl font-mono text-[10px] ${isSuccess ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
      {isSuccess ? "Identity: Nikita_Neural" : "FATAL: Cannot read 'name' of undefined"}
    </div>
  </div>
);

const CasePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl text-center">
    <div className={`text-xl font-black mb-4 ${isSuccess ? 'text-green-500' : 'text-zinc-700'}`}>
      {isSuccess ? "ACCESS_GRANTED" : "ACCESS_DENIED"}
    </div>
    <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest italic">Input: "neural_key" vs "NEURAL_KEY"</div>
  </div>
);

const AsyncPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [data, setData] = React.useState<any>(null);
  const load = () => { setData("LOADING..."); setTimeout(() => setData(isSuccess ? "USER_DATA_v1" : "[object Promise]"), 800); };
  return (
    <div className="w-full p-6 bg-white rounded-3xl shadow-xl text-center">
      <div className="h-12 flex items-center justify-center font-mono text-xs text-blue-600 mb-4">{data || "AWAITING_INPUT"}</div>
      <button onClick={load} className="px-6 py-2 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest">Execute_Async</button>
    </div>
  );
};

const NanPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-10 bg-black rounded-[3rem] border-2 border-yellow-500/30 text-center">
    <h2 className={`text-5xl font-black font-mono ${isSuccess ? 'text-yellow-400' : 'text-zinc-800'}`}>{isSuccess ? "60" : "NaN"}</h2>
    <p className="text-[8px] text-zinc-500 mt-4 uppercase tracking-[0.4em] italic">Timer_Drift_Analysis</p>
  </div>
);

const MapReturnPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl border shadow-inner font-mono text-[10px] text-black text-left">
    <div className="mb-2 text-zinc-400 font-bold uppercase tracking-widest italic">Array_Map_Output:</div>
    <div className={isSuccess ? 'text-green-600' : 'text-red-400'}>{isSuccess ? "[9, 18, 27]" : "[undefined, undefined, undefined]"}</div>
  </div>
);

const StrictEqualityPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-10 bg-zinc-900 rounded-3xl flex flex-col items-center">
    <div className={`w-12 h-12 rounded-full mb-4 border-2 flex items-center justify-center ${isSuccess ? 'border-cyan-500 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'border-white/10 text-zinc-800'}`}>✓</div>
    <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">{isSuccess ? "Protocol: 200_OK" : "Protocol: Logic_Fail"}</p>
  </div>
);

const SpreadPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-xl text-left border-l-8 border-purple-500">
    <div className="space-y-2">
      <div className="flex justify-between text-[9px] font-black border-b pb-1"><span>ORIGINAL:</span><span className={isSuccess ? 'text-zinc-400' : 'text-red-500'}>{isSuccess ? "100" : "50"}</span></div>
      <div className="flex justify-between text-[9px] font-black"><span>MUTATED:</span><span className="text-purple-600">50</span></div>
    </div>
  </div>
);

const PromiseAllPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black rounded-3xl border border-white/5">
    <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /><span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Network_Latency</span></div>
    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mb-2"><div className={`h-full bg-blue-500 transition-all duration-1000 ${isSuccess ? 'w-full' : 'w-1/2'}`} /></div>
    <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter italic">{isSuccess ? "Success: Parallel_Load // 400ms" : "Warning: Sequential_Load // 800ms"}</p>
  </div>
);

const CircularPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl border-2 border-red-500/10 text-center">
    <div className={`p-4 rounded-xl font-mono text-[9px] mb-2 ${isSuccess ? 'bg-zinc-100 text-zinc-800' : 'bg-red-50 text-red-600 animate-bounce'}`}>
      {isSuccess ? 'JSON_Payload: {"id": 1}' : "ERROR: Circular_Structure"}
    </div>
  </div>
);

const ThisContextPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-zinc-900 rounded-[2.5rem] border border-cyan-500/20 text-center relative overflow-hidden">
     <div className={`text-xs font-mono mb-4 transition-colors ${isSuccess ? 'text-cyan-400' : 'text-zinc-700'}`}>
        {isSuccess ? "> Machine M-404 is ACTIVE" : "> Machine undefined is undefined"}
     </div>
     <div className="h-1 w-24 bg-zinc-800 mx-auto rounded-full overflow-hidden"><div className={`h-full bg-cyan-500 ${isSuccess ? 'w-full' : 'w-4'}`} /></div>
  </div>
);

const ClosurePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-xl flex flex-col items-center">
    <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center text-2xl font-black mb-4 border border-zinc-200">
      {isSuccess ? "5" : "?"}
    </div>
    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">{isSuccess ? "Value_Retrieved" : "Value_Locked_In_Scope"}</p>
  </div>
);

const SplicePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl border border-dashed text-left">
    <div className="font-mono text-[10px] space-y-2">
      <div className="text-zinc-400">Stack_Report:</div>
      <div className="text-black font-bold tracking-widest">{isSuccess ? '["A", "D"]' : '["A", "C", "D"]'}</div>
    </div>
    <p className="mt-4 text-[8px] text-red-500 font-bold uppercase italic">{!isSuccess && "⚠ Error: Index_Shift_Oversight"}</p>
  </div>
);

const RecursionPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 bg-[#0a0a0b] rounded-3xl flex items-center justify-center p-6 relative overflow-hidden">
    <div className={`w-20 h-20 border-4 rounded-full flex items-center justify-center transition-all duration-1000 ${isSuccess ? 'border-green-500 scale-125 shadow-[0_0_30px_rgba(34,197,94,0.3)]' : 'border-red-500 animate-ping'}`}>
      <span className="text-xs font-black text-white">{isSuccess ? "STACK_OK" : "MAX_STACK"}</span>
    </div>
  </div>
);



export const jsLevels: any = {
  1: {
    id: 1,
    title: "The Additive Glitch",
    files: {
      "app.js": `/**\n * Neural Finance Module v1.0\n * Purpose: Calculate final transaction total including tax.\n */\n\nfunction processOrder(price, tax) {\n  console.log("System: Starting calculation protocol...");\n  \n  // 🔍 BUG: Values are passed as strings from the interface\n  const subtotal = price + tax;\n  \n  const metaData = {\n    timestamp: Date.now(),\n    status: "PROCESSING_PRICE_NODE",\n    result: subtotal\n  };\n\n  console.log("Metadata Generated:", metaData);\n  \n  if (typeof subtotal === "string") {\n     console.warn("Warning: Result is a string literal.");\n  }\n\n  return "Final Total: " + subtotal;\n}\n\n// Execution Node\nconst finalPrice = processOrder("100", "5");\nconsole.log(finalPrice);`
    },
    bugReport: "Zia: The finance module is reporting incorrect totals. Instead of adding 100 and 5 to get 105, it's concatenating them into 1005. The data is coming in as strings, and the '+' operator is defaulting to text joining. Recalibrate the data types to ensure mathematical addition.",
    solutionCheck: (c: string) => c.includes('Number(') || c.includes('parseInt(') || c.includes('+price'),
    renderPreview: (s: boolean) => <CalcPreview isSuccess={s} />
  },
  2: {
    id: 2,
    title: "Array Identity Filter",
    files: {
      "database.js": `const userCluster = [\n  { id: 101, name: "Admin", access: "FULL", active: true },\n  { id: 102, name: "Nikita", access: "USER", active: true },\n  { id: 103, name: "Guest", access: "VIEW", active: false },\n  { id: 104, name: "Zia_Bot", access: "AI", active: true }\n];\n\nfunction fetchAuthorizedNodes(data) {\n  console.log("Analyzing Neural Database Cluster...");\n  \n  /**\n   * 🔍 BUG: Method selection error.\n   * Requirement: Return all nodes where active is true.\n   */\n  const authorized = data.find(node => node.active === true);\n\n  console.log("Filter Sequence: Completed.");\n  console.log("Node Count Found: " + (authorized.length || 1));\n  \n  return authorized;\n}\n\nconst activeNodes = fetchAuthorizedNodes(userCluster);\nconsole.log(activeNodes);`
    },
    bugReport: "Zia: The user authorization module is only retrieving the first active user it finds. It should be returning a full array of every active user in the cluster. The current array method is designed to stop at the first match. Switch to the method that returns all matches.",
    solutionCheck: (c: string) => c.includes('.filter('),
    renderPreview: (s: boolean) => <FilterPreview isSuccess={s} />
  },
  3: {
    id: 3,
    title: "The Scope Leakage",
    files: {
      "boot_sequence.js": `/**\n * Neural System Boot Protocol\n * Attempting to initialize nodes in sequence.\n */\n\nfunction initializeNetwork() {\n  console.log("Initiating Parallel Boot...");\n\n  // 🔍 BUG: Variable declaration scope error\n  for (var i = 0; i < 5; i++) {\n    setTimeout(function() {\n      const logMsg = "System_Node_" + i + ": [ONLINE]";\n      console.log(logMsg);\n      \n      // Internal validation check\n      if (i === 5) {\n        console.error("Critical: Scope Leak Detected!");\n      }\n    }, 100 * i);\n  }\n\n  console.log("Status: Boot sequence queued.");\n}\n\ninitializeNetwork();`
    },
    bugReport: "Zia: All booting nodes are identifying themselves as 'Node 5'. The loop variable is not being captured correctly for each delayed execution, leading to a global scope overwrite. Adjust the variable declaration to ensure every iteration has its own private scope.",
    solutionCheck: (c: string) => c.includes('let i = 0'),
    renderPreview: (s: boolean) => <ScopePreview isSuccess={s} />
  },
  4: {
    id: 4,
    title: "Null Pointer Safety",
    files: {
      "identity.js": `function decryptProfile(encryptedData) {\n  console.log("Entering Decryption Layer...");\n  \n  // 🔍 BUG: Accessing nested properties on potentially null objects\n  const identityToken = encryptedData.user.profile.name;\n  \n  const report = {\n    node: "X-001",\n    identity: identityToken,\n    clearance: true\n  };\n\n  console.log("Identity Token Decoded: " + identityToken);\n  return "Verified User: " + identityToken;\n}\n\n// Simulation: API returns missing user node\ntry {\n  const result = decryptProfile({ user: null });\n  console.log(result);\n} catch (err) {\n  console.error("CRASH: " + err.message);\n}`
    },
    bugReport: "Zia: The profile decryptor is causing a fatal system crash whenever the incoming data stream contains an empty user object. It’s attempting to read deeply nested properties of a 'null' reference. Use modern JS safety operators to prevent the crash.",
    solutionCheck: (c: string) => c.includes('?.') || (c.includes('&&') && c.includes('name')),
    renderPreview: (s: boolean) => <OptionalChainPreview isSuccess={s} />
  },
  5: {
    id: 5,
    title: "Case Sensitivity Gap",
    files: {
      "security.js": `/**\n * Security Verification Logic\n */\n\nfunction verifyPasscode(userInput) {\n  const SYSTEM_KEY = "NEURAL_SYNC_2026";\n  \n  console.log("Processing Auth Request...");\n  console.log("Comparing Input: " + userInput);\n\n  /**\n   * 🔍 BUG: Strict string comparison is failing \n   * for minor casing variations.\n   */\n  const isMatch = (userInput === SYSTEM_KEY);\n\n  if (isMatch) {\n    console.log("Auth: Success.");\n    return "ACCESS_GRANTED";\n  } else {\n    console.warn("Auth: Logic mismatch.");\n    return "ACCESS_DENIED";\n  }\n}\n\n// User types correctly but in lowercase\nconst status = verifyPasscode("neural_sync_2026");`
    },
    bugReport: "Zia: Users are reporting login failures even when they provide the correct characters. Our verification logic is being too pedantic about letter casing. We need to normalize both strings to a consistent case before performing the security comparison.",
    solutionCheck: (c: string) => c.includes('.toLowerCase()') || c.includes('.toUpperCase()'),
    renderPreview: (s: boolean) => <CasePreview isSuccess={s} />
  },
  6: {
    id: 6,
    title: "Missing Await Protocol",
    files: {
      "api.js": `async function fetchSystemLogs() {\n  console.log("Requesting Logs from Cloud...");\n  \n  // 🔍 BUG: Synchronous handling of asynchronous resource\n  const stream = fetch("https://neural.link/logs/all");\n  const logs = stream.json();\n\n  console.log("Analyzing stream content...");\n  \n  const report = {\n    size: logs.length,\n    valid: typeof logs === "object"\n  };\n\n  return logs;\n}\n\nfetchSystemLogs().then(data => console.log("Final Output:", data));`
    },
    bugReport: "Zia: The system logs are returning as empty or 'undefined' objects. It appears the logic is moving to the analysis phase before the data has actually been retrieved from the network. You must force the function to pause until the network promises are resolved.",
    solutionCheck: (c: string) => c.split('await').length >= 3,
    renderPreview: (s: boolean) => <AsyncPreview isSuccess={s} />
  },
  7: {
    id: 7,
    title: "NaN Recovery Strategy",
    files: {
      "timer.js": `/**\n * Mission Clock Synchronizer\n */\nfunction calculateMissionTime(startTime, duration) {\n  console.log("Calculating Mission End-Time...");\n  \n  // 🔍 BUG: Input values can be undefined during lag\n  const endTime = startTime + duration;\n\n  const logEntry = {\n    start: startTime,\n    end: endTime,\n    isValid: !isNaN(endTime)\n  };\n\n  console.log("Log Trace:", logEntry);\n\n  if (isNaN(endTime)) {\n    console.error("CRITICAL: Math operation resulted in NaN");\n  }\n\n  return endTime;\n}\n\n// Simulation: duration is missing from packet\nconst result = calculateMissionTime(100, undefined);\nconsole.log("Result: " + result);`
    },
    bugReport: "Zia: The mission clock is displaying 'NaN' (Not a Number) during network lag. This happens when the duration parameter arrives as 'undefined'. Implement a fallback value to ensure the calculation always results in a valid numeric timestamp.",
    solutionCheck: (c: string) => c.includes('|| 0') || c.includes('= 0'),
    renderPreview: (s: boolean) => <NanPreview isSuccess={s} />
  },
  8: {
    id: 8,
    title: "Array Map Undefined",
    files: {
      "transform.js": `const dataset = [10, 20, 30];\n\nfunction applyEncryption(list) {\n  console.log("Mapping through dataset...");\n\n  /**\n   * 🔍 BUG: Implicit return error.\n   * Braces {} require an explicit return.\n   */\n  const transformed = list.map(item => {\n    item * 0.9;\n  });\n\n  console.log("Mapping finished.");\n  return transformed;\n}\n\nconst output = applyEncryption(dataset);\nconsole.log(output);`
    },
    bugReport: "Zia: The data transformation module is returning an array of 'undefined' values. The mapping function is calculating the new values correctly, but it is failing to actually pass those values into the new array. Ensure the function body correctly exports the results of each iteration.",
    solutionCheck: (c: string) => c.includes('return ') || !c.includes('{'),
    renderPreview: (s: boolean) => <MapReturnPreview isSuccess={s} />
  },
  9: {
    id: 9,
    title: "Strict Equality Trap",
    files: {
      "validator.js": `function validateResponseCode(code) {\n  console.log("Analyzing API Status...");\n  \n  // 🔍 BUG: Strict equality comparison between string and number\n  // code often comes as "200" from the socket stream.\n  if (code === 200) {\n    console.log("Verification: Success.");\n    return true;\n  }\n\n  console.warn("Verification: Data Type Mismatch Detected.");\n  console.log("Received Type: " + typeof code);\n  return false;\n}\n\nconst isValid = validateResponseCode("200");`
    },
    bugReport: "Zia: The status validator is reporting 'False' even when the response code is 200. This is because the incoming data is a string, and our logic is performing a strict type-check against a number. Recalibrate the logic to accommodate the incoming string data.",
    solutionCheck: (c: string) => c.includes('== 200') || c.includes('Number(code)') || c.includes('parseInt('),
    renderPreview: (s: boolean) => <StrictEqualityPreview isSuccess={s} />
  },
  10: {
    id: 10,
    title: "Object Reference Mutation",
    files: {
      "state.js": `const systemConfig = { power: 100, cooling: "ACTIVE" };\n\nfunction optimizePower(currentConfig) {\n  console.log("Cloning system config for optimization...");\n\n  // 🔍 BUG: Reference assignment instead of shallow copy\n  const newConfig = currentConfig;\n  newConfig.power = 50;\n\n  console.log("Current Power Level: " + currentConfig.power);\n  return newConfig;\n}\n\nconst optimized = optimizePower(systemConfig);\n// Check if original was preserved\nconsole.log("Initial Config Power:", systemConfig.power);`
    },
    bugReport: "Zia: The power optimization module is overwriting the original system settings. Whenever we create a 'new' configuration, the old one is lost. This suggests the data is being copied by reference rather than creating a fresh instance. Create a shallow copy to protect the original state.",
    solutionCheck: (c: string) => c.includes('...') || c.includes('Object.assign'),
    renderPreview: (s: boolean) => <SpreadPreview isSuccess={s} />
  },
  11: {
    id: 11,
    title: "Sequential Promise Lag",
    files: {
      "parallel.js": `async function loadNeuralAssets() {\n  console.log("Starting Asset Retrieval...");\n\n  /**\n   * 🔍 BUG: Unnecessary sequential execution.\n   * These don't depend on each other.\n   */\n  const user = await fetchUser();\n  const files = await fetchFiles();\n\n  const dashboard = {\n    profile: user,\n    assets: files,\n    loadTime: "Fast_Sync"\n  };\n\n  console.log("Neural Assets: Fully Loaded.");\n  return dashboard;\n}`
    },
    bugReport: "Zia: Asset retrieval is taking twice as long as expected. The system is waiting for the user profile to finish before even initiating the file download. Since these tasks are independent, they should be executed simultaneously to minimize latency.",
    solutionCheck: (c: string) => c.includes('Promise.all'),
    renderPreview: (s: boolean) => <PromiseAllPreview isSuccess={s} />
  },
  12: {
    id: 12,
    title: "Circular JSON Crash",
    files: {
      "logger.js": `const node = { id: "X-01", status: "READY" };\nnode.link = node; // Creates a self-reference\n\nfunction serializeNode(data) {\n  console.log("Preparing Node for Serialization...");\n\n  /**\n   * 🔍 BUG: JSON cannot handle self-referencing objects.\n   */\n  const stringified = JSON.stringify(data);\n\n  console.log("Serialized Payload Generated.");\n  return stringified;\n}\n\ntry {\n  const payload = serializeNode(node);\n} catch (err) {\n  console.error("CRITICAL_CRASH: " + err.message);\n}`
    },
    bugReport: "Zia: The node serializer is causing a fatal system crash with a 'Circular structure' error. The JSON engine cannot convert an object that points back to itself. You must prune the self-reference or sanitize the object structure before conversion.",
    solutionCheck: (c: string) => c.includes('delete') || c.includes('id'),
    renderPreview: (s: boolean) => <CircularPreview isSuccess={s} />
  },
  13: {
    id: 13,
    title: "Lost 'This' Context",
    files: {
      "machine.js": `const neuralMachine = {\n  id: "M-404",\n  active: true,\n  ping: function() {\n    console.log("Locating Machine " + this.id + "...");\n\n    /**\n     * 🔍 BUG: 'this' context is lost inside the \n     * regular function of setTimeout.\n     */\n    setTimeout(function() {\n      console.log("Status Report: Machine " + this.id + " is " + (this.active ? "ON" : "OFF"));\n    }, 500);\n  }\n};\n\nneuralMachine.ping();`
    },
    bugReport: "Zia: The machine's diagnostic report is failing to identify itself, returning 'Machine undefined is undefined'. The internal execution context is losing its connection to the machine object. Use a modern arrow function to bind the context permanently.",
    solutionCheck: (c: string) => c.includes('() =>'),
    renderPreview: (s: boolean) => <ThisContextPreview isSuccess={s} />
  },
  14: {
    id: 14,
    title: "Locked Closure Scope",
    files: {
      "factory.js": `function createNeuralCounter() {\n  let internalValue = 0;\n  \n  console.log("Counter Factory: Operational.");\n\n  return {\n    increment: function() {\n      internalValue++;\n      console.log("Internal Value Incremented.");\n    },\n    /**\n     * 🔍 BUG: Encapsulation is too strict.\n     * No way to export the internalValue.\n     */\n    getValue: function() {\n       // Missing logic here\n    }\n  };\n}\n\nconst count = createNeuralCounter();\ncount.increment();\nconsole.log("Final Reading: " + count.getValue());`
    },
    bugReport: "Zia: We have an operational counter that can successfully increment, but we have no way to retrieve the final result. The value is trapped inside the private closure. You need to implement a retrieval logic within the 'getValue' method.",
    solutionCheck: (c: string) => c.includes('return internalValue'),
    renderPreview: (s: boolean) => <ClosurePreview isSuccess={s} />
  },
  15: {
    id: 15,
    title: "Array Splice Index Shift",
    files: {
      "cleanup.js": `const taskStack = ["SCAN", "PURGE", "LOAD", "SYNC"];\n\nfunction cleanupStack(stack) {\n  console.log("Initiating Multi-Step Cleanup...");\n  \n  /**\n   * 🔍 BUG: Splice changes array indices.\n   * Removing index 1 changes index 2 to 1.\n   */\n  stack.splice(1, 1); // Removes PURGE\n  stack.splice(2, 1); // Attempts to remove SYNC but hits something else\n\n  console.log("Cleanup Protocol: Finished.");\n  return stack;\n}\n\nconst finalStack = cleanupStack(taskStack);\nconsole.log(finalStack);`
    },
    bugReport: "Zia: The cleanup routine is failing to remove all designated items from the task stack. Whenever an item is removed via 'splice', the following items shift their positions, making the original index references incorrect. Recalibrate the removal logic.",
    solutionCheck: (c: string) => c.includes('splice(1, 2)') || c.includes('filter'),
    renderPreview: (s: boolean) => <SplicePreview isSuccess={s} />
  },
  16: {
    id: 16,
    title: "Recursive Stack Overflow",
    files: {
      "recursive.js": `/**\n * Neural Factorial Calculator\n * Depth Analysis v2.0\n */\n\nfunction calculateFactorial(n) {\n  console.log("Recursive Depth: " + n);\n  \n  /**\n   * 🔍 BUG: Infinite recursion.\n   * Function never stops calling itself.\n   */\n  const result = n * calculateFactorial(n - 1);\n  \n  return result;\n}\n\n// Execution Node\ntry {\n  console.log("Result: " + calculateFactorial(5));\n} catch (e) {\n  console.error("FATAL: Call Stack Overwhelmed.");\n}`
    },
    bugReport: "Zia: The recursive calculation engine is causing a fatal 'Maximum call stack size exceeded' error. The function is executing in an infinite loop because it lacks a termination condition. You must implement a 'base case' to stop the recursion once it reaches zero.",
    solutionCheck: (c: string) => c.includes('if') && (c.includes('<= 1') || c.includes('=== 0')),
    renderPreview: (s: boolean) => <RecursionPreview isSuccess={s} />
  }
};



// --- PYTHON STAGES 1-16 PREVIEW COMPONENTS ---

const PythonIndentationPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black rounded-3xl border-2 border-white/5 flex flex-col font-mono text-[10px]">
    <div className="text-zinc-600 mb-2"># Python_Interpreter_v3.10</div>
    <div className={`p-4 rounded-xl border transition-all ${isSuccess ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400' : 'border-red-500/30 bg-red-500/5 text-red-400 animate-pulse'}`}>
      {isSuccess ? "> Node_Alpha: Syncing...\n> Node_Beta: Syncing...\n> Calibration: OK" : "IndentationError: expected an indented block"}
    </div>
  </div>
);

const MutableDefaultPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-xl text-black font-mono text-[10px] text-left">
    <div className="mb-4 border-b pb-2 text-zinc-400 uppercase font-black tracking-widest italic">Memory_Leak_Monitor:</div>
    <div className="space-y-2">
      <div className="flex justify-between"><span>Cluster_A:</span><span className="text-blue-600">['X-01']</span></div>
      <div className="flex justify-between font-bold"><span>Cluster_B:</span><span className={isSuccess ? 'text-green-600' : 'text-red-500'}>{isSuccess ? "['Y-02']" : "['X-01', 'Y-02']"}</span></div>
    </div>
    <p className="mt-4 text-[8px] text-zinc-400 uppercase tracking-tighter">{isSuccess ? "✓ Independent_Instances" : "⚠ Shared_Object_Reference"}</p>
  </div>
);

const ListCompTransformPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl border border-white/10 font-mono text-[10px]">
    <div className="text-zinc-500 mb-3"># Transformation_Output:</div>
    <div className="flex gap-2 flex-wrap">
      {(isSuccess ? [1, 4, 9, 16] : [2, 4, 6, 8]).map(n => (
        <div key={n} className={`px-3 py-1 rounded border ${isSuccess ? 'border-green-500 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]' : 'border-zinc-700 text-zinc-500'}`}>{n}</div>
      ))}
    </div>
  </div>
);

const DictionaryKeyPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-xl text-black text-left">
    <div className="flex items-center gap-2 mb-4"><div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-red-500 animate-ping'}`} /><span className="text-[10px] font-black uppercase">Registry_Lookup: "Zia"</span></div>
    <div className={`h-12 w-full rounded-xl flex items-center px-4 font-mono text-[10px] ${isSuccess ? 'bg-zinc-100' : 'bg-red-50 text-red-600'}`}>{isSuccess ? '{"role": "AI_Assistant"}' : "KeyError: 'Zia'"}</div>
  </div>
);

const TrainingLossPreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [loss, setLoss] = React.useState(0.95);
  React.useEffect(() => {
    const int = setInterval(() => setLoss(p => isSuccess ? Math.max(0.05, p - 0.05) : p), 300);
    return () => clearInterval(int);
  }, [isSuccess]);
  return (
    <div className="w-full p-8 bg-zinc-900 rounded-[2.5rem] border border-purple-500/20 text-center">
      <div className="text-[9px] text-zinc-500 mb-2 uppercase tracking-[0.3em] font-black">AI_Learning_Loss</div>
      <div className={`text-5xl font-black font-mono tracking-tighter transition-colors ${isSuccess ? 'text-purple-400' : 'text-red-600'}`}>{loss.toFixed(2)}</div>
      <p className="mt-4 text-[8px] text-zinc-600 uppercase italic">{isSuccess ? "Gradient_Converging" : "Stochastic_Gradient_Stuck"}</p>
    </div>
  );
};

const StringFormatPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl border shadow-inner font-mono text-[11px] text-black text-left">
    <div className="text-zinc-300 mb-2 uppercase text-[8px] font-black">f-string_output:</div>
    <div className={isSuccess ? 'text-blue-600' : 'text-zinc-400'}>{isSuccess ? "Node_ID: 404_READY" : "Node_ID: {id}_FAIL"}</div>
  </div>
);

const ZipLogicPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl border border-white/5 font-mono text-[9px] text-left">
    <div className="text-zinc-500 mb-3 uppercase font-black italic">Parallel_Mapping_v2:</div>
    <div className="space-y-1">
      {isSuccess ? <div>{`("Alpha", 1)`}<br/>{`("Beta", 2)`}</div> : <div className="text-red-500 italic animate-pulse"># ERROR: LENGTH_MISMATCH</div>}
    </div>
  </div>
);

const TupleImmutabilityPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-white rounded-3xl border-2 flex flex-col items-center">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 ${isSuccess ? 'bg-zinc-100 text-zinc-800' : 'bg-red-100 text-red-600 animate-bounce'}`}>🔒</div>
    <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">{isSuccess ? "Tuple_Protected" : "TypeError: Tuple_Modified"}</p>
  </div>
);

const RangeStepPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black rounded-3xl border border-white/10 text-center">
    <div className="flex gap-2 justify-center font-mono text-[10px]">
      {(isSuccess ? [0, 2, 4, 6] : [0, 1, 2, 3]).map(n => <div key={n} className="text-cyan-400 border border-cyan-400/20 px-2 rounded">{n}</div>)}
    </div>
    <p className="mt-4 text-[8px] text-zinc-600 uppercase font-black">Range_Step_Analysis</p>
  </div>
);

const GlobalScopePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-xl text-left border-l-8 border-orange-500">
    <div className="font-mono text-[11px] space-y-1">
      <div className="flex justify-between"><span># Local_Value:</span><span className="text-orange-600">50</span></div>
      <div className="flex justify-between font-bold"><span># Global_Value:</span><span className={isSuccess ? 'text-green-600' : 'text-red-500'}>{isSuccess ? "50" : "100"}</span></div>
    </div>
  </div>
);

const LambdaFilterPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl text-center">
    <div className={`text-3xl font-black mb-4 ${isSuccess ? 'text-cyan-500' : 'text-zinc-800'}`}>
      {isSuccess ? "✓ PASSED" : "FAILED"}
    </div>
    <p className="text-[8px] font-mono text-zinc-600 italic">
      {`lambda x: x > 10`}
    </p>
  </div>
);

const FileIOPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl border shadow-inner text-left font-mono text-[10px]">
    <div className="text-zinc-400 mb-2"># File_Buffer_State:</div>
    <div className={isSuccess ? 'text-green-600' : 'text-red-600 animate-pulse'}>{isSuccess ? "STATUS: CLOSED_SECURELY" : "ERROR: RESOURCE_LEAK_OPEN"}</div>
  </div>
);

const TryExceptPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black rounded-3xl border border-red-500/20">
    <div className="flex justify-between items-center mb-4"><span className="text-[9px] text-zinc-600 font-black uppercase">Exception_Handler</span><div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-red-500'}`} /></div>
    <div className="bg-zinc-900/50 p-3 rounded-lg text-xs italic text-red-400">{isSuccess ? "Caught: DivisionByZero" : "CRASH: System_Halted"}</div>
  </div>
);

const ClassInitPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-white rounded-3xl shadow-xl flex flex-col items-center">
     <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-2xl font-black ${isSuccess ? 'bg-blue-600' : 'bg-zinc-200'}`}>Z</div>
     <p className="text-[10px] font-black uppercase tracking-widest">{isSuccess ? "Zia_Object_Initialized" : "Attribute_Error"}</p>
  </div>
);

const DecoratorPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl border-2 border-dashed border-white/10 text-center">
    <div className={`text-[10px] font-mono mb-2 uppercase ${isSuccess ? 'text-green-500' : 'text-zinc-500'}`}>@Timing_Logger</div>
    <div className="h-1 w-20 bg-zinc-800 mx-auto rounded-full overflow-hidden"><div className={`h-full bg-green-500 ${isSuccess ? 'w-full' : 'w-4'}`} /></div>
  </div>
);

const TensorShapePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full h-44 bg-[#0a0a0b] rounded-3xl flex items-center justify-center p-6 relative overflow-hidden">
    <div className={`w-32 h-20 border-2 rounded-xl flex items-center justify-center transition-all duration-1000 ${isSuccess ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'border-red-500 animate-ping opacity-20'}`}>
      <span className="text-[9px] font-black text-white">{isSuccess ? "TENSOR: [1, 256, 256]" : "SHAPE_MISMATCH"}</span>
    </div>
  </div>
);



export const pythonLevels: any = {
  1: {
    id: 1,
    title: "Syntax: The Indentation Trap",
    files: {
      "main.py": `/**\n * Neural System Initialization v2.4\n * Protocol: Establish secure connection to AI nodes.\n */\n\ndef initialize_nodes():\n    print("Starting system calibration...")\n    nodes = ["alpha", "beta", "gamma"]\n    \n    for node in nodes:\n    # 🔍 BUG: Incorrect indentation in loop body\n    print(f"Syncing node {node}...")\n    status = "CONNECTED"\n    \n    metadata = {\n        "processed": len(nodes),\n        "status": status\n    }\n    \n    print("Calibration finished.")\n    return metadata\n\n# Execution Node\nresult = initialize_nodes()\nprint(f"Final Report: {result}")`
    },
    bugReport: "Zia: The Python interpreter has raised an 'IndentationError'. In Python, whitespace defines the structure of the execution blocks. The loop body must be properly nested under the 'for' statement to initiate the node sync. Align the block to fix the boot sequence.",
    solutionCheck: (c: string) => c.includes('    print(f"Syncing'),
    renderPreview: (s: boolean) => <PythonIndentationPreview isSuccess={s} />
  },
  2: {
    id: 2,
    title: "Logic: Mutable Default Danger",
    files: {
      "core.py": `def add_to_cluster(node_id, cluster_list=[]):\n    """\n    🔍 BUG: Default argument is evaluated only once.\n    Shared across all function calls!\n    """\n    cluster_list.append(node_id)\n    \n    print(f"Adding Node: {node_id}")\n    print(f"Buffer Integrity: {id(cluster_list)}")\n    \n    return cluster_list\n\n# Simulation Case\ncluster_a = add_to_cluster("X-01")\nprint(f"Cluster A: {cluster_a}")\n\n# 🔍 This will unexpectedly inherit X-01\ncluster_b = add_to_cluster("Y-02")\nprint(f"Cluster B: {cluster_b}")`
    },
    bugReport: "Zia: Data leakage detected! Cluster B is inheriting nodes from Cluster A because both are sharing the same default list instance in memory. You must recalibrate the function to use 'None' as the default value and initialize a fresh list inside the function.",
    solutionCheck: (c: string) => c.includes('None') && c.includes('is None'),
    renderPreview: (s: boolean) => <MutableDefaultPreview isSuccess={s} />
  },
  3: {
    id: 3,
    title: "Data Science: List Logic",
    files: {
      "transform.py": `data_packet = [1, 2, 3, 4]\n\ndef square_neural_signals(signals):\n    print("Initializing Signal Squaring Protocol...")\n    \n    /**\n     * 🔍 BUG: Incorrect mathematical operator in comprehension.\n     * Current result: doubling instead of squaring.\n     */\n    processed = [n * 2 for n in signals]\n    \n    log = {\n        "input": signals,\n        "output": processed,\n        "op": "SQUARE_V1"\n    }\n    \n    print(f"Report Generated: {log}")\n    return processed\n\n# Run transformation\noutput = square_neural_signals(data_packet)\nprint("Final Tensor:", output)`
    },
    bugReport: "Zia: The neural data transformation is failing its mathematical validation. The current logic is performing a scalar multiplication (n * 2) rather than an exponential squaring (n²). Adjust the list comprehension to use the correct exponent operator.",
    solutionCheck: (c: string) => c.includes('** 2') || c.includes('n * n'),
    renderPreview: (s: boolean) => <ListCompTransformPreview isSuccess={s} />
  },
  4: {
    id: 4,
    title: "Mapping: The Dictionary Key",
    files: {
      "registry.py": `node_registry = {\n    "alpha": {"id": 401, "role": "sensor"},\n    "beta": {"id": 402, "role": "relay"}\n}\n\ndef fetch_node_config(name):\n    print(f"Searching Registry for Node: {name}")\n    \n    /**\n     * 🔍 BUG: Direct access will crash if key is missing.\n     * 'Zia' is not in the system yet.\n     */\n    config = node_registry[name]\n    \n    return config\n\ntry:\n    # Zia is a dynamic node\n    data = fetch_node_config("Zia")\nexcept KeyError as e:\n    print(f"CRITICAL: Key {e} not found in registry.")`
    },
    bugReport: "Zia: The registry module is crashing with a 'KeyError' during the dynamic node lookup. Direct dictionary access is too unstable for our evolving network. Implement a safer retrieval method that returns 'None' or a default object if the key is missing.",
    solutionCheck: (c: string) => c.includes('.get('),
    renderPreview: (s: boolean) => <DictionaryKeyPreview isSuccess={s} />
  },
  5: {
    id: 5,
    title: "AI Logic: Infinite Gradient",
    files: {
      "trainer.py": `def train_neural_model(epochs, loss_value):\n    print("Starting Learning Protocol...")\n    \n    current_epoch = 0\n    \n    # 🔍 BUG: Infinite loop detected.\n    # Loop condition never meets termination.\n    while current_epoch < epochs:\n        print(f"Processing Epoch {current_epoch} | Loss: {loss_value}")\n        \n        # Simulating learning step\n        loss_value -= 0.05\n        \n        if loss_value <= 0.05:\n            print("Convergence reached.")\n            break\n            \n    print("Training Cycle Terminated.")\n    return loss_value\n\ntrain_neural_model(10, 0.95)`
    },
    bugReport: "Zia: The AI training loop is stuck in an infinite processing cycle, repeatedly analyzing Epoch 0. The counter responsible for tracking iteration progress is never being incremented. Manually advance the epoch count to ensure the training terminates.",
    solutionCheck: (c: string) => c.includes('+= 1') || c.includes('current_epoch + 1'),
    renderPreview: (s: boolean) => <TrainingLossPreview isSuccess={s} />
  },
  6: {
    id: 6,
    title: "Strings: Formatting Error",
    files: {
      "logger.py": `def generate_node_id(id_num):\n    print("Generating secure identifier...")\n    \n    # 🔍 BUG: Raw string instead of f-string\n    # The curly braces are treated as literal text.\n    report = "Node_ID: {id_num}_READY"\n    \n    return report\n\n# Execution Node\nprint(generate_node_id("404"))`
    },
    bugReport: "Zia: The node identifier is failing to interpolate the dynamic variable, displaying the raw curly braces '{id_num}' in the final output. You must activate the literal string interpolation prefix to allow Python to parse the variable inside.",
    solutionCheck: (c: string) => c.includes('f"') || c.includes('f\''),
    renderPreview: (s: boolean) => <StringFormatPreview isSuccess={s} />
  },
  7: {
    id: 7,
    title: "Logic: Zip Length Mismatch",
    files: {
      "mapper.py": `node_names = ["Alpha", "Beta"]\nnode_values = [1, 2, 3] # Extra value\n\ndef map_neural_pairs(names, values):\n    print("Pairing Node Names with Numeric Values...")\n    \n    # 🔍 BUG: Strict mapping requires equal lengths\n    # Default zip() ignores the extra '3'\n    pairs = list(zip(names, values))\n    \n    print(f"Mapping Matrix: {pairs}")\n    return pairs\n\n# Validation check\nresults = map_neural_pairs(node_names, node_values)\nif len(results) != len(node_values):\n    print("DATA_LOSS_DETECTED")`
    },
    bugReport: "Zia: A data loss event occurred during the node pairing process. The '3' value from our numeric dataset was discarded because the zip function reached the end of the shorter name list. You must implement a strict length check to ensure data integrity before pairing.",
    solutionCheck: (c: string) => c.includes('if len') && c.includes('!='),
    renderPreview: (s: boolean) => <ZipLogicPreview isSuccess={s} />
  },
  8: {
    id: 8,
    title: "Tuples: Immutability Crash",
    files: {
      "config.py": `def update_neural_config():\n    # 🔍 BUG: Tuples cannot be modified after creation\n    core_settings = ("READY", 1.0, "SYNCED")\n    \n    print(f"Current Config: {core_settings}")\n    \n    # Attempting to change status\n    core_settings[0] = "BUSY"\n    \n    return core_settings\n\ntry:\n    update_neural_config()\nexcept TypeError as e:\n    print(f"CRITICAL: {e}")`
    },
    bugReport: "Zia: The configuration update failed with a 'TypeError'. You are attempting to modify an element within a Tuple, which is an immutable data structure. If you need a collection that allows post-creation modifications, switch to a List architecture.",
    solutionCheck: (c: string) => c.includes('[') && c.includes(']'),
    renderPreview: (s: boolean) => <TupleImmutabilityPreview isSuccess={s} />
  },
  9: {
    id: 9,
    title: "Logic: Range Step Failure",
    files: {
      "sequencer.py": `def generate_even_sequence(limit):\n    print(f"Generating Even Sequence up to {limit}...")\n    \n    # 🔍 BUG: Range step defaults to 1\n    # Current result: [0, 1, 2, 3...]\n    sequence = list(range(0, limit))\n    \n    print(f"Sequence Matrix: {sequence}")\n    return sequence\n\n# Test Case\nresult = generate_even_sequence(8)\nprint(result)`
    },
    bugReport: "Zia: The node sequencer is generating a linear count instead of the required even-only intervals. The current range definition is missing the step parameter. Adjust the range function to skip every second node during the generation phase.",
    solutionCheck: (c: string) => c.includes(', 2)'),
    renderPreview: (s: boolean) => <RangeStepPreview isSuccess={s} />
  },
  10: {
    id: 10,
    title: "Scope: Global Var Lock",
    files: {
      "manager.py": `system_power = 100\n\ndef reduce_power():\n    # 🔍 BUG: Attempting to modify global var without declaration\n    # This creates a local variable instead\n    system_power = 50\n    print(f"Internal Check: {system_power}")\n\nreduce_power()\nprint(f"Global Power Status: {system_power}")\n\nif system_power == 100:\n    print("ERROR: Global power failed to update.")`
    },
    bugReport: "Zia: Power reduction failed! The internal function is creating a local shadow variable instead of updating the global system power. You must explicitly declare the variable as global within the function scope to authorize the modification.",
    solutionCheck: (c: string) => c.includes('global '),
    renderPreview: (s: boolean) => <GlobalScopePreview isSuccess={s} />
  },
  11: {
    id: 11,
    title: "Lambdas: Logic Filtering",
    files: {
      "filter.py": `node_values = [5, 12, 8, 20, 3]\n\ndef filter_high_signals(signals):\n    print("Starting Lambda Filtering Protocol...")\n    \n    # 🔍 BUG: Filter logic returning everything below 10\n    # Requirement: Return nodes above 10\n    high_nodes = list(filter(lambda x: x < 10, signals))\n    \n    print(f"Nodes Identified: {high_nodes}")\n    return high_nodes\n\n# Execution\nfinal_list = filter_high_signals(node_values)`
    },
    bugReport: "Zia: The high-signal filter is behaving inversely, capturing all low-value nodes and discarding the high ones. The logic inside the lambda function has been defined with an incorrect comparison operator. Flip the logic to isolate nodes greater than 10.",
    solutionCheck: (c: string) => c.includes('x > 10'),
    renderPreview: (s: boolean) => <LambdaFilterPreview isSuccess={s} />
  },
  12: {
    id: 12,
    title: "File I/O: Resource Leak",
    files: {
      "logger.py": `def save_neural_logs(data):\n    print("Opening file stream for logging...")\n    \n    # 🔍 BUG: File opened but never closed\n    f = open("neural.log", "w")\n    f.write(data)\n    \n    # 🔍 Potential memory leak or file lock\n    print("Data written to disk.")\n    return True\n\nsave_neural_logs("Sync_Status: OK")`
    },
    bugReport: "Zia: Resource leak detected in the logging module! The file stream is being opened for writing but is never explicitly closed, which could lead to file corruption or memory exhaustion. Upgrade the implementation to use a context manager for automatic resource handling.",
    solutionCheck: (c: string) => c.includes('with open'),
    renderPreview: (s: boolean) => <FileIOPreview isSuccess={s} />
  },
  13: {
    id: 13,
    title: "Exception: Zero Division",
    files: { "calc.py": `def calculate_average_load(total, nodes):\n    print(f"Processing load for {nodes} active nodes...")\n    \n    # 🔍 BUG: Crashes when nodes is 0\n    average = total / nodes\n    \n    return average\n\ntry:\n    # API reports 0 active nodes during reboot\n    result = calculate_average_load(100, 0)\nexcept ZeroDivisionError:\n    print("CRASH_AVOIDED: Handled 0 nodes.")` },
    bugReport: "Zia: A division-by-zero crash occurred during the system reboot phase. The calculation engine is not equipped to handle a zero-node scenario. Wrap the arithmetic operation in a protective block to handle this specific runtime error gracefully.",
    solutionCheck: (c: string) => c.includes('try:') && c.includes('except'),
    renderPreview: (s: boolean) => <TryExceptPreview isSuccess={s} />
  },
  14: {
    id: 14,
    title: "Classes: The Self Parameter",
    files: {
      "ai_obj.py": `class NeuralAssistant:\n    # 🔍 BUG: Missing 'self' parameter in constructor\n    def __init__(name):\n        name = name\n        print("Assistant Object Created.")\n\n    def introduce(self):\n        print(f"Hello, I am {self.name}")\n\n# Execution Node\ntry:\n    zia = NeuralAssistant("Zia")\n    zia.introduce()\nexcept TypeError as e:\n    print(f"INIT_FAIL: {e}")`
    },
    bugReport: "Zia: The AI assistant object failed to initialize. The constructor method is missing its required reference to the instance itself, preventing the assignment of the 'name' attribute. Add the mandatory instance pointer to the initialization logic.",
    solutionCheck: (c: string) => c.includes('self, name'),
    renderPreview: (s: boolean) => <ClassInitPreview isSuccess={s} />
  },
  15: {
    id: 15,
    title: "Decorators: Timing Wrapper",
    files: {
      "wrapper.py": `import time\n\ndef log_execution_time(func):\n    def wrapper():\n        # 🔍 BUG: Not calling the original function\n        # Just printing logs without executing work\n        print("Timer: Started")\n        print("Timer: Stopped")\n    return wrapper\n\n@log_execution_time\ndef sync_data():\n    print("Syncing data nodes...")\n\nsync_data()`
    },
    bugReport: "Zia: The timing decorator is reporting start and stop events, but the actual data synchronization logic is never being triggered! The wrapper function is swallowing the original call. Ensure the decorator executes the function it is wrapping.",
    solutionCheck: (c: string) => c.includes('func()'),
    renderPreview: (s: boolean) => <DecoratorPreview isSuccess={s} />
  },
  16: {
    id: 16,
    title: "AI Logic: Tensor Shape",
    files: {
      "neural.py": `def process_neural_tensor(input_data):\n    print(f"Validating Input Shape: {len(input_data)}")\n    \n    /**\n     * 🔍 BUG: Dimension mismatch logic error.\n     * Model expects exactly 3 dimensions.\n     */\n    if len(input_data) > 3:\n        print("ERROR: Tensor too large.")\n        return\n\n    print("Neural computation started...")\n    return "SYNC_COMPLETE"\n\n# Simulation Case\n# Input has 2 dimensions, logic passes but model crashes\nprocess_neural_tensor([[1,2], [3,4]])`
    },
    bugReport: "Zia: Neural network crash! The model strictly requires a 3D tensor input, but the validation logic is only checking if the size is greater than 3. It's allowing 2D tensors to pass through. Recalibrate the check to ensure exactly 3 dimensions are present.",
    solutionCheck: (c: string) => c.includes('!= 3'),
    renderPreview: (s: boolean) => <TensorShapePreview isSuccess={s} />
  }
};



// --- FULLSTACK STAGES 1-16 PREVIEW COMPONENTS ---
const DataMappingPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-zinc-900 rounded-[2.5rem] border border-white/5 shadow-2xl flex flex-col items-center">
    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
      <div className={`w-6 h-6 border-2 border-blue-500 rounded-sm ${isSuccess ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-transparent'}`} />
    </div>
    <div className="bg-black p-4 rounded-xl font-mono text-xs w-full text-center">
      <span className="text-zinc-500 uppercase text-[8px] block mb-1">API_RESPONSE_LOG:</span>
      <span className={isSuccess ? 'text-green-400' : 'text-red-500 animate-pulse'}>
        {isSuccess ? "Identity: NODE_X404" : "Identity: UNDEFINED"}
      </span>
    </div>
    <p className="mt-4 text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em]">
      {isSuccess ? "✓ DATA_FIELD_SYNCED" : "⚠ ERROR: KEY_MISMATCH"}
    </p>
  </div>
);

const AuthHeaderPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-xl text-black text-left">
    <div className="flex items-center gap-2 mb-4">
      <div className={`w-3 h-3 rounded-full ${isSuccess ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-red-500'}`} />
      <span className="text-[10px] font-black uppercase tracking-widest">Auth_Token_Scanner</span>
    </div>
    <div className="bg-zinc-100 p-3 rounded-lg font-mono text-[9px] overflow-hidden">
      {isSuccess ? "Authorization: Bearer eyJhbGci..." : "HTTP_ERROR: 401_UNAUTHORIZED"}
    </div>
  </div>
);

const JsonParsePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-[#0a0a0b] rounded-3xl border border-white/10 text-center">
    <div className={`text-xs font-mono mb-4 ${isSuccess ? 'text-cyan-400' : 'text-red-500 animate-bounce'}`}>
      {isSuccess ? 'Object { status: "OK", data: [...] }' : "Unexpected token 'U' in JSON at position 0"}
    </div>
    <div className="h-1 w-20 bg-zinc-800 mx-auto rounded-full overflow-hidden">
      <div className={`h-full bg-cyan-500 transition-all duration-1000 ${isSuccess ? 'w-full' : 'w-4'}`} />
    </div>
  </div>
);

const LoadingStatePreview = ({ isSuccess }: { isSuccess: boolean }) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    if (isSuccess) {
      const t = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(t);
    }
  }, [isSuccess]);
  return (
    <div className="w-full p-8 bg-white rounded-[2.5rem] border shadow-2xl flex flex-col items-center">
      {loading ? <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" /> : <div className="text-green-600 font-black text-2xl mb-4 animate-bounce">✓</div>}
      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">{loading ? "Fetching_Neural_Data..." : "Data_Sync_Complete"}</p>
    </div>
  );
};

const PayloadMismatchPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl border border-white/5 text-left font-mono text-[10px]">
    <div className="text-zinc-500 mb-2 uppercase font-black">API_Payload_Validation:</div>
    <div className="space-y-1">
      <div className="flex justify-between"><span># Request:</span><span className="text-blue-400">username</span></div>
      <div className="flex justify-between"><span># Expected:</span><span className="text-purple-400">user_name</span></div>
      <div className={`mt-3 p-2 rounded ${isSuccess ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
        {isSuccess ? "✓ MAPPING_SYNCED" : "❌ FIELD_NAME_MISMATCH"}
      </div>
    </div>
  </div>
);

const MixedContentPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white border-4 border-red-500 rounded-3xl text-center">
    <div className={`text-xl mb-2 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>{isSuccess ? "🔒" : "🔓"}</div>
    <p className={`text-[10px] font-black uppercase ${isSuccess ? 'text-green-600' : 'text-red-500'}`}>
      {isSuccess ? "✓ CONNECTION_SECURE" : "⚠ MIXED_CONTENT_BLOCKED"}
    </p>
  </div>
);

const ContentTypePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl border border-white/5 font-mono text-[9px] text-left text-cyan-500">
    <div>{"HTTP_POST_REQUEST"}</div>
    <div className="mt-2 text-zinc-500">{"Headers: {"}</div>
    <div className={isSuccess ? 'text-green-400' : 'text-red-400'}>{isSuccess ? '  "Content-Type": "application/json"' : '  "Content-Type": "??"'}</div>
    <div className="text-zinc-500">{"}"}</div>
  </div>
);

const OkStatusPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white border-2 rounded-xl text-[10px] font-black text-center">
    <div className={`p-4 rounded-xl mb-2 ${isSuccess ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
      {isSuccess ? "HTTP_200: OK" : "CRASH: 404_NOT_FOUND"}
    </div>
    <p className="text-zinc-400 uppercase italic font-mono">{isSuccess ? "Verified_User_Found" : "Cannot_Read_Undefined"}</p>
  </div>
);

const QueryParamPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl text-xs font-mono text-blue-400 italic text-left">
    <div className="text-zinc-500 text-[8px] uppercase mb-1 font-black tracking-widest italic">Endpoint_Output:</div>
    <div>{isSuccess ? "/api/search?q=neural" : "/api/searchneural"}</div>
  </div>
);

const DoubleSubmitPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-white border-2 rounded-3xl text-[10px] font-black uppercase text-center">
     <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${isSuccess ? 'bg-zinc-100' : 'bg-red-50 text-red-500 animate-pulse'}`}>
        {isSuccess ? "✓" : "!!!"}
     </div>
     {isSuccess ? "Button: DISABLED_WHILE_SAVING" : "ERROR: MULTIPLE_POSTS_SENT"}
  </div>
);

const ResponseDelayPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black border border-white/5 rounded-3xl font-mono text-[9px]">
    <div className="flex justify-between text-zinc-500 mb-2"><span>Latency_Report:</span><span>{isSuccess ? "200ms" : "8.5s"}</span></div>
    <div className={`h-1 w-full bg-zinc-800 rounded-full overflow-hidden`}><div className={`h-full bg-orange-500 ${isSuccess ? 'w-full' : 'w-1/4 animate-pulse'}`} /></div>
  </div>
);

const TokenExpiredPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-white border-2 border-dashed rounded-[3rem] text-center">
    <div className={`text-2xl mb-2 ${isSuccess ? 'grayscale-0' : 'grayscale animate-pulse'}`}>🔑</div>
    <p className={`text-[10px] font-black uppercase ${isSuccess ? 'text-blue-600' : 'text-zinc-300'}`}>{isSuccess ? "Token_Refreshed" : "401: Token_Expired"}</p>
  </div>
);

const EnvVarPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl font-mono text-[10px] text-left">
    <div className="text-zinc-500 mb-2"># .env_config_production</div>
    <div className={isSuccess ? 'text-green-500' : 'text-red-500'}>
      {isSuccess ? "API_KEY=******** (SAFE)" : "API_KEY=xyz123 (EXPOSED!)"}
    </div>
  </div>
);

const CorsMethodsPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white border-2 rounded-xl text-[10px] font-black uppercase text-left">
    <div className="flex justify-between border-b pb-1"><span>METHOD: DELETE</span><span className={isSuccess ? 'text-green-600' : 'text-red-500'}>{isSuccess ? "ALLOWED" : "BLOCKED"}</span></div>
  </div>
);

const BaseUrlPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl font-mono text-[10px] text-left">
    <div className="text-zinc-500 mb-1"># Request_Dest:</div>
    <div className={isSuccess ? 'text-cyan-400' : 'text-red-400 italic'}>{isSuccess ? "https://prod.api.com/v1" : "http://localhost:5000/v1"}</div>
  </div>
);

const SseLeakPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 border-2 border-cyan-500/20 rounded-3xl text-center">
    <div className={`w-3 h-3 mx-auto mb-2 rounded-full ${isSuccess ? 'bg-green-500' : 'bg-blue-500 animate-pulse'}`} />
    <span className="text-[10px] font-mono text-zinc-500">{isSuccess ? "CONNECTIONS_MANAGED" : "LEAK: 4_ACTIVE_STAY_OPEN"}</span>
  </div>
);


export const fullstackLevels: any = {
 1: {
    id: 1,
    title: "Integration: The Payload Mismatch",
    files: {
      "api_client.js": `/**\n * Neural Network - Data Fetcher v1.0\n * Purpose: Sync local identity with remote server.\n */\n\nasync function syncIdentity() {\n  console.log("Requesting identity packet from server...");\n  \n  // Simulating API response: { "user_id": "NODE_X404", "status": "ACTIVE" }\n  const response = await fetch("/api/identity/v1");\n  const data = await response.json();\n\n  /**\n   * 🔍 BUG: Key Mismatch.\n   * The server sends 'user_id', but the frontend is \n   * trying to access 'id'.\n   */\n  const activeID = data.id;\n\n  const report = {\n    timestamp: Date.now(),\n    received_id: activeID,\n    verified: activeID !== undefined\n  };\n\n  console.log("Sync Report Generated:", report);\n  return "Identity: " + activeID;\n}\n\nsyncIdentity().then(res => console.log(res));`
    },
    bugReport: "Zia: The integration bridge is failing to display the user identity. While the network tab confirms a successful 200 OK response, the dashboard is showing 'Undefined'. This indicates a naming conflict between the API's JSON keys and our frontend variables. Align the variable name with the actual payload key.",
    solutionCheck: (c: string) => c.includes('data.user_id'),
    renderPreview: (s: boolean) => <DataMappingPreview isSuccess={s} />
  },
  2: {
    id: 2,
    title: "Auth: Missing Bearer Protocol",
    files: {
      "api_client.js": `async function fetchSecureLogs() {\n  const security_token = "eyJhbGciOiJIUzI1NiI...";\n  \n  console.log("Initiating Secure Neural Handshake...");\n\n  /**\n   * 🔍 BUG: Authorization header is malformed.\n   * The server expects a specific authentication scheme.\n   */\n  const response = await fetch("https://api.neural.link/logs", {\n    method: "GET",\n    headers: {\n      "Authorization": security_token\n    }\n  });\n\n  if (response.status === 401) {\n    console.error("Auth_Fail: Invalid Protocol Format.");\n  }\n\n  return await response.json();\n}`
    },
    bugReport: "Zia: Authentication is failing with a 401 Unauthorized status. The server is receiving the raw token but doesn't know how to interpret it because the 'Bearer' prefix is missing from the header. Reformat the Authorization string to follow the standard Bearer token protocol.",
    solutionCheck: (c: string) => c.includes('Bearer ') || c.includes('`Bearer ${'),
    renderPreview: (s: boolean) => <AuthHeaderPreview isSuccess={s} />
  },
  3: {
    id: 3,
    title: "JSON: The Raw Response Error",
    files: {
      "frontend.js": `async function syncDataCluster() {\n  console.log("Requesting Node Manifest from Server...");\n  \n  const response = await fetch("/api/v1/cluster/manifest");\n  \n  /**\n   * 🔍 BUG: Accessing properties before decoding JSON body.\n   * 'response' is a Response object, not the raw data.\n   */\n  const clusterData = response;\n\n  console.log("Nodes Found: " + (clusterData.length || "0"));\n  \n  // Attempting to iterate through the manifest\n  const ids = clusterData.map(node => node.id);\n  \n  return ids;\n}`
    },
    bugReport: "Zia: The application is failing to render the node list. It’s attempting to perform array operations directly on the HTTP Response object instead of the actual JSON body. You must decode the incoming stream using the appropriate asynchronous method before processing the data.",
    solutionCheck: (c: string) => c.includes('.json()'),
    renderPreview: (s: boolean) => <JsonParsePreview isSuccess={s} />
  },
  4: {
    id: 4,
    title: "State: The Infinite Loader",
    files: {
      "DataGrid.jsx": `export default function DataGrid() {\n  const [isLoading, setIsLoading] = useState(true);\n  const [metrics, setMetrics] = useState([]);\n\n  useEffect(() => {\n    console.log("Syncing DataGrid with Backend...");\n    \n    fetch("/api/neural/metrics")\n      .then(res => res.json())\n      .then(data => {\n        setMetrics(data);\n        // 🔍 BUG: State reset logic missing.\n        console.log("Sync: Successful.");\n      });\n  }, []);\n\n  if (isLoading) return <LoadingSpinner />;\n  return <RenderGrid data={metrics} />;\n}`
    },
    bugReport: "Zia: The dashboard is permanently stuck on the loading screen. Even though the network tab shows that the data has arrived successfully, the UI state never transitions out of its initial 'loading' phase. Update the state to allow the grid to render once the data is ready.",
    solutionCheck: (c: string) => c.includes('setIsLoading(false)'),
    renderPreview: (s: boolean) => <LoadingStatePreview isSuccess={s} />
  },
  5: {
    id: 5,
    title: "API: Schema Naming Conflict",
    files: {
      "ProfileUpdate.js": `async function syncProfileIdentity(name) {\n  console.log("Preparing profile update for: " + name);\n  \n  /**\n   * 🔍 BUG: Payload field name mismatch.\n   * Backend Schema expects 'user_name'.\n   */\n  const update_payload = {\n    username: name\n  };\n\n  const res = await fetch("/api/identity/update", {\n    method: "PATCH",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(update_payload)\n  });\n\n  return res.status;\n}`
    },
    bugReport: "Zia: The profile update is failing with a 400 Bad Request status. There is a conflict between the client's payload and the server's expected schema. The backend is looking for a field named 'user_name', but we are providing 'username'. Synchronize the key names.",
    solutionCheck: (c: string) => c.includes('user_name:'),
    renderPreview: (s: boolean) => <PayloadMismatchPreview isSuccess={s} />
  },
  6: {
    id: 6,
    title: "Security: Mixed Content Block",
    files: {
      "config.js": `/**\n * Neural API Configuration\n * Current site is running on HTTPS.\n */\n\n// 🔍 BUG: Non-secure protocol in a secure environment\nconst API_ENDPOINT = "http://api.neural-sync.link/v2";\n\nasync function triggerAuth() {\n  console.log("Attempting handshake with: " + API_ENDPOINT);\n  const res = await fetch(API_ENDPOINT + "/auth");\n  return res.ok;\n}`
    },
    bugReport: "Zia: The browser is blocking the API request as 'Mixed Content'. Our secure HTTPS production site is not allowed to make requests to non-secure HTTP endpoints. Upgrade the endpoint protocol to ensure the browser authorizes the network request.",
    solutionCheck: (c: string) => c.includes('https://'),
    renderPreview: (s: boolean) => <MixedContentPreview isSuccess={s} />
  },
  7: {
    id: 7,
    title: "Header: Missing Content-Type",
    files: {
      "POST_Request.js": `async function submitNeuralData(payload) {\n  console.log("Packaging data for transmission...");\n\n  /**\n   * 🔍 BUG: Backend receives empty JSON.\n   * Server doesn't know how to parse this request.\n   */\n  const res = await fetch("/api/data/submit", {\n    method: "POST",\n    body: JSON.stringify({ data: payload })\n  });\n\n  console.log("Transmission Status: " + res.status);\n  return res.json();\n}`
    },
    bugReport: "Zia: The server is receiving an empty body even though we are sending a JSON payload. The backend doesn't know how to interpret the raw stream because we haven't specified the data format in the headers. Explicitly define the 'Content-Type' as JSON.",
    solutionCheck: (c: string) => c.includes('application/json'),
    renderPreview: (s: boolean) => <ContentTypePreview isSuccess={s} />
  },
  8: {
    id: 8,
    title: "Logic: Safe Status Handling",
    files: {
      "UserFetch.js": `async function getProfileData(id) {\n  const res = await fetch("/api/user/" + id);\n  \n  /**\n   * 🔍 BUG: Immediate parsing without status check.\n   * If user 404s, 'res.json()' might fail or return error obj.\n   */\n  const data = await res.json();\n  \n  console.log("Processing name: " + data.name);\n  return data.name;\n}`
    },
    bugReport: "Zia: The application is crashing when it attempts to fetch a user that doesn't exist. It's trying to read the 'name' property of an error response. You must verify that the server returned a successful status (200 OK) before attempting to use the data.",
    solutionCheck: (c: string) => c.includes('res.ok') || c.includes('res.status === 200'),
    renderPreview: (s: boolean) => <OkStatusPreview isSuccess={s} />
  },
  9: {
    id: 9,
    title: "Network: Query String Syntax",
    files: {
      "search.js": `async function performSearch(queryTerm) {\n  console.log("Filtering Neural Database for: " + queryTerm);\n\n  /**\n   * 🔍 BUG: Incorrect URL formation for parameters.\n   * Query parameters must be separated by specific syntax.\n   */\n  const url = "/api/v1/search" + queryTerm;\n  \n  const res = await fetch(url);\n  return await res.json();\n}`
    },
    bugReport: "Zia: The search engine is ignoring the filter terms and returning the entire dataset. The query term is being treated as part of the URL path instead of a parameter. Reconstruct the URL using the correct query string syntax (key-value pairs).",
    solutionCheck: (c: string) => c.includes('?q=') || c.includes('?query='),
    renderPreview: (s: boolean) => <QueryParamPreview isSuccess={s} />
  },
  10: {
    id: 10,
    title: "UX: Double Submission Leak",
    files: {
      "SubmitForm.jsx": `export default function SubmitForm() {\n  const [isSyncing, setIsSyncing] = useState(false);\n\n  const handleSubmit = async () => {\n    /**\n     * 🔍 BUG: Vulnerable to rapid clicking.\n     * Multiple requests are sent before first one resolves.\n     */\n    setIsSyncing(true);\n    await api.postData();\n    setIsSyncing(false);\n  };\n\n  return <button onClick={handleSubmit}>SYNC_NOW</button>;\n}`
    },
    bugReport: "Zia: Our backend is receiving duplicate entries for every single submission. Users are accidentally clicking the 'Sync' button multiple times while the first request is still in flight. Implement a gatekeeper to prevent any new calls until the current one is finished.",
    solutionCheck: (c: string) => c.includes('if (isSyncing)'),
    renderPreview: (s: boolean) => <DoubleSubmitPreview isSuccess={s} />
  },
  11: {
    id: 11,
    title: "Performance: Long-Polling Lag",
    files: {
      "poller.js": `/**\n * Data Sync Poller\n */\nfunction startPolling() {\n  // 🔍 BUG: Interval is way too short for this heavy API\n  // Creating a bottleneck on the server.\n  setInterval(async () => {\n    const res = await fetch("/api/heavy-data");\n    console.log("Sync heartbeat pulse.");\n  }, 500);\n}`
  },
    bugReport: "Zia: The server is reporting a critical load spike. Our client is requesting a massive data set every 500ms, which is faster than the server can even respond. This sequential bottleneck is slowing down the entire system. Increase the interval to a sustainable frequency.",
    solutionCheck: (c: string) => c.includes('5000') || c.includes('8000'),
    renderPreview: (s: boolean) => <ResponseDelayPreview isSuccess={s} />
  },
  12: {
    id: 12,
    title: "Auth: Token Expiration Loop",
    files: {
      "Interceptor.js": `async function handleRequest(url) {\n  let res = await fetch(url, { headers: { "Auth": token } });\n\n  /**\n   * 🔍 BUG: Infinite recursion on 401 error.\n   * Re-fetching without updating the token first.\n   */\n  if (res.status === 401) {\n    return await handleRequest(url);\n  }\n\n  return res;\n}`
    },
    bugReport: "Zia: The application is crashing with a 'Maximum call stack exceeded' error whenever a user's token expires. The logic is continuously retrying the request without actually refreshing the credential. Implement a token refresh step before retrying the call.",
    solutionCheck: (c: string) => c.includes('refreshToken'),
    renderPreview: (s: boolean) => <TokenExpiredPreview isSuccess={s} />
  },
  13: {
    id: 13,
    title: "DevOps: Exposed API Keys",
    files: {
      "app.js": `// 🔍 BUG: Hardcoded sensitive data in source code\nconst API_SECRET = "AI_KEY_9921_SECRET";\n\nfunction initializeConnection() {\n  console.log("Connecting with key: " + API_SECRET);\n  connect(API_SECRET);\n}`
    },
    bugReport: "Zia: A security vulnerability was found during the build scan. A highly sensitive API secret is hardcoded directly into the application's source code, making it visible to anyone who inspects the bundle. Move the secret to an environment variable for secure injection.",
    solutionCheck: (c: string) => c.includes('process.env') || c.includes('import.meta.env'),
    renderPreview: (s: boolean) => <EnvVarPreview isSuccess={s} />
  },
  14: {
    id: 14,
    title: "API: Blocked HTTP Method",
    files: {
      "admin.js": `async function deleteUserNode(id) {\n  /**\n   * 🔍 BUG: CORS config only allows GET and POST.\n   * DELETE method is being blocked by the server pre-flight.\n   */\n  const res = await fetch("/api/node/" + id, {\n    method: "DELETE"\n  });\n  \n  return res.ok;\n}`
    },
    bugReport: "Zia: The user deletion request is failing at the pre-flight check. The backend's CORS configuration is currently only authorized for GET and POST methods, causing it to reject our 'DELETE' command. You must authorize the DELETE method on the server side.",
    solutionCheck: (c: string) => c.includes('methods=['),
    renderPreview: (s: boolean) => <CorsMethodsPreview isSuccess={s} />
  },
  15: {
    id: 15,
    title: "Environment: Base URL Mismatch",
    files: {
      "constants.js": `/**\n * 🔍 BUG: Hardcoded localhost in production code.\n * API will fail when deployed to the cloud.\n */\nexport const BASE_URL = "http://localhost:5000/api/v1";\n\nasync function fetchData() {\n  const res = await fetch(BASE_URL + "/nodes");\n  return res.json();\n}`
    },
    bugReport: "Zia: The production application is failing to connect to the backend services. It is still attempting to fetch data from 'localhost', which doesn't exist on the client's device in a production environment. Use a dynamic base URL that switches based on the build environment.",
    solutionCheck: (c: string) => c.includes('window.location') || c.includes('process.env'),
    renderPreview: (s: boolean) => <BaseUrlPreview isSuccess={s} />
  },
  16: {
    id: 16,
    title: "Architecture: SSE Connection Leak",
    files: {
      "Stream.js": `export default function NeuralStream() {\n  useEffect(() => {\n    console.log("Opening Server-Sent Events stream...");\n    const sse = new EventSource("/api/stream");\n\n    /**\n     * 🔍 BUG: Missing cleanup routine.\n     * Every time the component mounts, a new connection opens.\n     */\n    sse.onmessage = (e) => console.log(e.data);\n  }, []);\n\n  return <div>Monitoring Active...</div>;\n}`
    },
    bugReport: "Zia: Our network telemetry shows a massive accumulation of open connections. It appears the Server-Sent Events (SSE) stream is being initialized correctly, but it is never being terminated when the user navigates away from the dashboard. Implement a cleanup function to close the event source on unmount.",
    solutionCheck: (c: string) => c.includes('return () =>') && c.includes('sse.close()'),
    renderPreview: (s: boolean) => <SseLeakPreview isSuccess={s} />
  }
};



// --- AI/ML STAGES 1-16 PREVIEW COMPONENTS ---

const RandomForestPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 rounded-3xl border border-emerald-500/20 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">Forest_Density_Monitor</span>
      <div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-orange-500 animate-pulse'}`} />
    </div>
    <div className="flex justify-center gap-3 h-16 items-end">
      <div className="w-4 h-12 bg-emerald-500 rounded-t-full shadow-lg" />
      {isSuccess && (
        <>
          <div className="w-4 h-10 bg-emerald-400 rounded-t-full opacity-80" />
          <div className="w-4 h-14 bg-emerald-600 rounded-t-full opacity-90" />
          <div className="w-4 h-8 bg-emerald-300 rounded-t-full opacity-70" />
        </>
      )}
    </div>
    <div className="mt-6 p-3 bg-black/40 rounded-xl border border-white/5 font-mono text-[10px] text-center">
      <p className="text-zinc-500 block mb-1 uppercase text-[8px]">Prediction_Accuracy:</p>
      <p className={isSuccess ? 'text-emerald-400' : 'text-orange-400 animate-pulse'}>
        {isSuccess ? "94.2% (Ensemble_Stable)" : "61.0% (Weak_Learner)"}
      </p>
    </div>
  </div>
);

const DecisionTreePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white rounded-3xl shadow-xl border-t-8 border-emerald-600">
    <div className="flex justify-between items-center mb-6">
      <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Tree_Depth_Analyzer</span>
      <div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-red-500 animate-ping'}`} />
    </div>

    <div className="relative h-24 flex justify-center">
      <div className="w-1 h-8 bg-emerald-800 absolute top-0" />
      <div className="w-16 h-1 bg-emerald-800 absolute top-8" />
      <div className="w-1 h-6 bg-emerald-600 absolute top-8 left-[calc(50%-32px)]" />
      <div className="w-1 h-6 bg-emerald-600 absolute top-8 right-[calc(50%-32px)]" />
      
      {!isSuccess && (
        <div className="absolute top-14 w-full flex justify-around opacity-40">
           <div className="w-0.5 h-4 bg-red-400" />
           <div className="w-0.5 h-4 bg-red-400" />
           <div className="w-0.5 h-4 bg-red-400" />
           <div className="w-0.5 h-4 bg-red-400" />
        </div>
      )}
    </div>

    <div className="mt-4 p-3 bg-zinc-50 rounded-xl border border-zinc-100 font-mono text-[10px] text-center">
      <p className="text-zinc-500 block mb-1 uppercase text-[8px]">Generalization_Score:</p>
      <p className={`font-black ${isSuccess ? 'text-emerald-600' : 'text-red-500 animate-pulse'}`}>
        {isSuccess ? "92% (Pruning_Active)" : "41% (Overfitting_Detected)"}
      </p>
    </div>
  </div>
);

const LossCurvePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-zinc-900 rounded-[2.5rem] border border-white/5 text-center">
    <p className="text-[9px] text-zinc-500 mb-2 uppercase font-black">Training_Loss</p>
    <div className={`text-4xl font-black font-mono transition-colors ${isSuccess ? 'text-cyan-400' : 'text-red-600 animate-pulse'}`}>
      {isSuccess ? "0.012" : "10.45"}
    </div>
    <p className="mt-4 text-[8px] text-zinc-600 uppercase italic">{isSuccess ? "Converging" : "Exploding"}</p>
  </div>
);

const MathSignalPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white border-2 rounded-3xl text-black font-mono text-[10px]">
    <p className="text-zinc-400 mb-2 uppercase tracking-widest">Signal_Output:</p>
    <div className={isSuccess ? 'text-green-600' : 'text-red-500'}>
      {isSuccess ? "[4, 16, 36]" : "[4, 8, 12]"}
    </div>
  </div>
);

const EpochSyncPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-zinc-900 rounded-3xl text-cyan-400 font-black text-center">
    <p className="text-4xl">{isSuccess ? "10/10" : "0/10"}</p>
    <p className="text-[8px] mt-2 uppercase tracking-widest">Epoch_Sync_Status</p>
  </div>
);

const RandomWeightPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white border rounded-xl font-mono text-[10px]">
    <p className="text-zinc-400 mb-2">Init_Matrix:</p>
    <div className="grid grid-cols-2 gap-2">
      <div className={isSuccess ? 'text-black' : 'text-red-400 italic'}>{isSuccess ? "0.12, 0.88" : "0.00, 0.00"}</div>
    </div>
  </div>
);

const SafetyAccPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black text-white rounded-2xl text-center">
    <p className={`text-2xl font-black ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>{isSuccess ? "ACC: 0.0" : "CRASH"}</p>
    <p className="text-[8px] text-zinc-600 uppercase">Division_Guard_Test</p>
  </div>
);

const ScalerPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 text-green-400 rounded-3xl border border-white/10">
    <p className="text-[10px] mb-2">Normalized_Range:</p>
    <div className={`h-2 w-full bg-zinc-800 rounded-full overflow-hidden`}><div className={`h-full bg-green-500 ${isSuccess ? 'w-full' : 'w-2'}`} /></div>
    <p className="mt-2 text-[8px]">{isSuccess ? "Range [0, 1]" : "Range [0, 800]"}</p>
  </div>
);

const ActivationGatePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white border text-black text-center rounded-3xl">
    <p className="text-[10px] font-bold mb-2">ReLU(-5)</p>
    <p className={`text-3xl font-black ${isSuccess ? 'text-blue-600' : 'text-zinc-300'}`}>{isSuccess ? "0" : "-5"}</p>
  </div>
);

const LossStabilityPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black text-red-500 rounded-3xl border border-red-500/20 text-center">
    <p className="font-mono text-xs">{isSuccess ? "LOSS: STABLE_v1.0" : "LOSS: MATH_DOMAIN_ERR"}</p>
  </div>
);

const RegistrySafePreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-100 rounded-3xl text-black font-mono text-[10px]">
    <p className="text-zinc-400 mb-2">Registry_Output:</p>
    <p className={isSuccess ? 'text-blue-600' : 'text-red-500 animate-pulse'}>{isSuccess ? "None (Node_Not_Found)" : "KeyError: 'zia_core'"}</p>
  </div>
);

const RegularizationPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-zinc-900 border-2 border-dashed border-white/20 rounded-3xl text-center">
    <p className={`text-[10px] font-black ${isSuccess ? 'text-emerald-500' : 'text-zinc-500'}`}>{isSuccess ? "DROPOUT_ACTIVE (0.5)" : "DENSE_OVERFIT (0.0)"}</p>
  </div>
);

const ListImmutabilityPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-white border text-black rounded-3xl text-center">
    <p className="text-[10px] uppercase font-bold text-zinc-400">Memory_Mode</p>
    <p className="text-xs font-black">{isSuccess ? "LIST (MUTABLE)" : "TUPLE (LOCKED)"}</p>
  </div>
);

const FStringPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-black text-cyan-400 font-mono text-[10px] rounded-3xl border border-white/10 text-left">
    <p>{isSuccess ? "> Epoch: 1 | Loss: 0.5" : "> Epoch: {epoch} | Loss: {loss}"}</p>
  </div>
);

const SelfPointerPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-8 bg-white border text-center font-black rounded-3xl">
    <div className={`w-12 h-12 bg-zinc-100 rounded-full mx-auto mb-2 flex items-center justify-center ${isSuccess ? 'text-black' : 'text-red-500 animate-bounce'}`}>Z</div>
    <p className="text-[10px]">{isSuccess ? "AI_OBJECT_INITIALIZED" : "INIT_TYPE_ERROR"}</p>
  </div>
);

const ReshapeMathPreview = ({ isSuccess }: { isSuccess: boolean }) => (
  <div className="w-full p-6 bg-purple-900 text-white rounded-3xl text-center shadow-xl">
    <p className="text-[9px] uppercase font-black mb-2 tracking-widest">Tensor_Shape_Result</p>
    <p className="text-xl font-mono">{isSuccess ? "784px OK" : "1000px ERR"}</p>
  </div>
);


export const ai_mlLevels: any = {
  1: {
    id: 1,
    title: "Ensemble: The Lonely Tree",
    files: {
      "model.py": "# Neural Forest Classifier v2.0\n# Goal: Use multiple decision trees to improve accuracy.\n\nclass RandomForest:\n    def __init__(self, n_trees):\n        self.n_trees = n_trees\n        print(f'Initializing Forest with {self.n_trees} nodes...')\n\n    def train(self, data):\n        print('Booting Training Sequence...')\n        \n        # BUG: The loop is restricted to only 1 iteration.\n        # Requirement: The loop should run exactly 'self.n_trees' times.\n        for i in range(1):\n            print(f'Training Decision_Tree_Node_{i}...')\n            # ... Training Logic ...\n\n        return 'MODEL_TRAINED_SUCCESSFULLY'\n\n# Execution Node\nforest_model = RandomForest(n_trees=100)\nstatus = forest_model.train('NEURAL_DATASET_X')\nprint(status)"
    },
    bugReport: "Zia: The Random Forest is performing poorly because it's only training a single tree. Even though we requested 100 trees, the training loop is hardcoded to 1. Fix the range to use the dynamic class parameter.",
    solutionCheck: (c: string) => c.includes('range(self.n_trees)'),
    renderPreview: (s: boolean) => <RandomForestPreview isSuccess={s} />
  },
 2: {
    id: 2,
    title: "Decision Tree: The Overfit Branch",
    files: {
      "tree_model.py": "# Neural Decision Tree Classifier v1.2\n# Mission: Prevent overfitting by limiting tree depth.\n\nclass DecisionTree:\n    def __init__(self, max_depth=None):\n        # 🔍 BUG: The internal depth limit is ignored.\n        # Requirement: Set self.depth to the max_depth parameter.\n        self.depth = 99999 \n        print(f'Model initialized with max_depth: {max_depth}')\n\n    def fit(self, features, labels):\n        print('Analyzing data patterns...')\n        print(f'Current_Tree_Constraint: {self.depth}')\n        \n        if self.depth > 100:\n            print('WARNING: Tree is too deep. Memorization likely.')\n        \n        # ... Complex Splitting Logic ...\n        # ... Recursive Branching ...\n        \n        return 'TREE_CONSTRUCTED'\n\n# Execution Node\n# We want to limit depth to 5 for better generalization\nmodel = DecisionTree(max_depth=5)\nstatus = model.fit([1, 0, 1], [1, 1, 0])\nprint(f'Status: {status}')"
    },
    bugReport: "Zia: Our Decision Tree is suffering from extreme overfitting. Even though we are passing a 'max_depth' of 5, the model's internal constraint is hardcoded to 99999. This allows the tree to grow indefinitely and memorize the noise in the data. Link the class attribute to the constructor parameter.",
    solutionCheck: (c: string) => c.includes('self.depth = max_depth'),
    renderPreview: (s: boolean) => <DecisionTreePreview isSuccess={s} />
  },
  3: {
    id: 3,
    title: "Data Sci: The Squaring Error",
    files: {
      "math_logic.py": "# Signal Processor v1.0\n# Mission: Calculate the square of each node signal.\n\ndef process_signals(data):\n    # BUG: Multiplying by 2 instead of squaring.\n    # Expected: [2, 4, 6] -> [4, 16, 36]\n    output = [n * 2 for n in data]\n    \n    print(f'Report: Input={data} | Output={output}')\n    return output\n\n# Execution Node\nresult = process_signals([2, 4, 6])"
    },
    bugReport: "Zia: The mathematical operator in our signal processor is incorrect. We need to square the values (n squared), not perform a simple multiplication by 2.",
    solutionCheck: (c: string) => c.includes('** 2') || c.includes('n * n'),
    renderPreview: (s: boolean) => <MathSignalPreview isSuccess={s} />
  },
  4: {
    id: 4,
    title: "Linear Algebra: MatMul Shape",
    files: {
      "matrix.py": "# Neural Layer Matrix Multiplication\n# Layer A: (3x2) | Layer B: (3x3)\n\ndef mat_mul(a, b):\n    # BUG: The logic check should ensure inner dimensions match.\n    # Columns of A must equal Rows of B.\n    if len(a[0]) != len(b):\n        print('Dimensions are incompatible!')\n    \n    # Matrix calculation logic...\n    return 'RESULT_MATRIX'\n\na_matrix = [[1, 2], [3, 4], [5, 6]]\nb_matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nmat_mul(a_matrix, b_matrix)"
    },
    bugReport: "Zia: Matrix multiplication is failing. In linear algebra, the columns of the first matrix must match the rows of the second. Correct the validation logic to ensure (3x2) * (2xN).",
    solutionCheck: (c: string) => c.includes('len(a[0]) == len(b)'),
    renderPreview: (s: boolean) => <TensorShapePreview isSuccess={s} />
  },
  5: {
    id: 5,
    title: "Training: The Infinite Loop",
    files: {
      "loop.py": "# AI Training Cycle\n# Objective: Run exactly for 'epochs' iterations.\n\ndef train(epochs):\n    current = 0\n    # BUG: Loop counter is never being updated.\n    while current < epochs:\n        print(f'Epoch {current} in progress...')\n        \n    print('Training Finished.')\n\ntrain(10)"
    },
    bugReport: "Zia: The training cycle is trapped in an infinite loop on Epoch 0. You must manually increment the iteration counter at the end of every loop.",
    solutionCheck: (c: string) => c.includes('current += 1') || c.includes('current = current + 1'),
    renderPreview: (s: boolean) => <EpochSyncPreview isSuccess={s} />
  },
  6: {
    id: 6,
    title: "Init: Breaking Symmetry",
    files: {
      "weights.py": "# Weight Initialization Protocol\nimport random\n\ndef init_layer(size):\n    # BUG: Initializing every weight to exactly 0.0.\n    # This causes 'Symmetry Problem' where neurons learn nothing.\n    weights = [0.0 for _ in range(size)]\n    return weights\n\ninit_layer(10)"
    },
    bugReport: "Zia: Neurons cannot learn specialized features if they all start at zero. Use a random initialization method to break the symmetry and allow training to begin.",
    solutionCheck: (c: string) => c.includes('random.random()') || c.includes('random.uniform'),
    renderPreview: (s: boolean) => <RandomWeightPreview isSuccess={s} />
  },
  7: {
    id: 7,
    title: "Metrics: Zero Division Guard",
    files: {
      "stats.py": "# Accuracy Metric Calculator\ndef get_acc(tp, total):\n    # BUG: This will crash with ZeroDivisionError if total is 0.\n    # This happens during system reboots when data is empty.\n    score = tp / total\n    return score\n\n# Edge case: No data processed yet\nget_acc(0, 0)"
    },
    bugReport: "Zia: The validation script crashes during the boot sequence. Implement a conditional check to handle scenarios where the total sample count is zero.",
    solutionCheck: (c: string) => c.includes('if total == 0') || c.includes('if not total'),
    renderPreview: (s: boolean) => <SafetyAccPreview isSuccess={s} />
  },
  8: {
    id: 8,
    title: "Preprocessing: Feature Scaling",
    files: {
      "scaler.py": "# Feature Normalization\n# Formula: (x - min) / (max - min)\n\ndef scale(data):\n    # BUG: The logic only subtracts the minimum value.\n    # It is missing the division by the data range.\n    normalized = [(x - min(data)) for x in data]\n    return normalized\n\nscale([100, 500, 900])"
    },
    bugReport: "Zia: The data scaling is incomplete. You are shifting the data but not squashing it into the required [0, 1] range. Divide by the difference between max and min.",
    solutionCheck: (c: string) => c.includes('max(data) - min(data)'),
    renderPreview: (s: boolean) => <ScalerPreview isSuccess={s} />
  },
  9: {
    id: 9,
    title: "Layers: The ReLU Identity",
    files: {
      "activations.py": "# Activation Layer: Rectified Linear Unit (ReLU)\ndef relu(x):\n    # BUG: Currently acting as an identity function.\n    # ReLU should squash any negative value to 0.\n    return x\n\nprint(f'Test ReLU(-5): {relu(-5)}')"
    },
    bugReport: "Zia: The activation layer is failing to introduce non-linearity. ReLU must output zero for any input that is less than zero.",
    solutionCheck: (c: string) => c.includes('max(0') || c.includes('if x < 0'),
    renderPreview: (s: boolean) => <ActivationGatePreview isSuccess={s} />
  },
  10: {
    id: 10,
    title: "Math: Log Loss Stability",
    files: {
      "loss.py": "# Log Loss Calculation\nimport math\n\ndef calculate_loss(prob):\n    # BUG: math.log(0) will cause a Domain Error.\n    # You must add a tiny epsilon value for numerical stability.\n    return -math.log(prob)\n\n# Edge case: probability is zero\ncalculate_loss(0.0)"
    },
    bugReport: "Zia: The loss function is hitting a mathematical domain error. Add a small 'epsilon' constant (like 1e-15) to the probability to prevent taking the log of zero.",
    solutionCheck: (c: string) => c.includes('1e-15'),
    renderPreview: (s: boolean) => <LossStabilityPreview isSuccess={s} />
  },
  11: {
    id: 11,
    title: "Logic: Safe Node Lookup",
    files: {
      "registry.py": "# Model Node Registry\nmodels = {'v1': 'CNN', 'v2': 'Transformer'}\n\ndef get_model(name):\n    # BUG: Direct indexing will crash with KeyError if node is missing.\n    # Use the safe dictionary retrieval method.\n    return models[name]\n\n# User requests a missing node\nget_model('zia_core')"
    },
    bugReport: "Zia: The node registry crashes the entire system if an unknown name is requested. Switch to the .get() method to return None instead of throwing a KeyError.",
    solutionCheck: (c: string) => c.includes('.get('),
    renderPreview: (s: boolean) => <RegistrySafePreview isSuccess={s} />
  },
  12: {
    id: 12,
    title: "Regularization: Dropout Rate",
    files: {
      "layer.py": "# Regularization Layer\ndef dropout(values, rate=0.0):\n    # BUG: Dropout rate is hardcoded to 0.0 (Disabled).\n    # This leads to heavy overfitting in the dense layers.\n    print(f'Applying dropout at rate: {rate}')\n    return values\n\n# Activate dropout with a 0.5 rate\ndropout([1.0, 0.5, 0.2])"
    },
    bugReport: "Zia: The model is overfitting because dropout is effectively disabled. Adjust the default rate to 0.5 to randomly deactivate half of the neurons during training.",
    solutionCheck: (c: string) => c.includes('0.5'),
    renderPreview: (s: boolean) => <RegularizationPreview isSuccess={s} />
  },
  13: {
    id: 13,
    title: "Structure: Configuration Mutability",
    files: {
      "config.py": "# AI Model Configuration\n# BUG: Attempting to modify an immutable data structure.\n# Tuples cannot be updated after creation.\nsettings = ('READY', 1.0)\n\n# Attempting to update status\nsettings[0] = 'TRAINING'"
    },
    bugReport: "Zia: The configuration update failed with a TypeError. Change the settings collection from a Tuple to a List so that the state can be updated dynamically.",
    solutionCheck: (c: string) => c.includes('[') && c.includes(']'),
    renderPreview: (s: boolean) => <ListImmutabilityPreview isSuccess={s} />
  },
  14: {
    id: 14,
    title: "Strings: The Log Format",
    files: {
      "logger.py": "# Neural Progress Logger\ndef log_progress(epoch, loss):\n    # BUG: The braces are being treated as literal text.\n    # The variables are not being interpolated into the string.\n    msg = 'Epoch: {epoch} | Loss: {loss}'\n    return msg\n\nprint(log_progress(1, 0.5))"
    },
    bugReport: "Zia: The system log is displaying raw curly braces. You must add the 'f' prefix to the string to enable formatted interpolation.",
    solutionCheck: (c: string) => c.includes('f"') || c.includes("f'"),
    renderPreview: (s: boolean) => <FStringPreview isSuccess={s} />
  },
  15: {
    id: 15,
    title: "OOP: Constructor Instance",
    files: {
      "assistant.py": "# Neural Assistant Blueprint\nclass AI:\n    # BUG: Missing the instance pointer as the first argument.\n    # Every class method in Python must receive 'self'.\n    def __init__(name):\n        self.name = name\n\nzia_agent = AI('Zia')"
    },
    bugReport: "Zia: The AI object failed to initialize. Constructors in Python require 'self' as the first parameter to bind attributes to the instance.",
    solutionCheck: (c: string) => c.includes('self, name') || c.includes('self,'),
    renderPreview: (s: boolean) => <SelfPointerPreview isSuccess={s} />
  },
  16: {
    id: 16,
    title: "Tensors: Vision Reshape",
    files: {
      "vision.py": "# Neural Vision Processor\n# Input: 1000 pixels | Target Input: 28x28 (784 pixels)\n\ndef prepare_image(data):\n    # BUG: Attempting to process 1000 pixels for a 784-node layer.\n    # You must slice the incoming array to the first 784 elements.\n    print('Preparing 28x28 image grid...')\n    return data\n\n# Simulation of oversized input\nprepare_image([0]*1000)"
    },
    bugReport: "Zia: The incoming image data is too large for the vision layer. Slice the input array to exactly 784 elements to match the 28x28 tensor shape requirement.",
    solutionCheck: (c: string) => c.includes('[:784]'),
    renderPreview: (s: boolean) => <ReshapeMathPreview isSuccess={s} />
  }
};

export const allLevels: any = {
  react: reactLevels,
  html: htmlLevels,
  javascript: jsLevels, 
  python: pythonLevels,
  fullstack: fullstackLevels,
  ai_ml: ai_mlLevels  
};




















