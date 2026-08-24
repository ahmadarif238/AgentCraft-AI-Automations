"use client";

import { useId, useState } from "react";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  format: (value: number) => string;
}) {
  const id = useId();
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <label htmlFor={id} className="text-muted-foreground">
          {label}
        </label>
        <span className="font-bold text-foreground tabular-nums">{format(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 appearance-none cursor-grab active:cursor-grabbing rounded-full bg-secondary accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-md
                   [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-background"
      />
    </div>
  );
}

/**
 * A real calculator rather than a static graphic — the numbers move, so the
 * visitor arrives at their own figure instead of reading ours.
 */
export function RoiEstimator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(40);
  const [people, setPeople] = useState(1);

  const annualCost = hoursPerWeek * hourlyRate * 52 * people;
  // Deliberately conservative: we claim most of the manual time back, not all of it.
  const recoverable = annualCost * 0.7;

  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />

      <div className="flex items-baseline justify-between gap-4 mb-2">
        <h3 className="text-xl font-heading font-bold text-foreground">Automation ROI Estimator</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-6">
        Drag the sliders to match your team.
      </p>

      <div className="space-y-6">
        <Slider
          label="Hours lost to manual work weekly"
          value={hoursPerWeek}
          onChange={setHoursPerWeek}
          min={1}
          max={60}
          step={1}
          format={(v) => `${v} ${v === 1 ? "hour" : "hours"}`}
        />
        <Slider
          label="Average hourly cost"
          value={hourlyRate}
          onChange={setHourlyRate}
          min={10}
          max={150}
          step={5}
          format={(v) => `${currency.format(v)}/hr`}
        />
        <Slider
          label="People doing this work"
          value={people}
          onChange={setPeople}
          min={1}
          max={25}
          step={1}
          format={(v) => `${v} ${v === 1 ? "person" : "people"}`}
        />

        <div className="pt-6 border-t border-border">
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">
                Annual cost of this work
              </p>
              <p className="text-3xl font-heading font-bold text-foreground tabular-nums">
                {currency.format(annualCost)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">
                Typically recoverable
              </p>
              <p className="text-2xl font-heading font-bold text-primary tabular-nums">
                {currency.format(recoverable)}
              </p>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground/60 mt-4 text-center">
            Estimate only, assuming roughly 70% of this time is automatable. Actual results
            depend on workflow complexity.
          </p>
        </div>
      </div>
    </div>
  );
}
