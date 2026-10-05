/* ==========================================================================
   ANDRADE'S BAKERY — CONFIGURAÇÃO RÁPIDA
   --------------------------------------------------------------------------
   É aqui que você muda telefone, Instagram, endereço, horários e bairros.
   Tudo o que está marcado com  // >>> CONFIRMAR  precisa da sua confirmação.
   Depois de editar, salve o arquivo e recarregue o site.
   ========================================================================== */

window.ANDRADES = {
  /* ---- Marca ---------------------------------------------------------- */
  nome: "Andrade's Bakery",
  assinatura: 'Confeitaria artesanal',
  cidade: 'Itaboraí',        // >>> CONFIRMAR
  uf: 'RJ',
  slogan: 'Feito à mão, com o tempo que o doce pede.',

  /* ---- WhatsApp (formato internacional, só números) -------------------- */
  whatsapp: {
    numero: '5521990726282',          // +55 21 99072-6282
    exibicao: '(21) 99072-6282',
    mensagemPadrao:
      'Olá! Vim pelo site da Andrade\'s Bakery e gostaria de informações sobre encomendas. 🍰',
    // Mensagem do botão "entrar na lista de novidades" (rodapé)
    mensagemLista:
      'Olá! Quero entrar na lista e receber os sabores do dia e as novidades da Andrade\'s Bakery.'
  },

  /* ---- Redes sociais --------------------------------------------------- */
  instagram: {
    usuario: 'andrades.bakery',
    url: 'https://www.instagram.com/andrades.bakery'
  },

  /* ---- Status "aberto agora" ------------------------------------------
     dias: 0 = domingo, 1 = segunda ... 6 = sábado
     abre / fecha: em horas decimais (9 = 9h · 19.5 = 19h30 · null = fechado)
     Pode ter mais de uma faixa no mesmo dia (ex.: manhã e tarde).
     --------------------------------------------------------------------- */
  funcionamento: [
    { rotulo: 'Segunda a sexta', dias: [1, 2, 3, 4, 5], abre: 9,  fecha: 19 },
    { rotulo: 'Sábado',          dias: [6],             abre: 9,  fecha: 17 },
    { rotulo: 'Domingo',         dias: [0],             abre: null, fecha: null }
  ],
  // Mostrado no rodapé do menu do celular e no cartão de horários
  atendimentoFrase: 'Atendemos de seg a sáb, no horário de funcionamento.',

  /* ---- Entrega --------------------------------------------------------- */
  // >>> CONFIRMAR: bairros/cidades que você realmente atende.
  // Deixe a lista vazia ([]) para o site mostrar só "Itaboraí e região".
  bairros: ['Centro', 'Manilha', 'Venda das Pedras', 'Porto das Caixas', 'Itambi', 'Sambaetiba'],
  entrega: 'Itaboraí e região',
  pagamentos: ['Pix', 'Dinheiro', 'Cartão de débito', 'Cartão de crédito'],

  /* ---- Endereço --------------------------------------------------------
     >>> CONFIRMAR: se o atendimento for só por encomenda (sem loja física),
     deixe "somenteEncomenda: true" e o endereço não aparece no site.
     --------------------------------------------------------------------- */
  endereco: {
    somenteEncomenda: true,
    rua: 'Rua Exemplo, 000 — Centro',
    complemento: '',
    cidade: 'Itaboraí — RJ',
    cep: '00000-000',
    mapaUrl: ''
  },

  /* ---- Regras comerciais (aparecem nos avisos e no FAQ) ---------------- */
  prazo: {
    comum: '48 horas',
    dataComemorativa: '5 a 7 dias'
  },

  /* ---- Recado fixo no topo do site ------------------------------------- */
  avisoTopo:
    'Encomendas para datas comemorativas com 5 a 7 dias de antecedência ✺ Atendimento pelo WhatsApp',

  /* ---- SEO / compartilhamento ----------------------------------------- */
  seo: {
    titulo: "Andrade's Bakery — Bolos e doces artesanais em Itaboraí/RJ",
    descricao:
      "Confeitaria artesanal em Itaboraí/RJ. Bolos, doces finos, salgados assados e encomendas personalizadas para aniversários, Páscoa, Dia das Mães e Dia dos Namorados. Peça pelo WhatsApp.",
    imagem: 'assets/img/og-andrades.jpg',
    site: 'https://andradesbakery.com.br' // >>> CONFIRMAR domínio final
  }
};
