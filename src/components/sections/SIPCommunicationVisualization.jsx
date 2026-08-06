import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COLORS = { blue: '#3B82F6', cyan: '#38BDF8', green: '#22C55E', red: '#EF4444' };

const DESKTOP_NODES = {
  caller: { x: 88, y: 253, label: 'Caller', detail: 'Customer Device', type: 'phone' },
  edge: { x: 270, y: 174, label: 'AI', detail: 'Intelligent Call Routing', type: 'cloud' },
  pbx: { x: 488, y: 301, label: 'Balatrix', detail: 'Cloud Platform', type: 'cloud' },
  callee: { x: 675, y: 220, label: 'Sales Manager', detail: 'Business Extension', type: 'phone' },
};

const MOBILE_NODES = {
  caller: { x: 80, y: 100, label: 'Caller', detail: 'Customer Device', type: 'phone' },
  edge: { x: 320, y: 280, label: 'AI', detail: 'Intelligent Call Routing', type: 'cloud' },
  pbx: { x: 80, y: 480, label: 'Balatrix', detail: 'Cloud Platform', type: 'cloud' },
  callee: { x: 320, y: 685, label: 'Sales Manager', detail: 'Business Extension', type: 'phone' },
};

const DESKTOP_STEP_DEFINITIONS = [
  { id: 'invite', label: 'INVITE', subLabel: '1800-XXX-XXXX', color: COLORS.blue, path: 'M 112 253 C 154 248, 202 188, 244 178', source: 'caller', target: 'edge', weight: 153 },
  { id: 'trying', label: '100 TRYING', subLabel: '1800-XXX-XXXX', color: COLORS.cyan, path: 'M 292 184 C 340 203, 408 278, 462 294', source: 'edge', target: 'pbx', weight: 206 },
  { id: 'ringing', label: '180 RINGING', subLabel: '1800-XXX-XXXX', color: '#67E8F9', path: 'M 514 293 C 560 280, 613 233, 650 224', source: 'pbx', target: 'callee', weight: 156 },
  { id: 'ok-pbx', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 650 235 C 602 255, 558 284, 514 297', source: 'callee', target: 'pbx', weight: 156 },
  { id: 'ok-edge', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 462 291 C 400 268, 340 210, 294 184', source: 'pbx', target: 'edge', weight: 204 },
  { id: 'ok-caller', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 245 180 C 194 192, 151 242, 112 253', source: 'edge', target: 'caller', weight: 155 },
  { id: 'ack', label: 'ACK', subLabel: '1800-XXX-XXXX', color: COLORS.blue, path: 'M 113 259 C 262 325, 486 345, 651 229', source: 'caller', target: 'callee', weight: 550 },
  { id: 'voice', type: 'voice', subLabel: '1800-XXX-XXXX', weight: 550 },
  { id: 'bye-pbx', label: 'BYE', subLabel: '1800-XXX-XXXX', color: COLORS.red, path: 'M 650 235 C 602 255, 558 284, 514 297', source: 'callee', target: 'pbx', weight: 180 },
  { id: 'bye-edge', label: 'BYE', subLabel: '1800-XXX-XXXX', color: COLORS.red, path: 'M 462 291 C 400 268, 340 210, 294 184', source: 'pbx', target: 'edge', weight: 200 },
  { id: 'bye-caller', label: 'BYE', subLabel: '1800-XXX-XXXX', color: COLORS.red, path: 'M 245 180 C 194 192, 151 242, 112 253', source: 'edge', target: 'caller', weight: 180 },
  { id: 'final-ok-edge', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 112 253 C 154 248, 202 188, 244 178', source: 'caller', target: 'edge', weight: 180 },
  { id: 'final-ok-pbx', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 292 184 C 340 203, 408 278, 462 294', source: 'edge', target: 'pbx', weight: 200 },
  { id: 'final-ok-callee', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 514 293 C 560 280, 613 233, 650 224', source: 'pbx', target: 'callee', weight: 180 },
];

const MOBILE_STEP_DEFINITIONS = [
  { id: 'invite', label: 'INVITE', subLabel: '1800-XXX-XXXX', color: COLORS.blue, path: 'M 100 115 C 160 140, 260 210, 300 265', source: 'caller', target: 'edge', weight: 300 },
  { id: 'trying', label: '100 TRYING', subLabel: '1800-XXX-XXXX', color: COLORS.cyan, path: 'M 300 295 C 240 330, 140 410, 100 465', source: 'edge', target: 'pbx', weight: 312 },
  { id: 'ringing', label: '180 RINGING', subLabel: '1800-XXX-XXXX', color: '#67E8F9', path: 'M 100 495 C 160 520, 260 610, 300 670', source: 'pbx', target: 'callee', weight: 315 },
  { id: 'ok-pbx', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 300 675 C 250 635, 150 545, 100 500', source: 'callee', target: 'pbx', weight: 315 },
  { id: 'ok-edge', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 100 470 C 150 420, 250 340, 300 300', source: 'pbx', target: 'edge', weight: 312 },
  { id: 'ok-caller', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 300 250 C 250 205, 150 135, 100 110', source: 'edge', target: 'caller', weight: 300 },
  { id: 'ack', label: 'ACK', subLabel: '1800-XXX-XXXX', color: COLORS.blue, path: 'M 80 125 C 80 280, 320 500, 320 660', source: 'caller', target: 'callee', weight: 650 },
  { id: 'voice', type: 'voice', subLabel: '1800-XXX-XXXX', weight: 650 },
  { id: 'bye-pbx', label: 'BYE', subLabel: '1800-XXX-XXXX', color: COLORS.red, path: 'M 300 675 C 250 635, 150 545, 100 500', source: 'callee', target: 'pbx', weight: 250 },
  { id: 'bye-edge', label: 'BYE', subLabel: '1800-XXX-XXXX', color: COLORS.red, path: 'M 100 470 C 150 420, 250 340, 300 300', source: 'pbx', target: 'edge', weight: 250 },
  { id: 'bye-caller', label: 'BYE', subLabel: '1800-XXX-XXXX', color: COLORS.red, path: 'M 300 250 C 250 205, 150 135, 100 110', source: 'edge', target: 'caller', weight: 250 },
  { id: 'final-ok-edge', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 100 115 C 160 140, 260 210, 300 265', source: 'caller', target: 'edge', weight: 250 },
  { id: 'final-ok-pbx', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 300 295 C 240 330, 140 410, 100 465', source: 'edge', target: 'pbx', weight: 250 },
  { id: 'final-ok-callee', label: '200 OK', subLabel: '1800-XXX-XXXX', color: COLORS.green, path: 'M 100 495 C 160 520, 260 610, 300 670', source: 'pbx', target: 'callee', weight: 250 },
];

const generateTimeline = (definitions) => {
  const GAP = 25;
  const totalWeight = definitions.reduce((sum, s) => sum + s.weight, 0) + (definitions.length - 1) * GAP;
  let currentOffset = 0;
  const timeline = definitions.map((step) => {
    const start = currentOffset / totalWeight;
    const end = (currentOffset + step.weight) / totalWeight;
    currentOffset += step.weight + GAP;
    return { ...step, start, end };
  });
  const steps = timeline.filter(s => s.id !== 'voice');
  const voiceStep = timeline.find(s => s.id === 'voice');
  return { steps, voiceStep };
};

const DESKTOP_TIMELINE = generateTimeline(DESKTOP_STEP_DEFINITIONS);
const MOBILE_TIMELINE = generateTimeline(MOBILE_STEP_DEFINITIONS);

const DESKTOP_VOICE_PATHS = [
  'M 114 247 C 265 139, 520 379, 650 226',
  'M 650 236 C 500 148, 294 350, 114 261',
  'M 114 258 C 315 348, 474 158, 650 218',
  'M 650 227 C 500 365, 262 142, 114 249',
];

const MOBILE_VOICE_PATHS = [
  'M 80 125 C 200 300, 200 500, 320 660',
  'M 320 660 C 200 500, 200 300, 80 125',
  'M 80 125 C 100 300, 300 500, 320 660',
  'M 320 660 C 300 500, 100 300, 80 125',
];

const clamp = (value) => Math.min(1, Math.max(0, value));

/* Per-node floating motion params for background mode (Lissajous drift) */
const NODE_FLOAT_PARAMS = {
  caller: { ax: 18, ay: 14, fx: 0.40, fy: 0.32, px: 0, py: 1.5 },
  edge: { ax: 22, ay: 16, fx: 0.34, fy: 0.46, px: 2.0, py: 0.8 },
  pbx: { ax: 16, ay: 20, fx: 0.48, fy: 0.28, px: 3.5, py: 4.2 },
  callee: { ax: 20, ay: 18, fx: 0.30, fy: 0.42, px: 5.0, py: 2.7 },
};

/* Shift a cubic bezier path "M sx sy C c1x c1y, c2x c2y, tx ty" by interpolating
   source/target float offsets across the control points so paths follow drifting nodes */
const offsetPath = (pathStr, srcOff, tgtOff) => {
  if (!srcOff && !tgtOff) return pathStr;
  const dx1 = srcOff?.x || 0, dy1 = srcOff?.y || 0;
  const dx2 = tgtOff?.x || 0, dy2 = tgtOff?.y || 0;
  const nums = pathStr.match(/-?\d+\.?\d*/g).map(Number);
  const [sx, sy, c1x, c1y, c2x, c2y, tx, ty] = nums;
  return `M ${sx + dx1} ${sy + dy1} C ${c1x + dx1 * 0.67 + dx2 * 0.33} ${c1y + dy1 * 0.67 + dy2 * 0.33}, ${c2x + dx1 * 0.33 + dx2 * 0.67} ${c2y + dy1 * 0.33 + dy2 * 0.67}, ${tx + dx2} ${ty + dy2}`;
};

const SIPCommunicationVisualization = ({ background = false, scrollTarget = null }) => {
  const containerRef = useRef(null);
  const stepPaths = useRef({});
  const voicePaths = useRef({});
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileMedia = window.matchMedia('(max-width: 640px)');
    const tabletMedia = window.matchMedia('(max-width: 1024px)');
    const sync = () => {
      setIsMobile(mobileMedia.matches);
      setIsTablet(tabletMedia.matches && !mobileMedia.matches);
    };
    sync();
    mobileMedia.addEventListener('change', sync);
    tabletMedia.addEventListener('change', sync);
    return () => {
      mobileMedia.removeEventListener('change', sync);
      tabletMedia.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(media.matches);
    sync(); media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const activeNodes = isMobile ? MOBILE_NODES : DESKTOP_NODES;
  const activeSteps = isMobile ? MOBILE_TIMELINE.steps : DESKTOP_TIMELINE.steps;
  const voiceStep = isMobile ? MOBILE_TIMELINE.voiceStep : DESKTOP_TIMELINE.voiceStep;
  const activeVoicePaths = isMobile ? MOBILE_VOICE_PATHS : DESKTOP_VOICE_PATHS;

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return undefined;
    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: scrollTarget?.current || (background ? document.body : containerRef.current),
        start: background ? 'top top' : (scrollTarget ? 'top top' : 'top 82%'),
        end: background ? 'bottom bottom' : (scrollTarget ? 'bottom bottom' : 'bottom 18%'),
        scrub: 0.55,
        onUpdate: (trigger) => setProgress(trigger.progress),
      });
    }, containerRef);
    return () => context.revert();
  }, [reducedMotion, scrollTarget, background]);

  const sceneProgress = reducedMotion ? 0.87 : progress;

  const pointOnPath = (path, amount, fallback) => {
    if (!path) return fallback;
    const point = path.getPointAtLength(path.getTotalLength() * clamp(amount));
    return { x: point.x, y: point.y };
  };

  const stepStates = useMemo(() => activeSteps.map((step) => {
    const amount = clamp((sceneProgress - step.start) / (step.end - step.start));
    const active = sceneProgress >= step.start && sceneProgress <= step.end;
    const done = sceneProgress > step.end;
    const path = stepPaths.current[step.id];
    return { ...step, active, done, amount, point: pointOnPath(path, amount, activeNodes.caller), trail: pointOnPath(path, amount - 0.12, activeNodes.caller) };
  }), [sceneProgress, activeSteps, activeNodes]);

  const activeStep = stepStates.find((step) => step.active);
  const completedStep = [...stepStates].reverse().find((step) => step.done);
  const currentStep = activeStep || completedStep;

  const voiceActive = sceneProgress >= voiceStep.start && sceneProgress < voiceStep.end;
  const callPhase = clamp((sceneProgress - voiceStep.start) / (voiceStep.end - voiceStep.start));

  const fadeOut = (sceneProgress < 0.08
    ? clamp((sceneProgress - 0.02) / 0.06)
    : (sceneProgress > 0.92 ? clamp((0.98 - sceneProgress) / 0.06) : 1)) * (background ? 0.45 : 1);

  const nodeSignal = (id) => {
    if (!currentStep) return 0;
    return currentStep.target === id ? (activeStep ? 1 : 0.48) : 0;
  };

  /* Static node offsets for clean background layout */
  const nodeFloatOffsets = {};

  return (
    <div ref={containerRef} className={background ? 'relative h-full min-h-full w-full overflow-hidden bg-transparent' : 'relative min-h-[420px] w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#050914] shadow-[0_32px_90px_rgba(0,0,0,0.48)]'}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.13),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(34,197,94,0.10),transparent_30%)]" style={{ opacity: fadeOut }} />
      {!background && <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2" aria-hidden="true"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" /></span>
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">Live call topology</p><p className="mt-0.5 text-[10px] text-slate-500">Balatrix cloud network</p></div>
        </div>
        <div className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 font-mono text-[10px] text-slate-400">{Math.round(sceneProgress * 100).toString().padStart(2, '0')}% FLOW</div>
      </div>}

      <svg
        viewBox={isMobile ? "0 0 400 800" : "0 0 760 470"}
        preserveAspectRatio={background ? ((isMobile || isTablet) ? "xMidYMid meet" : "xMidYMid slice") : undefined}
        className={background ? "absolute inset-0 block h-full w-full background-parallax-svg" : "relative z-10 block h-auto min-h-[390px] w-full"}
        role="img"
        aria-label="Scroll-driven Balatrix SIP call travelling through a Balatrix network"
      >
        <defs>
          <filter id="network-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          <filter id="network-bloom" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="12" /></filter>
          <filter id="badge-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#020617" floodOpacity="0.75" />
          </filter>
          <linearGradient id="badge-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d192d" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#040914" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="glass-node" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#1e3a5f" stopOpacity="0.85" /><stop offset="0.5" stopColor="#0d1c35" stopOpacity="0.9" /><stop offset="1" stopColor="#071124" stopOpacity="0.95" /></linearGradient>
          <pattern id="network-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="#38BDF8" opacity="0.18" />
          </pattern>
        </defs>

        <g opacity={fadeOut}>
          <rect width={isMobile ? 400 : 760} height={isMobile ? 800 : 470} fill="url(#network-dots)" opacity={0.8} />
          <g opacity={0.65} fill="#7dd3fc">
            {(isMobile
              ? [[25, 45], [95, 210], [320, 140], [45, 390], [350, 420], [60, 610], [315, 600], [280, 750]]
              : [[38, 72], [146, 101], [342, 72], [580, 116], [716, 67], [214, 410], [552, 419], [690, 368]]
            ).map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.2" />)}
          </g>

          <g fill="none" strokeLinecap="round">
            {activeSteps.map((step) => {
              const state = stepStates.find((item) => item.id === step.id);
              const d = step.path ? offsetPath(step.path, nodeFloatOffsets[step.source], nodeFloatOffsets[step.target]) : step.path;
              return <path key={step.id} ref={(element) => { stepPaths.current[step.id] = element; }} d={d} stroke={step.color} strokeWidth={state?.active ? 1.4 : 0.8} opacity={state?.active ? 0.85 : 0} />;
            })}
            {activeVoicePaths.map((path, index) => {
              const srcId = index % 2 === 0 ? 'caller' : 'callee';
              const tgtId = index % 2 === 0 ? 'callee' : 'caller';
              const d = offsetPath(path, nodeFloatOffsets[srcId], nodeFloatOffsets[tgtId]);
              return <path key={`voice-${index}`} ref={(element) => { voicePaths.current[index] = element; }} d={d} stroke="#38BDF8" strokeWidth="0.8" opacity={voiceActive ? 0.45 : 0} />;
            })}
          </g>

          {Object.entries(activeNodes).map(([id, node]) => {
            const signal = nodeSignal(id); const color = currentStep?.target === id ? currentStep.color : node.type === 'phone' ? COLORS.blue : COLORS.cyan;
            const offset = nodeFloatOffsets[id] || { x: 0, y: 0 };
            return <g key={id} transform={`translate(${offset.x}, ${offset.y})`}>
              <circle cx={node.x} cy={node.y} r="25" fill={color} opacity="0.08" filter="url(#network-bloom)" />
              {id === 'caller' && (
                <g>
                  <circle cx={node.x} cy={node.y} r="22" fill="url(#glass-node)" stroke={color} strokeWidth="1.8" strokeOpacity={0.65 + signal * 0.35} />
                  {/* Person Icon Head */}
                  <circle cx={node.x - 3} cy={node.y - 3} r="4.5" fill="none" stroke={color} strokeWidth="1.8" />
                  {/* Person Icon Body/Shoulders */}
                  <path d={`M ${node.x - 11} ${node.y + 8} A 8 8 0 0 1 ${node.x + 5} ${node.y + 8}`} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
                  {/* Phone Handset Receiver Icon beside person */}
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    fill={color}
                    transform={`translate(${node.x + 3}, ${node.y - 4}) scale(0.52)`}
                  />
                  {/* Pulsing green start indicator (origin beacon) */}
                  <circle cx={node.x + 14} cy={node.y - 14} r="4" fill="#22C55E" opacity="0.4" className="animate-pulse" />
                  <circle cx={node.x + 14} cy={node.y - 14} r="2.5" fill="#22C55E" />
                </g>
              )}
              {id === 'edge' && (
                <g>
                  {/* Enterprise Cloud Telephony Floating Badge */}
                  <g opacity={background ? 0.9 : 1} transform={`translate(${node.x}, ${node.y - 50})`}>
                    <rect x="-68" y="-12" width="150" height="23" rx="10" fill="rgba(8, 14, 30, 0.9)" stroke="rgba(56, 189, 248, 0.28)" strokeWidth="1.2" />
                    <circle cx="-52" cy="-1.5" r="2.5" fill="#3B82F6" />
                    <text x="6" y="2.5" textAnchor="middle" fill="#38BDF8" fontSize="7.5" fontWeight="800" letterSpacing="0.6">ENTERPRISE CLOUD TELEPHONY</text>
                  </g>
                  <circle cx={node.x} cy={node.y} r="22" fill="url(#glass-node)" stroke={color} strokeWidth="1.8" strokeOpacity={0.58 + signal * 0.35} />
                  {/* AI Neural / Spark Icon inside the circle */}
                  <g transform={`translate(${node.x}, ${node.y})`}>
                    <line x1="-8" y1="-8" x2="0" y2="0" stroke={color} strokeWidth="1.2" opacity="0.6" />
                    <line x1="8" y1="-8" x2="0" y2="0" stroke={color} strokeWidth="1.2" opacity="0.6" />
                    <line x1="-8" y1="8" x2="0" y2="0" stroke={color} strokeWidth="1.2" opacity="0.6" />
                    <line x1="8" y1="8" x2="0" y2="0" stroke={color} strokeWidth="1.2" opacity="0.6" />
                    <circle cx="-8" cy="-8" r="2.5" fill="url(#glass-node)" stroke={color} strokeWidth="1.2" />
                    <circle cx="8" cy="-8" r="2.5" fill={color} />
                    <circle cx="-8" cy="8" r="2.5" fill={color} />
                    <circle cx="8" cy="8" r="2.5" fill="url(#glass-node)" stroke={color} strokeWidth="1.2" />
                    <circle cx="0" cy="0" r="4.5" fill={color} />
                    <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
                  </g>
                </g>
              )}
              {id === 'pbx' && (
                <g>
                  <circle cx={node.x} cy={node.y} r="22" fill="url(#glass-node)" stroke={color} strokeWidth="1.8" strokeOpacity={0.58 + signal * 0.35} />
                  <g transform={`translate(${node.x}, ${node.y}) scale(0.08)`}>
                    <g transform="translate(-550, -535)">
                      <path
                        d="M624.41,476.22a157,157,0,0,0,16.36-30.4c18.07-50.32-3.08-84.24-32.06-95.54a64.84,64.84,0,0,0-9.42-2.76A71.69,71.69,0,0,0,584.17,346H415.69v82.38h50.38v-32H581a21.64,21.64,0,0,1,7.09,1.08c6.9,2.39,11.44,8,12.78,15.9,2.4,14.14-5.53,30.79-20.2,42.4a76.94,76.94,0,0,1-30.76,14.31V421.42H528.36V604.05a6,6,0,0,1-12,0V421.42H495.6V610.13l2.24.52a17.66,17.66,0,0,1,13.4,17.09l0,2.91h23v-2.91a17.64,17.64,0,0,1,13.42-17.09l2.21-.52v-90.6a81.51,81.51,0,0,0,35.2-8.48A92,92,0,0,1,540,683.26l-2.39,0c-50.18-1.27-90.38-43.18-89.6-93.41a90.93,90.93,0,0,1,8.3-36.81l.72-1.57-32.79-43.71L422,511.09A142.7,142.7,0,0,0,534.37,733.9c1.89.07,3.76.11,5.63.11,78.7,0,142.74-64,142.74-142.75A143.08,143.08,0,0,0,624.41,476.22Z"
                        fill={color}
                      />
                      <circle cx="523.65" cy="649.25" r="13.43" fill={color} />
                    </g>
                  </g>
                </g>
              )}
              {id === 'callee' && (
                <g>
                  <rect x={node.x - 20} y={node.y - 12} width="40" height="26" rx="4" fill="url(#glass-node)" stroke={color} strokeWidth="1.8" strokeOpacity={0.65 + signal * 0.35} />
                  <circle cx={node.x - 4} cy={node.y - 4} r="1" fill={color} opacity="0.6" />
                  <circle cx={node.x} cy={node.y - 4} r="1" fill={color} opacity="0.6" />
                  <circle cx={node.x + 4} cy={node.y - 4} r="1" fill={color} opacity="0.6" />
                  <circle cx={node.x - 4} cy={node.y + 1} r="1" fill={color} opacity="0.6" />
                  <circle cx={node.x} cy={node.y + 1} r="1" fill={color} opacity="0.6" />
                  <circle cx={node.x + 4} cy={node.y + 1} r="1" fill={color} opacity="0.6" />
                  <circle cx={node.x - 4} cy={node.y + 6} r="1" fill={color} opacity="0.6" />
                  <circle cx={node.x} cy={node.y + 6} r="1" fill={color} opacity="0.6" />
                  <circle cx={node.x + 4} cy={node.y + 6} r="1" fill={color} opacity="0.6" />
                  <path d={`M ${node.x - 17} ${node.y - 14} h -2 a 2 2 0 0 0 -2 2 v 20 a 2 2 0 0 0 2 2 h 2 z`} fill={color} />
                </g>
              )}
              <text x={node.x} y={node.y + 48} textAnchor="middle" fill="#e2e8f0" opacity={background ? 0.65 : 1} fontSize="12" fontWeight="700">{node.label}</text><text x={node.x} y={node.y + 63} textAnchor="middle" fill="#64748b" opacity={background ? 0.7 : 1} fontSize="9.5">{node.detail}</text>

            </g>;
          })}

          {stepStates.map((step) => step.active && <g key={`packet-${step.id}`} opacity={1}>
            {step.active && <line x1={step.trail.x} y1={step.trail.y} x2={step.point.x} y2={step.point.y} stroke={step.color} strokeWidth="2.5" strokeLinecap="round" opacity="0.65" filter="url(#network-glow)" />}
            <circle cx={step.point.x} cy={step.point.y} r="13" fill={step.color} opacity="0.35" filter="url(#network-bloom)" />
            <circle cx={step.point.x} cy={step.point.y} r="9" fill={step.color} filter="url(#network-glow)" />
            <path
              d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.5 11.5 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.5 11.5 0 00.57 3.58 1 1 0 01-.27 1.11z"
              fill="#ffffff"
              transform={`translate(${step.point.x - 5.4}, ${step.point.y - 5.4}) scale(0.45)`}
            />
            {step.active && (
              <g opacity={background ? 0.55 : 1} filter="url(#badge-shadow)">
                {/* Primary Label Block (above packet) displaying INVITE, 100 TRYING, 200 OK, etc. */}
                <g transform={`translate(${step.point.x}, ${step.point.y - 23})`}>
                  <rect x="-44" y="-10" width="88" height="20" rx="10" fill="url(#badge-bg)" stroke={step.color} strokeWidth="1.4" strokeOpacity="0.9" />
                  <circle cx="-30" cy="0" r="3" fill={step.color} filter="url(#network-glow)" />
                  <text textAnchor="middle" x="4" y="3.2" fill="#F8FAFC" fontSize="8.5" fontWeight="800" letterSpacing="0.8">{step.label}</text>
                </g>
                {/* Secondary Sub-label Block (below packet) displaying sublabel e.g. 1800-XXX-XXXX */}
                {step.subLabel && (
                  <g transform={`translate(${step.point.x}, ${step.point.y + 23})`}>
                    <rect x="-52" y="-10" width="104" height="20" rx="10" fill="url(#badge-bg)" stroke="rgba(56, 189, 248, 0.45)" strokeWidth="1.2" />
                    <circle cx="-38" cy="0" r="2.5" fill="#38BDF8" filter="url(#network-glow)" />
                    <text textAnchor="middle" x="4" y="3.2" fill="#38BDF8" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" letterSpacing="0.6">{step.subLabel}</text>
                  </g>
                )}
              </g>
            )}
          </g>)}

          {voiceActive && activeVoicePaths.map((_, index) => {
            const path = voicePaths.current[index]; const direction = index % 2 ? 1 - callPhase : callPhase; const p = pointOnPath(path, direction, activeNodes.caller);
            return <g key={`voice-${index}`} opacity="1"><circle cx={p.x} cy={p.y} r="10" fill="#38BDF8" opacity="0.3" filter="url(#network-bloom)" /><circle cx={p.x} cy={p.y} r="4" fill="#67E8F9" filter="url(#network-glow)" /></g>;
          })}

          {voiceActive && <g opacity={background ? 0.3 : 1} transform={isMobile ? "translate(200 392)" : "translate(380 422)"}><circle r="4" fill="#22C55E" filter="url(#network-glow)" /><text x="11" y="3.5" fill="#bbf7d0" fontSize="10" fontWeight="700" letterSpacing="0.9">ACTIVE VOICE STREAM</text></g>}
        </g>
      </svg>

      {!background && <div className="absolute bottom-3 right-3 z-20 rounded-lg border border-white/[0.08] bg-[#091226]/90 px-3 py-2 backdrop-blur-md"><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">Network event</p><p className="mt-0.5 text-[11px] font-semibold" style={{ color: currentStep?.color || COLORS.blue }}>{reducedMotion ? 'Call path overview' : voiceActive ? 'Voice packets flowing' : currentStep?.label || 'Call ready'}</p></div>}
    </div>
  );
};

export default SIPCommunicationVisualization;
