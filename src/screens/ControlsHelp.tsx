// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Gamepad2, MousePointerClick, Settings, TriangleAlert } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "button-2-2" | "reboot-system-3" | "acknowledge-directives-4";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* TopAppBar (Hidden on md) */}
      <header className="md:hidden bg-surface-container dark:bg-surface-container flex justify-between items-center px-container-padding h-touch-target w-full fixed top-0 z-50 border-b-2 border-outline-variant flat no shadows">
      <div className="font-display-lg text-headline-md font-extrabold text-primary dark:text-primary tracking-widest uppercase">
                  SNAKE SUPERVISOR DOMGUARD
              </div>
      <div className="flex gap-4">
      <button className="text-primary dark:text-primary hover:text-primary-fixed hover:bg-surface-variant transition-colors active:scale-95 duration-100 flex items-center justify-center h-touch-target w-touch-target rounded" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button className="text-primary dark:text-primary hover:text-primary-fixed hover:bg-surface-variant transition-colors active:scale-95 duration-100 flex items-center justify-center h-touch-target w-touch-target rounded" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Hidden on sm) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-full flex-col pt-16 z-40 bg-surface-container-low dark:bg-surface-container-low docked left-0 h-full w-64 border-r-2 border-outline-variant flat no shadows">
      <div className="px-container-padding mb-8">
      <div className="w-12 h-12 rounded-full bg-surface-variant mb-4 flex items-center justify-center border-2 border-primary">
      <Circle className="text-primary text-2xl" aria-hidden={true} focusable="false" />
      </div>
      <h2 className="font-headline-md text-primary truncate">DOMGUARD UNIT-01</h2>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">SYSTEM ACTIVE</p>
      </div>
      <ul className="flex flex-col gap-2 flex-grow">
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-variant px-4 py-3 font-label-caps text-label-caps hover:bg-surface-variant transition-colors active:opacity-80" href="#">
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
                          DASHBOARD
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-variant px-4 py-3 font-label-caps text-label-caps hover:bg-surface-variant transition-colors active:opacity-80" href="#">
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
                          SYSTEM
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 bg-secondary-container text-on-secondary-container rounded-none border-l-4 border-primary px-4 py-3 font-label-caps text-label-caps hover:bg-surface-variant transition-colors active:opacity-80" href="#">
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
                          CONTROLS
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-variant px-4 py-3 font-label-caps text-label-caps hover:bg-surface-variant transition-colors active:opacity-80" href="#">
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
                          CONFIG
                      </a>
      </li>
      </ul>
      <div className="px-4 pb-4">
      <button className="w-full bg-primary-container text-on-primary-container py-3 font-label-caps text-label-caps font-bold rounded-sm border-2 border-transparent hover:border-inverse-surface hover:bg-primary transition-colors active:scale-95 duration-100 flex items-center justify-center gap-2" type="button" data-action-id="reboot-system-3" onClick={actions?.["reboot-system-3"]}>
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
                      REBOOT SYSTEM
                  </button>
      </div>
      <div className="border-t-2 border-outline-variant pt-4 pb-8 px-4 flex flex-col gap-2">
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-variant px-2 py-2 font-label-caps text-label-caps hover:bg-surface-variant transition-colors" href="#">
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
                      HELP
                  </a>
      <a className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-variant px-2 py-2 font-label-caps text-label-caps hover:bg-surface-variant transition-colors" href="#">
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
                      LOGOUT
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-grow pt-[44px] md:pt-0 md:ml-64 flex flex-col items-center justify-center p-container-padding pb-24 md:pb-container-padding min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: "radial-gradient(#334155 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
      <div className="relative z-10 w-full max-w-board-max-width bg-surface border border-outline-variant rounded-DEFAULT p-8 flex flex-col gap-8 shadow-[0_0_0_1px_rgba(51,65,85,1)]">
      <header className="flex items-center gap-4 border-b border-outline-variant pb-4">
      <Gamepad2  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-4xl" aria-hidden={true} focusable="false" />
      <div>
      <h1 className="font-headline-md text-headline-md text-primary tracking-tighter uppercase">CONTROLS &amp; DIRECTIVES</h1>
      <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">SUPERVISOR TRAINING MODULE</p>
      </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Controls Section */}
      <div className="flex flex-col gap-6">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant pb-2 uppercase">INPUT MAPPINGS</h2>
      <div className="bg-surface-container p-6 border border-outline-variant rounded-DEFAULT flex flex-col items-center gap-6">
      <div className="font-label-caps text-label-caps text-on-surface-variant mb-2">KEYBOARD PRIMARY</div>
      {/* WASD / Arrows Mockup */}
      <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 bg-surface-variant border-b-4 border-outline-variant rounded-sm flex items-center justify-center font-status-number text-status-number text-on-surface">W / ↑</div>
      <div className="flex gap-2">
      <div className="w-12 h-12 bg-surface-variant border-b-4 border-outline-variant rounded-sm flex items-center justify-center font-status-number text-status-number text-on-surface">A / ←</div>
      <div className="w-12 h-12 bg-surface-variant border-b-4 border-outline-variant rounded-sm flex items-center justify-center font-status-number text-status-number text-on-surface">S / ↓</div>
      <div className="w-12 h-12 bg-surface-variant border-b-4 border-outline-variant rounded-sm flex items-center justify-center font-status-number text-status-number text-on-surface">D / →</div>
      </div>
      </div>
      </div>
      <div className="bg-surface-container p-6 border border-outline-variant rounded-DEFAULT flex flex-col items-center gap-4">
      <div className="font-label-caps text-label-caps text-on-surface-variant">TOUCH / MOBILE</div>
      <div className="flex items-center gap-4">
      <MousePointerClick className="text-4xl text-on-surface-variant" aria-hidden={true} focusable="false" />
      <div className="font-body-base text-body-base text-on-surface text-center">
                                      Tap directional quadrants on the active game surface to navigate.
                                  </div>
      </div>
      </div>
      </div>
      {/* Directives Section */}
      <div className="flex flex-col gap-6">
      <h2 className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant pb-2 uppercase">OPERATIONAL DIRECTIVES</h2>
      <ul className="flex flex-col gap-4">
      <li className="bg-surface-container-low p-4 border border-outline-variant border-l-4 border-l-primary flex items-start gap-4">
      <Circle className="text-primary mt-1" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-status-number text-status-number text-primary mb-1">EAT FOOD TO GROW</div>
      <p className="font-body-base text-body-base text-on-surface-variant text-sm">Acquire glowing nutritional units to increase supervisor length and score.</p>
      </div>
      </li>
      <li className="bg-surface-container-low p-4 border border-outline-variant border-l-4 border-l-error flex items-start gap-4">
      <TriangleAlert className="text-error mt-1" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-status-number text-status-number text-error mb-1">AVOID WALLS AND SELF</div>
      <p className="font-body-base text-body-base text-on-surface-variant text-sm">Collision with perimeter containment or supervisor's own structure results in catastrophic system failure.</p>
      </div>
      </li>
      <li className="bg-surface-container-low p-4 border border-outline-variant border-l-4 border-l-tertiary flex items-start gap-4">
      <Circle className="text-tertiary mt-1" aria-hidden={true} focusable="false" />
      <div>
      <div className="font-status-number text-status-number text-tertiary mb-1">SPEED INCREASES WITH LEVEL</div>
      <p className="font-body-base text-body-base text-on-surface-variant text-sm">As proficiency is demonstrated, operational velocity will escalate exponentially.</p>
      </div>
      </li>
      </ul>
      </div>
      </div>
      <footer className="mt-4 pt-4 border-t border-outline-variant flex justify-end">
      <button className="bg-surface-variant text-on-surface-variant hover:bg-surface-container-high hover:text-primary px-8 py-3 font-label-caps text-label-caps uppercase border border-outline-variant transition-colors active:scale-95 duration-100 flex items-center gap-2" type="button" data-action-id="acknowledge-directives-4" onClick={actions?.["acknowledge-directives-4"]}>
      <Circle className="text-lg" aria-hidden={true} focusable="false" />
                          ACKNOWLEDGE DIRECTIVES
                      </button>
      </footer>
      </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-4 px-container-padding flex flex-col md:flex-row justify-between items-center bg-background border-t border-outline-variant docked full-width bottom-0 flat z-50 fixed md:relative bottom-0 hidden md:flex">
      <div className="text-primary font-bold font-label-caps text-label-caps uppercase">
                  © 2024 DOMGUARD INDUSTRIAL ARCADE SYSTEMS
              </div>
      <div className="flex gap-6 mt-4 md:mt-0">
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Service Status</a>
      <a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Documentation</a>
      </div>
      </footer>
      {/* Mobile BottomNavBar (Visible only on small screens) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container border-t border-outline-variant flex justify-around py-2 z-50">
      <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary p-2 w-touch-target" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[10px]">DASHBOARD</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-primary border-t-2 border-primary p-2 w-touch-target" href="#">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[10px]">CONTROLS</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary p-2 w-touch-target" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-[10px]">CONFIG</span>
      </a>
      </nav>
    </>
  );
}
