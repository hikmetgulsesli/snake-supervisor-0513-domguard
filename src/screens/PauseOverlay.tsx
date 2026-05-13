// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type PauseOverlayActionId = "button-1-1" | "button-2-2" | "resume-3" | "restart-4" | "exit-to-menu-5";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container dark:bg-surface-container flex justify-between items-center px-container-padding h-touch-target w-full fixed top-0 z-50 border-b-2 border-outline-variant flat no shadows">
      <div className="font-display-lg text-headline-md font-extrabold text-primary dark:text-primary tracking-widest uppercase">
                  SNAKE SUPERVISOR DOMGUARD
              </div>
      <nav className="hidden md:flex items-center gap-gutter">
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">GAME</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">MENU</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">CONTROLS</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">SETTINGS</a>
      </nav>
      <div className="flex items-center gap-4">
      <button aria-label="monitoring" className="text-primary dark:text-primary hover:text-primary-fixed hover:bg-surface-variant transition-colors p-1" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="settings" className="text-primary dark:text-primary hover:text-primary-fixed hover:bg-surface-variant transition-colors p-1" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area (Simulated Background) */}
      <main className="flex-grow pt-touch-target flex items-center justify-center relative p-container-padding">
      {/* Background Game Board (Blurred/Dimmed) */}
      <div className="w-full max-w-board-max-width aspect-square md:aspect-video bg-[#111827] border border-[#334155] relative overflow-hidden flex items-center justify-center opacity-40 blur-sm pointer-events-none">
      {/* Simulated Grid lines */}
      <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(#1E293B 0.5px, transparent 0.5px), linear-gradient(90deg, #1E293B 0.5px, transparent 0.5px)", backgroundSize: "20px 20px"}}></div>
      {/* Simulated Snake */}
      <div className="absolute w-[20px] h-[20px] bg-primary top-[40%] left-[40%]"></div>
      <div className="absolute w-[20px] h-[20px] bg-primary top-[40%] left-[45%]"></div>
      <div className="absolute w-[20px] h-[20px] bg-primary top-[40%] left-[50%]"></div>
      {/* Simulated Food */}
      <div className="absolute w-[16px] h-[16px] bg-[#F59E0B] top-[60%] left-[70%]"></div>
      </div>
      {/* Pause Overlay Modal */}
      <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#0F172A]/60 backdrop-blur-sm px-container-padding">
      <div className="bg-[#111827] border-2 border-outline-variant w-full max-w-md p-8 flex flex-col items-center gap-8 shadow-2xl relative">
      {/* Modal Header */}
      <div className="text-center w-full border-b border-outline-variant pb-4">
      <h1 className="font-display-lg text-display-lg text-on-surface tracking-tighter uppercase mb-2">GAME PAUSED</h1>
      <div className="flex justify-center gap-6 text-on-surface-variant font-label-caps text-label-caps">
      <span>SCORE: <span className="font-status-number text-status-number text-primary ml-1">12,450</span></span>
      <span>LENGTH: <span className="font-status-number text-status-number text-secondary ml-1">42</span></span>
      </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col w-full gap-4">
      {/* Primary Action: Resume */}
      <button className="h-touch-target w-full bg-[#F8FAFC] text-[#0F172A] font-headline-md text-headline-md tracking-tighter uppercase border-2 border-transparent hover:border-primary hover:bg-[#0F172A] hover:text-[#F8FAFC] focus:border-primary focus:bg-[#0F172A] focus:text-[#F8FAFC] focus:outline-none transition-colors flex items-center justify-center gap-2 group" type="button" data-action-id="resume-3" onClick={actions?.["resume-3"]}>
      <Play className="text-[28px]" aria-hidden={true} focusable="false" />
                              RESUME
                          </button>
      {/* Secondary Action: Restart */}
      <button className="h-touch-target w-full bg-transparent text-on-surface font-headline-md text-headline-md tracking-tighter uppercase border-2 border-outline-variant hover:border-[#F8FAFC] hover:text-[#F8FAFC] focus:border-[#F8FAFC] focus:text-[#F8FAFC] focus:outline-none transition-colors flex items-center justify-center gap-2 group" type="button" data-action-id="restart-4" onClick={actions?.["restart-4"]}>
      <Circle className="text-[28px]" aria-hidden={true} focusable="false" />
                              RESTART
                          </button>
      {/* Tertiary Action: Exit */}
      <button className="h-touch-target w-full bg-transparent text-error font-headline-md text-headline-md tracking-tighter uppercase border-2 border-transparent hover:border-error hover:bg-error/10 focus:border-error focus:bg-error/10 focus:outline-none transition-colors flex items-center justify-center gap-2 mt-2" type="button" data-action-id="exit-to-menu-5" onClick={actions?.["exit-to-menu-5"]}>
      <Circle className="text-[28px]" aria-hidden={true} focusable="false" />
                              EXIT TO MENU
                          </button>
      </div>
      {/* System Status indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">STANDBY</span>
      </div>
      </div>
      </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-4 px-container-padding flex flex-col md:flex-row justify-between items-center bg-background border-t border-outline-variant flat z-50 mt-auto">
      <div className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps mb-4 md:mb-0">
                  © 2024 DOMGUARD INDUSTRIAL ARCADE SYSTEMS
              </div>
      <div className="flex gap-gutter">
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Privacy Policy</a>
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Service Status</a>
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Documentation</a>
      </div>
      </footer>
    </>
  );
}
