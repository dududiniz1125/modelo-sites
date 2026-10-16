import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { linkWhatsApp, site } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { href: "#precos", label: "Preços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#localizacao", label: "Como chegar" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" translate="no" className="font-heading text-xl text-primary">
          {site.nome}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
              Agendar
            </a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 overscroll-contain">
            <SheetHeader>
              <SheetTitle translate="no">{site.nome}</SheetTitle>
            </SheetHeader>
            <nav aria-label="Menu" className="flex flex-col px-4">
              {links.map((l) => (
                <SheetClose asChild key={l.href}>
                  <a href={l.href} className="border-b py-4 text-base">
                    {l.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
