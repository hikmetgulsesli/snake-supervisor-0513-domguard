// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Play, Settings } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "reboot-system-3" | "start-4" | "pause-5" | "restart-6";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface-container border-b-2 border-outline-variant flex justify-between items-center px-container-padding h-touch-target w-full fixed top-0 z-50">
      <div className="flex items-center gap-container-padding">
      <span className="font-display-lg text-headline-md font-extrabold text-primary tracking-widest">SNAKE SUPERVISOR DOMGUARD</span>
      <nav className="hidden md:flex gap-gutter">
      <a className="text-primary border-b-2 border-primary pb-1 font-label-caps text-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors" href="#">GAME</a>
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">MENU</a>
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">CONTROLS</a>
      <a className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors px-2 py-1" href="#">SETTINGS</a>
      </nav>
      </div>
      <div className="flex items-center gap-gutter">
      <button className="text-primary hover:text-primary-fixed hover:bg-surface-variant transition-colors p-2 rounded flex items-center justify-center" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary hover:text-primary-fixed hover:bg-surface-variant transition-colors p-2 rounded flex items-center justify-center" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Hidden on Mobile, Visible on Desktop) */}
      <aside className="hidden lg:flex flex-col bg-surface-container-low border-r-2 border-outline-variant fixed left-0 top-0 h-full w-64 pt-16 z-40">
      <div className="p-container-padding border-b-2 border-outline-variant">
      <h2 className="font-headline-md text-headline-md text-primary mb-1">DOMGUARD UNIT-01</h2>
      <p className="font-label-caps text-label-caps text-on-surface-variant">SYSTEM ACTIVE</p>
      </div>
      <nav className="flex-1 overflow-y-auto py-gutter">
      <a className="flex items-center gap-4 bg-secondary-container text-on-secondary-container rounded-none border-l-4 border-primary px-4 py-3 font-label-caps text-label-caps hover:bg-surface-variant transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      DASHBOARD
                  </a>
      <a className="flex items-center gap-4 text-on-surface-variant px-4 py-3 font-label-caps text-label-caps hover:bg-surface-variant transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      SYSTEM
                  </a>
      <a className="flex items-center gap-4 text-on-surface-variant px-4 py-3 font-label-caps text-label-caps hover:bg-surface-variant transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      LOGS
                  </a>
      <a className="flex items-center gap-4 text-on-surface-variant px-4 py-3 font-label-caps text-label-caps hover:bg-surface-variant transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
                      CONFIG
                  </a>
      </nav>
      <div className="p-container-padding border-t-2 border-outline-variant">
      <button className="w-full bg-primary-container text-on-primary-container font-label-caps text-label-caps h-touch-target flex items-center justify-center rounded hover:bg-primary transition-colors" type="button" data-action-id="reboot-system-3" onClick={actions?.["reboot-system-3"]}>
                      REBOOT SYSTEM
                  </button>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-1 pt-[60px] lg:pl-64 pb-[60px] lg:pb-0 flex flex-col items-center justify-center p-container-padding gap-container-padding bg-background">
      {/* HUD Cluster above Game Board */}
      <div className="w-full max-w-board-max-width flex flex-wrap gap-gutter justify-between items-end">
      {/* Score Module */}
      <div className="flex gap-gutter">
      <div className="bg-surface-container border border-outline-variant p-3 flex flex-col items-start min-w-[120px]">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">SCORE</span>
      <span className="font-status-number text-status-number text-primary">1,250</span>
      </div>
      <div className="bg-surface-container border border-outline-variant p-3 flex flex-col items-start min-w-[120px]">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">HIGH SCORE</span>
      <span className="font-status-number text-status-number text-secondary">5,000</span>
      </div>
      <div className="bg-surface-container border border-outline-variant p-3 flex flex-col items-start min-w-[100px]">
      <span className="font-label-caps text-label-caps text-on-surface-variant mb-1">LEVEL</span>
      <span className="font-status-number text-status-number text-tertiary">4</span>
      </div>
      </div>
      {/* System Status Panel */}
      <div className="bg-surface-container border border-primary p-3 flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
      <span className="font-label-caps text-label-caps text-primary tracking-widest">SYSTEM: ACTIVE</span>
      </div>
      </div>
      {/* Central Game Board Container */}
      <div className="w-full max-w-board-max-width aspect-square bg-surface border-2 border-outline-variant relative overflow-hidden flex items-center justify-center p-unit">
      {/* Simulated 20x20 Grid */}
      <div className="w-full h-full grid grid-cols-20 grid-rows-20 gap-px bg-[#1E293B]">
      {/* Grid Cells (Generating a few to represent the grid, typically this would be JS driven) */}
      {/* The CSS for grid-cols-20 isn't standard tailwind, we'd normally use custom config or arbitrary values, 
                           but we'll use inline styles for the exact 20x20 grid requirement to comply with generic tailwind constraints if custom isn't defined,
                           however, since we must stick to config, we will simulate the grid visual */}
      </div>
      {/* Simulated Grid Background via CSS background-image for visual accuracy without 400 DOM elements */}
      <div className="absolute inset-0 border border-outline-variant m-unit" style={{backgroundImage: "linear-gradient(to right, #1E293B 1px, transparent 1px), linear-gradient(to bottom, #1E293B 1px, transparent 1px)", backgroundSize: "5% 5%"}}>
      {/* Simulated Snake */}
      <div className="absolute bg-primary" style={{left: "45%", top: "50%", width: "5%", height: "5%"}}></div> {/* Tail */}
      <div className="absolute bg-primary" style={{left: "50%", top: "50%", width: "5%", height: "5%"}}></div> {/* Body */}
      <div className="absolute bg-primary" style={{left: "55%", top: "50%", width: "5%", height: "5%"}}></div> {/* Body */}
      <div className="absolute bg-primary border-r-2 border-background" style={{left: "60%", top: "50%", width: "5%", height: "5%"}}></div> {/* Head */}
      {/* Simulated Food */}
      <div className="absolute bg-[#F59E0B] animate-pulse" style={{left: "75%", top: "30%", width: "4%", height: "4%", transform: "translate(12.5%, 12.5%)"}}></div>
      </div>
      {/* Focus Ring Overlay (Simulating active focus on the game board) */}
      <div className="absolute inset-0 border-2 border-[#F8FAFC] opacity-20 pointer-events-none m-unit"></div>
      </div>
      {/* Controls Cluster below Game Board */}
      <div className="w-full max-w-board-max-width flex justify-center gap-gutter">
      <button className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant hover:text-primary transition-colors h-touch-target px-container-padding font-label-caps text-label-caps flex items-center justify-center gap-2" type="button" data-action-id="start-4" onClick={actions?.["start-4"]}>
      <Play aria-hidden={true} focusable="false" />
                      START
                  </button>
      <button className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant hover:text-primary transition-colors h-touch-target px-container-padding font-label-caps text-label-caps flex items-center justify-center gap-2" type="button" data-action-id="pause-5" onClick={actions?.["pause-5"]}>
      <Pause aria-hidden={true} focusable="false" />
                      PAUSE
                  </button>
      <button className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-variant hover:text-primary transition-colors h-touch-target px-container-padding font-label-caps text-label-caps flex items-center justify-center gap-2" type="button" data-action-id="restart-6" onClick={actions?.["restart-6"]}>
      <Circle aria-hidden={true} focusable="false" />
                      RESTART
                  </button>
      </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-4 px-container-padding flex justify-between items-center bg-background border-t border-outline-variant lg:pl-64 mt-auto">
      <span className="font-label-caps text-label-caps text-on-surface-variant">© 2024 DOMGUARD INDUSTRIAL ARCADE SYSTEMS</span>
      <div className="flex gap-gutter">
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Service Status</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Documentation</a>
      </div>
      </footer>
    </>
  );
}
