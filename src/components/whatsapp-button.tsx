import { linkWhatsApp } from "@/config/site"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

// Botão de WhatsApp obrigatório em todos os sites.
// - Abaixo de 1280px: barra fixa no rodapé + espaçador do mesmo tamanho,
//   para nunca flutuar por cima do conteúdo (cards ocupam a largura toda no celular).
// - A partir de 1280px (xl): botão redondo flutuante, que cabe na margem lateral
//   livre ao lado do container max-w-6xl.
export function WhatsAppButton() {
  return (
    <>
      <div aria-hidden="true" className="h-[calc(4.75rem+env(safe-area-inset-bottom))] xl:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur xl:hidden">
        <a
          href={linkWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex h-12 max-w-md items-center justify-center gap-2 rounded-full bg-whatsapp font-medium text-white transition-[filter] hover:brightness-95 focus-visible:ring-4 focus-visible:ring-whatsapp/40 focus-visible:outline-none active:brightness-90"
        >
          <WhatsAppIcon className="size-5" />
          Chamar no WhatsApp
        </a>
      </div>
      <a
        href={linkWhatsApp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp"
        className="fixed right-3 bottom-6 z-50 hidden size-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-whatsapp/40 focus-visible:outline-none active:scale-95 motion-reduce:transition-none xl:inline-flex"
      >
        <WhatsAppIcon className="size-6" />
      </a>
    </>
  )
}
