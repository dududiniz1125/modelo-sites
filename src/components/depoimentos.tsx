"use client"

import { useState } from "react"
import { PauseIcon, PlayIcon } from "lucide-react"

import { site } from "@/config/site"
import { Marquee } from "@/components/magicui/marquee"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Depoimentos em marquee (Magic UI) com botão de pausa: animação contínua
// precisa de controle acessível por toque e teclado, não só pelo hover.
export function Depoimentos() {
  const [pausado, setPausado] = useState(false)

  return (
    <div>
      <div
        className={cn(
          // Limitado ao container: no desktop o botão flutuante do WhatsApp fica na margem livre.
          "relative mx-auto max-w-6xl",
          pausado && "[&_.animate-marquee]:[animation-play-state:paused]"
        )}
      >
        <Marquee pauseOnHover className="[--duration:40s]">
          {site.depoimentos.map((d) => (
            <figure key={d.nome} className="w-72 rounded-xl border bg-card p-5">
              <blockquote className="text-pretty">“{d.texto}”</blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">{d.nome}</figcaption>
            </figure>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background" />
      </div>
      <div className="mx-auto mt-4 max-w-6xl px-4 motion-reduce:hidden">
        <Button
          variant="ghost"
          size="sm"
          className="h-11 text-muted-foreground"
          aria-pressed={pausado}
          onClick={() => setPausado((p) => !p)}
        >
          {pausado ? <PlayIcon aria-hidden="true" /> : <PauseIcon aria-hidden="true" />}
          {pausado ? "Continuar depoimentos" : "Pausar depoimentos"}
        </Button>
      </div>
    </div>
  )
}
