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
  const display = format(value);
  return (
    <div>
      {/*
        Label and value sit next to each other rather than at opposite ends of
        the card, so reading the current state is one glance instead of a
        left-right-down zig-zag across eight hundred pixels.
      */}
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1.5">
        <label htmlFor={id} className="text-sm text-muted-foreground">
          {label}
        </label>
        <span aria-hidden="true" className="text-sm text-border">&mdash;</span>
        <span className="text-sm font-bold text-foreground tabular-nums">{display}</span>
      </div>
      {/*
        The input box is 24px tall — the WCAG target-size minimum, and enough
        to contain the 20px thumb, which a 8px-tall box used to clip away and
        leave the control looking like a decorative rule. The visible bar is
        the track pseudo-element, not the input's own background.
      */}
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-valuetext={display}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-6 appearance-none bg-transparent cursor-grab active:cursor-grabbing rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-card
                   [&::-webkit-slider-runnable-track]:h-1.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-secondary [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-border
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:-mt-[7px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(173,255,47,0.5)]
                   [&::-moz-range-track]:h-1.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-secondary [&::-moz-range-track]:border [&::-moz-range-track]:border-border
                   [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-background [&::-moz-range-thumb]:shadow-[0_0_12px_rgba(173,255,47,0.5)]"
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
          <div className="flex flex-wrap justify-between items-end gap-4">
            <div>
              <p className="label-mono text-muted-foreground mb-1">
                Annual cost of this work
              </p>
              <p className="text-3xl font-heading font-bold text-foreground tabular-nums">
                {currency.format(annualCost)}
              </p>
            </div>
            <div className="text-right">
              <p className="label-mono text-muted-foreground mb-1">
                Typically recoverable
              </p>
              <p className="text-2xl font-heading font-bold text-primary-strong tabular-nums">
                {currency.format(recoverable)}
              </p>
            </div>
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
