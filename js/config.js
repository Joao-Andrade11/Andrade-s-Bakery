/* ==========================================================================
   ANDRADE'S BAKERY — CONFIGURAÇÃO RÁPIDA
   --------------------------------------------------------------------------
   É aqui que você muda telefone, Instagram, endereço, horários e bairros.
   Tudo marcado com  // >>> CONFIRMAR  precisa da sua confirmação.
   Paleta das cores: assets/logo/paleta.json (lida da sua logo).
   ========================================================================== */

window.ANDRADES = {
  /* ---- Marca ---------------------------------------------------------- */
  nome: "Andrade's Bakery",
  assinatura: 'Bolos de festa artesanais',
  cidade: 'São Gonçalo',
  uf: 'RJ',
  slogan: 'Feito à mão, com o tempo que o doce pede.',

  /* ---- Feito sob medida -----------------------------------------------
     A casa faz bolos 100% personalizados: qualquer tamanho, massa e recheio.
     Este texto aparece na abertura e nas seções de bolo.
     --------------------------------------------------------------------- */
  sobMedida: 'Qualquer tamanho, massa e recheio — o bolo do jeito que você preferir.',

  /* ---- Especialidade da casa ------------------------------------------
     É o que aparece na abertura, no formulário e nas perguntas frequentes.
     Hoje: bolos de festa para aniversário.
     --------------------------------------------------------------------- */
  especialidade: 'bolos de festa para aniversário',

  /* ---- Onde atendemos -------------------------------------------------
     Confirmado: São Gonçalo e Niterói INTEIROS, com entrega a combinar.
     --------------------------------------------------------------------- */
  areasAtendidas: ['São Gonçalo', 'Niterói'],
  entrega: 'São Gonçalo e Niterói',
  entregaDetalhe: 'Atendemos as duas cidades inteiras. Taxa e horário combinados no WhatsApp conforme o endereço, a data e o tamanho do pedido.',

  // Bloco "Onde entregamos" na área de contato
  atendimento: {
    titulo: 'Onde entregamos',
    itens: [
      'São Gonçalo — todas as regiões',
      'Niterói — todas as regiões',
      'Taxa combinada no WhatsApp',
      'Retirada no local'
    ]
  },
  pagamentos: ['Pix', 'Dinheiro', 'Cartão de débito', 'Cartão de crédito'],
  // >>> CONFIRMAR: pedimos sinal para reservar a data de bolos de festa?
  sinal: 'Sinal de 50% para reservar a data do bolo de festa (o restante na entrega).',

  /* ---- WhatsApp (formato internacional, só números) -------------------- */
  whatsapp: {
    numero: '5521990726282',          // +55 21 99072-6282
    exibicao: '(21) 99072-6282',
    mensagemPadrao:
      'Olá! Vim pelo site da Andrade\'s Bakery e queria um orçamento de bolo de festa. 🎂',
    mensagemLista:
      'Olá! Quero entrar na lista e receber os sabores do dia e as novidades da Andrade\'s Bakery.',
    mensagemOrcamento:
      'Olá! Quero um orçamento de bolo de festa. Tema: ____ · Data: ____ · Quantos convidados: ____ · Cidade: São Gonçalo/Niterói'
  },

  /* ---- Redes sociais --------------------------------------------------- */
  instagram: {
    usuario: 'andrades.bakery',
    url: 'https://www.instagram.com/andrades.bakery'
  },

  /* ---- Status "aberto agora" ------------------------------------------
     dias: 0 = domingo, 1 = segunda ... 6 = sábado
     abre / fecha: horas decimais (9 = 9h · 19.5 = 19h30 · null = fechado)
     >>> CONFIRMAR os horários reais.
     --------------------------------------------------------------------- */
  funcionamento: [
    { rotulo: 'Segunda a sexta', dias: [1, 2, 3, 4, 5], abre: 9,  fecha: 19 },
    { rotulo: 'Sábado',          dias: [6],             abre: 9,  fecha: 17 },
    { rotulo: 'Domingo',         dias: [0],             abre: null, fecha: null }
  ],
  atendimentoFrase: 'Atendemos de seg a sáb, no horário de funcionamento.',

  /* ---- Endereço --------------------------------------------------------
     >>> CONFIRMAR: se o atendimento for só por encomenda, sem loja física,
     deixe "somenteEncomenda: true" e o endereço não aparece no site.
     --------------------------------------------------------------------- */
  endereco: {
    somenteEncomenda: true,
    rua: 'Rua Exemplo, 000',
    complemento: '',
    cidade: 'São Gonçalo — RJ',
    cep: '00000-000',
    mapaUrl: ''
  },

  /* ---- Regras comerciais ---------------------------------------------- */
  prazo: {
    comum: '48 horas para bolos simples e doces',
    dataComemorativa: '5 a 7 dias para bolos de festa e datas comemorativas',
    // Bolos temáticos complexos (personagem, escultura, dois andares)
    tematico: '1 mês de antecedência'
  },

  /* ---- Recado fixo no topo do site ------------------------------------- */
  avisoTopo:
    'Bolos de festa para São Gonçalo e Niterói 🎂 Orçamento pelo WhatsApp — datas de fim de semana fecham com antecedência',

  /* ---- SEO / compartilhamento ----------------------------------------- */
  seo: {
    titulo: "Andrade's Bakery — Bolos de festa e doces artesanais em São Gonçalo e Niterói",
    descricao:
      "Confeitaria artesanal especializada em bolos de festa para aniversário em São Gonçalo e Niterói. Bolos temáticos personalizados, doces finos, salgados assados e kits. Produção por encomenda — orçamento pelo WhatsApp.",
    imagem: 'assets/img/og-andrades.jpg',
    site: 'https://andradesbakery.com.br' // >>> CONFIRMAR domínio final
  }
};
