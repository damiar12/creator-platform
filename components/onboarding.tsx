"use client";
import { Sector } from "@/lib/types";
import { sectorCopy } from "@/lib/data";

const emoji: Record<Sector, string> = { creator: "✦", coach: "↗", academy: "◇", analyst: "⌁", community: "◎" };
export function Onboarding({ onSelect }: { onSelect: (sector: Sector) => void }) {
  return <main className="grid-bg flex min-h-screen items-center justify-center p-6">
    <section className="w-full max-w-4xl text-center">
      <div className="mx-auto mb-9 flex h-12 w-12 items-center justify-center rounded-xl bg-lime text-xl font-black text-ink">N</div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[.22em] text-lime">Configura tu espacio</p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">¿Qué tipo de negocio estás creando?</h1>
      <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">Personalizaremos tu dashboard, las métricas y tus productos para que puedas empezar con ventaja.</p>
      <div className="mt-10 grid gap-3 sm:grid-cols-5">
        {(Object.keys(sectorCopy) as Sector[]).map((key) => <button key={key} onClick={() => onSelect(key)} className="group rounded-2xl border border-line bg-panel p-5 text-left transition hover:-translate-y-1 hover:border-lime/50 hover:shadow-glow">
          <span className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-xl text-zinc-300 group-hover:bg-lime group-hover:text-ink">{emoji[key]}</span>
          <strong className="block text-sm">{sectorCopy[key].label}</strong><span className="mt-1 block text-xs text-zinc-500">Seleccionar →</span>
        </button>)}
      </div>
      <p className="mt-8 text-xs text-zinc-600">Podrás cambiarlo más adelante desde configuración.</p>
    </section>
  </main>;
}
