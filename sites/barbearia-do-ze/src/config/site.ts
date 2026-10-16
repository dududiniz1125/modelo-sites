// Dados da Barbearia do Zé.
// ATENÇÃO: WhatsApp, telefone, endereço, depoimentos e preços são provisórios — confirmar com o cliente.
export const site = {
  nome: "Barbearia do Zé",
  descricao:
    "Barbearia tradicional em São Paulo: corte na tesoura e na máquina, barba com toalha quente e navalha. Agende pelo WhatsApp.",
  url: "https://www.barbeariadoze.com.br",
  whatsapp: {
    // Somente dígitos, com DDI 55 + DDD.
    numero: "5511999999999",
    mensagem: "Olá, Zé! Vim pelo site e quero agendar um horário.",
  },
  telefoneExibicao: "(11) 99999-9999",
  endereco: {
    rua: "Rua Augusta, 1500",
    bairro: "Consolação",
    cidade: "São Paulo",
    uf: "SP",
    cep: "01304-001",
  },
  horarios: [
    { dias: "Terça a sexta", horas: "9h às 20h" },
    { dias: "Sábado", horas: "8h às 18h" },
    { dias: "Domingo e segunda", horas: "Fechado" },
  ],
  servicos: [
    {
      titulo: "Corte",
      descricao: "Máquina e tesoura, com lavagem e finalização.",
      duracao: "40 min",
      preco: 45,
    },
    {
      titulo: "Barba",
      descricao: "Toalha quente, navalha e balm pós-barba.",
      duracao: "30 min",
      preco: 35,
    },
    {
      titulo: "Combo",
      descricao: "Corte e barba juntos, R$ 10 mais barato que separado.",
      duracao: "1h10",
      preco: 70,
      destaque: true,
    },
  ],
  depoimentos: [
    { nome: "Rafael T.", texto: "Corto com o Zé há anos. Nunca saí insatisfeito." },
    { nome: "Marcos A.", texto: "A barba com toalha quente vale cada centavo." },
    { nome: "Diego F.", texto: "Ambiente raiz, conversa boa e corte caprichado." },
    { nome: "Paulo H.", texto: "Agendei pelo WhatsApp e fui atendido na hora marcada." },
  ],
  perguntas: [
    {
      pergunta: "Preciso agendar?",
      resposta:
        "Atendemos por ordem de chegada, mas com horário marcado pelo WhatsApp você não espera.",
    },
    {
      pergunta: "Quais formas de pagamento vocês aceitam?",
      resposta: "Pix, dinheiro e cartão de crédito ou débito.",
    },
    {
      pergunta: "Vocês cortam cabelo de criança?",
      resposta: "Sim, a partir de 4 anos, pelo mesmo preço do corte.",
    },
  ],
} as const

const moeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
})

export function formatarPreco(valor: number) {
  return moeda.format(valor)
}

export function enderecoCompleto() {
  const e = site.endereco
  return `${e.rua} – ${e.bairro}, ${e.cidade} – ${e.uf}, ${e.cep}`
}

export function linkWhatsApp(mensagem: string = site.whatsapp.mensagem) {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`
}
