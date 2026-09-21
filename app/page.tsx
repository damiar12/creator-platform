"use client";
import { useEffect, useState } from "react";
import { Dashboard } from "@/components/dashboard";
import { Onboarding } from "@/components/onboarding";
import { Sector } from "@/lib/types";

export default function Home() {
  const [sector, setSector] = useState<Sector | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { setSector(localStorage.getItem("nexo-sector") as Sector | null); setReady(true); }, []);
  const select = (value: Sector | null) => { value ? localStorage.setItem("nexo-sector", value) : localStorage.removeItem("nexo-sector"); setSector(value); };
  if (!ready) return <div className="min-h-screen bg-ink"/>;
  return sector ? <Dashboard sector={sector} reset={() => select(null)}/> : <Onboarding onSelect={select}/>;
}
