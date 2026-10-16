import { enderecoCompleto, site } from "@/config/site"
import { cn } from "@/lib/utils"

// Mapa obrigatório em todos os sites. Usa o embed do Google Maps (sem chave de API).
export function SiteMap({ className }: { className?: string }) {
  const endereco = enderecoCompleto()
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&z=16&hl=pt-BR&output=embed`

  return (
    <div className={cn("overflow-hidden rounded-xl border bg-muted", className)}>
      <iframe
        src={src}
        title={`Mapa: localização de ${site.nome}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[4/3] h-full w-full border-0 md:aspect-auto md:min-h-80"
        allowFullScreen
      />
    </div>
  )
}

export function linkRotas() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(enderecoCompleto())}`
}
