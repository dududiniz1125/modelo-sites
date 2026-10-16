import { formatarPreco, linkWhatsApp, site } from "@/config/site"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Placa de preços no estilo das barbearias antigas: moldura dourada dupla
// e linha pontilhada ligando o serviço ao preço.
export function TabelaPrecos() {
  return (
    <div className="rounded-md border border-primary/70 p-1.5">
      <div className="rounded-sm border border-primary/40 bg-card px-5 py-8 sm:px-10 sm:py-12">
        <h2 className="text-center font-heading text-3xl text-primary sm:text-4xl">
          Tabela de preços
        </h2>
        <ul className="mt-8 space-y-3">
          {site.servicos.map((s) => {
            const destaque = "destaque" in s && s.destaque
            return (
              <li
                key={s.titulo}
                className={cn(
                  "relative rounded-sm px-3 py-4 sm:px-5",
                  destaque && "overflow-hidden bg-accent/25"
                )}
              >
                <div className="flex items-baseline gap-3">
                  <h3 className="min-w-0 font-sans text-lg font-semibold sm:text-xl">{s.titulo}</h3>
                  <span
                    aria-hidden="true"
                    className="min-w-6 flex-1 translate-y-[-0.3em] border-b-2 border-dotted border-primary/50"
                  />
                  <p className="shrink-0 font-heading text-2xl text-primary tabular-nums">
                    {formatarPreco(s.preco)}
                  </p>
                </div>
                <p className="mt-1 text-pretty text-muted-foreground">
                  {s.descricao} <span className="whitespace-nowrap">Cerca de {s.duracao}.</span>
                </p>
                {destaque && (
                  <BorderBeam
                    size={90}
                    duration={8}
                    colorFrom="#c8a15a"
                    colorTo="#6b4226"
                    className="motion-reduce:hidden"
                  />
                )}
              </li>
            )
          })}
        </ul>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
              Agendar horário
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
