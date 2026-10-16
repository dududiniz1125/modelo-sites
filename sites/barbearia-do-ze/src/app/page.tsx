import { ClockIcon, MapPinIcon, NavigationIcon, PhoneIcon, ScissorsIcon } from "lucide-react"

import { enderecoCompleto, linkWhatsApp, site } from "@/config/site"
import { Depoimentos } from "@/components/depoimentos"
import { SiteHeader } from "@/components/site-header"
import { SiteMap, linkRotas } from "@/components/site-map"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TabelaPrecos } from "@/components/tabela-precos"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <DotPattern
            className={cn(
              "text-primary/25",
              "[mask-image:radial-gradient(480px_circle_at_top_right,white,transparent)]"
            )}
          />
          <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-28 md:pb-28">
            <BlurFade>
              <p className="flex items-center gap-2 text-primary">
                <ScissorsIcon className="size-4" aria-hidden="true" />
                {site.endereco.bairro}, {site.endereco.cidade}
              </p>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h1 className="mt-4 font-heading text-5xl leading-[1.05] text-primary sm:text-7xl md:text-8xl">
                <span translate="no">{site.nome}</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-pretty text-foreground/85 md:text-xl">
                Corte na tesoura e na máquina, barba com toalha quente e navalha. Sem pressa, do
                jeito que barbearia tem que ser.
              </p>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 bg-whatsapp px-6 text-base text-white hover:bg-whatsapp/90">
                  <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-5" />
                    Agendar pelo WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-primary/50 bg-transparent px-6 text-base">
                  <a href="#precos">Ver preços</a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Preços */}
        <section id="precos" className="scroll-mt-20 bg-secondary">
          <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
            <TabelaPrecos />
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="scroll-mt-20 py-16 md:py-24">
          <h2 className="mx-auto max-w-6xl px-4 text-3xl text-primary md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <div className="mt-8">
            <Depoimentos />
          </div>
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="scroll-mt-20 border-t">
          <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
            <h2 className="text-3xl text-primary md:text-4xl">Dúvidas frequentes</h2>
            <Accordion type="single" collapsible className="mt-6">
              {site.perguntas.map((p) => (
                <AccordionItem key={p.pergunta} value={p.pergunta}>
                  <AccordionTrigger className="font-sans text-base">{p.pergunta}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {p.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Localização */}
        <section id="localizacao" className="scroll-mt-20 border-t bg-secondary">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="text-3xl text-primary md:text-4xl">Como chegar</h2>
              <Card className="mt-6">
                <CardContent className="space-y-5">
                  <p className="flex gap-3">
                    <MapPinIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>{enderecoCompleto()}</span>
                  </p>
                  <div className="flex gap-3">
                    <ClockIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                      {site.horarios.map((h) => (
                        <div key={h.dias} className="contents">
                          <dt className="text-muted-foreground">{h.dias}</dt>
                          <dd>{h.horas}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <p className="flex gap-3">
                    <PhoneIcon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <a href={`tel:+${site.whatsapp.numero}`} className="underline-offset-4 hover:underline">
                      {site.telefoneExibicao}
                    </a>
                  </p>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href={linkRotas()} target="_blank" rel="noopener noreferrer">
                      <NavigationIcon aria-hidden="true" />
                      Abrir rotas no Google Maps
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <SiteMap />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          © <span translate="no">{site.nome}</span>. Todos os direitos reservados.
        </div>
      </footer>
    </>
  )
}
