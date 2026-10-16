import { linkWhatsApp } from "@/config/site"
import { WhatsAppIcon } from "@/components/whatsapp-icon"

// Botão flutuante obrigatório em todos os sites.
export function WhatsAppButton() {
  return (
    <a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-whatsapp/40 focus-visible:outline-none active:scale-95 motion-reduce:transition-none md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
