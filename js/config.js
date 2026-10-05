/* ==========================================================================
   ANDRADE'S BAKERY — CONFIGURAÇÃO RÁPIDA
   --------------------------------------------------------------------------
   É aqui que você muda telefone, Instagram, endereço e horários.
   Tudo o que está marcado com  // >>> TROCAR  precisa da sua confirmação.
   Depois de editar, salve o arquivo e recarregue o site.
   ========================================================================== */

window.ANDRADES = {
  /* ---- Marca ---------------------------------------------------------- */
  nome: "Andrade's Bakery",
  assinatura: 'Confeitaria artesanal',
  cidade: 'Itaboraí',        // >>> TROCAR se não for essa a cidade
  uf: 'RJ',
  slogan: 'Feito à mão, com o tempo que o doce pede.',

  /* ---- WhatsApp (formato internacional, só números) -------------------- */
  whatsapp: {
    numero: '5521990726282',          // +55 21 99072-6282
    exibicao: '(21) 99072-6282',
    // Mensagem que já vai preenchida quando a pessoa clica no botão do topo:
    mensagemPadrao:
      'Olá! Vim pelo site da Andrade\'s Bakery e gostaria de informações sobre encomendas. 🍰'
  },

  /* ---- Redes sociais --------------------------------------------------- */
  instagram: {
    usuario: 'andrades.bakery',
    url: 'https://www.instagram.com/andrades.bakery'
  },

  /* ---- Endereço / atendimento ----------------------------------------- */
  // >>> TROCAR: endereço completo. Se o atendimento for só por encomenda
  // (sem loja física), deixe "somenteEncomenda: true" e o endereço some do site.
  endereco: {
    somenteEncomenda: true,
    rua: 'Rua Exemplo, 000 — Centro',
    complemento: '',
    cidade: 'Itaboraí — RJ',
    cep: '00000-000',
    mapaUrl: '' // cole aqui o link do Google Maps, se tiver
  },

  /* ---- Horário de funcionamento --------------------------------------- */
  horarios: [
    { dia: 'Segunda a sexta', hora: '09h — 19h' },
    { dia: 'Sábado', hora: '09h — 17h' },
    { dia: 'Domingo', hora: 'Fechado' }
  ],
  horarioResumo: 'Seg a Sex, 9h às 19h · Sáb, 9h às 17h',

  /* ---- Regras comerciais (aparecem nos avisos e no FAQ) --------------- */
  prazo: {
    comum: '48 horas',
    dataComemorativa: '5 a 7 dias'
  },
  entrega: 'Itaboraí e região',
  pagamentos: ['Pix', 'Dinheiro', 'Cartão de débito', 'Cartão de crédito'],

  /* ---- Recados da marca ----------------------------------------------- */
  // Selo que aparece no topo do site. Útil para avisar de prazos em datas cheias.
  avisoTopo:
    'Encomendas para datas comemorativas com 5 a 7 dias de antecedência ✺ Atendimento pelo WhatsApp',

  /* ---- SEO / compartilhamento ----------------------------------------- */
  seo: {
    titulo: "Andrade's Bakery — Bolos e doces artesanais em Itaboraí/RJ",
    descricao:
      "Confeitaria artesanal em Itaboraí/RJ. Bolos, doces finos, salgados assados e encomendas personalizadas para aniversários, Páscoa, Dia das Mães e Dia dos Namorados. Peça pelo WhatsApp.",
    imagem: 'assets/img/og-andrades.jpg',
    site: 'https://andradesbakery.com.br' // >>> TROCAR pelo domínio final
  }
};
