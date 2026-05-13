// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Settings, TriangleAlert } from "lucide-react";


export type GameOptionsActionId = "button-1-1" | "button-2-2" | "reset-high-score-confirm-purge-3";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* TopAppBar Shared Component */}
      <header className="flex justify-between items-center px-container-padding h-[64px] w-full fixed top-0 z-50 bg-surface-container dark:bg-surface-container border-b-2 border-outline-variant">
      <div className="font-display-lg text-[24px] font-extrabold text-primary dark:text-primary tracking-widest truncate max-w-[30%]">SNAKE SUPERVISOR DOMGUARD</div>
      <nav className="hidden md:flex gap-8 items-center h-full">
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors flex items-center h-full px-2 rounded-none" href="#">GAME</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors flex items-center h-full px-2 rounded-none" href="#">MENU</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors flex items-center h-full px-2 rounded-none" href="#">CONTROLS</a>
      <a className="text-primary dark:text-primary border-b-2 border-primary pb-1 font-label-caps text-label-caps hover:text-primary-fixed hover:bg-surface-variant transition-colors flex items-center h-full px-2 rounded-none mt-[2px]" href="#">SETTINGS</a>
      </nav>
      <div className="flex gap-2">
      <button className="h-touch-target w-touch-target flex items-center justify-center hover:bg-surface-variant transition-colors rounded-none text-primary dark:text-primary font-headline-md text-headline-md tracking-tighter active:scale-95 duration-100" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target w-touch-target flex items-center justify-center hover:bg-surface-variant transition-colors rounded-none text-primary dark:text-primary font-headline-md text-headline-md tracking-tighter active:scale-95 duration-100" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 pt-[88px] pb-container-padding px-container-padding flex justify-center w-full">
      <div className="w-full max-w-board-max-width flex flex-col gap-6">
      {/* Page Header */}
      <div className="border-b border-outline-variant pb-4 mb-2">
      <h1 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">System Configuration</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-2">Adjust Supervisor Telemetry &amp; Operational Parameters</p>
      </div>
      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Audio Settings Panel */}
      <section className="bg-surface-container border border-outline-variant p-6 flex flex-col gap-6 rounded-none relative group">
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-outline-variant m-2 opacity-50"></div>
      <header className="flex items-center gap-3">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-on-surface tracking-widest">AUDIO TELEMETRY</h2>
      </header>
      <div className="flex flex-col gap-4">
      {/* SFX Toggle */}
      <label className="flex justify-between items-center cursor-pointer min-h-touch-target group/toggle">
      <span className="font-body-base text-body-base text-on-surface-variant group-hover/toggle:text-on-surface transition-colors">Sound Effects (SFX)</span>
      <div className="relative">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-12 h-6 bg-surface-variant border border-outline-variant rounded-none peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-[24px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-outline-variant after:border after:rounded-none after:h-[18px] after:w-[20px] after:transition-all peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:after:bg-primary"></div>
      </div>
      </label>
      <div className="h-[1px] w-full bg-outline-variant/30"></div>
      {/* Music Toggle */}
      <label className="flex justify-between items-center cursor-pointer min-h-touch-target group/toggle">
      <span className="font-body-base text-body-base text-on-surface-variant group-hover/toggle:text-on-surface transition-colors">Background Music</span>
      <div className="relative">
      <input checked={true} className="sr-only peer" type="checkbox" />
      <div className="w-12 h-6 bg-surface-variant border border-outline-variant rounded-none peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-checked:after:translate-x-[24px] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface-variant after:border-outline-variant after:border after:rounded-none after:h-[18px] after:w-[20px] after:transition-all peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:after:bg-primary"></div>
      </div>
      </label>
      </div>
      </section>
      {/* Game Speed Panel */}
      <section className="bg-surface-container border border-outline-variant p-6 flex flex-col gap-6 rounded-none relative group">
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-outline-variant m-2 opacity-50"></div>
      <header className="flex items-center gap-3">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-on-surface tracking-widest">OPERATIONAL CLOCK</h2>
      </header>
      <div className="grid grid-cols-2 gap-2 mt-auto">
      {/* Slow */}
      <label className="cursor-pointer">
      <input className="sr-only peer" name="game_speed" type="radio" />
      <div className="h-touch-target flex items-center justify-center border border-outline-variant bg-surface-variant text-on-surface-variant font-label-caps text-label-caps rounded-none peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary hover:bg-surface-bright transition-colors">SLOW</div>
      </label>
      {/* Normal */}
      <label className="cursor-pointer">
      <input checked={true} className="sr-only peer" name="game_speed" type="radio" />
      <div className="h-touch-target flex items-center justify-center border border-outline-variant bg-surface-variant text-on-surface-variant font-label-caps text-label-caps rounded-none peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary hover:bg-surface-bright transition-colors">NORMAL</div>
      </label>
      {/* Fast */}
      <label className="cursor-pointer">
      <input className="sr-only peer" name="game_speed" type="radio" />
      <div className="h-touch-target flex items-center justify-center border border-outline-variant bg-surface-variant text-on-surface-variant font-label-caps text-label-caps rounded-none peer-checked:bg-primary/10 peer-checked:text-primary peer-checked:border-primary hover:bg-surface-bright transition-colors">FAST</div>
      </label>
      {/* Turbo */}
      <label className="cursor-pointer">
      <input className="sr-only peer" name="game_speed" type="radio" />
      <div className="h-touch-target flex items-center justify-center border border-outline-variant bg-surface-variant text-on-surface-variant font-label-caps text-label-caps rounded-none peer-checked:bg-error/10 peer-checked:text-error peer-checked:border-error hover:bg-surface-bright transition-colors relative overflow-hidden group/turbo">
      <span className="relative z-10">TURBO</span>
      <div className="absolute inset-0 bg-error/5 opacity-0 group-hover/turbo:opacity-100 transition-opacity"></div>
      </div>
      </label>
      </div>
      </section>
      {/* Data Management (Danger Zone) */}
      <section className="bg-surface-container border border-error/50 p-6 flex flex-col gap-6 rounded-none md:col-span-2 relative overflow-hidden mt-4">
      {/* Warning Stripes Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: "repeating-linear-gradient(45deg, #ffb4ab 0, #ffb4ab 2px, transparent 0, transparent 8px)"}}></div>
      <header className="flex items-center gap-3 relative z-10">
      <TriangleAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-error" aria-hidden={true} focusable="false" />
      <h2 className="font-label-caps text-label-caps text-error tracking-widest">DATA DESTRUCTION</h2>
      </header>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
      <div className="flex flex-col gap-1 max-w-lg">
      <span className="font-body-base text-body-base text-on-surface">Purge Local Telemetry Records</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant opacity-80">IRREVERSIBLY DELETE ALL SAVED HIGH SCORES AND PERFORMANCE METRICS. REQUIRE MANUAL CONFIRMATION.</span>
      </div>
      {/* Reset Button */}
      <button className="h-touch-target px-6 border-2 border-error bg-transparent text-error font-label-caps text-label-caps rounded-none hover:bg-error hover:text-on-error transition-colors flex items-center gap-2 flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-background active:scale-95 duration-100 relative overflow-hidden" type="button" data-action-id="reset-high-score-confirm-purge-3" onClick={actions?.["reset-high-score-confirm-purge-3"]}>
      <Circle className="text-[18px] group-hover:animate-pulse" aria-hidden={true} focusable="false" />
      <span>RESET HIGH SCORE</span>
      {/* Hover state hint for "confirmation" */}
      <div className="absolute inset-0 bg-error flex items-center justify-center text-on-error font-label-caps opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Circle className="text-[18px] mr-2" aria-hidden={true} focusable="false" />
                                      CONFIRM PURGE
                                  </div>
      </button>
      </div>
      </section>
      </div>
      </div>
      </main>
      {/* Footer Shared Component */}
      <footer className="w-full py-4 px-container-padding flex justify-between items-center bg-background dark:bg-background border-t border-outline-variant z-40 mt-auto">
      <div className="text-primary font-bold font-label-caps text-label-caps">
                  © 2024 DOMGUARD INDUSTRIAL ARCADE SYSTEMS
              </div>
      <div className="flex gap-6">
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Privacy Policy</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Service Status</a>
      <a className="text-on-surface-variant dark:text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors" href="#">Documentation</a>
      </div>
      </footer>
    </>
  );
}
