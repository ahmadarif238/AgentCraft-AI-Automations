import Image from "next/image";
import { BrainCircuit, Settings, Users, Database, Network, BarChart3 } from "lucide-react";

/**
 * The no-WebGL hero visual.
 *
 * Shown on mobile, for reduced-motion visitors, on underpowered devices, and
 * while the 3D bundle loads. It mirrors the same idea as the scene — a core
 * surrounded by the systems it connects — so the fallback is a quieter version
 * of the same picture rather than an obviously lesser one.
 */

const NODES = [
  { icon: Settings, label: "Workflows", className: "top-[16%] left-[10%]" },
  { icon: BrainCircuit, label: "AI Agents", className: "top-[13%] right-[14%]" },
  { icon: Users, label: "CRM", className: "bottom-[34%] left-[5%]" },
  { icon: BarChart3, label: "Reports", className: "top-[44%] right-[5%]" },
  { icon: Database, label: "Documents", className: "bottom-[14%] left-[24%]" },
  { icon: Network, label: "APIs", className: "bottom-[18%] right-[19%]" },
];

export function StaticHeroVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(42,49,60,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(42,49,60,0.35)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-20 w-28 h-28 rounded-2xl bg-canvas border border-primary shadow-[0_0_50px_rgba(173,255,47,0.28)] flex items-center justify-center">
        <Image
          src="/images/brand/mark-light.png"
          alt=""
          width={72}
          height={72}
          aria-hidden="true"
          className="w-16 h-16 object-contain"
        />
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {NODES.map(({ icon: Icon, label, className }) => (
          <div
            key={label}
            className={`absolute ${className} z-10 flex flex-col items-center gap-2`}
          >
            <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 text-foreground" aria-hidden="true" />
            </div>
            <span className="label-mono uppercase text-muted-foreground bg-background/80 px-2 rounded">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
