"use client";

import { useEffect, useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/outline";

export function SoundToggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const savedSound = window.localStorage.getItem("sound");
    const shouldEnableSound = savedSound === "on";
    const frame = window.requestAnimationFrame(() => setIsEnabled(shouldEnableSound));

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function playToggleSound() {
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(520, now);
    gain.gain.setValueAtTime(0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.06);
    window.setTimeout(() => void audioContext.close(), 100);
  }

  function toggleSound() {
    const nextIsEnabled = !isEnabled;

    setIsEnabled(nextIsEnabled);
    window.localStorage.setItem("sound", nextIsEnabled ? "on" : "off");

    if (nextIsEnabled) {
      playToggleSound();
    }
  }

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-label={isEnabled ? "Turn sound off" : "Turn sound on"}
      aria-pressed={isEnabled}
      className="grid size-6 shrink-0 place-items-center rounded-full text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {isEnabled ? <SpeakerWaveIcon className="size-3" aria-hidden="true" /> : <SpeakerXMarkIcon className="size-3" aria-hidden="true" />}
    </button>
  );
}
