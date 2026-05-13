// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Play, RefreshCw, Settings } from "lucide-react";


export type MainMenuActionId = "start-new-game-1" | "resume-2" | "restart-3" | "settings-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: "radial-gradient(circle at 50% 50%, #334155 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
      <nav className="bg-surface-container flex justify-between items-center px-container-padding h-touch-target w-full fixed top-0 z-50 border-b-2 border-outline-variant relative z-10">
      <div className="font-display-lg text-headline-md font-extrabold text-primary tracking-widest uppercase">
                  SNAKE SUPERVISOR DOMGUARD
              </div>
      <div className="hidden md:flex gap-6">
      <a className="text-on-surface-variant font-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">GAME</a>
      <a className="text-primary border-b-2 border-primary pb-1 font-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">MENU</a>
      <a className="text-on-surface-variant font-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">CONTROLS</a>
      <a className="text-on-surface-variant font-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">SETTINGS</a>
      </div>
      <div className="flex gap-4 text-primary">
      <Circle className="cursor-pointer hover:text-primary-fixed" aria-hidden={true} focusable="false" />
      <Settings className="cursor-pointer hover:text-primary-fixed" aria-hidden={true} focusable="false" />
      </div>
      </nav>
      <main className="flex-grow flex items-center justify-center relative z-10 p-container-padding">
      <div className="absolute w-[800px] h-[600px] border border-outline-variant/30 flex items-center justify-center opacity-10 pointer-events-none z-0">
      <div className="w-[600px] h-[400px] border border-outline-variant/50"></div>
      </div>
      <div className="bg-surface-container/90 backdrop-blur-sm border-2 border-outline-variant p-8 w-full max-w-md flex flex-col items-center gap-6 z-20">
      <div className="text-center mb-4">
      <h1 className="font-display-lg text-display-lg text-primary tracking-tighter mb-2">DOMGUARD</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant">SYSTEM UNIT-01 - SUPERVISOR MODE</p>
      </div>
      <div className="flex flex-col w-full gap-4">
      <button className="w-full min-h-[44px] bg-primary text-on-primary font-headline-md text-headline-md border-2 border-transparent hover:border-primary-fixed hover:bg-surface-container hover:text-primary-fixed transition-colors px-4 py-3 flex justify-between items-center group" type="button" data-action-id="start-new-game-1" onClick={actions?.["start-new-game-1"]}>
      <span>START NEW GAME</span>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-full min-h-[44px] bg-surface text-on-surface font-headline-md text-headline-md border-2 border-outline-variant hover:border-primary hover:text-primary transition-colors px-4 py-3 flex justify-between items-center group" type="button" data-action-id="resume-2" onClick={actions?.["resume-2"]}>
      <span>RESUME</span>
      <Pause  style={{fontVariationSettings: "'FILL' 1"}} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-full min-h-[44px] bg-surface text-on-surface font-headline-md text-headline-md border-2 border-outline-variant hover:border-primary hover:text-primary transition-colors px-4 py-3 flex justify-between items-center group" type="button" data-action-id="restart-3" onClick={actions?.["restart-3"]}>
      <span>RESTART</span>
      <RefreshCw  style={{fontVariationSettings: "'FILL' 1"}} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-full min-h-[44px] bg-surface text-on-surface font-headline-md text-headline-md border-2 border-outline-variant hover:border-primary hover:text-primary transition-colors px-4 py-3 flex justify-between items-center group" type="button" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <span>SETTINGS</span>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="mt-8 flex justify-between w-full border-t border-outline-variant pt-4">
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface-variant">LAST SCORE</span>
      <span className="font-status-number text-status-number text-on-surface">14,250</span>
      </div>
      <div className="flex flex-col text-right">
      <span className="font-label-caps text-label-caps text-on-surface-variant">SYSTEM STATUS</span>
      <span className="font-status-number text-status-number text-primary">ONLINE</span>
      </div>
      </div>
      </div>
      </main>
      <footer className="w-full py-4 px-container-padding flex justify-between items-center bg-background border-t border-outline-variant relative z-10">
      <div className="text-primary font-bold font-label-caps text-label-caps">
                  © 2024 DOMGUARD INDUSTRIAL ARCADE SYSTEMS
              </div>
      <div className="flex gap-6">
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Privacy Policy</a>
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Service Status</a>
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Documentation</a>
      </div>
      </footer>
    </>
  );
}
