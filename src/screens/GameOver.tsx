// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, RefreshCw, TriangleAlert } from "lucide-react";


export type GameOverActionId = "try-again-1" | "main-menu-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Suppressed TopAppBar & SideNav for Transactional Screen (Game Over) */}
      {/* Main Canvas (Game Over Screen) */}
      <main className="flex-grow flex items-center justify-center relative w-full h-full p-container-padding">
      {/* Blurred Background Simulator */}
      <div className="absolute inset-0 z-0 bg-surface-container-low grid-bg">
      {/* Simulated Snake Game Artifacts in Background */}
      <div className="absolute top-[20%] left-[30%] w-8 h-8 bg-outline-variant opacity-20 border border-outline"></div>
      <div className="absolute top-[20%] left-[35%] w-8 h-8 bg-outline-variant opacity-20 border border-outline"></div>
      <div className="absolute top-[20%] left-[40%] w-8 h-8 bg-outline-variant opacity-20 border border-outline"></div>
      <div className="absolute top-[25%] left-[40%] w-8 h-8 bg-outline-variant opacity-20 border border-outline"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-background/80 backdrop-blur-sm"></div>
      {/* Game Over Modal */}
      <div className="z-10 bg-surface-container border border-error max-w-[600px] w-full p-8 shadow-[0_0_20px_rgba(255,180,171,0.1)] flex flex-col items-center text-center relative">
      {/* Warning Header */}
      <div className="flex items-center gap-2 text-error mb-2 animate-pulse">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps tracking-widest text-error">SYSTEM BREACH DETECTED</span>
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <h1 className="font-display-lg text-display-lg text-error mb-8 uppercase tracking-tighter">CRITICAL FAILURE</h1>
      {/* High Score Badge */}
      <div className="bg-primary/20 border border-primary px-4 py-2 mb-8 inline-flex items-center gap-2 animate-bounce">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps text-primary tracking-widest">NEW HIGH SCORE!</span>
      </div>
      {/* Stats Bento Grid */}
      <div className="grid grid-cols-2 gap-4 w-full mb-8">
      <div className="bg-surface-variant border border-outline-variant p-4 flex flex-col items-center justify-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">FINAL SCORE</span>
      <span className="font-status-number text-[48px] leading-none font-bold text-on-surface">14,250</span>
      </div>
      <div className="bg-surface-variant border border-outline-variant p-4 flex flex-col items-center justify-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">MAX LENGTH</span>
      <span className="font-status-number text-[48px] leading-none font-bold text-on-surface">84</span>
      </div>
      <div className="bg-surface-variant border border-outline-variant p-4 flex flex-col items-center justify-center col-span-2">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-2">RUNTIME (CYCLES)</span>
      <span className="font-status-number text-status-number text-secondary">04:12:89</span>
      </div>
      </div>
      {/* Actions */}
      <div className="w-full flex flex-col sm:flex-row gap-4 mt-4">
      <button className="flex-1 h-touch-target bg-on-surface text-surface font-label-caps text-label-caps tracking-widest flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-colors border border-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group" type="button" data-action-id="try-again-1" onClick={actions?.["try-again-1"]}>
      <RefreshCw className="group-hover:animate-spin" aria-hidden={true} focusable="false" />
                          TRY AGAIN
                      </button>
      <button className="flex-1 h-touch-target bg-transparent text-on-surface border border-outline-variant font-label-caps text-label-caps tracking-widest flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors focus:outline-none focus:ring-2 focus:ring-on-surface focus:ring-offset-2 focus:ring-offset-background" type="button" data-action-id="main-menu-2" onClick={actions?.["main-menu-2"]}>
      <Circle aria-hidden={true} focusable="false" />
                          MAIN MENU
                      </button>
      </div>
      {/* Terminal Decor */}
      <div className="absolute bottom-2 left-2 right-2 text-left font-label-caps text-[10px] text-outline-variant opacity-50 flex justify-between">
      <span>ERR_CODE: 0x4F_COLLISION</span>
      <span>DOMGUARD_OS_v2.4</span>
      </div>
      </div>
      </main>
    </>
  );
}
