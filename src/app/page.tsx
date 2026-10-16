import { ClockIcon, MapPinIcon, NavigationIcon, PhoneIcon } from "lucide-react"

import { enderecoCompleto, linkWhatsApp, site } from "@/config/site"
import { SiteHeader } from "@/components/site-header"
import { SiteMap, linkRotas } from "@/components/site-map"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BlurFade } from "@/components/magicui/blur-fade"
import { DotPattern } from "@/components/magicui/dot-pattern"
import { Marquee } from "@/components/magicui/marquee"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <DotPattern
            className={cn(
              "text-primary/20",
              "[mask-image:radial-gradient(420px_circle_at_top_right,white,transparent)]"
            )}
          />
          <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 md:pt-24 md:pb-24">
            <BlurFade>
              <h1 className="max-w-2xl text-4xl leading-tight font-semibold md:text-6xl">
                Título claro dizendo o que você faz e onde
              </h1>
            </BlurFade>
            <BlurFade delay={0.1}>
              <p className="mt-5 max-w-xl text-lg text-pretty text-muted-foreground">
                {site.descricao}
              </p>
            </BlurFade>
            <BlurFade delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 bg-whatsapp text-base text-white hover:bg-whatsapp/90">
                  <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="size-5" />
                    Chamar no WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 text-base">
                  <a href="#localizacao">Ver endereço e horários</a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="scroll-mt-20 border-t bg-secondary/50">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <h2 className="text-3xl font-semibold md:text-4xl">Serviços</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {site.servicos.map((s) => (
                <Card key={s.titulo}>
                  <CardHeader>
                    <CardTitle className="text-lg">{s.titulo}</CardTitle>
                    <CardDescription className="text-base">{s.descricao}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="scroll-mt-20 py-16 md:py-24">
          <h2 className="mx-auto max-w-6xl px-4 text-3xl font-semibold md:text-4xl">
            O que nossos clientes dizem
          </h2>
          <div className="relative mt-8">
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
        </section>

        {/* Dúvidas */}
        <section id="duvidas" className="scroll-mt-20 border-t">
          <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
            <h2 className="text-3xl font-semibold md:text-4xl">Dúvidas frequentes</h2>
            <Accordion type="single" collapsible className="mt-6">
              {site.perguntas.map((p) => (
                <AccordionItem key={p.pergunta} value={p.pergunta}>
                  <AccordionTrigger className="text-base">{p.pergunta}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {p.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Localização */}
        <section id="localizacao" className="scroll-mt-20 border-t bg-secondary/50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Como chegar</h2>
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
                          <dd className="tabular-nums">{h.horas}</dd>
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

      <footer className="border-t pb-24 md:pb-0">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          © <span translate="no">{site.nome}</span>. Todos os direitos reservados.
        </div>
      </footer>
    </>
  )
}
