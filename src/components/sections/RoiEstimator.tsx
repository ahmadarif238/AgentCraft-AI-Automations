"use client";

import { useId, useState, type CSSProperties } from "react";

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
  const display = format(value);
  // Percentage of the range covered, which paints the lit portion of the track.
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      {/* Label and value are adjacent, so reading the state is a single glance. */}
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1.5">
        <label htmlFor={id} className="text-sm text-muted-foreground">
          {label}
        </label>
        <span aria-hidden="true" className="text-sm text-border">&mdash;</span>
        <span className="text-sm font-bold text-foreground tabular-nums">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--range-fill": `${fill}%` } as CSSProperties}
        className="range-halogen rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-card"
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

      <h3 className="text-xl font-heading font-bold text-foreground mb-2">Automation ROI Estimator</h3>
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
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <p className="label-mono text-muted-foreground">Annual cost of this work</p>
            <span aria-hidden="true" className="text-sm text-border">&mdash;</span>
            <p className="text-lg font-heading font-bold text-muted-foreground tabular-nums">
              {currency.format(annualCost)}
            </p>
          </div>
          <div className="mt-4">
            <p className="label-mono text-primary-strong mb-1">Typically recoverable</p>
            <p className="text-4xl font-heading font-bold text-primary-strong tabular-nums">
              {currency.format(recoverable)}
            </p>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4 text-center">
            Estimate only, assuming roughly 70% of this time is automatable. Actual results
            depend on workflow complexity.
          </p>
        </div>
      </div>
    </div>
  );
}
