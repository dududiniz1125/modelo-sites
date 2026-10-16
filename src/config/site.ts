// Dados do negócio. Ao criar um novo site, edite apenas este arquivo primeiro.
export const site = {
  nome: "Nome do Negócio",
  descricao:
    "Descreva em uma frase o que o negócio faz e para quem. Este texto aparece no Google e nas redes sociais.",
  url: "https://www.exemplo.com.br",
  whatsapp: {
    // Somente dígitos, com DDI 55 + DDD. Ex.: 5511999999999
    numero: "5511999999999",
    mensagem: "Olá! Vim pelo site e gostaria de mais informações.",
  },
  telefoneExibicao: "(11) 99999-9999",
  email: "contato@exemplo.com.br",
  endereco: {
    rua: "Av. Paulista, 1000",
    bairro: "Bela Vista",
    cidade: "São Paulo",
    uf: "SP",
    cep: "01310-100",
  },
  horarios: [
    { dias: "Segunda a sexta", horas: "9h às 18h" },
    { dias: "Sábado", horas: "9h às 13h" },
  ],
  servicos: [
    {
      titulo: "Serviço principal",
      descricao: "Explique o que o cliente recebe e por que isso resolve o problema dele.",
    },
    {
      titulo: "Segundo serviço",
      descricao: "Texto curto e direto, sem jargão. Fale como o cliente fala.",
    },
    {
      titulo: "Terceiro serviço",
      descricao: "Se possível, inclua prazo, preço inicial ou diferencial concreto.",
    },
  ],
  depoimentos: [
    { nome: "Ana P.", texto: "Atendimento rápido e atencioso. Recomendo!" },
    { nome: "Carlos M.", texto: "Resolveram meu problema no mesmo dia." },
    { nome: "Juliana S.", texto: "Preço justo e um trabalho muito caprichado." },
    { nome: "Roberto L.", texto: "Fui muito bem atendido pelo WhatsApp." },
  ],
  perguntas: [
    {
      pergunta: "Como faço para agendar?",
      resposta: "Basta chamar no WhatsApp. Respondemos em horário comercial.",
    },
    {
      pergunta: "Quais formas de pagamento vocês aceitam?",
      resposta: "Pix, cartão de crédito e débito.",
    },
  ],
} as const

export function enderecoCompleto() {
  const e = site.endereco
  return `${e.rua} – ${e.bairro}, ${e.cidade} – ${e.uf}, ${e.cep}`
}

export function linkWhatsApp(mensagem: string = site.whatsapp.mensagem) {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`
}
